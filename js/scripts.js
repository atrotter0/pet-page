function clearStyles() {
  $('body').removeClass();
  $('h1').removeClass();
  $('a').removeClass();
}

$(document).ready(function() {
  console.log('ready!');

  $('#light').click(function() {
    clearStyles();
    $('body').addClass('light-theme');
    $('h1').addClass('light-theme');
    $('a').addClass('light-theme');
  });

  $('#dark').click(function() {
    clearStyles();
    $('body').addClass('dark-theme');
    $('h1').addClass('dark-theme');
    $('a').addClass('dark-theme');
  });

  $('#default').click(function() {
    clearStyles();
    $('body').addClass('default-theme');
    $('h1').addClass('default-theme');
    $('a').addClass('default-theme');
  });
});
