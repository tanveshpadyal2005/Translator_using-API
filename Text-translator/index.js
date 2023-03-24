// const encodedParams = new URLSearchParams();
// encodedParams.append("source_language", "en");
// encodedParams.append("target_language", "mr");
// encodedParams.append("text", "What is your name?");

// const options = {
// 	method: 'POST',
// 	headers: {
// 		'content-type': 'application/x-www-form-urlencoded',
// 		'X-RapidAPI-Key': '52246edbe5msh6f23044db940a9cp17fe36jsn1d4d88c832d3',
// 		'X-RapidAPI-Host': 'text-translator2.p.rapidapi.com'
// 	},
// 	body: encodedParams
// };

// fetch('https://text-translator2.p.rapidapi.com/translate', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));


const fillform = document.getElementById("handleform");

function getplay(e) {

    e.preventDefault();


    const fill = document.getElementById("fill").value;
    const lan = document.getElementById("lan").value;
    const slang = document.getElementById("slang").value;

    if (fill == "") {
        alert("please enter text")
    }

    else if (lan == "") {
        alert("please select language")
    }



    const encodedParams = new URLSearchParams();
    encodedParams.append("source_language", `${slang}`);
    encodedParams.append("target_language", `${lan}`);
    encodedParams.append("text", `${fill}`);

    const options = {
        method: 'POST',
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
            'X-RapidAPI-Key': '52246edbe5msh6f23044db940a9cp17fe36jsn1d4d88c832d3',
            'X-RapidAPI-Host': 'text-translator2.p.rapidapi.com'
        },
        body: encodedParams
    };

    fetch('https://text-translator2.p.rapidapi.com/translate', options)
        .then(response => response.json())
        .then(response => {
            document.getElementById("show").innerHTML = response.data.translatedText
        })
        .catch(err => {console.error(err) 
        alert("data is not found") } );

}

fillform.addEventListener('submit', getplay)
