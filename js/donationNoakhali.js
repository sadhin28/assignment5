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
        document.getElementById('FixedBlance').innerHTML=Dicrimentamount;
        const updateblance = getTextvalueByid('Updateblance');
        const TotalBlance =amount+updateblance
        document.getElementById('Updateblance').innerText=TotalBlance;
        const p=document.createElement('p');
        p.innerText=`${amount} Taka Is Donated for Flood at Noakhali,Bangladesh `;
        document.getElementById('history').appendChild(p);
        const date = new Date();
       
        
    }
    else{
        
        alert('There is not enough money in the fund. You have '+ fixedamount+' taka in your account.' );
        document.getElementById('my_modal_5').classList.add('hidden')
        return location.reload();;
    }
  
    
}) 