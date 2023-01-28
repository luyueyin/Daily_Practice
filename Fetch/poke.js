function randomNumberGenerator() {
    let random = Math.random() //return a random number from 0 to 1
    let ramdomUpto808 = random * 808 //return a random number from 0 to 808
    let roundedRandomNumber = Math.round(ramdomUpto808) //return an integer from 0 to 808
    return roundedRandomNumber
}

function getPockmonData() {
    const fetchPromise = fetch(`https://pokeapi.co/api/v2/pokemon/${randomNumberGenerator()}`)
        .then((response) => {
            return response.json() // return the data from the response - json is also returns a promise
        })
    return fetchPromise
}

// document.getElementById("button").addEventListener("click", () => {
//     let pokemonList = []
//     getPockmonData().then((data) => {
//         pokemonList.push(data)
//         return getPockmonData() // return  a promise so that we can chain further using `.then()`
//     }).then((data) => {
//         pokemonList.push(data)
//         return getPockmonData()
//     }).then((data) => {
//         pokemonList.push(data)
//         return getPockmonData()
//     }).then((data) => {
//         pokemonList.push(data)
//         return getPockmonData()
//     }).then((data) => {
//         pokemonList.push(data)
//         console.log(pokemonList)
//     }).catch((err) => {
//         console.log(err)
//     })
// })

document.getElementById("button").addEventListener("click", () => {
    let promiseList = []

    for(let i = 0; i < 5; i++) {
        let promise = getPockmonData().then((data) => {
            return data
        })
        promiseList.push(promise)  // make a list of promises
    }

    Promise,all(promiseList).then((promiseList) => {  // to fire all promises at the same time
        console.log(promiseList)
    }).catch((err) => {
        console.log(err)
    })

})