for (let i = 1; i <= 10; i++) {
    console.log(i);
  }


 let sum = 0;
 
 for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        sum += i;
    }
 }
 console.log(sum);

 for (let i = 1; i <= 10; i++) {
    for (let y = 1;y <= 10; y++) {
      let x =  i * y;
      console.log(i, y * i)
    }
  }
// Функції

function showFirstMessage() {
  console.log("Hello World!");
}

showFirstMessage();


function calc(calc, calc2) {
  console.log(calc * calc2);
  let num = 20;
}

calc(4,4);