Describe: `pigLatin()`
Test: "It will add 'way' to the end of words that begin with a vowel" 
Expect(pigLatin("a")).toEqual("away");

Describe: `pigLatin()`
Test: "It will check if word begins with consonants or y and move consonants or y to the end and add "ay"
Expect: (pigLatin("chair")).toEqual("airchay")


Describe: `pigLatin()`
(pigLatin("squeal")).toEqual("ealsquay")