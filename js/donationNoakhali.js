document.getElementById('DonateNow').addEventListener('click', function (event) {
    event.preventDefault;
    const amount = getvalueByid('DonationAmount');
    const fixedamount = getTextvalueByid('FixedBlance')

    if (isNaN(amount)) {
        alert('Only money is donated here.');

        return location.reload()
    }

    if (fixedamount >= amount && amount > 0) {
        document.getElementById('my_modal_5').classList.remove('hidden');
        const Dicrimentamount = fixedamount - amount;
        document.getElementById('FixedBlance').innerHTML = Dicrimentamount;
        const updateblance = getTextvalueByid('Updateblance');
        const TotalBlance = amount + updateblance
        document.getElementById('Updateblance').innerText = TotalBlance;

        //transaction

        const container = document.getElementById("transactionsContainer");

        const card = document.createElement("div");
        card.className = "bg-white p-4 rounded-xl shadow-md border";

        const dateEl = document.createElement("p");
        dateEl.className = "text-gray-800 font-semibold";
        const date = new Date();
        dateEl.textContent = `${amount} Taka Is Donated for Flood at Noakhali Bangladesh `;

        const textEl = document.createElement("p");
        textEl.className = "text-gray-600 mt-1";
        textEl.textContent = `${date}`;

        card.appendChild(dateEl);
        card.appendChild(textEl);
        container.appendChild(card);
        document.getElementById('DonationAmount').value = '';

    }
    else {

        alert('There is not enough money in the fund. You have ' + fixedamount + ' taka in your account.');

        return location.reload();
    }


}) 