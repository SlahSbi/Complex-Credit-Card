import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cardHolder: '',
            validThru: '',
            cardNumber: '',
            cardNumberError: '',
            validThruError: '',
            cardHolderError: ''
        }
    }

    //card holder
    validateCardHolder = cardHolder => {
        const regex = /^[A-Z]{1,12}$/;
        return !regex.test(cardHolder)
            ? "The card holder must contain 12 Uppercase letters."
            : "";
    };
    onCardHolderBlur = () => {
        const { cardHolder } = this.state;
        const cardHolderError = this.validateCardHolder(cardHolder);
        return this.setState({ cardHolderError });
    };
    onCardHolderChange = event => {
        this.setState({ cardHolder: event.target.value })
        this.props.rempCardHolder(event.target.value)

    }
    //card number
    validateCardNumber = cardNumber => {
        const regex = /^([0-9]{4})(?:[ ](?:([0-9]{4}))){3}$/
        return !regex.test(cardNumber)
            ? "The card number must contain 16 numbers."
            : "";
    };
    onCardNumberBlur = () => {
        const { cardNumber } = this.state;
        const cardNumberError = this.validateCardNumber(cardNumber);
        return this.setState({ cardNumberError });
    };
    onCardNumberChange = event => {
        this.setState({ cardNumber: event.target.value })
        this.props.rempCardNumber(event.target.value)

    }
    //valid thru
    validateValidThru = validThru => {
        const regex = /^(0[1-9]|1[0-2])(?:[/])(?:(19|[2-9][0-9]))$/
        return !regex.test(validThru)
            ? " The valid thru must be in this format MM/YY ."
            : "";
    };
    onValidThruBlur = () => {
        const { validThru } = this.state;
        const validThruError = this.validateValidThru(validThru);
        return this.setState({ validThruError });
    };
    onValidThruChange = event => {
        this.setState({ validThru: event.target.value })
        this.props.rempValidThru(event.target.value)

    }
    render() {
        const { validThruError, cardHolderError, cardNumberError } = this.state;

        return (<div className='form-container'>

            <input name="CardNumber" className="input-container" type='text' onChange={this.onCardNumberChange} onBlur={this.onCardNumberBlur} />
            <div className="message">{cardNumberError && <div>{cardNumberError}</div>}</div>
            <input name="ValidThru" className="input-container" type='text' onChange={this.onValidThruChange} onBlur={this.onValidThruBlur} />
            <div className="message">{validThruError && <div>{validThruError}</div>}</div>
            <input name="CardHolder" className="input-container" type='text' onChange={this.onCardHolderChange} onBlur={this.onCardHolderBlur} />
            <div className="message">{cardHolderError && <div>{cardHolderError}</div>}</div>

        </div>);
    }
}

export default Form;

