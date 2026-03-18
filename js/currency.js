const fromCurrency = document.getElementById('from-currency');
const toCurrency = document.getElementById('to-currency');
const amount = document.getElementById('amount');
const result = document.getElementById('result');
const convertBtn = document.getElementById('convert-btn');

const currencies = ['USD','EUR','GBP','JPY','CAD','AUD']; // expand as needed

currencies.forEach(cur => {
    fromCurrency.innerHTML += `<option value="${cur}">${cur}</option>`;
    toCurrency.innerHTML += `<option value="${cur}">${cur}</option>`;
});

convertBtn.addEventListener('click', () => {
    const from = fromCurrency.value;
    const to = toCurrency.value;
    const amt = parseFloat(amount.value);
    if (!amt) return alert('Enter a valid amount');

    fetch(`https://api.exchangerate.host/convert?from=${from}&to=${to}&amount=${amt}`)
        .then(res => res.json())
        .then(data => {
            result.innerText = `${amt} ${from} = ${data.result.toFixed(2)} ${to}`;
        });
});
