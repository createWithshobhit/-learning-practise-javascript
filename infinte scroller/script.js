let currentPage = 1;
let limit = 6;
let isLoading = false;

// fetch data from api
async function fetchCardData(page) {
    isLoading = true;
    document.getElementById('loading').style.display = 'block'; // Show loading

    let response = await fetch(`https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=${limit}`);
    let data = await response.json();

    displayCard(data);
    isLoading = false;
    document.getElementById('loading').style.display = 'none'; // Hide loading
}

function displayCard(data){
     const cardContainer = document.getElementById('card-container');

    data.forEach(k => {
    const card = document.createElement('div');
    card.classList.add('card');
     card.innerHTML = `
    <img src ="${k.url}"    alt="${k.title}"> 
    <h2>${k.title} </h2>
    <p> ${k.title}</p>
    `;

    cardContainer.appendChild(card)
    });  
}
window.addEventListener('scroll', ()=> {
    if(window.innerHeight + window.scrollY >= document.body.offsetHeight - 500 && !isLoading){
        currentPage++;
        fetchCardData(currentPage);  // Load next page of data when user scrolls to the bottom of the page. 500 is the threshold to trigger the load. 500 is just an example, you can adjust it as per your requirement.  // Fetch data from the API and display it.  // Increment the page number to load next page.  // Check if the next page is available or not. If available, fetch the data and display it. If not, hide the loading spinner.  // Reset the isLoading flag to false after fetching the data.  // Hide the loading spinner.  // Show the loading spinner.  // Fetch the next page of data when user scrolls to the bottom of the page. 500 is the threshold to trigger the load. 500 is just an example, you can adjust it as per your requirement.  // Fetch data from the API and display it.  // Increment the
    }
})

fetchCardData(currentPage);