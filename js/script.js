$( document ).ready(function() {

/*
var lastFixPos = 0;
var threshold = 1000;
var counter = -1;

$(window).on('scroll', function() {
  var diff = Math.floor($(window).scrollTop() - lastFixPos);
  if (diff > threshold) {
    counter += 1;
    animateText(counter);
    lastFixPos = $(window).scrollTop();
    console.log("got scroll down");
  } else if (diff < -1 * threshold) {
    counter -= 1;
    animateText(counter);
    lastFixPos = $(window).scrollTop();
  }

});
*/

var counter = -1;
var throttleScroll = _.debounce(animateText, 100, [true]);
$(window).scroll(throttleScroll);



$(window).on("scroll", function() {
  var scrollHeight = $(document).height();
  var scrollPosition = $(window).scrollTop();
  console.log("scrollHeight: " + scrollHeight + " scrollPos: " + scrollPosition);
  if ((scrollHeight - scrollPosition) < 1200) {
      var newHeight = $("body").height() + 3000;
      $("body").css("height", newHeight);
  }
})

function animateText() { 
  counter += 1;
  var thePhrase = phrases(counter);
  $("#fixed").stop(true,true).html(thePhrase).addClass('animated fadeInDown').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
    $(this).stop(true,true).removeClass();
  });

};

function phrases(Num) {
  var phrases = [
    "<p>Welcome Neo.</p>",
                "<p>As you might have guessed,  I am Morpheus.</p>",
                "<p><i>It's an honor to meet you.</i></p>",
                "<p>No, the honor is all mine.</p>",
                "<p>Please, come. Sit.</p>",
                "<p>I imagine that right now,  you're feeling a bit like Alice... tumbling down the rabbit hole. Hmm?</p>",
                "<p><i>You could say that.</i></p>",
                "<p>I can see it in your eyes.</p>",
                "<p>You have the look of a man who accepts what he sees because he is expecting to wake up.</p>",
                "<p>Ironically this is not far from the truth.</p>",
                "<p>Do you believe in fate, Neo?</p>",
                "<p><i>No.</i></p>",
                "<p>Why not?</p>",
                "<p><i>Because I don't like the idea that I'm not in control of my life</i></p>",
                "<p>I know exactly what you mean.</p>",
                "<p>Let me tell you why you're here. You're here because you know something.</p>",
                "<p>What you know you can't explain, but you feel it.</p>",
                "<p>You've felt it your entire life, that there's something wrong with the world.</p>",
                "<p>You don't know what it is, but it's there, like a splinter in your mind, driving you mad.</p>",
                "<p>It is this feeling that has brought you to me.</p>",
                 "<p>Do you know what I'm talking about?</p>",
                "<p><i>The Matrix</i></p>",
                "<p>Do you want to know what it is?</p>",
                "<p><i>Yes.</i></p>",
                "<p>The Matrix is everywhere. It is all around us. Even now, in this very room. You can see it when you look out your window or when you turn on your television.</p>",
                "<p>You can feel it when you go to work... when you go to church... when you pay your taxes.</p>",
                "<p>It is the world that has been pulled over your eyes to blind you from the truth.</p>",
                "<p><i>What truth?</i></p>",
                "<p>That you are a slave, Neo.</p>",
                "<p>Like everyone else you were born into bondage. Into a prison that you cannot taste or see or touch.</p>",
                "<p>A prison for your mind.</p>",
                "<p>Unfortunately, no can be told what The Matrix is.</p>",
                "<p>You have to see it for yourself.</p>"
               
  ];

  return phrases[Num]

};

});

