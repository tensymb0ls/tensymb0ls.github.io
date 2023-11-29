const accessToken = 'IGQWRNdmVlX3gyWEJlUHJRUjdyZA2ZA0UmRmWmV1d1RyVUJhb3RUcUJURjA4elNmUk1VWnpwQUZAjY1R1SUdKY2tZAOFY0NjlveFpONFN5YUhWb2hucW9RQ1FuejlJWHZAPOGtlRkxSMzZA6UDY0TjJSeDJ5R1ZAISlFiVUUZD';
const userId = '6815732145179986';

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