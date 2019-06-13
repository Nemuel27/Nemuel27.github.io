$(document).ready(function() {
    $('#fullpage').fullpage({
        //options here
        autoScrolling:true,
        scrollHorizontally: true,
        sectionsColor : ['#fff','#000', '#5e7078', '#0b1218'],
        navigation: true,
        navigationPosition: 'right', 
        anchors:['HomePage', 'AboutPage','Project','ContactPage'],

    });

    //methods
    $.fn.fullpage.setAllowScrolling(true);
});

$(function() {     
  $('.header-logo').on('click',function(e) {
      e.preventDefault();
      $(".side-categories").slideToggle();
  });
});

$(function() {     
  $('i.fas.fa-sort-up').on('click',function(e) {
      e.preventDefault();
      $(".side-categories").slideUp();
  });
});

var typed = new Typed('.type', {
strings: ["I'm Nemuel Santos", "Enjoy visiting my site!"],
// typeSpeed: 1
stringsElement: null,
    // typing speed
    typeSpeed: 100,
    // time before typing starts
    startDelay: 500,
    // backspacing speed
    backSpeed: 60,
    // time before backspacing
    backDelay: 500,
    // loop
    loop: true,
    // false = infinite
    // loopCount: 5,
    // show cursor
    showCursor: true,
    // character for cursor
    cursorChar: "|",
    // attribute to type (null == text)
    attr: null,
    // either html or text
    contentType: 'html',
    // call when done callback function
    callback: function() {},
    // starting callback function before each string
    preStringTyped: function() {},
    //callback for every typed string
    onStringTyped: function() {},
    // callback for reset
    resetCallback: function() {}
});

$( ".learn-btn" ).click(function() {
    $( ".fp-next" ).trigger('click');
});

$('form[action^="https://usebasin.com"]').each(function(i,el){
  form = $(el);
  form.submit(function(e){
    //stop the form from submitting
    e.preventDefault();
    form = $(e.target);
    //get the form's action parameter and add ".json" to the end
    action = form.attr('action') + '.json';
    //submit the form via ajax
    $.ajax({
      url: action,
      method: "POST",
      data: form.serialize(),
      dataType: "json",
      success: function(data){
        if(data.success){
          //successful submission - hide the form and show the success message
          parent = $(form.parent());
          parent.children('form').trigger('reset')
          parent.children('.w-form-done').css('display','block');
          alert("Successfully Sent! I'll get back to soon, Thanks!");
        } else {
          //failed submission - log the output to the console and show the failure message
          console.log(data);
          parent.find('.w-form-fail').css('display','block');
        }
      },
      error: function(){
        //failed submission - show the failure message
        parent.find('.w-form-fail').css('display','block');
      }
    });
  });
});

