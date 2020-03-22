import React,{useState} from 'react'

export default function (props) {

    let [cnt,setCnt]=useState(1);
    let [text,setText]=useState("");

    let increment=()=>{

        cnt<props.max?setCnt(+(cnt+1)):setCnt(props.max);
    };

    let decriment=()=>{

        cnt>props.min?setCnt(cnt-1):setCnt(props.min);
    };


    let change=(e)=>{

        if(+e.target.value){setCnt(+e.target.value);
        setText("");}

        else{setCnt(e.target.value);setText("Enter digital");};


    };

    let pressEnter=(e)=>{

        if(e.which===13){

            setCnt( Math.max(props.min, Math.min(e.target.value,props.max)));

        }


    };


    return(


        <div>
            <span>{text}</span>
            <button onClick={increment}>+</button>
            <input type="text" name="name" value={cnt} onChange={change}  onKeyPress={pressEnter} /><button onClick={decriment}>-</button>

        </div>



    )







}