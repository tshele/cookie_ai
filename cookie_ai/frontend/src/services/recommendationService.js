export async function getRecommendations() {
  const response = await fetch('/api/recommendations');
  const data = await response.json();
  return data;
}