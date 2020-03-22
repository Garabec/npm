import React from 'react'
import propTypes from 'prop-types'




export default class extends React.Component{

    static propTypes = {

        cnt: propTypes.number

    };



    constructor(props) {
        super(props);


        this.state = {
            count: 1,
            cnt: this.props.min
        };




    };



    increment=()=>{


        this.state.cnt<this.props.max?this.setState({cnt:this.state.cnt+1}):this.setState({cnt:this.props.max})
    };


    decriment=()=>{
        this.state.cnt>this.props.min?this.setState({cnt:this.state.cnt-1}):this.setState({cnt:this.props.min})
    };






        render(){




           return(


               <div>

                  <button onClick={this.increment}>+</button><span>{this.state.cnt}</span><button onClick={this.decriment}>-</button>
               </div>

           )


        }













}