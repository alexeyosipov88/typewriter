const sentence = "hello there from lighthouse labs";

const typewriter = function(sentence) {
  let seconds = 0;
  for (let char of sentence) {
    setTimeout(() => {
      process.stdout.write(char);
    }, seconds);
    seconds += 500;
  }
  setTimeout(() => {
    console.log("");
  }, seconds);
};

typewriter(sentence);


