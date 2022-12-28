//get delete display and clear
let clearBtn = document.getElementById('clrBtn');
let display = document.getElementById('display');
let delBtn = document.getElementById('delbtn');
let dispText = display.textContent;

//implement delete functionality (clear text of display)
clearBtn.addEventListener('click', ()=>{display.textContent = '';});
delBtn.addEventListener('click', ()=>{display.textContent = display.textContent.slice(0,-1);});

//get all number buttons and implement number writing functionality
let numButtons = [];
for (let i = 0; i<=9; ++i){
    numButtons[i] = document.getElementById('btn-'+`${i}`);
}
for (let i in numButtons){
    numButtons[i].addEventListener('click', ()=>{display.textContent += i;});
}
// init operation buttons
const operationKeys = new Set(['+','-','x','/']);
let addBtn = document.getElementById('add');
addBtn.addEventListener('click', ()=>{ if (!operationKeys.has(display.textContent.charAt(display.textContent.length - 1)))
                                            display.textContent += '+'; });
let subBtn = document.getElementById('sub');
subBtn.addEventListener('click', ()=>{ if (!operationKeys.has(display.textContent.charAt(display.textContent.length - 1)))
                                            display.textContent += '-'; });
let multipBtn = document.getElementById('multip');
multipBtn.addEventListener('click', ()=>{ if (!operationKeys.has(display.textContent.charAt(display.textContent.length - 1)))
                                                display.textContent += 'x'; });
let divBtn = document.getElementById('div');
divBtn.addEventListener('click', ()=>{ if (!operationKeys.has(display.textContent.charAt(display.textContent.length - 1)))
                                                display.textContent += '/'; });
let dotBtn = document.getElementById('dot');
dotBtn.addEventListener('click', ()=>{ if (display.textContent[display.textContent.length-1] != '.')
                                                display.textContent += '.'; });

let eqlBtn = document.getElementById('equal');
eqlBtn.addEventListener( 'click', ()=>{
    let textArr = [''];
    let index = 0;
    for (let i in display.textContent){
        if (operationKeys.has(display.textContent[i])){ //add previous number and operator
            index++;
            textArr[index] = display.textContent[i];
            index++;
            textArr[index] = '';
        }else
            textArr[index] += display.textContent[i];
    }
    let OpArr = ['x', '/', '+', '-'];
    let opInd = 0;
    while (textArr.length > 1 || opInd > 3){
        for (let i = 0; i < textArr.length; ++i){
            console.log("loopin");
            if ( textArr[i] == OpArr[opInd] ) {
                let num1 = Number(textArr[i-1]);
                let num2 = Number(textArr[i+1]);
                switch(OpArr[opInd]) {
                    case 'x' : 
                        textArr[i] = `${num1 * num2}`;
                        break;
                    case '/' :
                        textArr[i] = `${num1 / num2}`;
                        break;
                    case '+' :
                        textArr[i] = `${num1 + num2}`;
                        break;
                    case '-' :
                        textArr[i] = `${num1 - num2}`;
                        break;
                }
                textArr.splice(i-1, 1);
                textArr.splice(i, 1);
                setTimeout(200);
                i -= 1;
            }
            if (textArr.length <= 1)
                break;
        }
            opInd++;
            if (textArr.length <= 1)
                break;
    }
    display.textContent = textArr[0];
});