


// const request = new XMLHttpRequest(); // 0

// GET request to request data
// request.open("GET", "https://jsonplaceholder.typicode.com/users"); //1
// request.send(); // 2
// console.log(request.readyState);

// POST request to send data
// request.open("POST", "https://jsonplaceholder.typicode.com/users");
// request.setRequestHeader("Content-Type", 'application/json'); // json-data
// request.send();

// event listener handler
// request.onreadystatechange = function() {
//     console.log(request.readyState);// 3,4

//     if (request.readyState === XMLHttpRequest.DONE) {
//         console.log('got data');

//         console.log(request.responseText)
//     } else {
//         console.log('downloading....');
        
//     }
    
// }


// ===========================================
let request;

document
    .getElementById("myBtn")
    .addEventListener("click", testRequest);

function testRequest() {
    try {
    request = new XMLHttpRequest();

    if (!request) {
        alert("Failed to create an XMLHttpRequest Object.");
        return false;
    }

    request.onreadystatechange = alertResponse;
    // request.open("GET", "https://jsonplaceholder.typicode.com/users");
    request.open("POST", "https://jsonplaceholder.typicode.com/todos");
    
    // set request headers
    request.setRequestHeader(
        "Content-Type",
        "application/x-www-form-urlencoded"
    );
    
    // get the value of the input
    let inputVal = document.getElementById("myInput").value;

    // encodes string to a URI encoded string
    let encodedVal = encodeURIComponent(inputVal);
    console.log(encodedVal);
    
    // send encoded data to the server
    request.send(`data=${encodedVal}`);

    // request.send();

    } catch(e) {
        console.error(e);
    }
}

 function alertResponse() {
    if (request.readyState === XMLHttpRequest.DONE) {
        console.log('STATUS CODE: ', request.status);
        if (request.status === 200 || request.status === 201) {
            // alert(request.responseText);
            console.log("Response Data: ", request.responseText);
            const data = JSON.parse(request.responseText);
            console.log(data);
            

            // const xmlDoc = request.responseXML;
            // console.log(xmlDoc);
            
            // const doc_root = xmlDoc.querySelector("root");
            // console.log(doc_root);
            
            // let data = doc_root.firstChild.data;
            // console.log(data);
            

            // alert(data);
        } else {
            alert("The request returned a status other than 200 OK: " + request.status);
        }
    }
}