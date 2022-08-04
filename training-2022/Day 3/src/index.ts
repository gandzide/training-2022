class Helper {

    public component () : HTMLDivElement {
        const element = document.createElement('div')
        element.innerHTML = 'Hello, how are you? Hai noroc.'
        return element
    }
}

document.body.appendChild(new Helper().component())
