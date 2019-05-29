$(document).ready(function() {
    $('#fullpage').fullpage({
        //options here
        autoScrolling:true,
        scrollHorizontally: true,
        sectionsColor : ['#fff','#000', '#cb2027', '#69e781'],
        navigation: true,
        navigationPosition: 'right', 

    });

    //methods
    $.fn.fullpage.setAllowScrolling(true);
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
    $( ".fp-next" ).click();
});


