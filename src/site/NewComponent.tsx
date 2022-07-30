import React from 'react';
import {Button} from "./Button";
import {FilterPropsType} from "./Money";

type NewComponentPropsType={
    curMoney: Array<MoneyArrayType>,
    filteredArrFn:(nameBtn:FilterPropsType)=>void
}
type MoneyArrayType = {
    banknots: string,
    value: number,
    number: string
}

export const NewComponent: React.FC<NewComponentPropsType> = (props) => {

    const myHandler=(nameBtn:FilterPropsType)=>{
      props.filteredArrFn(nameBtn)
}
    return (
        <>
            <ul>
                {props.curMoney.map((objFromMoneyArr, index) => {
                    return (
                        <li key={index}>
                            <span>{objFromMoneyArr.banknots}</span>
                            <span>{objFromMoneyArr.value}</span>
                            <span>{objFromMoneyArr.number}</span>
                        </li>
                    )
                })}
            </ul>
            <div style={{marginLeft:'35px'}}>
                <Button title={'All'} callback={()=>myHandler('all')}/>
                <Button title={'Rouble'} callback={()=>myHandler('rouble')}/>
                <Button title={'Dollar'} callback={()=>myHandler('dollar')}/>
            </div>
        </>
    );
};
