function findNumber(){
    let n = Number(prompt("Напишите число", ""))
    if (n % 2 === 0){
        console.log("Парное число");
    }else if ( isNaN(n)){
        console.log("Hе число");
    }else {
        console.log("Hе парное");
    }
}

function findNumber2(){
    var n = prompt("Напишите число", "");
    let message = (isNaN(n))? "Hе число":
          (n % 2 === 0)? "Парное число": 
          "Hе парное число";
    console.log(message);
};

function almost_10(){
    let m = Number(prompt("Enter first number"));
    let n = Number(prompt("Enter second number"));
    const ten = 10;
    
    switch(true) {
        case Math.abs(n - ten) > Math.abs(m - ten):
            console.log("first number closer");
          break;
        case Math.abs(n - ten) < Math.abs(m - ten):
            console.log("second number closer");
          break;
      }

};






  
