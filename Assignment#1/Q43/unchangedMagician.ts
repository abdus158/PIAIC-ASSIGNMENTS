function make_great(magicians: string[]): string[] {
    const greatMagicians: string[] = [];
  
    for (let magician of magicians) {
      greatMagicians.push("the Great " + magician);
    }
  
    return greatMagicians;
  }
  
  function show_magicians(magicians: string[]): void {
    for (let magician of magicians) {
      console.log(magician);
    }
  }
  
  const magicians: string[] = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];
  const greatMagicians: string[] = make_great([...magicians]);
  
  show_magicians(magicians);
  console.log("---");
  show_magicians(greatMagicians);
  