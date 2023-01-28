// async function getValue(input) {
//     return input.toUpperCase()
// }

// function values(hi) {
//     getValue(hi).then((value) => {console.log(value)})
// }



// Example: ----------------------------------------------------------------


function randomNumberGenerator() {
    let random = Math.random() //return a random number from 0 to 1
    let ramdomUpto808 = random * 808 //return a random number from 0 to 808
    let roundedRandomNumber = Math.round(ramdomUpto808) //return an integer from 0 to 808
    return roundedRandomNumber
}

async function getPockmonData() {
    // const fetchPromise = fetch(`https://pokeapi.co/api/v2/pokemon/${randomNumberGenerator()}`)
    //     .then((response) => {
    //         return response.json() // return the data from the response - json is also returns a promise
    //     })
    // return fetchPromise

    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomNumberGenerator()}`)
    const pokemonData = await response.json()
    return pokemonData

}


document.getElementById("button").addEventListener("click", () => {
    let promiseList = []

    for(let i = 0; i < 5; i++) {
        let promise = getPockmonData().then((data) => {
            return data
        })
        promiseList.push(promise)  // make a list of promises
    }

    Promise.all(promiseList).then((promiseList) => {  // to fire all promises at the same time
        console.log(promiseList)
    }).catch((err) => {
        console.log(err.message)
    })

})