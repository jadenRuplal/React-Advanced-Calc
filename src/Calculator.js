import React, { Component } from 'react'

class Calculator extends Component {

    state= {
        display: '0',
        sum: null,
        operator: null,
        number: true
    }

    putNumbers = (e) => {
        console.log('working')
        if(this.state.number) {
            this.setState({
                display: e.target.innerText,
                number: false
            })
        } else {
            this.setState({
                display: this.state.display + e.target.innerText
            })
        }
    }

    setOperator = (e) => {
        if(this.state.display && !this.state.sum) {
            let newSum = this.state.display
            this.setState({
                operator: e.target.innerText,
                number: true,
                sum: newSum
            })
        } else if (this.state.display && this.state.sum) {
            let currentSum = this.operate()
            this.setState({
                sum: currentSum,
                operator: e.target.innerText,
                number: true,
                display: currentSum
            })
        }
    }

    signs = () => {
        switch(this.state.operator) {
            case '+':
                return parseFloat(this.state.sum) + parseFloat(this.state.display)
            case '-':
                return parseFloat(this.state.sum) - parseFloat(this.state.display)
            case '/':
                return parseFloat(this.state.sum) / parseFloat(this.state.display)
            case '%':
                return parseFloat(this.state.sum) % parseFloat(this.state.display)
            case 'x':
                return parseFloat(this.state.sum) * parseFloat(this.state.display)
            default:
        }
    }

    operate = () => {
        console.log(this.state.display)
        switch(this.state.operator) {
            case '+':
                return parseFloat(this.state.sum) + parseFloat(this.state.display)
            case '-':
                return parseFloat(this.state.sum) - parseFloat(this.state.display)
            case '/':
                return parseFloat(this.state.sum) / parseFloat(this.state.display)
            case '%':
                return parseFloat(this.state.display) * .01
            case 'x':
                return parseFloat(this.state.sum) * parseFloat(this.state.display)
            default:
        }
        console.log(this.state.display)
    }

    calculate = () => {
        console.log('slightly working')
        if(this.state.sum) {
            let result = this.operate()
            this.setState({
                display: result,
                sum: result,
                number: true
            })
            console.log('working')
        }
    }

    clearAll = () =>{
        this.setState({
            sum: null,
            operator: null,
            display: '0',
            number: true
        })
    }

    divide = () => {
        let result = this.operate()
        this.setState({
            sum: .01,
            display: result
            
        })
        console.log(result)
    }
    

render(){
    return (
        <div className="container">
            <h1>React Calculator</h1>
            <div className="calc-container">
                <p>Values: </p>
                <div className="answer-box">{this.state.display}</div>
                <div className="calc-row">
                    <button onClick={this.clearAll} className="calc-button calc-button-top">AC</button>
                    <button className="calc-button calc-button-top">+/-</button>
                    <button onClick={this.setOperator} className="calc-button calc-button-top">%</button>
                    <button onClick={this.setOperator} className="calc-button calc-button-op">/</button>
                </div>
                <div className="calc-row">
                    <button onClick={this.putNumbers} className="calc-button">7</button>
                    <button onClick={this.putNumbers} className="calc-button">8</button>
                    <button onClick={this.putNumbers} className="calc-button">9</button>
                    <button onClick={this.setOperator} className="calc-button calc-button-op">x</button>
                </div>
                <div className="calc-row">
                    <button onClick={this.putNumbers} className="calc-button">4</button>
                    <button onClick={this.putNumbers} className="calc-button">5</button>
                    <button onClick={this.putNumbers} className="calc-button">6</button>
                    <button onClick={this.setOperator} className="calc-button calc-button-op">-</button>
                </div>
                <div className="calc-row">
                    <button onClick={this.putNumbers} className="calc-button">1</button>
                    <button onClick={this.putNumbers} className="calc-button">2</button>
                    <button onClick={this.putNumbers} className="calc-button">3</button>
                    <button onClick={this.setOperator} className="calc-button calc-button-op">+</button>
                </div>
                <div className="calc-row">
                    <button onClick={this.putNumbers} className="calc-button width-2">0</button>
                    <button className="calc-button">.</button>
                    <button onClick={this.calculate} className="calc-button calc-button-op">=</button>
                </div>
            </div>
        </div>
    )
}
}

export default Calculator