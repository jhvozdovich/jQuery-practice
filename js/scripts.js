$(document).ready(function() {  
  var tags = ["h1", "p", "img"];
  var names = ["header", "paragraph", "image"];

  tags.forEach(function(tag) {
    $(tag).click(function() {
      alert("This is a " + names[tags.indexOf(tag)]);
    })
  })
})
