document.getElementById('DonateNow').addEventListener('click',function(){
    const amount = getvalueByid('DonationAmount');
   const fixedamount = getTextvalueByid('FixedBlance')
   
   if(isNaN(amount)){
    alert('Only money is donated here.');
     document.getElementById('my_modal_5').classList.add('hidden')
    return location.reload();;
  }

   if(fixedamount>=amount && amount>0 ){
        const Dicrimentamount=fixedamount-amount;
        console.log(Dicrimentamount)
        document.getElementById('FixedBlance').innerHTML=Dicrimentamount;
        const updateblance = getTextvalueByid('Updateblance');
        const TotalBlance =amount+updateblance
        document.getElementById('Updateblance').innerText=TotalBlance;
        document.getElementById('')
    }
    else{
        
        alert('There is not enough money in the fund. You have '+ fixedamount+' taka in your account.' );
        document.getElementById('my_modal_5').classList.add('hidden')
        return location.reload();;
    }
  
    
}) 