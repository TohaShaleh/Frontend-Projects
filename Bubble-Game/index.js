
function makebubble(){
    let bubb="";
for(let i=0;i<144;i++)
    {
        let ran=Math.floor(Math.random()*11);
        bubb+=`<div class="bubble">${ran}</div>`
    }

document.querySelector(".pbtm").innerHTML=bubb;

}

makebubble();

// let timer=5;
function runtimer(){
    let timer=61;
    let intv=setInterval(()=>{
        if(timer>0)
            {
                timer--;
                document.getElementById("timeval").innerText=timer;
            }
        else
        {
            clearInterval(intv);
            if(value===0)
            {
                document.querySelector("#score").textContent=0;
            }
            document.querySelector("#hit").textContent="";
            document.querySelector(".pbtm").innerHTML=`<h1 class="gm">GAME OVER!! <br> <br> BETTER LUCK NEXT TIME...
                                                            <br> <br> <br>
                                                            Your Score is : ${value} </h1> `

            document.getElementById("pbottom").style.backgroundColor="#76F5F0";

            let btn=document.createElement("button");
            btn.innerHTML=`<h1>Play Again</h1>`
            document.querySelector(".gm").append(btn);

            btn.addEventListener("click",function(){
                
              document.querySelector("#score").textContent=0;

                makebubble();
                makehit();
                runtimer();
                right_target();
                value=0;

            });

        }
    },1000)

}

runtimer();


var ran=0;
function makehit(){
    ran=Math.floor(Math.random()*11);
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