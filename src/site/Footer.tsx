import React from 'react';
type FooterPropsType = {
    titleForFooter:string
}
export const Footer: React.FC<FooterPropsType> = (props) => {
    const myFirstSubscriber = ()=>{
        console.log("hello Chesya")
    }
    const mySecondSubscriber=()=>{
        console.log("I am Sam")
    }
    return (
        <div>
            {props.titleForFooter}
            <div>
                <button onClick={myFirstSubscriber}>MyYouTubeChanel-1</button>
                <button onClick={mySecondSubscriber}>MyYouTubeChanel-2</button>
            </div>
        </div>
    );
};

