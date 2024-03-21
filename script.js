const dogImageContainer = document.getElementById('dog-image')
const newDogBtn = document.getElementById('new-dog-btn')

// function for a random dog image
function getRandomDog() {
    const url = 'https://dog.ceo/api/breeds/image/random'

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const dogImg = document.createElement('img')
            dogImg.src = data.message
            dogImg.alt = "Random image of a dog"
            dogImg.width = 400;
            dogImageContainer.innerHTML = "" // clears previous image
            dogImageContainer.appendChild(dogImg)
        })
        .catch(error => console.log("Error fetching: ", error))
}

newDogBtn.addEventListener('click', getRandomDog)

// get an initial image
getRandomDog()