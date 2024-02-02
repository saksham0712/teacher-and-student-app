const questionText = document.getElementById('question');
const option1 = document.getElementById('option1');
const option2 = document.getElementById('option2');
const option3 = document.getElementById('option3');
const option4 = document.getElementById('option4');
const button = document.getElementById('submitButton');
const scoreNumber = document.getElementById('Score');
const kitneQuestion = document.getElementById('question-number-input');

const sahiuttar = [];
const galatuttar = [];

var index = 0;
var score = 0;
var LSI = 0;

function localStorageVales() {
    var keys = Object.keys(localStorage);

    if (LSI <= kitneQuestion.value) {
        const kitneQuestionIndex = kitneQuestion.value;

        if (index < kitneQuestionIndex) {
            var value = localStorage.getItem(keys[index]);
            var filteredArr = value.split('"');

            const questionTextIs = filteredArr[1];
            const option11 = filteredArr[3];
            const option22 = filteredArr[5];
            const option33 = filteredArr[7];
            const option44 = filteredArr[9];
            const correctOption = filteredArr[11];
            sahioption = correctOption;

            // let wrongOption;

            questionText.textContent = questionTextIs;
            option1.textContent = option11;
            option1.addEventListener('click', () => checkOption(option11));

            option2.textContent = option22;
            option2.addEventListener('click', () => checkOption(option22));

            option3.textContent = option33;
            option3.addEventListener('click', () => checkOption(option33));

            option4.textContent = option44;
            option4.addEventListener('click', () => checkOption(option44));

            index++;
        } else {
            scoreNumber.textContent = `Score:${score}`;
            
            // You can update the HTML preview here as well if needed.
        }
        
    } 
    LSI++;
}

function checkOption(correctoption) {
    if (correctoption == sahioption) {
        // console.log('ye sahi ahi option', sahioption);
        sahiuttar.push(sahioption)
        console.log('sahi uttar', sahiuttar);
        
        score++; 
        scoreNumber.textContent = `Score:${score}`;
    } else {
        // console.log('galat option chuni', correctoption);
        galatuttar.push(correctoption);
        console.log('galat uttar', galatuttar);
        scoreNumber.textContent = `Score:${score}`;
        
    }

    // After checking the option, you can call localStorageValues again to move to the next question
    localStorageVales();
}

function startingTest() {
    const howMuchQuestion = document.getElementById('question-number-input').value;
    if (howMuchQuestion == null || howMuchQuestion == 0) {
        alert('kuch bhar le be');
    } else if (howMuchQuestion <= 30) {
        document.getElementById("start-option").style.display = "none";
        document.querySelectorAll("#myForm")[0].style.display = "block";
        document.getElementsByTagName('h3')[0].style.display = "none";
        document.getElementsByTagName('h2')[0].style.display = "block";

        // Call localStorageValues to start displaying questions
        // localStorageVales();
    } else {
        alert('abe aukat me reh le bee');
    }
}
