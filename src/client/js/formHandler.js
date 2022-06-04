//const baseURL = "https://api.meaningcloud.com/sentiment-2.1?key=";

function handleSubmit(event) {
    event.preventDefault()
    const baseURL = "https://api.meaningcloud.com/sentiment-2.1?key=";
    // check what text was put into the form field
    let formText = document.getElementById('name').value
    Client.checkForName(formText)

    console.log("::: Form Submitted :::")
    fetch('http://localhost:8082/apikey')
    .then(res => res.text())
    .then(function(res) {
        //console.log(res)
        //document.getElementById('results').innerHTML = res.message
        console.log(baseURL + res + "&of=json&url=" + formText +"&lang=en")
       const apiSource = fetch(baseURL + res + "&of=json&url=" + formText +"&lang=en")
        .then(res=> res.json())
        .then(function(res){
            console.log("ERRRR",res)
            document.getElementById("agreement").innerHTML="Agreement: " + res.agreement;
            document.getElementById("confidence").innerHMTL= "Confidence: " + res.confidence;
            document.getElementById("irony").innerHTML ="Irony: "+  res.irony;
            document.getElementById("model").innerHTML ="Model: " + res.model;
            document.getElementById("subjectivity").innerHTML ="Subjectivity: " + res.subjectivity;
        })
       //console.log(apiSource)
      // document.getElementById("agreement").innerH= "huhhahahahah";
    })
    
}
//`https://api.meaningcloud.com/sentiment-2.1?key=API_KEY&of=json&url=<URL_INPUT>&lang=en`
// const baseUrl="https://api.meaningcloud.com/sentiment-2.1?key="
// const baseURL = "https://api.meaningcloud.com/sentiment-2.1?key=";
// const getdata = async( baseURL, text, APIKey) => {


export { handleSubmit }
//export {updateUI}
// export {getAPI}
// export {getdata}
// export {postData}

