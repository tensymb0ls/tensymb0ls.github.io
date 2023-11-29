const accessToken = 'TOKEN_HERE';
const userId = '6815732145179986';

async function fetchInstagramPhotos() {
    try {
        const endpoint = `https://graph.instagram.com/${userId}/media?fields=id,media_type,media_url&access_token=${accessToken}&limit=5`;
        const response = await fetch(endpoint);
        const data = await response.json();

        const photoDivs = document.querySelectorAll('.instagram__card-img');
        data.data.filter(photo => photo.media_type === 'IMAGE').forEach((photo, index) => {
            if (photoDivs[index]) {
                const img = document.createElement('img');
                img.src = photo.media_url;
                img.alt = 'Instagram image';
                img.style.width = '250px';
                photoDivs[index].appendChild(img);
            }
        });
    } catch (error) {
        console.error('Ошибка получения данных:', error);
    }
}

fetchInstagramPhotos();
