$('ul.team__tabs').on('click', 'li:not(.team__tab_active)', function() {
    $(this)
      .addClass('team__tab_active').siblings().removeClass('team__tab_active')
      .closest('div.container').find('div.team__card').removeClass('team__card_active').eq($(this).index()).addClass
      ('team__card_active');
});
