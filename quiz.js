window.onload=function(){
    show(0);
}

let questions = [
    {
        id:1,
        question: "What is the full form of RAM ?",
        answer:"Random Access Memory",
        options: [
            "Random Access Memory",
            "Randomly Access Memory",
            "Run Aceapt Memory",
            "None of these"
        ]
    },
    {
        id:2,
        question: "What is the full form of CPU ?",
        answer: "Control Processing Unit",
        options:[
            "Control Processing Unit",
            "Central Processing Unit",
            "Central Preload Unit",
            "None of these"
        ]
    },
    {
        id:3,
        question: "What is the full form of E-mail ?",
        answer: "Electronic Mail",
        options:[
            "Engine Mail",
            "Electricity Mail",
            "Electronic Mail",
            "None of these"
        ]
    }

];



function submitForm(e) {
    e.preventDefault();
    let name=document.forms["WELCOME!"]["name"].value;
    /*storing is session storage*/
    sessionStorage.setItem("name",name);
    location.href="page2.html";
}

let question_count=0;
let points=0;
function next() {
    let user_answer = document.querySelector("li.options.active").innerHTML;
    if (user_answer == questions[question_count].answer) {
        points += 5;
        sessionStorage.setItem("points", points);
    }

    

    if (question_count == questions.length - 1) {
        sessionStorage.setItem("time", `${minutes} minutes and ${seconds} seconds`);
        clearInterval(mytime); // Stop the timer when the quiz ends


        location.href = "page3.html";
        return;
    }

    question_count++;
    show(question_count);
}
function show(count)
{
    let Question= document.getElementById("questions");
    /*Question.innerHTML= "<h2>" + questions[count].question + "</h2>";*/
    Question.innerHTML=
    `<h2>Q${question_count+1}.${questions[count].question}</h2>
                <ul class="options_group">
                    <li class="options " >${questions[count].options[0]}</li>
                    <li class="options">${questions[count].options[1]}</li>
                    <li class="options">${questions[count].options[2]}</li>
                    <li class="options">${questions[count].options[3]}</li>
                </ul> `;
    toggleActive();
}

/*for making an option active*/
function toggleActive()
{
    let option=document.querySelectorAll("li.options");/*will return array 
    of elements who have li tag and options as a class..as querySelectorAll
    returns all matching data*/
    for (let i = 0; i < option.length; i++) {
        option[i].onclick = function() {
            for(let j=0;j<option.length;j++)/* if on clicking there is already an active option make it inactive*/ 
            {
                if(option[j].classList.contains("active"))
                    option[j].classList.remove("active")
            }
            option[i].classList.add("active");
        };
    }
    /*we could have added active in html only onlick but this way
    it is easier and we are basically adding a class(active) to the clicked 
    option*/
}


