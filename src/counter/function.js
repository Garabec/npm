import React,{useState} from 'react';

export default function () {

    let [cnt,setCnt]=useState(0);


    let increase=()=>{

       setCnt(cnt+1)

    }

    return(
        <div>
            <span><strong>{cnt}</strong> </span>
            <button  onClick={increase}>Click</button>
        </div>

        );



}