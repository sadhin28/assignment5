document.getElementById('DonateNow').addEventListener('click',function(){
    const amount = getvalueByid('DonationAmount')
   
   const fixedamount = getTextvalueByid('FixedBlance')
   if(isNaN(amount)){
    alert('Only money is donated here.');
    return;
  }
   if(fixedamount>=amount ){
        const Dicrimentamount=fixedamount-amount;
        console.log(Dicrimentamount)
        document.getElementById('FixedBlance').innerHTML=Dicrimentamount;
        
    }
    else{
        alert('There is not enough money in the fund. You have '+ fixedamount+' taka in your account.' )
    }
  
    
}) 