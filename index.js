function receivesAFunction(chore) {
    return chore(`${chore} is super boring.`)
}

function returnsANamedFunction() {
    return function work() {
        console.log("I hate working")
    }
}
function returnsAnAnonymousFunction() {
    return function () {
        console.log("I hope this works")
    }
}
