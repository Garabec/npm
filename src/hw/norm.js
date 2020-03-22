import React from 'react'
import propTypes from 'prop-types'


export default class extends React.Component{

    static defaultProps={

        onChange:function (cnt) {}

    };

    static propTypes={

        cnt: propTypes.number.isRequired,
        min: propTypes.number.isRequired,
        max: propTypes.number.isRequired,
        onChange : propTypes.func

    };


    constructor(props) {
        super(props);
        this.state={
            tempCnt:this.props.cnt,// так лучше не делать
        }
    }


    increment=()=>{

        this.inSet(this.props.cnt+1);
    };


    decriment=()=>{

        this.inSet(this.props.cnt-1);
    };



    inSet=(newValue)=>{

        let cnt=parseInt(newValue);
        let newCnt= isNaN(cnt)?
            this.props.min:
            Math.max(this.props.min, Math.min(cnt,this.props.max));
        this.setState({tempCnt:newCnt});


        // как-то сказать родителю, что cnt обновился
        this.props.onChange(newCnt);

    };

    inValue=(e)=>{
        this.setState({tempCnt:e.target.value});
    };


    pressEnter=(e)=> {

        if (e.which === 13) {

            this.inSet(this.state.tempCnt);
        }

    };

    render(){

        return(

            <div>
                <span>Class</span><br/>

                <span>{this.props.cnt}</span><br/>
                <span>{this.state.tempCnt}</span><br/>
                <button onClick={this.increment}>+</button>
                <input type="text" name="name" value={this.state.tempCnt} onChange={this.inValue}  onKeyPress={this. pressEnter} /><button onClick={this.decriment}>-</button>

            </div>

        )
    }


};