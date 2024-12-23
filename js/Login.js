// @charset "UTF-8";
var working = false;



$(document).ready(function() {
  $('.login').on('submit', function(e) {
    e.preventDefault();
    var inputUsername = $('input[type="text"]').val();
    var inputPassword = $('input[type="password"]').val();

    // obtain saved username and password from local storage
    var storedUsername = localStorage.getItem('username');
    var storedPassword = localStorage.getItem('password');

    // cheak if input username and password match the saved ones
    if (inputUsername === storedUsername && inputPassword === storedPassword) {
      // if match, show a loading animation and simulate a delay
      var working = false; // make sure only one request is sent at a time
      if (working) return;
      working = true;
      var $this = $(this),
        $state = $this.find('button > .state');
      $this.addClass('loading');
      $state.html('Authenticating');
      setTimeout(function() {
        $this.addClass('ok');
        $state.html('Welcome back!');
        setTimeout(function() {
          $state.html('Log in');
          $this.removeClass('ok loading');
          working = false;
          window.location.href = '../html/index_myself.html'; //page to redirect to after login
        }, 4000);
      }, 3000);
    } else {
      // if not match, show an error message
      alert('Login failed!');
    }
  });
});

//clicking on the title will redirect to the index_myself page
$(document).ready(function() {
  $('.title').click(function() {
    window.location.href = 'index_myself.html'; 
  });
});

