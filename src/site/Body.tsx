import React from 'react';
export type BodyPropsType = {
    titleForBody: string,
    topCars:Array<topCarsPropsType>
}
export type topCarsPropsType ={
        manufacturer:string,
        model:string
}
export const Body:React.FC<BodyPropsType> = (props) => {
    return (
        <div>
           <div>{props.titleForBody}</div>
            <div>{props.topCars.map(el=>{
                return(
                    <ul>{el.model} - {el.manufacturer}</ul>
                )
            })}</div>
        </div>
    );
};
