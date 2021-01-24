//----------------------------------------------------- ELEMENT CREATING

let createdByMe = document.createElement('p');
let hiWords = document.createElement('h1');
let startBtn = document.createElement('button');
let gameArea = document.createElement('div');
let winText = document.createElement('div');
let header = document.createElement('div')
let whoseStep = document.createElement('div');
let undo = document.createElement('a');

let settings = document.createElement('div');
let setBlock = document.createElement('div');
//
let timerDiv = document.createElement('div');
let isTimerText = document.createElement('lable');
let isTimer = document.createElement('div');
let howTimerDiv = document.createElement('div');
let howTimerText = document.createElement('lable');
let howTimer = document.createElement('div');
//


let colorPick = document.createElement('div');
let colorPickTop = document.createElement('div');
let colorPickBottom = document.createElement('div');
let colorPick2 = document.createElement('div');
let colorPickTop2 = document.createElement('div');
let colorPickBottom2 = document.createElement('div');

let timer1 = document.createElement('div');
let tMin1 = document.createElement('span');
let tSec1 = document.createElement('span');
let doubleDot1 = document.createElement('span');
let timer2 = document.createElement('div');
let tMin2 = document.createElement('span');
let tSec2 = document.createElement('span');
let doubleDot2 = document.createElement('span');


//----------------------------------------------------- HTML

hiWords.innerHTML = 'MyGame'
startBtn.innerHTML = 'START GAME'
undo.innerHTML = 'UNDO'
colorPickTop.innerHTML = 'PLAYER 1 COLOR'
colorPickTop2.innerHTML = 'PLAYER 2 COLOR'
createdByMe.innerHTML = 'Created by Vazgen Manaseryan'
doubleDot1.innerHTML = ':'
doubleDot2.innerHTML = ':'
tSec1.innerHTML = '00'
tSec2.innerHTML = '00'
settings.innerHTML = 'S'
isTimerText.innerHTML = 'TIMER ON/OFF'
isTimer.innerHTML = 'ON'
howTimerText.innerHTML = 'TIMER'

//----------------------------------------------------- STYLE

document.body.style.background = 'linear-gradient(to right, rgba(21,189,26,1) , rgba(136,222,140,1) , rgba(3,171,14,1) )'
document.body.style.transition = 'all 1s ease-in'

createdByMe.style.position = 'absolute'
createdByMe.style.top = '10px'
createdByMe.style.right = '15px'
createdByMe.style.color = 'white'
createdByMe.style.fontFamily = "Georgia, 'Times New Roman', Times, serif";
createdByMe.style.fontSize = '25px'

hiWords.style.textAlign = 'center'
hiWords.style.display = 'block'
hiWords.style.marginTop = '10%'
hiWords.style.padding = '15px'
hiWords.style.fontSize = '80px'
hiWords.style.fontFamily = "Georgia, 'Times New Roman', Times, serif";
hiWords.style.color = 'green'
hiWords.style.backgroundColor = 'lightgreen'
hiWords.style.borderTop = '5px dashed green'
hiWords.style.transition = 'all 0.2s linear'
hiWords.style.borderBottom = '5px dashed green'

startBtn.style.backgroundColor = 'green'
startBtn.style.borderRadius = '10px'
startBtn.style.width = '450px'
startBtn.style.height = '150px'
startBtn.style.fontSize = '55px'
startBtn.style.fontFamily = "Georgia, 'Times New Roman', Times, serif";
startBtn.style.fontWeight = '700'
startBtn.style.color = 'white'
startBtn.style.cursor = 'pointer'
startBtn.style.display = 'block'
startBtn.style.margin = '85px auto 0px'
startBtn.style.border = '15px double rgb(0,100,0)'
startBtn.style.transition = 'all 0.2s linear'

gameArea.style.width = '750px'
gameArea.style.height = '725px'
gameArea.style.border = '15px double rgb(0,100,0)'
gameArea.style.borderRadius = '15px'
gameArea.style.padding = '20px 0px 20px 20px'
gameArea.style.display = 'flex'
gameArea.style.flexDirection = 'row'
gameArea.style.flexWrap = 'wrap'
gameArea.style.margin = '3% auto 0px'
gameArea.style.position = 'relative'
gameArea.style.transition = 'all 0.8s linear'
gameArea.style.backgroundColor = 'green'

// winText.style.textAlign = 'center'
winText.style.position = 'absolute'
winText.style.display = 'none'
winText.style.color = 'white'
winText.style.margin = `${screen.availHeight/3}px ${screen.availWidth/2.6}px`
winText.style.fontSize = '80px'
winText.style.zIndex = '10'
winText.style.minWidth = '800px'
winText.style.fontFamily = "Georgia, 'Times New Roman', Times, serif"
winText.style.textDecoration = "underline"
// winText.style.padding = '90px'


header.style.display = 'flex'
header.style.justifyContent = 'space-between'
header.style.width = '70%'
header.style.marginLeft = '30px'

whoseStep.style.position = 'absolute'
whoseStep.style.alignItems = 'center'
whoseStep.style.top = '20px'
whoseStep.style.left = '20px'
whoseStep.style.fontSize = '35px'
whoseStep.style.padding = '10px'
whoseStep.style.color = 'white'

undo.style.color = 'white'
undo.style.backgroundColor = 'green'
undo.style.display = 'block'
undo.style.padding = '10px 30px'
undo.style.border = '3px dashed rgb(0,100,0)'
undo.style.fontSize = '26px'
undo.style.borderRadius = '7px'
undo.style.fontWeight = '700'
undo.style.letterSpacing = '6px'
undo.style.cursor = 'pointer'
undo.style.transition = 'all 0.2s linear'
undo.style.position = 'absolute'
undo.style.bottom = '30px'
undo.style.right = '30px'

//->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>COLORPICK
colorPick.style.display = 'inline-flex'
colorPick.style.margin = '-90px 0px 0px 60px'
colorPick.style.flexDirection = 'column'

colorPickTop.style.width = '500px'
colorPickTop.style.height = '85px'
colorPickTop.style.border = '3px solid rgb(0,100,0)'
colorPickTop.style.backgroundColor = 'green'
colorPickTop.style.fontSize = '50px'
colorPickTop.style.color = 'white'
colorPickTop.style.textAlign = 'center'
colorPickTop.style.paddingTop = '20px'
colorPickTop.style.cursor = 'pointer'
colorPickTop.style.fontWeight = '700'

colorPickBottom.style.width = '500px'
colorPickBottom.style.height = '250px'
colorPickBottom.style.display = 'flex'
colorPickBottom.style.border = '3px solid green'
colorPickBottom.style.backgroundColor = 'lightgreen'
colorPickBottom.style.opacity = '0'
colorPickBottom.style.transition = 'all 1s ease'
colorPickBottom.style.flexWrap = 'wrap'

//------SECONDs
colorPick2.style.display = 'inline-flex'
colorPick2.style.margin = '-60px 60px 0px 0px'
colorPick2.style.flexDirection = 'column'
colorPick2.style.float = 'right'


colorPickTop2.style.width = '500px'
colorPickTop2.style.height = '85px'
colorPickTop2.style.border = '3px solid rgb(0,100,0)'
colorPickTop2.style.backgroundColor = 'green'
colorPickTop2.style.fontSize = '50px'
colorPickTop2.style.color = 'white'
colorPickTop2.style.textAlign = 'center'
colorPickTop2.style.paddingTop = '20px'
colorPickTop2.style.cursor = 'pointer'
colorPickTop2.style.fontWeight = '700'

colorPickBottom2.style.width = '500px'
colorPickBottom2.style.height = '250px'
colorPickBottom2.style.display = 'flex'
colorPickBottom2.style.border = '3px solid green'
colorPickBottom2.style.backgroundColor = 'lightgreen'
colorPickBottom2.style.transition = 'all 1s ease'
colorPickBottom2.style.flexWrap = 'wrap'
colorPickBottom2.style.opacity = '0'
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>TIMER
timer1.style.width = '350px'
timer1.style.height = '140px'
timer1.style.backgroundColor = 'white'
timer1.style.borderRadius = '40px'
timer1.style.position = 'absolute'
timer1.style.left = '50px'
timer1.style.top = '35%'
timer1.style.display = 'flex'
timer1.style.fontSize = '110px'
timer1.style.fontWeight = '700'
timer1.style.paddingTop = '15px'
timer1.style.justifyContent = 'space-around'

timer2.style.width = '350px'
timer2.style.height = '140px'
timer2.style.backgroundColor = 'white'
timer2.style.borderRadius = '40px'
timer2.style.position = 'absolute'
timer2.style.right = '50px'
timer2.style.top = '35%'
timer2.style.display = 'flex'
timer2.style.fontSize = '110px'
timer2.style.fontWeight = '700'
timer2.style.paddingTop = '15px'
timer2.style.justifyContent = 'space-around'

settings.style.backgroundColor = 'green'
settings.style.borderRadius = '10px'
settings.style.width = '50px'
settings.style.height = '50px'
settings.style.fontSize = '40px'
settings.style.padding = '15px'
settings.style.fontFamily = "monospace";
settings.style.fontWeight = '700'
settings.style.color = 'white'
settings.style.cursor = 'pointer'
settings.style.position = 'absolute'
settings.style.top = '10px'
settings.style.left = '10px'
settings.style.border = '5px double rgb(0,100,0)'
settings.style.transition = 'all 0.2s linear'
settings.style.textAlign = 'center'
settings.style.zIndex = '20'

setBlock.style.width = '250px'
setBlock.style.height = '80px'
setBlock.style.backgroundColor = 'green'
setBlock.style.display = 'none'
setBlock.style.position = 'absolute'
setBlock.style.left = '95px'
setBlock.style.transition = 'all 0.2s linear'
setBlock.style.borderRadius = '10px'
setBlock.style.top = '10px'
setBlock.style.border = '5px double rgb(0,100,0)'
setBlock.style.borderBottomLeftRadius = '5px'
setBlock.style.borderTopLeftRadius = '5px'

timerDiv.style.color = 'white'
timerDiv.style.margin = '5px 10px'
timerDiv.style.display = 'flex'
timerDiv.style.flexDirection = 'column'

isTimerText.style.textAlign = 'center'
isTimerText.style.fontSize = '18px'
isTimer.style.width = '70px'
isTimer.style.height = '70px'
isTimer.style.margin = '0px auto'
isTimer.style.borderRadius = '30px'
isTimer.style.backgroundColor = 'lightgreen'
isTimer.style.textAlign = 'center'
isTimer.style.paddingTop = '12px'
isTimer.style.cursor = 'pointer'
isTimer.style.fontSize = '20px'
isTimer.style.fontWeight = '700'

howTimerDiv.style.color = 'white'
howTimerDiv.style.margin = '5px 10px'
howTimerDiv.style.display = 'flex'
howTimerDiv.style.flexDirection = 'column'

howTimerText.style.textAlign = 'center'
howTimerText.style.fontSize = '18px'
howTimer.style.width = '70px'
howTimer.style.height = '70px'
howTimer.style.margin = '0px auto'
howTimer.style.borderRadius = '30px'
howTimer.style.backgroundColor = 'lightgreen'
howTimer.style.textAlign = 'center'
howTimer.style.paddingTop = '12px'
howTimer.style.cursor = 'pointer'
howTimer.style.fontSize = '20px'
howTimer.style.fontWeight = '700'
//----------------------------------------------------- AppendChild

document.body.appendChild(hiWords)
document.body.appendChild(startBtn)
document.body.appendChild(colorPick)
document.body.appendChild(colorPick2)
document.body.appendChild(createdByMe)
document.body.appendChild(settings)
document.body.appendChild(setBlock)
setBlock.appendChild(timerDiv)
timerDiv.appendChild(isTimerText)
timerDiv.appendChild(isTimer)
setBlock.appendChild(howTimerDiv)
howTimerDiv.appendChild(howTimerText)
howTimerDiv.appendChild(howTimer)

colorPick.appendChild(colorPickTop)
colorPick.appendChild(colorPickBottom)
colorPick2.appendChild(colorPickTop2)
colorPick2.appendChild(colorPickBottom2)

timer1.appendChild(tMin1)
timer1.appendChild(doubleDot1)
timer1.appendChild(tSec1)
timer2.appendChild(tMin2)
timer2.appendChild(doubleDot2)
timer2.appendChild(tSec2)

//----------------------------------------------------- HOVER AND OTHER EFFECTS
startBtn.addEventListener('mouseenter',function(){
    this.style.transform = 'scale(1.1)'
    this.style.opacity = '0.9'
})
startBtn.addEventListener('mouseleave',function(){
    this.style.opacity = '1'
    this.style.transform = 'scale(1)'
})

settings.addEventListener('mouseenter',function(){
    this.style.transform = 'scale(1.1)'
    this.style.opacity = '0.9'
})
settings.addEventListener('mouseleave',function(){
    this.style.opacity = '1'
    this.style.transform = 'scale(1)'
    setBlock.style.display = 'none'
})
setBlock.addEventListener('mouseenter',function(){
    this.style.display = 'flex'
})
setBlock.addEventListener('mouseleave',function(){
    this.style.display = 'none'
})
settings.addEventListener('click',function(){setBlock.style.display = 'flex'})

undo.addEventListener('mouseenter',function(){
    this.style.transform = 'scale(1.1)'
    this.style.opacity = '0.7'  
})
undo.addEventListener('mouseleave',function(){
    this.style.opacity = '1'
    this.style.transform = 'scale(1)'
})

colorPick.addEventListener('mouseenter',function(){
    colorPickBottom.style.opacity = '1'
})
colorPick.addEventListener('mouseleave',function(){
    colorPickBottom.style.opacity = '0'
})
colorPick2.addEventListener('mouseenter',function(){
    colorPickBottom2.style.opacity = '1'
})
colorPick2.addEventListener('mouseleave',function(){
    colorPickBottom2.style.opacity = '0'
})


//----------------------------------------------------- JS-Code

let player1 = []
let player2 = []
let myStep = true
let historySteps = []
let colors = ['red','blue','green','yellow','black','white','orange','purple']
let wrongIndexes2 = [13,27,41,55,69,83,97,111,125,139,153,167,181,195]
let wrongIndexes1 = [0,14,29,44,59,74,89,104,119,134,149,164,179,194    ]
let p1Color = colors[0]
let p2Color = colors[1]
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>SETTINGS
isTimer.setAttribute('data-timer',1)
let timerMin = ['01','02','03','05']
let howMin = 1
howTimer.innerHTML = timerMin[howMin] + ' : 00'

isTimer.addEventListener('click',function(){
    if(this.getAttribute('data-timer')) {
        isTimer.setAttribute('data-timer','')
        isTimer.style.backgroundColor = 'red'
        isTimer.innerHTML = 'OFF'
        howTimerDiv.style.display = 'none'
    }
    else {
        isTimer.setAttribute('data-timer',1)
        isTimer.style.backgroundColor = 'lightgreen'
        isTimer.innerHTML = 'ON'
        howTimerDiv.style.display = 'flex'
    }
})

howTimer.addEventListener('click',function(){
    (howMin < 3) ? howMin++ : howMin=0
    howTimer.innerHTML = timerMin[howMin] + ' : 00'
})

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>CHOOSE COLOR
for(var i=0; i<colors.length; i++) {
    let newColor = document.createElement('div')
    newColor.style.width = '120px'
    newColor.style.height = '120px'
    newColor.style.margin = '2px'
    newColor.style.opacity = '0.4'
    newColor.style.backgroundColor = colors[i]
    colorPickBottom.appendChild(newColor)
    if(i == 0) newColor.style.opacity = '1'

    newColor.addEventListener('click',function(){
        p1Color = this.style.backgroundColor
        for(var j = 0; j < colorPickBottom.childNodes.length; j++) {
            colorPickBottom.childNodes[j].style.opacity = '0.4'
        }
        this.style.opacity = '1'
    })
}

for(var i=0; i<colors.length; i++) {
    let newColor = document.createElement('div')
    newColor.style.width = '120px'
    newColor.style.height = '120px'
    newColor.style.margin = '2px'
    newColor.style.opacity = '0.4'
    newColor.style.backgroundColor = colors[i]
    colorPickBottom2.appendChild(newColor)
    if(i == 1)  newColor.style.opacity = '1'
    newColor.addEventListener('click',function(){
        p2Color = this.style.backgroundColor
        for(var j = 0; j < colorPickBottom2.childNodes.length; j++) {
            colorPickBottom2.childNodes[j].style.opacity = '0.4'
        }
        this.style.opacity = '1'
    })
}

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> START BUTTON
if (isTimer.getAttribute('data-timer')) {
var t1;
var t2;
}

startBtn.addEventListener('click',function(){
    tMin1.innerHTML = timerMin[howMin]
    tMin2.innerHTML = timerMin[howMin]
    if (isTimer.getAttribute('data-timer')) {
        t1 = setInterval(timerGo1,1000);
        document.body.appendChild(timer1)
        document.body.appendChild(timer2)
    }
    if(p1Color == 'white'  || p1Color == 'yellow') whoseStep.style.color = 'black'
    else whoseStep.style.color = 'white'
    whoseStep.innerHTML = 'Next - ' + p1Color
    whoseStep.style.backgroundColor = p1Color
    document.body.appendChild(header)
    document.body.appendChild(winText)
    document.body.appendChild(gameArea)

    document.body.appendChild(whoseStep)
    header.appendChild(whoseStep)
    this.style.display = 'none'
    hiWords.style.display = 'none'
    colorPick.style.display = 'none'
    setBlock.style.display = 'none'
    settings.style.display = 'none'
    colorPick2.style.display = 'none'
    timer1.style.border = `30px solid ${p1Color}`
    timer2.style.border = `30px solid ${p2Color}`

    for(var i=1; i<=209;i++) {
        let newBlock = document.createElement('div')
        newBlock.style.height = '50px'
        newBlock.id = i
        newBlock.style.fontSize = '0px'
        newBlock.style.borderRadius = '3px'
        newBlock.setAttribute('data-isFull','')
        newBlock.style.width = '50px'
        newBlock.innerHTML = i
        if(wrongIndexes1.includes(Number(newBlock.innerHTML))) {
            i++
        }
        newBlock.style.margin = '1px'
        newBlock.style.cursor = 'pointer'
        newBlock.style.transition = 'all 0.2s linear'
        newBlock.style.backgroundColor = 'rgb(60,255,90)'
        gameArea.appendChild(newBlock)
        
        newBlock.addEventListener('mouseenter',function(){
            this.style.opacity = '0.5'
        })
        newBlock.addEventListener('mouseleave',function(){
            this.style.opacity = '1'
        })

        newBlock.addEventListener('click',function(){
            header.appendChild(undo)
                if(this.getAttribute('data-isFull') == false) {       
                    if(myStep == true) {
                    this.style.backgroundColor = p1Color
                    player1.push(Number(this.id))   
                    whoseStep.innerHTML = 'Next - ' + p2Color
                    whoseStep.style.backgroundColor = p2Color
                    if(p2Color == 'white' || p2Color == 'yellow') whoseStep.style.color = 'black'
                    else whoseStep.style.color = 'white'
                    t2 = setInterval(timerGo2,1000);
                    clearInterval(t1)
                    }
                else {
                    this.style.backgroundColor = p2Color
                    player2.push(Number(this.id))
                    whoseStep.innerHTML = 'Next - ' + p1Color
                    whoseStep.style.backgroundColor = p1Color
                    if(p1Color == 'white' || p1Color == 'yellow') whoseStep.style.color = 'black'
                    else whoseStep.style.color = 'white'
                    t1 = setInterval(timerGo1,1000);
                    clearInterval(t2)
                }
                this.setAttribute('data-isFull',1)
                myStep = !myStep
                undo.style.display = 'block'
                historySteps.push(this.id)
                checkWin(player1,p1Color)
                checkWin(player2,p2Color)
                timerGo(myStep)
            }
        })
    }
})


function checkWin(a,c) {
    a.sort((a,b) => a-b)
    let count = 0

    for(var j=1; j<a.length;j++) {
        if(a[j] - 1 == a[j-1]) {
            count++
        }
        else count = 0
        if(count == 4) win(c)
    }
    console.log(a)
    for(var n=14; n<=14+2;n++) {
        for(var j=0; j<a.length;j++) {
            if(a.includes(a[j] + n)) {
                if(a.includes(a[j] + n*2)) {
                    if(a.includes(a[j] + n*3)) {
                        if(a.includes(a[j] + n*4))  win(c)  
                    }
                }
            }
        }
    }
}


function win(color) {
    gameArea.style.display = 'none'
    undo.style.display = 'none'
    whoseStep.style.display = 'none'
    timer1.style.display = 'none'
    timer2.style.display = 'none'
    gameArea.childNodes.length = 0
    winText.innerHTML = 'WIN - ' + color
    document.body.style.background = color
    winText.style.display = 'block'
    if(color == 'white'  || color == 'yellow') winText.style.color = 'black'
}
//--------------------------------------------------UNDO

undo.addEventListener('click',function(){
    clearInterval(t1)
    clearInterval(t2)
    
    if(myStep == true) {
        whoseStep.innerHTML = 'Next - ' + p2Color
        whoseStep.style.backgroundColor = p2Color
        if(p2Color == 'white' || p2Color == 'yellow') whoseStep.style.color = 'black'
        else whoseStep.style.color = 'white'
        t2 = setInterval(timerGo2,1000);
    }
    else {
        // isFull = true 
        whoseStep.innerHTML = 'Next - ' + p1Color
        whoseStep.style.backgroundColor = p1Color
        if(p1Color == 'white' || p1Color == 'yellow') whoseStep.style.color = 'black'
        else whoseStep.style.color = 'white'
        t1 = setInterval(timerGo1,1000);
    }

    var current = document.getElementById(historySteps[historySteps.length-1])
    current.style.backgroundColor = 'rgb(60,255,90)'
    myStep = !myStep
    if(historySteps.length < 2) undo.style.display = 'none'
    current.setAttribute('data-isFull','')
    historySteps.length = historySteps.length-1
})

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> TIMER FUNCTION

function timerGo1() {
    if (isTimer.getAttribute('data-timer')) {
        if(Number(tSec1.innerHTML) > 0)  {
            if(Number(tSec1.innerHTML) > 10) tSec1.innerHTML = Number(tSec1.innerHTML)-1
            else tSec1.innerHTML = '0'+(Number(tSec1.innerHTML)-1)
        }
        else if (Number(tMin1.innerHTML) > 0) {
            if(Number(tMin1.innerHTML) > 10) tMin1.innerHTML = Number(tMin1.innerHTML)-1
            else tMin1.innerHTML = '0'+(Number(tMin1.innerHTML)-1)
            tSec1.innerHTML = '59'
        }
        else win(p2Color)
    }
}

function timerGo2() {
    if (isTimer.getAttribute('data-timer')) {
    if(Number(tSec2.innerHTML) > 0)  {
        if(Number(tSec2.innerHTML) > 10) tSec2.innerHTML = Number(tSec2.innerHTML)-1
        else tSec2.innerHTML = '0'+(Number(tSec2.innerHTML)-1)
        
    }
    else if (Number(tMin2.innerHTML) > 0) {
        if(Number(tMin2.innerHTML) > 10) tMin2.innerHTML = Number(tMin2.innerHTML)-1
        else tMin2.innerHTML = '0'+(Number(tMin2.innerHTML)-1)
        tSec2.innerHTML = '59'
    }
    else win(p1Color)
    }
}

