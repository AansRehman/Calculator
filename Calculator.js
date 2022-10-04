// console.log("helli");

let screen = document.getElementById('screen');
// console.log(screen.value);
var buttons = document.querySelectorAll('button');
var screenValue  = '';
var result = "";


function calculate(exp)
{
    console.log(exp);
    if (exp.includes('!'))
    {
        size = exp.length;
        n = Number(exp.substring(0, size-1));
        // console.log(n);
        console.log(factorialize(n));
        screen.value = factorialize(n);
    }
    else if (exp.includes('%'))
    {
        // size = exp.length;
        // n = Number(exp.substring(0, size-1));
        screen.value = eval(exp);
        console.log(eval(exp));
    }
    else if (exp.includes('C'))
    {
        size = exp.length;
        console.log(exp);
        console.log(size);
        n = Number(exp.substring(0, 1));
        console.log("n:"+n);
        r = Number(exp.substring(size-1));
        console.log("r:"+r);
        result = nCr(n, r);
        console.log(result);
        screen.value = result;
    }
    else if (exp.includes('P'))
    {
        size = exp.length;
        console.log(exp);
        console.log(size);
        n = Number(exp.substring(0, 1));
        console.log("n:"+n);
        r = Number(exp.substring(size-1));
        console.log("r:"+r);
        result = nPr(n, r);
        console.log(result);
        screen.value = result;
    }
    else
    {
        screen.value = eval(exp);
        console.log(eval(exp));
    }
}

function factorialize(num) {
    var result = num;
    if (num === 0 || num === 1) 
      return 1; 
    while (num > 1) { 
      num--;
      result *= num;
    }
    return result;
}

function nCr(n, r)
{
    return factorialize(n) / (factorialize(r) * factorialize(n - r));
}

function nPr(n, r)
{
    return factorialize(n) / factorialize(n - r);
}
