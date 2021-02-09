//business logic
function pigLatin(word) {
  let vowels = ['a', 'e', 'i', 'o', 'u']

  if (vowels.includes(word[0])) {
    return word.concat("way");
  } else {
    for (let i=0; i<word.length; i++) {
      
     
      word = word.slice[i]
    } (i)
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


