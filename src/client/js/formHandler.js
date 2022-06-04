function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    Client.checkForName(formText)

    console.log("::: Form Submitted :::")
    fetch('http://localhost:8081/test')
    .then(res => res.json())
    .then(function(res) {
        console.log(res)
        document.getElementById('results').innerHTML = res.message
    })
    
}
//`https://api.meaningcloud.com/sentiment-2.1?key=API_KEY&of=json&url=<URL_INPUT>&lang=en`
// const baseUrl="https://api.meaningcloud.com/sentiment-2.1?key="
// const baseURL = "https://api.meaningcloud.com/sentiment-2.1?key=";
// const getdata = async( baseURL, text, APIKey) => {

//     APIKey = await getAPI('http://localhost:8081/apikey')
//     const finalURL = baseURL + APIKey.key + "&of=json&url=" + text +"&lang=en"
const updateUI = async () => {
    const request = await fetch('http://localhost:8081/apiData');
    try {
        // Transform into JSON
        const allData = await request.json();
        console.log(allData);
        // Write updated data to DOM elements
        document.getElementById('model').innerHTML = allData.model;
        document.getElementById('agreement').innerHTML = allData.agreement;
        document.getElementById('subjectivity').innerHTML = allData.subjectivity;
        document.getElementById('confidence').innerHTML = allData.confidence;
        document.getElementById('irony').innerHTML = allData.irony;

    
    }
    catch(error) {
        console.log('error', error);
        // Appropriately handle errors
    };
};



export { handleSubmit }
export {updateUI}
// export {getAPI}
// export {getdata}
// export {postData}

