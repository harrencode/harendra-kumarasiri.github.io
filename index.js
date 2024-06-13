
$(document).ready(function() {
    $.get("nav.html", function(data) {
      $("#nav-placeholder").replaceWith(data);
      var currentPath = window.location.pathname;
      $('nav a').each(function() {
        var linkPath = $(this).attr('href');
        if (currentPath.includes(linkPath) && linkPath !== 'index.html') {
          $(this).addClass('active-nav-link');
          
        }
      });

      const darkModeToggle = $('#dark-mode-toggle');
      const lightModeIcon = $('#dark-mode-icon-light');
      const darkModeIcon = $('#dark-mode-icon-dark');

      function setDarkMode(isEnabled) {
        if (isEnabled) {
          $('body').addClass('dark-mode');
          $('nav').addClass('dark-mode');
          $('nav a').addClass('dark-mode');
          darkModeIcon.show();
          lightModeIcon.hide();
        } else {
          $('body').removeClass('dark-mode');
          $('nav').removeClass('dark-mode');
          $('nav a').removeClass('dark-mode');
          darkModeIcon.hide();
          lightModeIcon.show();
        }
      }

      darkModeToggle.on('click', function() {
        const isDarkMode = $('body').hasClass('dark-mode');
        setDarkMode(!isDarkMode);
        localStorage.setItem('dark-mode', !isDarkMode ? 'enabled' : 'disabled');
      });

      // Check for saved dark mode preference
      const darkModePreference = localStorage.getItem('dark-mode');
      if (darkModePreference === 'enabled') {
        setDarkMode(true);
      } else {
        setDarkMode(false);
      }
    }).fail(function() {
      console.error("Failed to load navigation");
    });
  });

  
document.addEventListener('DOMContentLoaded', () => {
    const leavesContainer = document.getElementById('leaves-container');
    const numberOfLeaves = 30;

    for (let i = 0; i < numberOfLeaves; i++) {
        const leaf = document.createElement('div');
        leaf.classList.add('leaf');
        leaf.style.left = `${Math.random() * 100}vw`;
        leaf.style.animationDuration = `${Math.random() * 3 + 2}s`; // Falling speed between 2s and 5s
        leaf.style.animationDelay = `${Math.random() * 5}s`;
        leavesContainer.appendChild(leaf);
    }
});

const toggleSwitch = document.getElementById('toggleSwitch');
        const body = document.body;

        toggleSwitch.addEventListener('click', () => {
            body.classList.toggle('dark-mode');
            body.classList.toggle('light-mode');
        });

        $(document).ready(function() {
            $.get("nav.html", function(data) {
              $("#nav-placeholder").replaceWith(data);
              var currentPath = window.location.pathname;
              $('nav a').each(function() {
                var linkPath = $(this).attr('href');
                if (currentPath.includes(linkPath) && linkPath !== 'index.html') {
                  $(this).addClass('active-nav-link');
                }
              });
        
              // Dark mode toggle functionality
              const darkModeToggle = $('#dark-mode-toggle');
              darkModeToggle.on('change', function() {
                $('body').toggleClass('dark-mode');
                $('nav').toggleClass('dark-mode');
                $('nav a').toggleClass('dark-mode');
                if ($('body').hasClass('dark-mode')) {
                  localStorage.setItem('dark-mode', 'enabled');
                } else {
                  localStorage.setItem('dark-mode', 'disabled');
                }
              });
        
              // Check for saved dark mode preference
              if (localStorage.getItem('dark-mode') === 'enabled') {
                $('body').addClass('dark-mode');
                $('nav').addClass('dark-mode');
                $('nav a').addClass('dark-mode');
                darkModeToggle.prop('checked', true);
              }
        
            }).fail(function() {
              console.error("Failed to load navigation");
            });
          });
       