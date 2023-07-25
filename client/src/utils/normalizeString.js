// This function takes in a string and changes any accented letters to a normal english letter

export default function normalizeString(str) {
  return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}
