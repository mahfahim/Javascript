const prompt = require("prompt-sync")();

function getInput(){
    let arr = prompt("Enter an array (eg: [1000, 2000, 3000]) : ");
    let num = prompt("Enter a number: ");
    
    let flag = false;
    if(!arr.startsWith("[") || !arr.endsWith("]")) 
    {
        flag = true;
    }
    arrNum = JSON.parse(arr);
    num = Number(num);

    if(flag || !Array.isArray(arrNum) || typeof num !== 'number'){
        console.log("invalid input") ;
    }
    else {
        monthlySavings(arrNum,num);
    }
}

function monthlySavings(arr,num){
    let saving = 0;
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i] >= 3000)
        {
            saving += arr[i]*0.8;
        }
        else
        {
            saving += arr[i];
        }
    }

    saving -= num;

    if(saving >= 0)
    {
        console.log(saving);
    }
    else if(saving < 0)
    {
        console.log("earn more");
    }

}

getInput();