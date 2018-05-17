import React, { Component } from 'react';
//import Buttonframe from "./Buttonframe"
import "./calculator.css"
import Header from "./Header"
import Footer  from "./Footer"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      display: 0,
    }
     this.addOne = this.addOne.bind(this);
    this.addTwo = this.addTwo.bind(this);
    this.addThree = this.addThree.bind(this);
    this.addFour = this.addFour.bind(this);
    this.addFive = this.addFive.bind(this);
    this.addSix = this.addSix.bind(this);
    this.addSeven = this.addSeven.bind(this);
    this.addHeight = this.addHeight.bind(this);
    this.addNine = this.addNine.bind(this);
    this.addZero = this.addZero.bind(this);
    this.clear = this.clear.bind(this);
    this.addPlus = this.addPlus.bind(this);
    this.addLess = this.addLess.bind(this);
    this.equal = this.equal.bind(this);
    this.multiplier = this.multiplier.bind(this);
    this.divider = this.divider.bind(this);
    this.pointer = this.pointer.bind(this);
    this.percentage = this.percentage.bind(this); 
  }

  
  clear() {
    this.setState(
      { display: 0 }
    )
  }
  equal() {
    try {
      const result = eval(this.state.display);
      this.setState({ display: result })
    } catch (error) {
      this.setState({ display: "invalid operation" })
    }
  }


  addNumber(num) {
    if (this.state.display === 0 && num !== ".") {
      this.setState({ display: num || 0})
    } else {
      this.setState(
        { display: this.state.display + num.toString() }
      )
    }
  }
  percentage() {
    this.setState({
      display: this.state.display / 100
    })
  }

  addOne() { this.addNumber(1); }
  addTwo() { this.addNumber(2) }
  addThree() { this.addNumber(3) }
  addFour() { this.addNumber(4) }
  addFive() { this.addNumber(5) }
  addSix() { this.addNumber(6) }
  addSeven() { this.addNumber(7) }
  addHeight() { this.addNumber(8) }
  addNine() { this.addNumber(9) }
  addZero() { this.addNumber(0) }
  addPlus() { this.addNumber("+") }
  addLess() { this.addNumber("-") }
  multiplier() { this.addNumber("*") }
  divider() { this.addNumber("/") }
  pointer() { this.addNumber(".") }

  render() {
    return (
      <div>
        <header className="header-pages">
          <Header />
        </header>
        <main>
        <div className="button-box display">{this.state.display} </div>
        <div className="button-box" >
                <button onClick={this.clear}>AC</button>
                <button>+/-</button>
                <button onClick={this.percentage}>%</button>
                <button onClick={this.divider}>/</button>
            </div>
            <div className="button-box">
                <button onClick={this.addSeven}>7</button>
                <button onClick={this.addHeight}>8</button>
                <button onClick={this.addNine}>9</button>
                <button onClick={this.multiplier}>*</button>
            </div>
            <div className="button-box">
                <button onClick={this.addFour}>4</button>
                <button onClick={this.addFive}>5</button>
                <button onClick={this.addSix}>6</button>
                <button onClick={this.addLess}>-</button>
            </div>
            <div className="button-box">
                <button onClick={this.addOne}>1</button>
                <button onClick={this.addTwo}>2</button>
                <button onClick={this.addThree}>3</button>
                <button onClick={this.addPlus}>+</button>
            </div>
            <div className="button-box">
                <button onClick={this.addZero}>0</button>
                <button onClick={this.pointer}>.</button>
                <button onClick={this.equal}>=</button>
            </div>
        </main>
        
            <footer>
              <Footer />
            </footer>
      </div>
    );
  }
  
}

export default App;
