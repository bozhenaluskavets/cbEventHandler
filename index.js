const eventHandler = cb => {
    for (let event = 1; event <= cb; event++) {
        setTimeout( () => {
            console.log('event => ', event)
        }, event * 3000)
    }
}

eventHandler(10)
    
