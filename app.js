// masala 22

function mixStart(str){
    if(str.slice(1, 3) == 'ix') {
      return true
    } else {
      return false
    }
}
mixStart('asliddin');

// masala 23

function startOz(str){
    if(str.charAt(0) == 'o' && str.charAt(1) == 'z') {
      return 'oz'
    } else if (str.charAt(0) == 'o') {
      return 'o'
    } else if (str.charAt(1) == 'z') {
      return 'z'
    } else {
      return ''
    }
}
startOz('javascript');

// masala 24

function intMax(a, b, c){
    if(a > b && a > c) {
      return a
    } else if (b > a && b > c) {
      return b
    } else if (c > b && c > a) {
      return c
    } 
}
intMax(3, 4);

// masala 25

function close10(a, b){
    let firstUpTo = Math.abs(a - 10);
    let secondUpTo = Math.abs(b - 10);
  
    if(firstUpTo > secondUpTo) {
      return b
    } else if(firstUpTo < secondUpTo) {
      return a
    } else if (firstUpTo == secondUpTo){
      return 0
    }
}
close10(3, 5);

// masala 26

function in3050(a, b){
    if((a >= 30 && a <= 40) && (b >= 30 && b <= 40)) {
      return true
    } else if ((a >= 40 && a <= 50) && (b >= 40 && b <= 50)) {
      return true
    } else {
      return false
    }
}
in3050();



// masala 27

function max1020(a, b){
    if((a <= 20 && a >= 10) && (b <= 20 && b >= 10)) {
      return Math.max(a ,b)
    } 
    if((a <= 20 && a >= 10)) {
         return a
    } else if ((b <= 20 && b >= 10)) {
         return b
    } else {
        return 0
    }
}
max1020;

// masala 28;

function stringE(str){
    let num = 0;
    for (let i = 0; i < str.length; i++) {
      if(str.charAt(i) == 'e') {
         num++
      } 
    }
    if(num <= 3 && num >=1) {
        return true
     } else {
       return false
     }
}
stringE("javascript")

// masala 29

function lastDigit(a, b){
    if(a % 10 == b % 10) {
      return true
    } else {
      return false
    }
}

// masala 30

function endUp(str){
    let lenth = str.length
    if(lenth >= 3) {
      return str.slice(0, lenth - 3) + str.slice(lenth - 3).toUpperCase()
    } else {
      return str.toUpperCase()
    }
}
endUp("javscript")

// masala 31

function everyNth(str, n){
    let lenth = str.length;
    let num = '';
    for(let i = 0; i <= lenth; i++) {
       num += str.charAt(i * n)
    }
    return num
}
everyNth("javascript"), 2;