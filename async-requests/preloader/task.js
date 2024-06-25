const loader = document.querySelector('.loader');
const xhr = new XMLHttpRequest();

document.addEventListener('DOMContentLoaded', () => {
  xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState === xhr.DONE) {
      try {
        const data = JSON.parse(xhr.responseText);
        loader.classList.remove('loader_active');
        const container = document.getElementById('items');
        for (const currencyCode in data.response.Valute) {
            if (data.response.Valute.hasOwnProperty(currencyCode)) {
                const currency = data.response.Valute[currencyCode];
                const item = document.createElement('div');
                item.classList.add('item');
                const code = document.createElement('div');
                code.classList.add('item__code');
                code.textContent = currency.CharCode;
                item.appendChild(code);
                const value = document.createElement('div');
                value.classList.add('item__value');
                value.textContent = currency.Value;
                item.appendChild(value);
                const currencyValue = document.createElement('div');
                currencyValue.classList.add('item__currency');
                currencyValue.textContent = 'руб.';
                item.appendChild(currencyValue);
                container.appendChild(item);
            }}
      } catch (error) {
        console.error('Error parsing JSON:', error); 
      }
    }
  });
  xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
  xhr.send();
});