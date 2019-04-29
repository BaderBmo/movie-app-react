import React from "react";


const renderCardNumber = cardNumber => {
  const asArray = cardNumber.match(/.{1,4}/g) || []; // every 4 numbers in an element
  return asArray.join(" "); // is now a string
};

const renderValidThru = validThru => {
  const asArray = validThru.match(/.{1,2}/g) || [];
  return asArray.join("/");
};

const CreditCardForm = ({
    cardNumber,
    onChangeCardNumber,
    cardHolderName,
    onChangeCardHolderName,
    validThru,
    onChangeValidThru
  }) => (

<div className="form">
    <input type="text" placeholder="1234 1234 1234 1234" onChange={event=>{onChangeCardNumber(event.target.value);}} value={renderCardNumber(cardNumber)}/>
    <input type="text" placeholder="Cardholder name" onChange={event=>{onChangeCardHolderName(event.target.value);}} value={cardHolderName}/>
    <input type="text" placeholder="MM/YY" onChange={event=>{onChangeValidThru(event.target.value);}} value={renderValidThru(validThru)} />
</div>);



export default CreditCardForm;
