function checkForName(inputText) {
    console.log("::: Running checkForName :::", inputText);
    let names=["www..com"]
    // let names = [
    //     "Picard",
    //     "Janeway",
    //     "Kirk",
    //     "Archer",
    //     "Georgiou"
    // ]
    const prefix= inputText.substring(0,4);
    const tail = inputText.slice(-4)
    // names.push(prefix+tail)
    console.log(names)
    if(names.includes(prefix+tail)) {
        alert("Welcome, it is valid url!")
        console.log("It is right")
    } else{
        alert("No No No")
    }
}

export { checkForName }
