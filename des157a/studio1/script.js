(function(){
    "use strict";
    console.log("reading js");

    let myForm = document.querySelector("#myForm");
    let madLib = document.querySelector("#madlib");
    let sections = document.querySelectorAll("section");
    let story = document.getElementById("story");
    let to = document.getElementById("to");
    let subject = document.getElementById("subject");
    let composeBox = document.getElementById("bottom");

    document.querySelector('#signin').addEventListener('click', function() {
        sections[0].className = "hidden";
        sections[1].className = "show";
    });

    myForm.addEventListener("submit", function(event){
        event.preventDefault();
        let formData = document.querySelectorAll("input[type=text]");
        processData(formData);
        composeBox.style.visibility = "visible";


        // clear form
        formData = document.querySelectorAll("input[type=text]");
        for(let x of formData){
            x.value = "";
        }
    });

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
            if(emptyFields){
                madLib.innerHTML = "Please fill out the fields";
            } else{
                // update HTML
                makeMadlib(words);
            }
        }
    }

    function makeMadlib(words){
        let myText =  `
        Hello professor ${words[1]}. 
         
        This is ${words[0]} from your Dancing with ${words[2]} class. 
        I am not able to attend today since ${words[3]}, my ${words[4]}, ran away.
        It is my only means of transportation so I cannot make it.
        Can you send the Zoom recording to ${words[5]}-${words[0]}@cowmail.com. 
         
        Thanks!
        `;
        story.innerHTML = myText;

        to.innerHTML = `To: ${words[1]}@cowmail.com`;
        subject.innerHTML = `Subject: Skipping class because of runaway ${words[4]}`;
    }
}());