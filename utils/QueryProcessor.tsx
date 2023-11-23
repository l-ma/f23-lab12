export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("snoopy")) {
    return (
      "Snoopy is not your average beagle. He is a book lover and a book writer." + 
      "He is a collector of fine art and a root beer connoisseur." +
      "Plus, his unstoppable imagination helps keep his life anything but ordinary." + 
      "But no imaginary adventure matches a nap on his doghouse—and waking up to a well-deserved supper made especially for him by that Round-Headed Kid."
    );
  }

  if (query.toLowerCase().includes("garfield")) {
    return (
      "Garfield's favorite daily activities involve eating (especially lasagna) and sleeping." +
      "He also loves to torment both his owner (the nerdy bachelor, Jon Arbuckle) and fellow pet (the loveable yellow beagle, Odie)." +
      "His closest companion is a stuffed teddy bear named Pooky and he has a vivid imagination (sometimes thinking he's a superhero)."
    );
  }

  const add2Match = query.match(/What is (\d+) plus (\d+) plus (\d+)/);
  if (add2Match) {
    const x: number = parseInt(add2Match[1]);
    const y: number = parseInt(add2Match[2]);
    const z: number = parseInt(add2Match[3]);
    return (x+y+z).toString();
  }

  return "";
}
