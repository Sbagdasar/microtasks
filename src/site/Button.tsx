import React from 'react';
type ButtonPropsType={
    title:string,
    callback:()=>void// type of function
}
export const Button:React.FC<ButtonPropsType> = (props) => {
    const onClickHandler = ()=>{
        props.callback()
    }
    return (
        <button onClick={props.callback}>{props.title}</button>
    );
};
