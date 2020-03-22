import React from 'react'

export default class extends React.Component{

    constructor(props) {
        super(props);
        this.state={
            cnt:this.props.min, // так лучше не делать
            tempCnt:this.props.min,// так лучше не делать
            text:""
        }
    }



    increment=()=>{

        this.inSet(this.state.cnt+1);
    };


    decriment=()=>{

        this.inSet(this.state.cnt-1);
    };



    inSet=(newValue)=>{

        let cnt=parseInt(newValue);
        let newCnt= isNaN(cnt)?
            this.props.min:
            Math.max(this.props.min, Math.min(cnt,this.props.max));
        this.setState({cnt: newCnt,tempCnt:newCnt});

    };

    inValue=(e)=>{
        this.setState({tempCnt:e.target.value});
    };


    pressEnter=(e)=>{

        if (e.which === 13) {

            this.inSet(this.state.tempCnt);
        }




    };

    render(){

        console.log(this.state.cnt);


      return(

          <div>
              <span>Class</span><br/>

              <span>{this.state.cnt}</span><br/>
              <span>{this.state.tempCnt}</span><br/>
              <button onClick={this.increment}>+</button>
                  <input type="text" name="name" value={this.state.tempCnt} onChange={this.inValue}  onKeyPress={this. pressEnter} /><button onClick={this.decriment}>-</button>

          </div>


      )


}


}