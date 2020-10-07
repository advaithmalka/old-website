function dm() {
  if ($('body').hasClass('dark-mode')) {
    $('body').removeClass('dark-mode')
    deleteCookie('theme');
  } else {
    $('body').addClass('dark-mode');
    setCookie('theme', 'dark', 30);
  }
}
$("#dm-trigger").on('click', () => {
  dm()
})


if (getCookie('theme') === 'dark') {
  $('body').addClass('dark-mode');
} else {
  $('body').removeClass('dark-mode')
}