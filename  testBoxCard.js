const testBoxCard = (cardNumberElement) => {
  let dataCard = cardNumberElement.value.replace(/\s+/g, '').split('');

  if (dataCard.length === 16) {
    for (let i = 4; i < dataCard.length; i += 5) {
      dataCard.splice(i, 0, ' ');
    }
    cardNumberElement.value = dataCard.join('');
  } else if (dataCard.length > 16) {
    alert('Проверьте заполненные данные карты!');
  }
};
