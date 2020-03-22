import React from 'react';

export default class extends React.Component{

    constructor(props){

      super(props);
      this.state={
          cnt:1
      }
    }

    increase = () => {

        this.setState({


                cnt: this.state.cnt + 1

            }
        )

        console.log(this.state.cnt);


    }

    render() {
        return (
         <div>
             <span><strong>{this.state.cnt}</strong> </span>

            <button  onClick={this.increase}>Click</button>
         </div>

        );
    }


}