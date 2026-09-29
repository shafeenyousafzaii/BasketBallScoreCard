let homeScore=document.getElementById("homeScore")
let guestScore=document.getElementById("guestScore")
homeScore.textContent=0
guestScore.textContent=0
let hScore=0
let gScore=0
function homeaddOne(){
    hScore+=1
    homeScore.textContent=hScore
}
function homeaddTwo(){
    hScore+=2
    homeScore.textContent=hScore
}
function homeaddThree(){
    hScore+=3
    homeScore.textContent=hScore
}

function guestaddOne(){
    gScore+=1
    guestScore.textContent=gScore
}
function guestaddTwo(){
    gScore+=2
    guestScore.textContent=gScore
}
function guestaddThree(){
    gScore+=3
    guestScore.textContent=gScore
}