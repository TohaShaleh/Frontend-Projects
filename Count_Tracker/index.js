
var temp=1;
var result=0;
show(result);


function show(result){

document.querySelector(".plus").addEventListener("click",()=>{
    
        result+=temp;
        document.querySelector(".rr").textContent=result;

})

document.querySelector(".minus").addEventListener("click",()=>{

         result-=temp;
         document.querySelector(".rr").textContent=result;


})

}



document.querySelector(".res2").addEventListener("click",()=>{
    
    result=0;
    document.querySelector(".rr").textContent=0;
    show(result);

});


document.getElementById('fm2').addEventListener("submit", (event)=>{

    // Prevent the form from submitting the traditional way
    event.preventDefault();

    // Get the value of the number input
     temp = Number(document.getElementById('inp').value);
     result=Number(document.querySelector(".rr").textContent);
     show(result);

})