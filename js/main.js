document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("movies-container");

  movies.forEach(movie => {
    container.innerHTML += `
      <div class="movie-card">
        <img src="${movie.poster}" alt="${movie.title}">
        <h5>${movie.title}</h5>
        <p>Release: ${movie.releaseDate}</p>
        <a href="movie.html?id=${movie.id}" class="btn">View Details</a>
      </div>
    `;
  });
});



