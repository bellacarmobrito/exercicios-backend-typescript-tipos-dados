const spelling = (word: string): string => {
  return word.split("").join("-");
};

console.log(spelling("Supercalifragilisticexpialidocious"));
