fetch('https://kitsu.io/api/edge/anime?filter[text]=Naruto')
    .then(response => response.json())
    .then(data=>{
       const animeCardsContainer = document.getElementById('anime-cards');
        const animeData = data.data;

        // Clear any existing content
        animeCardsContainer.innerHTML = '';

        // Loop through the anime data and create cards
        animeData.forEach(anime => {
            const card = document.createElement('div');
            card.className = 'anime-card';
            
            // Create card content
            card.innerHTML = `
            <img src="${anime.attributes.coverImage ? anime.attributes.posterImage.small : 'placeholder.jpg'}" alt="${anime.attributes.titles.en}">
            <p>Score: ${anime.attributes.averageRating}</p>
            <p>Episodes: ${anime.attributes.episodeCount}</p>
                <h3>${anime.attributes.titles.en || anime.attributes.titles.ja}</h3>
                <p>${anime.attributes.description ? anime.attributes.description.substring(0, 100) + '...' : 'No description available.'}</p>
               <a href="${anime.attributes.youtubeVideoId ? `https://www.youtube.com/watch?v=${anime.attributes.youtubeVideoId}` : '#'}" class="watch-now">Watch Now</a>
           
                
                
            `;
            
            // Append the card to the container
            animeCardsContainer.appendChild(card);
        });


    })