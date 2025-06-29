document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get("id"));
  const movie = movies.find(m => m.id === id);
  const container = document.getElementById("movie-details");

  if (!movie) {
    container.innerHTML = "<p>Movie not found.</p>";
    return;
  }

  container.innerHTML = `
    <div class="movie-card fade-in"> 
      <h2>${movie.title}</h2>
      <img src="${movie.poster}" alt="${movie.title}" class="movie-poster">
      <p><strong>Release Date:</strong> ${movie.releaseDate}</p>
      <p>${movie.summary}</p>
      <h3>Available On:</h3>
      <ul>${movie.ott.map(platform => `<li>${platform}</li>`).join('')}</ul>

      <h3>Characters:</h3>
      <div class="character-list">
        ${movie.characters.map(char => `
          <div class="character-card">
            <img src="${char.image}" alt="${char.name}">
            <h4>${char.name}</h4>
            <p><em>Actor:</em> ${char.actor}</p>
            <p>${char.description}</p>
          </div>
        `).join('')}
      </div>

      <h3>Crew Members:</h3>
      <div class="crew-list">
        ${movie.crew.map(member => `
          <div class="crew-card">
            <img src="${member.image}" alt="${member.name}">
            <h4>${member.name}</h4>
            <p><em>${member.role}</em></p>
          </div>
        `).join('')}
      </div>

      <h3>Events Attended:</h3>
      <ul>${movie.events.map(event => `<li>${event}</li>`).join('')}</ul>

      <h3>Latest Updates:</h3>
      <ul>${movie.updates.map(update => `<li>${update}</li>`).join('')}</ul>

      <h3>User Reviews:</h3>
      <div id="reviews">
        ${movie.reviews.length > 0 
          ? movie.reviews.map(r => `<p><strong>${r.username}</strong> (${r.rating}⭐): ${r.comment}</p>`).join('')
          : "<p>No reviews yet.</p>"
        }
      </div>

      <h4>Add Your Review:</h4>
      <input type="text" id="username" placeholder="Your Name"><br>
      <input type="number" id="rating" min="1" max="5" placeholder="Rating (1-5)"><br>
      <textarea id="comment" placeholder="Your Review"></textarea><br>
      <button onclick="addReview(${movie.id})">Submit Review</button>
    </div>
  `;
});

function addReview(id) {
  const username = document.getElementById("username").value;
  const rating = document.getElementById("rating").value;
  const comment = document.getElementById("comment").value;

  if (!username || !rating || !comment) {
    alert("Please fill in all fields!");
    return;
  }

  const movie = movies.find(m => m.id === id);
  movie.reviews.push({ username, rating, comment });

  alert("Review added! (This is only temporary in-memory data.)");
  window.location.reload();
}

