(function(){
    "use strict";
    console.log("reading js");

    let myForm = document.querySelector("#myForm");
    let madLib = document.querySelector("#madlib");
    let sections = document.querySelectorAll("section");
    let name = document.getElementById("name");
    let story = document.getElementById("story");


    document.querySelector('#signin').addEventListener('click', function() {
        sections[0].className = "hidden";
        sections[1].className = "show";
    });





    myForm.addEventListener("submit", function(event){
        event.preventDefault();
        let formData = document.querySelectorAll("input[type=text]");
        processData(formData);

        // // clear form
        // formData = document.querySelectorAll("input[type=text]");
        // for(let x of formData){
        //     x.value = "";
        // }
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
        Hello professor ${words[1]} ${words[2]}. 
        This is ${words[3]} ${words[4]} from your Dancing with (noun) class. 
        I had a few questions to ask you regarding the course. 
        First off, on your syllabus it says we have to bring ${words[5]} to class every Friday. 
        This is such an odd item to have. Will we be ${words[6]} with it? 
        Secondly, I have some concerns regarding ${words[7]} ${words[8]} from my ${words[9]} group. 
        He hasn't improved on his ${words[10]} axle spin and keeps arguing with ${words[11]} ${words[12]}. 
        I do not want him to bring down the group and was wondering if he could be moved to ${words[13]} ${words[14]}'s group. 
        Lastly, I was wondering how ${words[15]} is since we havent seen her in class in a while. 
        Thank you for your time! 
        Please respond when you can my email is ${words[0]}@cowmail.com. 
        See you in class!
        `;
        story.innerHTML = myText;
    }
}());