const cardNumberInput = document.getElementById('card-number');
const expiryDateInput = document.getElementById('expiry-date');
const cvvInput = document.getElementById('cvv');
const cardholderNameInput = document.getElementById('cardholder-name');

cardNumberInput.addEventListener('input', () => {
  const input = cardNumberInput.value.replace(/\D/g, '');
  const formattedNumber = input.match(/.{1,4}/g)?.join(' ') || input;

  cardNumberInput.value = formattedNumber.slice(0, 19);
});

expiryDateInput.addEventListener('input', () => {
  let input = expiryDateInput.value.replace(/\D/g, '');
  if (input.length > 2) {
    input = `${input.slice(0, 2)}/${input.slice(2, 4)}`;
  }
  expiryDateInput.value = input.slice(0, 5);
});

cvvInput.addEventListener('input', () => {
  const input = cvvInput.value.replace(/\D/g, '');
  cvvInput.value = input.slice(0, 3);
});

cardholderNameInput.addEventListener('input', () => {
  const input = cardholderNameInput.value.replace(/[^a-zA-Z\s]/g, '');
  cardholderNameInput.value = input.toUpperCase();
});
