(function(){
    "use strict";
    console.log("reading js");

    let myForm = document.querySelector("#myForm");
    let madLib = document.querySelector("#madlib");

    myForm.addEventListener("submit", function(event){
        event.preventDefault();
        let formData = document.querySelectorAll("input[type=text]");
        processData(formData);

        // clear form
        formData = document.querySelectorAll("input[type=text]");
        for(let x of formData){
            i.value = "";
        }
    });

    function makeMadlib(words){
        let myText =  `Here are the words: ${words[0]}, ${words[1]}, ${words[2]}, ${words[3]}`;
        madLib.innerHTML = myText;
    }

    function processData(formData){
        let emptyFields = false;
        let words = [];
        for(let x of formData){
            // select DOM
            if(x.value){
                words.push(x.value);
                x.value = "";
            } else{
                emptyFields = true;
            }
            if(!emptyFields){
                madLib.innerHTML = "Please fill out the fields";
            } else{
                // update HTML
                makeMadlib(words);
            }
        }
    }
}());