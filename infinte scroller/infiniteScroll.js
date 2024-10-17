let currentPage = 1;
let limit = 10;
let isLoading = false;

// Function to fetch data from API
async function fetchData(page) {
    isLoading = true;
    document.getElementById('loading').style.display = 'block';

    const res = await fetch(`https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=${limit}`);
    const data = await res.json();

    displayCards(data);
    isLoading = false;
    document.getElementById('loading').style.display = 'none';
}

// Function to display cards dynamically
function displayCards(data) {
    const container = document.getElementById('card-container');

    data.forEach(item => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
            <img src="${item.url}" alt="${item.title}">
            <h3>${item.title}</h3>
            <p>This is a description for ${item.title}.</p>
        `;
        container.appendChild(card);
    });
}

// Infinite Scroll
window.addEventListener('scroll', () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 500 && !isLoading) {
        currentPage++;
        fetchData(currentPage);
    }
});

// Initial fetch
fetchData(currentPage);
