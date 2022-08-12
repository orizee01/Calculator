
//target the cal-value by using the id and the inntext method

function calHistory(){
  return document.getElementById("cal-value").innerText;
}
//for it to display on the screen
function printHistory(num){
  document.getElementById("cal-value").innerText=num;
} 
// 
function getNum(){
return document.getElementById("output-value").innerText;
}
function printNum(num){
 if(num==""){
  document.getElementById("output-value").innerText=num;
 }
 else{
 document.getElementById("output-value").innerText=getFormattednum(num);
 }
 
}

function getFormattednum(num){
  // if the input is a "-" sign, return empty value
  if(num=="-"){
    return "";
  }
  // this function will return the number with commas
 let n = Number(num);
 let value = n.toLocaleString("en");
 return value;

}
//To mainpulate thee output value we need to convert the comma to a number
function reverseNumberFormat(num){
  return Number(num.replace(/,/g,''));
}
// to access the operator class we use for loop to access them on by one
let operator = document.getElementsByClassName("operator");
for(let i=0; i<operator.length;i++){
  operator[i].addEventListener('click',function(){
    //if the id is clear we set the output and history to empty character
    if(this.id == "clear"){
      printHistory("");
      printNum("");
    }
  

    else if(this.id == "backspace"){
      var output = reverseNumberFormat(getNum()).toString();//convert to string and remove the last character using substring() print the output
      if(output){ // if output has a value
        output = output.substr(0,output.length-1);
         printNum(output);
      }
      }
       else{
         var output = getNum();
         var history = calHistory();
        //  if output is empty, and history is not empty,
         
        if(output=="" && history!=""){
          // if the the character is an operator using is not a number function, remove the last character from the history using substring()
          if(isNaN(history[history.length-1])){
            history = history.substr(0,history.length-1);
            }
          }
          //  if th output is not empty or history is empty, 
         if(output!="" || history!=""){
          //if history is not empty, and output is empty,
          //the output most be set to an empty value, it will be converted to a number format only if the output as a value 
          //condition ? true : false
          output = output == "" ? output: reverseNumberFormat(output);
          // add the output to the history value
          history = history + output;
          // if user clicks on the equals sign history is evaluated the result is placed on the output and history is set to empty
          if(this.id == "="){
            let result = eval(history);
            printNum(result);
            printHistory("");
          }//for other operator the  number gets added to the history and the output is set to empty
          else{
            history = history+this.id;
            printHistory(history);
            printNum("");
          } 

  
        }
    
       } 
});

}
let number = document.getElementsByClassName("number");
for(let i=0;i<number.length;i++){
  number[i].addEventListener('click',function(){
    //This get our number with commas removed
    let output = reverseNumberFormat(getNum());
    if(output!=NaN){
        //if output is  a number
        // concatenate the id to the output and print it on the screen
      output=output+this.id;
      printNum(output);
    }

  });
}
