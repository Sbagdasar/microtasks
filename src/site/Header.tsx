import React, {useState} from 'react';
import {Button} from "./Button";
export type HeaderPropsType={
    title:string
}
export const Header: React.FC<HeaderPropsType> = (props) => {
    //let a:number = 1;
    let [a, setA] = useState(1)
    const IncrementA=()=>{
        setA(++a)
    }
    const Zeroo=()=>{
        setA(0)
        console.log(a)
    }

    return (
        <>
            {props.title}
            <div>
                <h1>{a}</h1>
                <Button title={"increment"} callback={IncrementA}/>
                <Button title={"0"} callback={Zeroo}/>
            </div>
        </>
    );
};
