function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    Client.checkForName(formText)

    console.log("::: Form Submitted :::")
    fetch('http://localhost:8081/test')
    .then(res => res.json())
    .then(function(res) {
        document.getElementById('results').innerHTML = res.message + res.time
    })
    
}
//`https://api.meaningcloud.com/sentiment-2.1?key=API_KEY&of=json&url=<URL_INPUT>&lang=en`
// const baseUrl="https://api.meaningcloud.com/sentiment-2.1?key="
// const baseURL = "https://api.meaningcloud.com/sentiment-2.1?key=";
// const getdata = async( baseURL, text, APIKey) => {

//     APIKey = await getAPI('http://localhost:8081/apikey')
//     const finalURL = baseURL + APIKey.key + "&of=json&url=" + text +"&lang=en"



export { handleSubmit }
// export {updateUI}
// export {getAPI}
// export {getdata}
// export {postData}

