export const sayHello = () => { // <-- Action creator
    return {
        type: "SAY_HELLO",
        payload: "Hi and welcome to my app" // <--Action
    }
}

export const sayGoodbye = () => { // <-- Action creator
    return {
        type: "SAY_GOODBYE",
        payload: "Thanks for visiting !!!" // <--Action
    }
}