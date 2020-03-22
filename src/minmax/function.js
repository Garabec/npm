import React,{useState} from 'react'

export default function (props) {

    let [cnt,setCnt]=useState(1);

    let increment=()=>{

        cnt<props.max?setCnt(cnt+1):setCnt(props.max)

    };

    let decriment=()=>{

        cnt>props.min?setCnt(cnt-1):setCnt(props.min)
    };




     return(


         <div>
             <button onClick={increment}>+</button><span>{cnt}</span><button onClick={decriment}>-</button>
         </div>


     )

}