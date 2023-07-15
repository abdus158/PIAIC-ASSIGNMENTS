function make_sandwich(...items: string[]): void {
    console.log("Sandwich order:");
    for (let item of items) {
      console.log("- " + item);
    }
    console.log("Enjoy your sandwich!");
  }
  
  make_sandwich("Ham", "Cheese");
  make_sandwich("Turkey", "Lettuce", "Tomato");
  make_sandwich("Chicken", "Bacon", "Avocado", "Mayo");
  