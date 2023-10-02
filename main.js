const currency_one = document.getElementById('currency-one');
const currency_two = document.getElementById('currency-two');
const amount_one = document.getElementById('amount-one');
const amount_two = document.getElementById('amount-two');
const curent_rate = document.querySelector('.rate')
const swap = document.getElementById('rate-btn')

function calculate(){
    const curr_one = currency_one.value
    const curr_two = currency_two.value

    fetch(`https://v6.exchangerate-api.com/v6/d6672697db36953defe8e0f8/latest/${curr_one}`)
    .then(res => res.json())
    .then(data => {
        const rate = data.conversion_rates[curr_two]
        
        
        curent_rate.innerText = `1 ${curr_one} = ${rate} ${curr_two}`
        amount_two.value = (amount_one.value * rate).toFixed(2);
    });
}

//Event Listeners
currency_one.addEventListener('change',calculate);
currency_two.addEventListener('change',calculate);
amount_one.addEventListener('input',calculate);
amount_two.addEventListener('input',calculate);

swap.addEventListener('click',(e)=>{
    let temp = currency_one.value;
    currency_one.value = currency_two.value;
    currency_two.value = temp;
    calculate();
})

calculate();