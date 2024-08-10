function makebubble(){
    let bubb="";
for(let i=0;i<144;i++)
    {
        let ran=Math.floor(Math.random()*10);
        bubb+=`<div class="bubble">${ran}</div>`
    }

document.querySelector(".pbtm").innerHTML=bubb;

}

makebubble();


