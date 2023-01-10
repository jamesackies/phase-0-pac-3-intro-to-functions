// Follow along with the examples here
function say(greeting, firstName) {
    console.log(`${greeting}, ${firstName}!`);
  }console.log(say("Hello", "Liz"));
  function say(greeting, firstName) {
    console.log("I was called!");
    return `${greeting}, ${firstName}!`;
  }console.log(say("Howdy", "partner"));
  