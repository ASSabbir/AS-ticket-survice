const seats =document.querySelectorAll('.seat');
const seatContainer=document.getElementById('seat-container')

function updatePrice(i){
    const selectedSeat=document.getElementById('selected-seat');
    selectedSeat.innerText=i;
    const seatLeft=document.getElementById('seat-left');
    seatLeft.innerText=(40-i);
    const totalPrice=document.getElementById('total-price');
    totalPrice.innerText=550*i;

    
    
    
}
seatContainer.addEventListener("click", function(value){
    
    if(value.target.classList.contains('seat')){
       
        count+=1;
        
        if(count<=4){
            value.target.classList.toggle('selectedclass');
            ticketCount+=1;
            
            updatePrice(ticketCount);
        }
        else{
            alert("You Can Buy Maximun 4 Ticket");
            
        }
        

        
    }
    
})
