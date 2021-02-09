//business logic
function pigLatin(word) {
  let vowels = ['a', 'e', 'i', 'o', 'u']
  if (vowels.includes(word[0])) {
    return word.concat("way");
  }
}

//user interface logic
$(document).ready(function(event) {
  $("form#input").submit(function(event) {
    event.preventDefault();
    let word = $("input#submission").val();
    $("#output").text(pigLatin(word));
    

  });
}); 


