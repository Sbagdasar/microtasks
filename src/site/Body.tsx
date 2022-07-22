import React from 'react';

export type BodyPropsType = {
    titleForBody: string,
    topCars: Array<topCarsPropsType>
}
export type topCarsPropsType = {
    manufacturer: string,
    model: string
}
export const Body: React.FC<BodyPropsType> = (props) => {
    return (
        <div>
            <div>{props.titleForBody}</div>
            <table>
                <tbody>
                    <tr>
                        {props.topCars.map((el, index) => {
                            return (
                                <th key={index + 1}>
                                    {el.model} - {el.manufacturer} - {index+1}
                                </th>
                            )
                        })}
                    </tr>
                </tbody>
            </table>
        </div>
    );
};
