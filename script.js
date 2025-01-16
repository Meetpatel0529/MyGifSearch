// JavaScript Code for GIF Search App

// Giphy API Key
const API_KEY = "rwiCDMZW7Q6QVM5HGDvIk3hsOT2wc6XW"; // Replace with your API Key

// Function to fetch GIFs
async function fetchGIFs(searchTerm) {
  const endpoint = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${searchTerm}&limit=10`;
  try {
    const response = await fetch(endpoint);
    const data = await response.json();
    displayGIFs(data.data);
  } catch (error) {
    console.error("Error fetching GIFs:", error);
  }
}

// Function to display GIFs
function displayGIFs(gifs) {
  const gifContainer = document.getElementById("gifContainer");
  gifContainer.innerHTML = ""; // Clear previous GIFs
  gifs.forEach((gif) => {
    const img = document.createElement("img");
    img.src = gif.images.fixed_height.url; // Use the URL of the GIF
    gifContainer.appendChild(img);
  });
}

// Add event listener to the search button
document.getElementById("searchButton").addEventListener("click", () => {
  const searchInput = document.getElementById("searchInput").value.trim();
  if (searchInput) {
    fetchGIFs(searchInput);
  }
});

document.getElementById("clearButton").addEventListener("click", () => {
    document.getElementById("gifContainer").innerHTML = "";
  });
  
