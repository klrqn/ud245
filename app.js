var selectByTag = $('h1'); // rethink trying to select all by tag
var classTag = $('.class');
var idTag = $('#id');

// select by class featured (line 43)
var featured = $('.featured');
// turns off the class='featured' (line 43)
featured.toggleClass('featured');

// creates a variable of the next sibling of 'featured', and gives it class="featured"
var nextArticle = featured.next();
nextArticle.toggleClass('featured');


// add link to the <a> tag on (line 18)
var navList, firstItem, link;

// find the nav-list class and the first child
navList = $('.nav-list');
firstItem = navList.children.first();

// get the 'a' tag
link = firstItem.find('a');
// add the href using attr method
link.attr('href', '#1');

// ---

// get article items and change the font-size to 20px
var articleItems = $('.article-item');
articleItems.css('font-size', '20px');

// http://api.jquery.com/html/      .html() method
// http://api.jquery.com/text/      .text() method (strips out html)
// http://api.jquery.com/val/

// line28-29 the input field changed the h1
$('#input').on('change', function () {
    var val, h1;
    val = $('#input').val();
    h1 = $('.articles').children('h1');
    h1.text(val);
});

// http://api.jquery.com/remove/    .remove() method
// remove all list items under the unordered list (line 38)
var articleItems, ul;
articleItems = $('article-item');
ul = articleItems.find('ul');

ul.remove();


// Adding DOM Elements
// .append() .prepend() .insertBefore .insertAfter
// insertAfter & Before make siblings
// append and prepend make children


// .each() iterates over Elements

// get the number of characters in all the p elements in the html
// iterate function
function numberAdder() {
    var text, number;

    // (this) just references the current DOM object
    text = $(this).text();

    number = text.length;

    $(this).text(text + " " + number);
};

$('p').each.(numberAdder);
