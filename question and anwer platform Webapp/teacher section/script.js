var i = 0;
var key = localStorage.key(i);
var Value = localStorage.getItem(key);
function collectValues() {
    const inputs = document.querySelectorAll('#myForm input');


    var allInputs = [];

    inputs.forEach(input => {
        allInputs.push(input.value);
        // console.log(allInputs);

    });

    if (allInputs.includes('')) {
        //   alert('')
    } else {



        function saveArrayToTheLocalStorage(allInputs) {

            // genrating new key every time this function is called
            var uniqueKey = `${i}`
            localStorage.setItem(uniqueKey, JSON.stringify(allInputs));

            var temp1 = Object.values(localStorage)[`${i}`];
            console.log(temp1);


        }
        saveArrayToTheLocalStorage(allInputs);
        allInputs.push('New Value');

        i++;
        
        document.getElementById('myForm').reset();
    }


}
collectValues();


