function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    Client.checkForName(formText)

    console.log("::: Form Submitted :::")
    // fetch('http://localhost:8080/test')
    // .then(res => res.json())
    // .then(function(res) {
    //     document.getElementById('results').innerHTML = res.message
    // })
    getdata(baseURL,formText,APIkey)
    .then(function(data){
        console.log(data)
        postData("/addData", {result:"result",
                              agreement: data.agreement,
                              confidence: data.confidence,
                              irony: data.irony,
                              model:data.model,
                              subjectivity: data.subjectivity
                             })
        updateUI();                     
    })
    
}
//`https://api.meaningcloud.com/sentiment-2.1?key=API_KEY&of=json&url=<URL_INPUT>&lang=en`
// const baseUrl="https://api.meaningcloud.com/sentiment-2.1?key="
const baseURL = "https://api.meaningcloud.com/sentiment-2.1?key=";
const getdata = async( baseURL, text, APIKey) => {

    APIKey = await getAPI('http://localhost:8081/apikey')
    const finalURL = baseURL + APIKey.key + "&of=json&url=" + text +"&lang=en"

    console.log(finalURL)
    const response = await fetch(finalURL)
    try {
        const data = await response.json();
        return data;
    }catch(error){
         console.log("error",error)
    }
}
// connect server and client

const postData = async(url=" ", data={}) => {
    const response = await fetch(url, {
        method: "POST",
        credentials:"same-origin",
        headers: {
            "Content-Type":"application/json",
        },
        body:JSON.stringify(data)
    });
    try {
        const newData = await response.json();
        console.log(newData);
        return newData;
    }catch(error) {
        console.log("error",error);
    }
}

//  fetch aPI key
const getAPI = async(url) => {
    const res = await fetch(url);
    try {
        const data = await res.json();
        console.log(data)
        return data;
    }
    catch(error) {
        console.log(error)
    }
}
const updateUI = async()=> {
    const request = await fetch('/all');
    try {
        const allData = await request.json();
        console.log(allData);
        document.getElementById("id").innerHTML = allData.result;
        document.getElementById("agreement").innerHTML = allData.agreement;
        document.getElementById("confidence").innerHTML = allData.confidence;
        document.getElementById("irony").innerHTML = allData.irony;
        document.getElementById("model").innerHTML = allData.model;
        document.getElementById("subjectivity").innerHTML = allData.subjectivity;
    } catch(error){
        console.log("error", error)
    }
}




export { handleSubmit }
