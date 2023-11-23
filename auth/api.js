const accessToken = 'YOUR_ACCESS_TOKEN';
const userId = 'YOUR_USER_ID';

async function fetchInstagramPhotos() {
    try {
        const endpoint = `https://graph.instagram.com/${userId}/media?fields=id,media_type,media_url&access_token=${accessToken}`;
        const response = await fetch(endpoint);
        const data = await response.json();

        const photosDiv = document.getElementById('photos');
        data.data.filter(photo => photo.media_type === 'IMAGE').forEach(photo => {
            const img = document.createElement('img');
            img.src = photo.media_url;
            img.style.width = '300px';
            photosDiv.appendChild(img);
        });
    } catch (error) {
        console.error('Ошибка получения данных:', error);
    }
}

fetchInstagramPhotos();