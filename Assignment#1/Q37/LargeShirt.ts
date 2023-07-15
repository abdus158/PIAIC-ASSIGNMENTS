function make_shirt(size: string = "Large", message: string = "I love TypeScript") {
    console.log(`The shirt size is ${size} and the message on the shirt is "${message}".`);
  }
  
  make_shirt(); 
  make_shirt("Medium"); 
  make_shirt("Small", "Modernized World");
  