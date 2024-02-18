const seats =document.querySelectorAll('.seat');
const seatContainer=document.getElementById('seat-container')
const count=0;
function updatePrice(){
    const selectedSeat =document.querySelectorAll('.selectedclass');
    const seatNumber=selectedSeat.innerText;
    console.log(seatNumber)
}
seatContainer.addEventListener("click", function(value){
    if(value.target.classList.contains('seat')){
        value.target.classList.toggle('selectedclass')
        
        updatePrice();

        
    }
    
})
