//POUNDS
//out has hidden visibility on page load then visible when target function is evoked
document.getElementById('output').style.visibility = 'hidden'
//grab input with ID and add event listener for input event then run function
document.getElementById('lbsInput').addEventListener('input', function (e) {
//visibility
    document.getElementById('output').style.visibility = 'visible';

    //get input with event 
    let lbs = e.target.value;
    //target the output IDs and out equivakent
    document.getElementById('grams-output').innerHTML = lbs / 0.0022046;
    document.getElementById('kg-output').innerHTML = lbs / 2.2046;
    document.getElementById('oz-output').innerHTML = lbs * 16;

})

//END OF POUNDS 

//KMS
document.getElementById('meter-output').style.visibility = 'hidden';
document.getElementById('meter-Input').addEventListener('input', function (e) {
    //visibility
        document.getElementById('meter-output').style.visibility = 'visible';
    
        //get input with event 
        let meter = e.target.value;
        //target the output IDs and out equivakent
        document.getElementById('km-output').innerHTML = meter / 1000;
        document.getElementById('feet-output').innerHTML = meter * 3,281;
        document.getElementById('inches-output').innerHTML = meter * 39,37;
    
    })
