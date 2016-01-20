/*
Your code goes here!
 */

/*
You might find you want to use RegEx. As this quiz is about setCustomValidity
and not RegEx, here are some RegEx patterns you might find useful:

match one of the required symbols: /[\!\@\#\$\%\^\&\*]/g
match a number: /[0-9]/g or /\d/g
match a lowercase letter: /[a-z]/g
match an uppercase letter: /[A-Z]/g
match a character that isn't allowed in this password: /[^A-z0-9\!\@\#\$\%\^\&\*]/g
 */

/*
Grabbing a few inputs to help you get started...
 */
var firstPasswordInput = document.querySelector('#first');
var secondPasswordInput = document.querySelector('#second');
var submit = document.querySelector('#submit');

/*
You'll probably find this function useful...
 */  
submit.onclick = function () {
    if(firstPasswordInput.value.length < 16) {
        firstPasswordInput.setCustomValidity("More than 16 digits please.");
    }else if(firstPasswordInput.value.length > 100) {
        firstPasswordInput.setCustomValidity("Less than 100 digits please.");
    }else if(!firstPasswordInput.value.match(/[\!\@\#\$\%\^\&\*]/g)) {
        firstPasswordInput.setCustomValidity("Must match one of the required symbols: ! @ # $ % ^ & *");
    }else if(!firstPasswordInput.value.match(/[0-9]/g)) {
        firstPasswordInput.setCustomValidity("Must match one of the required numbers: 0-9");
    }else if(!firstPasswordInput.value.match(/[a-z]/g)) {
        firstPasswordInput.setCustomValidity("Must include a lowercase letter");
    }else if(!firstPasswordInput.value.match(/[A-Z]/g)) {
        firstPasswordInput.setCustomValidity("Must include a uppercase letter");
    }else if(firstPasswordInput.value.match(/[^A-z0-9\!\@\#\$\%\^\&\*]/g)) {
        firstPasswordInput.setCustomValidity("illegal");
    }else if(secondPasswordInput.value != firstPasswordInput.value) {
        secondPasswordInput.setCustomValidity("Non-matching password.");
    }else{
        firstPasswordInput.setCustomValidity("");
        secondPasswordInput.setCustomValidity("");
    };
};