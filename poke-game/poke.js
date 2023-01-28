function randomNumberGenerator() {
    let random = Math.random() //return a random number from 0 to 1
    let ramdomUpto808 = random * 808 //return a random number from 0 to 808
    let roundedRandomNumber = Math.round(ramdomUpto808) 
    return roundedRandomNumber
}

async function getPockmonData() {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomNumberGenerator()}`)
    const pokemonData = await response.json()
    return pokemonData
}

function showPokemonImages(list) {
    let pokemonDiv = document.getElementById("pokemons")
    list.forEach((pokemon) => {
        let pokemonImage = document.createElement("img")
        pokemonImage.src = pokemon.sprites.front_default
        pokemonImage.id = pokemon.name
        pokemonImage.classList.add("pokemon")
        pokemonDiv.append(pokemonImage)
    })
}

function removeButton() {
    // document.getElementById("button").disabled = true
    document.getElementById("button").remove()
}

function showMessage() {
    let message = document.getElementById("message")
    message.innerHTML = `You got five pokemons.
        Clike on any one to start your adcenture.
        `
    // in place of innerHTML: innerText or textContent
}

function showDescription(pokemon) {
    let description = document.getElementById("description")
    description.textContent =  `You chose ${pokemon.name} with
    ${pokemon.moves[0].move.name}`
}

function showStartGame() {
    let button = document.getElementById("game-button")
    if(!button) {
    let gameButton = document.createElement("button")
    gameButton.id = "game-button"
    gameButton.innerHTML = "Start Game"
    document.body.append(gameButton)
    } 
}

function clearScreen () {
    document.body.innerHTML = ""
}

function showInstructions() {
    let instruction = document.createElement("p")
    instruction.textContent = `Start your adventure by clicking on the map`
    document.body.appendChild(instruction)
}

function addMap() {
    let map = document.createElement("img")
    map.src = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5aacf438-4ca1-4094-9487-0114a51f5e92/d4a2uyp-5ef36aea-7216-4107-862b-732e8f7eb916.png/v1/fill/w_900,h_874,q_80,strp/cerulean_city_by_segesi_d4a2uyp-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODc0IiwicGF0aCI6IlwvZlwvNWFhY2Y0MzgtNGNhMS00MDk0LTk0ODctMDExNGE1MWY1ZTkyXC9kNGEydXlwLTVlZjM2YWVhLTcyMTYtNDEwNy04NjJiLTczMmU4ZjdlYjkxNi5wbmciLCJ3aWR0aCI6Ijw9OTAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.4TmD6cynaqZ3VghsGDyUWiUPcEe7b4gkpedCI26KCek"
    map.id = "background"
    map.alt = "https://www.deviantart.com/segesi/art/Cerulean-City-258794305"
    document.body.append(map)

}

function showSelectedPokemon(pokemon) {
    let selectedPokemonImage = document.createElement("img")
    selectedPokemonImage.src = pokemon.sprites.front_default
    selectedPokemonImage.id = "selected"
    selectedPokemonImage.style.position = "absolute"
    document.body.append(selectedPokemonImage)
}

function listenToClickOnMap() {
    let map = document.getElementById("background")
    map.addEventListener("click", (e) => {
        let poxX = e.pageX
        let poxY = e.pageY
        // console.log(poxX, poxY)
        let playingPokemon = document.getElementById("selected")
        let pokemonWidth = playingPokemon.clientWidth
        let pokemonHeight = playingPokemon.clientHeight
        let midOfWidth = pokemonWidth / 2
        let midOfHeight = pokemonHeight / 2
        playingPokemon.style.left = `${poxX - midOfWidth}px`
        playingPokemon.style.top = `${poxY - midOfHeight}px`
        playingPokemon.style.transition = "0.2s"       
    })
}

function changePosition(key) {
    let pokemon = document.getElementById("selected")
    let currentPosition = pokemon.getBoundingClientRect()
    switch (key) {
        case "ArrowUp": {
            pokemon.style.top = `${currentPosition.top - 10}px`
            break;
        }
        case "ArrowDown": {
            pokemon.style.top = `${currentPosition.top + 10}px`
            break;
        }
        case "ArrowLeft": {
            pokemon.style.left = `${currentPosition.left - 10}px`
            break;
        }
        case "ArrowRight": {
            pokemon.style.left = `${currentPosition.left + 10}px`
        }
        // other buttons are pressed, we will ignore them
        default: {

        }
    }
}

function listenToArrows() {
    // "keydown" event means we press any key, this event will be fired
    document.body.addEventListener("keydown", (e) => {
        e.preventDefault()
        changePosition(e.key)
    })
}

function listenToClickOnGameButton(pokemon) {
    let button = document.getElementById("game-button")
    button.addEventListener("click", () => {
        clearScreen()
        showInstructions()
        addMap()
        showSelectedPokemon(pokemon)
        listenToClickOnMap()
        listenToArrows()
    })
}

function listenToClickPokemon(list){
    list.forEach((pokemon) => {
        let name = pokemon.name
        document.getElementById(name).addEventListener("click", () => {
            showDescription(pokemon)
            showStartGame()
            listenToClickOnGameButton(pokemon)
        })
    })
}

document.getElementById("button").addEventListener("click", () => {
    let promiseList = []

    for(let i = 0; i < 5; i++) {
        let promise = getPockmonData().then((data) => {
            return data
        })
        promiseList.push(promise) 
    }

    Promise.all(promiseList).then((promiseList) => { 
        console.log(promiseList)
        showPokemonImages(promiseList)
        removeButton()
        showMessage()
        listenToClickPokemon(promiseList)

    }).catch((err) => {
        console.log(err.message)
    })

})