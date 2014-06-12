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

