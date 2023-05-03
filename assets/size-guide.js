const guideOpen = $('.size-guide-open');
const guideClose = $('.size-guide-close, .size-guide-overlay');
const fitSelector = $('#size-guide-fit-selector');
const tabSelector = $('[data-size-chart-tabs-trigger]');
const html = $('html');
guideOpen.click(function () {
  html.addClass('size_guide_active');
});

guideClose.click(function () {
  html.removeClass('size_guide_active');
});

fitSelector.change(function () {
  $('[data-fit].active').removeClass('active');
  $(`[data-fit="${fitSelector.val()}"]`).addClass('active');
});

tabSelector.click(function () {
  let _this = $(this);

  _this.closest('li').addClass('active')
    .siblings().removeClass('active');

  $(`[data-size-chart-tabs="${_this.attr('data-size-chart-tabs-trigger')}"]`).addClass('active')
    .siblings().removeClass('active');
});