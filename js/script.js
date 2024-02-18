const seats =document.querySelectorAll('.seat');
const seatContainer=document.getElementById('seat-container')
const count=0;
seatContainer.addEventListener("click", function(value){
    if(value.target.classList.contains('seat')){
        // value.target.classList.toggle('selected')
        // const bgGreen=document.crecl
        value.target.style.backgroundColor="#1DD100";
        value.target.style.color="white";
        count +=1;
        console.log(count)

        
    }
    
})
