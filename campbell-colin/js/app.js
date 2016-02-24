$(document).ready(function() {
  for(var index = 0; index < 72; index++)
  {
    var booksAvailable = 19;
    var bookIndex = (index % booksAvailable);
    $('.catalog-preview .books').prepend('<div class="book-preview columns shrink"><div class="book-cover" style="background-image: url(\'img/books/book-' + bookIndex + '.jpg\')"></div></div>');
  }
});

// Mailchimp embed support
(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[0]='EMAIL';ftypes[0]='email';fnames[1]='FNAME';ftypes[1]='text';fnames[2]='LNAME';ftypes[2]='text';}(jQuery));var $mcj = jQuery.noConflict(true);
