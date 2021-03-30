import React from 'react';

class CurrencyInput extends React.Component{
    constructor(props){
        super(props);
        this.changeHandler = this.changeHandler.bind(this);
    }
    changeHandler(e){
        this.props.changeHandler(this.props.curr, e.target.value);
    }
    render(){
        return(
            <div>
                <p>{this.props.curr.toUpperCase() + ':'}</p>
                <input type="number" value={this.props.value} onChange={this.changeHandler}/>
            </div>
        );
    }
} 

export default CurrencyInput;