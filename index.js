function receivesAFunction (callback) {
    callback();
}

function returnsANamedFunction() {
    return function cb() {

    }
}

function returnsAnAnonymousFunction() {
    return function() {
        
    }
}