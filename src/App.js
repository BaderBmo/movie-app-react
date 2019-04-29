import React from "react";
import CreditCard from "./CardView";
import CreditCardForm from "./CardForm";
import "./App.css";


const cleanCardNumber = z => {
  return z.replace(/[^0-9]/g, "").slice(0, 16);
};

const cleanCardHolderName = cardHolderName => {
  return cardHolderName
    .replace(/[^a-z ]/gi, "")
    .trimLeft()
    .slice(0, 20);
};

const cleanMonth = month => {
  if (month.length === 0) return "";
  if (month.length === 1) {
    return String(Math.min(Number(month), 1));
  }
  if (month.length === 2) {
    const asNumber = Number(month);
    if (asNumber < 1) return "01";
    if (asNumber > 12) return "12";
    return month;
  }
};

const cleanYear = year => {
  if (year.length === 0) return "";
  if (year.length === 1) {
    const asNumber = Number(year);
    if (asNumber < 1) return "1";
    if (asNumber > 5) return "5";
  }
  if (year.length === 2) {
    const asNumber = Number(year);
    if (asNumber < 19) return "19";
    if (asNumber > 50) return "50";
    return year;
  }
  return year;
};

const cleanValidThru = validThru => {
  const asString = validThru.replace(/[^0-9]/g, "").slice(0, 4);

  const cleanedMonth = cleanMonth(asString.slice(0, 2));
  const cleanedYear = cleanYear(asString.slice(2, 4));
  return cleanedMonth + cleanedYear;
};

class App extends React.Component {
  state = {
    cardNumber: "", // a string of 16 digits
    cardHolderName: "", // a string of max 18 letters and spaces
    validThru: "" // a string of 4 numbers, MM/YY
    // where MM between [1, 12]
    // and YY between [19, 50]
  };

  setCardNumber = newCardNumber => {
    this.setState({
      cardNumber: cleanCardNumber(newCardNumber)
    });
  };

  setCardHolderName = newCardHolderName => {
    this.setState({
      cardHolderName: cleanCardHolderName(newCardHolderName)
    });
  };

  setValidThru = newValidThru => {
    this.setState({
      validThru: cleanValidThru(newValidThru)
    });
  };

  render() {
    /*let { cardNumber, cardHolderName, validThru } = this.state;
    let { setCardNumber, setCardHolderName, setValidThru } = this;*/

    return (
      <div className="container">
          <CreditCard
            cardNumber={this.state.cardNumber}
            cardHolderName={this.state.cardHolderName}
            validThru={this.state.validThru}/>
        
          <CreditCardForm
            cardNumber={this.state.cardNumber}
            onChangeCardNumber={this.setCardNumber}
            cardHolderName={this.state.cardHolderName}
            onChangeCardHolderName={this.setCardHolderName}
            validThru={this.state.validThru}
            onChangeValidThru={this.setValidThru}/>
      </div>
    );
  }
}

export default App;
