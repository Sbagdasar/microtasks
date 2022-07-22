import React from 'react';
import './App.css';
import {Header} from "./site/Header";
import {Body, topCarsPropsType} from "./site/Body";
import {Footer} from "./site/Footer";

function App() {
    const topCars:Array<topCarsPropsType> = [
        {manufacturer:'BMW', model:'m5cs'},
        {manufacturer:'Mercedes', model:'e63s'},
        {manufacturer:'Audi', model:'rs6'}
    ]
    return (
        <>
            <Header title={'Header title'}/>
            <Body titleForBody={"Body title"} topCars={topCars}/>
            <Footer titleForFooter={"Footer Title"}/>
        </>

    );
}

export default App;
