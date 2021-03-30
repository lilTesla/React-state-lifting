//import logo from './logo.svg';
// import './App.css';
import React from 'react';
import CurrencyInput from './CurrencyInput';


const currList = {
  none: "",
  usd: "usd",
  eur: "eur",
  uah: "uah",
  rub: "rub"
}

class CurrencyConverter extends React.Component{
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      curr: currList.none,
      value: ""
    }
  }
  handleChange(curr, value){
    this.setState({
      curr: curr,
      value: value
    });
  }
  render(){
    const onboardingElement = <p>Чтобы начать, введите сумму в валюте, которую надо перевести в другую:</p>;
    const stateValue = Math.round(parseFloat(this.state.value)*100)/100;
    let usdValue, eurValue, uahValue, rubValue;
    switch(this.state.curr){
      case currList.usd:
        usdValue = stateValue;
        eurValue = stateValue * 0.85;
        uahValue = stateValue * 27.88;
        rubValue = stateValue * 76.05;
        break;
      case currList.eur:
        usdValue = stateValue * 1.17;
        eurValue = stateValue;
        uahValue = stateValue * 32.7;
        rubValue = stateValue * 89.19;
        break;
      case currList.uah:
        usdValue = stateValue * 0.036;
        eurValue = stateValue * 0.031;
        uahValue = stateValue;
        rubValue = stateValue * 2.73;
        break;
      case currList.rub:
        usdValue = stateValue * 0.013;
        eurValue = stateValue * 0.011;
        uahValue = stateValue * 0.37;
        rubValue = stateValue;
        break;
    }
    
    return (

      <div className="Converter">    
        {this.state.curr === currList.none && onboardingElement}
        <CurrencyInput curr={currList.usd} value={usdValue || ''} changeHandler={this.handleChange}/>
        <CurrencyInput curr={currList.eur} value={eurValue || ''} changeHandler={this.handleChange}/>
        <CurrencyInput curr={currList.uah} value={uahValue || ''} changeHandler={this.handleChange}/>
        <CurrencyInput curr={currList.rub} value={rubValue || ''} changeHandler={this.handleChange}/>
      </div>
    );
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <p>
      //       Edit <code>src/App.js</code> and save to reload.
      //     </p>
      //     <a
      //       className="App-link"
      //       href="https://reactjs.org"
      //       target="_blank"
      //       rel="noopener noreferrer"
      //     >
      //       Learn React
      //     </a>
      //   </header>
      // </div>
      
  }
}

export default CurrencyConverter;
