import React from "react";


const renderCardNumber = x => {
  const asString = x.padEnd(16, "●");
  const asArray = asString.match(/.{1,4}/g) || []; // every 4 numbers in an element
  return asArray.join(" ");
};

const renderCardHolderName = cardHolderName => {
  return cardHolderName.toUpperCase();
};

const renderValidThru = validThru => {
  const asString = validThru.padEnd(4, "●");
  const asArray = asString.match(/.{1,2}/g) || [];
  return asArray.join("/");
};

const CreditCard = ({ cardNumber, cardHolderName, validThru }) => (
<div className="container">
    <div className="card">
        <div className="title">BANK OF AMERICA</div>
        <img className="chip" src="https://partimages.globalspec.com/28/4278/4654278_large.png" alt=""/>
        <div className="logo-and-data">
            <div className="data">
                <p className="serial-number">{renderCardNumber(cardNumber)}</p>
                <div className="pin-and-date">
                    <p className="pin">5422</p>
                    <div className="date">
                        <div className="limit"><p style={{fontSize:"6px",color:"white",}}>VALI <br/> THRU</p><img height="10px" src="https://img.icons8.com/ios/50/000000/sort-right.png" alt=""/></div>
                        <div className="month-year">
                            <div><p style={{color:"white",fontSize:"6px",lineHeight:"0px"}}>MONTH/YEAR</p></div>
                            <div style={{height:"28px"}}><p style={{fontWeight:"bolder",color:"white",margin:"0px",fontSize:"15pt"}}>{renderValidThru(validThru)}</p></div>
                        </div>
                    </div>
                </div>
                <p className="cardholder">{renderCardHolderName(cardHolderName)}</p>
            </div>
            <div className="logo">
                <img className="service-logo" src="https://png2.kisspng.com/sh/8a87f378e6e75bc467c89d76c4bd2c0b/L0KzQYi4UsE3N5I2fpGAYUO4RYfqVvUyaWc5SJC5OEC8SIq4VcE2OWQ5TKc5NkK8QoW6TwBvbz==/5a3556c6e1a640.0809891515134450629243.png" alt=""></img>
            </div>
        </div>
    </div>
</div>);

export default CreditCard;