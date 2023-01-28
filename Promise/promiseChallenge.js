// function that takes a single argument(num) which is a number and returns a promise
// if num is not a number, reject with an error
// if num is odd, resolve with "odd" after 3 sec
/// if num is even, resolve with "even" after 1 sec

function oddOrEven(num) {
    let promise = new Promise((resolve, reject) => {
        if(typeof num !== "number") {
            reject("Error: num must be a number")
        } else {
            if(num % 2 !== 0) {
                setTimeout(() => {
                    resolve("odd")
                }, 3000)
            } else {
                setTimeout(() => {
                    resolve("even")
                }, 1000)
            }
        }
    })
    return promise
}

oddOrEven(6).then((res) => {
    console.log("Result: " + res)
}).catch((err) => {
    console.log(err)
})