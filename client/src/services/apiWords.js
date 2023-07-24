const API_URL = 'http://localhost:5000/api/v1/word';

export async function getWord(translate) {
  const res = await fetch(`${API_URL}/${translate}`);

  if (!res.ok) throw Error(`Could not find the word: ${translate}`);

  const { word } = await res.json();

  return word;
}
