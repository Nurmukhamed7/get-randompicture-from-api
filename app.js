const btn = document.querySelector('.btn')
const image = document.querySelector('.img')
const url = "https://api.thecatapi.com/v1/images/search?format=json"

console.log(btn);
console.log(image);
console.log(url);

async function fetchHandler() {
    try {
        const response = await fetch(url)
        const data = await response.json()
        console.log(response);
        console.log(data);

        image.src = data[0].url
    } catch (error) {
        console.log(error);
    }
}

fetchHandler()

// В чем разница
btn.addEventListener('click', fetchHandler)

// btn.addEventListener('click', () => {
//     fetchHandler()
// })
