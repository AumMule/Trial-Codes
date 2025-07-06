async function fetchData() {
  try {
    document.getElementById('quote').textContent = 'Loading...';
    document.getElementById('author').textContent = '';
    const response = await fetch('https://dummyjson.com/quotes/random');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    document.getElementById('quote').textContent = data.quote;
    document.getElementById('author').textContent = `- ${data.author}`;
  } catch (error) {
    console.error('Error fetching data:', error);
    document.getElementById('quote').textContent = 'Failed to load quote.';
    document.getElementById('author').textContent = '';
  }
}


qoute = ["hello bro","Nigga you"]