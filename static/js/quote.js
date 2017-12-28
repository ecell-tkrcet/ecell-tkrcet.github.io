$(document).ready(function() {
  getQuote();

function getQuote(){
 var url = "https://cors-anywhere.herokuapp.com/https://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=json&lang=en";

 $.getJSON(url, function(data){
   var quote = data.quoteText;
   var author = data.quoteAuthor;
   if (author === '') {
   author = 'Unknown';
 }

  $("#quote").html('"' + quote + '"');
  $("#author").html("- " + author);
  $("#newQuote").on("click", function(){
   getQuote();
 });
  $("#tweet").on("click", function(){
window.open("https://twitter.com/intent/tweet?text="+ quote + ' - ' + author);
 });

});

};

});