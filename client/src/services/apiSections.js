const API_URL = 'http://localhost:5000/api/v1/section';

export async function getSection(sectionTitle) {
  const res = await fetch(`${API_URL}/${sectionTitle}`);

  if (!res.ok) throw Error('Failed to get section');

  const { section } = await res.json();

  return section;
}
