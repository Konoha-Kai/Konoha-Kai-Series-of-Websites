

$('.login').on('submit', function(e) {
    e.preventDefault();
    var username = $('input[type="text"]').val();
    var password = $('input[type="password"]').val();
    
	if (username.trim() === '' || password.trim() === '') {
        alert('The content entered is invalid, please ensure that the username and password are not empty.');
		window.location.href = '../html/Signin.html';
        return;
    }

    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
    
    // jump to the login page
    window.location.href = '../html/Login.html';
  });

  //click the gear icon to open the dropdown menu
$('.select').on('click', '.placeholder', function(e) {
	var parent = $(this).closest('.select');
	if (!parent.hasClass('is-open')) {
		parent.addClass('is-open');
		$('.select.is-open').not(parent).removeClass('is-open');
	} else {
		parent.removeClass('is-open');
	}
	e.stopPropagation();
}).on('click', 'ul>li', function() {
	var parent = $(this).closest('.select');
	parent.removeClass('is-open').find('.placeholder').text($(this).text());
	$('#gearSelection').val($(this).text().trim()); // put the selected value into the hidden input
});


$('body').on('click', function() {
	$('.select.is-open').removeClass('is-open');
});