/**
 * Affix the Navigation Bar
 */
$('#vm-navigation-bar').affix({
  offset: {
    top: function () {
      return (this.top = $('header').outerHeight(true))
    }
  }
})

/**
 * Expand / Contract the Sidebar
 */
$('.vm-sidebar-toggle').click(function () {
  $('body').toggleClass('vm-sidebar-expanded')
})


/**
 * Third Level Submenu
 */
$('ul.dropdown-menu [data-toggle=dropdown]').on('click', function(event) {
  event.preventDefault();
  event.stopPropagation();
  $(this).parent().siblings().removeClass('open');
  $(this).parent().toggleClass('open');
})
