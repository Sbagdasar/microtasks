import React, {MouseEvent} from 'react';
import {Button} from "./Button";
type FooterPropsType = {
    titleForFooter:string
}
export const Footer: React.FC<FooterPropsType> = (props) => {
    /*const myFirstSubscriber = (event : MouseEvent<HTMLButtonElement>)=>{

        console.log("hello Chesya" + event)
    }
    const mySecondSubscriber=(event : MouseEvent<HTMLButtonElement>)=>{
        console.log("I am Sam")
    }*/
    /*const onClickHandler=(name:string)=>{
        console.log(name)
    }*/
const Button1Foo = (name:string, age:number, address: string)=>{
    console.log(name + " "+ age+ " "+ address)
}
const Button2Foo = (name:string, age:number)=>{
    console.log(name + " "+ age)
}
const Button3Foo=()=>{
    console.log("I am stupid button")
}
    return (
        <div>
            {props.titleForFooter}
            <div>
                {/*<button onClick={(event)=>{onClickHandler("Chesya")}}>MyYouTubeChanel-1</button>
                <button onClick={(event)=>onClickHandler("Eva")}>MyYouTubeChanel-2</button>*/}
                <Button title={"btn 1"} callback={()=>Button1Foo("Samvel", 26, "i am live in Minsk")}/>
                <Button title={"btn 2"} callback={()=>Button2Foo("Chesya",25)}/>
                <Button title={"Btn3"} callback={Button3Foo}/>
            </div>

        </div>
    );
};

