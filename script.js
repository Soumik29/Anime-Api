async function searchAnime() {
    const searchTerm = document.getElementById('searchInput').value;
    const url = `https://api.jikan.moe/v3/search/anime?q=${searchTerm}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        displayAnime(data.results);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

function displayAnime(animeList) {
    const animeContainer = document.getElementById('animeList');
    animeContainer.innerHTML = '';

    animeList.forEach(anime => {
        const animeDiv = document.createElement('div');
        animeDiv.classList.add('anime');

        const title = document.createElement('h2');
        title.textContent = anime.title;
        animeDiv.appendChild(title);

        const image = document.createElement('img');
        image.src = anime.image_url;
        animeDiv.appendChild(image);

        animeContainer.appendChild(animeDiv);
    });
}