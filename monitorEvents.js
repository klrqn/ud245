This can only be used in Chrome Dev Tools:
monitorEvents(elementToWatch);

var inputFields = $('input');
var firstInput = inputFields[0]     // first input
monitorEvents(firstInput);          // play around.

in chrome - to look at mouse events:
monitorEvents($0);
&&
unmonitorEvents($0);


Anatomy Of A JQuery Event Listener
1. The TARGET Element to listen to
2. The ACTION we want to respond to
3. The RESPONSE actions

$('#input').on('keypress', function () {
    console.log('the event happened!');
    $('body').css('background-color', 'red');
}) // also click, change, mouse-over events, etc.


/*
Remember that the target element calls the callback function when the event occurs. When this function is called, jQuery passes an event object to it containing information about the event. This object holds a ton of useful information that can be used in the body of the function. This object, which is usually referenced in JavaScript as e, evt, or event, has several properties that you can use to determine the flow of your code.
*/
$( 'article' ).on( 'click', function( evt ) {
console.log( evt );
});

$( '#myAnchor' ).on( 'click', function( evt ) {
    evt.preventDefault();
    console.log( 'You clicked a link!' );
});
Other uses include:

event.keyCode to learn what key was pressed - invaluable if you need to listen for a specific key
event.pageX and event.pageY to know where on the page the click occurred - helpful for analytics tracking
event.type to find what event happened - useful if listening to a target for multiple events

https://api.jquery.com/category/events/event-object/
https://api.jquery.com/event.target/
http://www.w3.org/TR/DOM-Level-3-Events/

-----
CONVENIENCE METHODS
$('#input').on('keypress', function () {...});
can be written
$('#input').keypress(function () {...});

http://www.w3.org/TR/DOM-Level-3-Events/

target.keyup(function () {...});
target.mouseover(function () {...});
target.chamge(function () {...});
target.click(function () {...});
target.mouseenter(function () {...});
target.mouseleave(function () {...});
target.hover...^ convenience method for target.mouseenter().mouseleave();

-----
Event Delegation:
https://learn.jquery.com/events/event-delegation/
Do Not really get it yet.
Keep playing around on:
https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_html_append_ref
https://classroom.udacity.com/courses/ud245/lessons/5103579406/concepts/50210784590923
