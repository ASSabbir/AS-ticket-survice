const seats =document.querySelectorAll('.seat');
const seatContainer=document.getElementById('seat-container')
function cuponPrice(j){
    const grandPrice=document.getElementById('Grand-price')
    grandPrice.innerText=550*j;
    const cupon=document.getElementById('cupon-name');
    const cuponValue=cupon.value;
    // apply btn event
    const applyBtn=document.getElementById('apply-btn')
    
    applyBtn.addEventListener("click",function (){

        if(cuponValue =='NEW15'){
            grandPrice.innerText=(550*j)-(Math.ceil((550*j)*.15));
            
        }
        else if(cuponValue =='COUPLE20'){
            grandPrice.innerText=(550*j)-(Math.ceil((550*j)*.20));
        }
            
        }
    )
    

}
function displayName(x){
    const names=document.getElementsByClassName('.selectedclass');
    names.innerText;
    console.log(names.innerText)
}

function updatePrice(i){
    const selectedSeat=document.getElementById('selected-seat');
    selectedSeat.innerText=i;
    const seatLeft=document.getElementById('seat-left');
    seatLeft.innerText=(40-i);
    const totalPrice=document.getElementById('total-price');
    totalPrice.innerText=550*i;
    displayName(i);
    cuponPrice(i);

    
    
    
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
