import React from 'react';
import CounterClass from './counter/class'
import CounterFunction from './counter/function'
import MinMaxClass from './minmax/class'
import MinMaxFunction from './minmax/function'
import  InputClass from './input/class'
import  InputFunction from './input/function'

export default function () {



    return(

        <div className="test">
            <span> Hallo i am class45</span>
            <br/><br/><br/>
            <CounterClass/>
            <CounterFunction/>
            <br/>
                <span>MinMax</span>
            <br/>
            <MinMaxClass  min={1} max={10}/>
            <br/>
            <MinMaxFunction  min={1} max={10}/>
            <hr/>
            <br/>
            <InputClass  min={1} max={10}/>
            <hr/>
            <hr/>
            <br/>
            <InputFunction  min={1} max={10}/>
            <hr/>
        </div>

    )

}