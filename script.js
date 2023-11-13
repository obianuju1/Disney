const inputBox=document.getElementById('input-box');
const searchBtn=document.getElementById('searchBtn');
const randomBtn=document.getElementById('randomBtn')


async function Disney(query) {
    const url = `https://api.disneyapi.dev/character?name=${query}`;

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();

       
        document.getElementById('disney-img').setAttribute('src', data.data[1].imageUrl);
        document.getElementById('disney-name').innerHTML = data.data[1].name;
    } catch (error) {
        console.error('There was an error fetching the Disney character:', error);
    }
}


searchBtn.addEventListener('click',()=>Disney(inputBox.value));
async function Random() {
    let randomNum = Math.floor(Math.random() * 7438) + 1; 
    const url = `https://api.disneyapi.dev/character/${randomNum}`;
    
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
       
        document.getElementById('disney-img').setAttribute('src', data.data.imageUrl);
        document.getElementById('disney-name').innerHTML = data.data.name;
    } catch (error) {
        console.error('There was an error fetching the random character:', error);
    }
}

randomBtn.addEventListener('click', Random);
