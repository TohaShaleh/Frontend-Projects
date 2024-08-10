function makebubble(){
    let bubb="";
for(let i=0;i<144;i++)
    {
        let ran=Math.floor(Math.random()*21);
        bubb+=`<div class="bubble">${ran}</div>`
    }

document.querySelector(".pbtm").innerHTML=bubb;

}

makebubble();

let timer=41;
function runtimer(){
    let intv=setInterval(()=>{
        if(timer>0)
            {
                timer--;
                document.getElementById("timeval").innerText=timer;
            }
        else{
            clearInterval(intv);
            document.querySelector(".pbtm").innerHTML=`<h1>Game Over Sona_Pakhi amar! <br> 
                                                            Till Then ' I Love You ' </h1>`

        }
    },1000)

}

runtimer();


var ran=0;
function makehit(){
    ran=Math.floor(Math.random()*21);
    document.querySelector("#hit").textContent=ran;
}

makehit();

var value=0;
function score(){
    value+=10;
    document.querySelector("#score").textContent=value;
}



function right_target(){
    document.querySelector(".pbtm").addEventListener("click",function(details){
        var clicked=Number(details.target.textContent);
        if(ran===clicked)
            {
                score();
                makebubble();
                makehit();
            }
       
        
    })
}

right_target();