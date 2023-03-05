export const upperFirst = (word: string) => {
  if (typeof word !== "string"){
    throw new Error('Parameter is not a string!');
  }
  return word ? word.charAt(0).toUpperCase() + word.slice(1).toLowerCase() : "";
}
