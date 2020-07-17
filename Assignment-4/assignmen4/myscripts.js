(function (window) {
  var names = ["Chandler", "John", "Jen", "Jason", "Ross", "Rachel", "Pheebe", "Monica", "Lily", "Joey"];
  for (var name in names) {
    var firstLetter = ((names[name]).charAt(0)).toLowerCase();
    if (firstLetter == 'j') {
      window.byeSpeaker.speak(names[name]);
    } else {
      window.helloSpeaker.speak(names[name]);
    }
  }
}

)(window)