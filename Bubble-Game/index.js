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

let timer=60;
function runtimer(){
    let intv=setInterval(()=>{
        if(timer>0)
            {
                timer--;
                document.getElementById("timeval").innerText=timer;
            }
        else{
            clearInterval(intv);
        }
    },1000)

}

runtimer();


