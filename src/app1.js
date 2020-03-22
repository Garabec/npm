import React from 'react';
import Hw from './hw/norm'


export default class extends React.Component {


  changeCnt=(cnt)=>{

  console.log(cnt);

  };


render() {
    return (

        <div className="test">

            <hr/>
            <br/>
            <Hw min={1} max={10} onChange={(cnt) => this.changeCnt(1)}/>
            <hr/>
        </div>

    )

}

}