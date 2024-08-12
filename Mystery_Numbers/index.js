
var name=prompt('Enter Your Name : ');

function show(){

    var temp=0;
    var rn=Math.floor(Math.random()*21);
    
    
    document.querySelector("#fm").addEventListener("submit",(event)=>{
        event.preventDefault();
        var num=Number(document.querySelector("#nm").value);
        temp++;
        if(num==rn)
            {
                let res=document.querySelector(".result");
                res.innerHTML=`<div class="cong">Congratulations ${name}! <br> Your Guess Number is Correct <br> <br> Now See Your Performance <br></div>` 
                document.querySelector(".sb").addEventListener("click",()=>{
    
                    document.getElementById("bd").style.backgroundColor="#D1F617";
                    res.innerHTML=`You have done it in ${temp} Times !`
    
                    // let aa=document.createElement("div");
                    // aa.innerHTML=` <br> <br> <button class="try1"><h3>Try Again</h3></button>`
                    // res.append(aa);
    
    
                    document.querySelector(".sb1").addEventListener("click",()=>{
                        document.getElementById("bd").style.backgroundColor="#efef9e";
                        res.innerHTML=``
                        document.querySelector("#nm").value='';
                        show();
    
                    })
    
                })
    
            }
        else if(num>rn)
        {
            document.querySelector(".result").innerHTML=`Higher than the Random Number`;
        }
        else if(num<rn)
            {
                document.querySelector(".result").innerHTML=`Lower than the Random Number`;
            }
    })
    
    
    }
    
 show();
    