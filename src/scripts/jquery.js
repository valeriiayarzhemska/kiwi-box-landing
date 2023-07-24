/* eslint-disable no-undef */

$(document).ready(function () {
  function disableScroll() {
    $('body').css({ 'overflow-y': 'hidden' });
  }

  function clearForm() {
    $('.form__mobile')[0].reset();
    $('.form')[0].reset();
    $('body').css({ 'overflow-y': 'visible' });
  }

  $('.form__button-mobile').click(function (event) {
    event.preventDefault();
    $.fancybox.close();
  });

  $('.form__button').click(function (event) {
    event.preventDefault();
    $.fancybox.close();
  });

  $('.account__popup__mobile').fancybox({
    autoSize: false,
    autoResize: false,
    padding: 0,
    width: 288,
    height: 408,
    fitToView: false,
    closeClick: false,
    openEffect: 'none',
    closeEffect: 'none',
    beforeShow: disableScroll,
    afterClose: clearForm,
    smallBtn: false,
    toolbar: false,
    scrolling: 'hidden',
    helpers: {
      overlay: {
        locked: true,
      },
    },
  });

  $('.account__popup').fancybox({
    autoSize: false,
    autoResize: false,
    padding: 0,
    width: 804,
    height: 461,
    fitToView: false,
    closeClick: false,
    openEffect: 'none',
    closeEffect: 'none',
    beforeShow: disableScroll,
    afterClose: clearForm,
    smallBtn: false,
    toolbar: false,
    scrolling: 'hidden',
    helpers: {
      overlay: {
        locked: true,
      },
    },
  });

  $('.form__mobile').validate({
    rules: {
      email: {
        required: true,
        email: true,
      },
    },
    messages: {
      email: {
        required: 'We need your email address to contact you',
        email: 'Your email address must be in the format of name@domain.com',
      },
    },

    submitHandler: function () {
      event.preventDefault();
      $('.account__popup__mobile').trigger('click');
    },
  });

  $('.form').validate({
    rules: {
      email: {
        required: true,
        email: true,
      },
    },
    messages: {
      email: {
        required: 'We need your email address to contact you',
        email: 'Your email address must be in the format of name@domain.com',
      },
    },

    submitHandler: function () {
      event.preventDefault();
      $('.account__popup').trigger('click');
    },
  });
});
