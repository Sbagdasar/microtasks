import React, {useState} from 'react';
import {NewComponent} from "./NewComponent";

export type FilterPropsType = 'all' | 'dollar' | 'rouble'
export const Money = () => {
    const [money, setMoney] = useState([
        {banknots: 'Dollars', value: 100, number: ' a1234567890'},
        {banknots: 'Dollars', value: 50, number: ' z1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' w1234567890'},
        {banknots: 'Dollars', value: 100, number: ' e1234567890'},
        {banknots: 'Dollars', value: 50, number: ' c1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' r1234567890'},
        {banknots: 'Dollars', value: 50, number: ' x1234567890'},
        {banknots: 'RUBLS', value: 50, number: ' v1234567890'},
    ])
    const [filterBtn, setFilterBtn] = useState<FilterPropsType>("all")
    let currentMoney = money;
    currentMoney = money.filter((filMoney) => filterBtn === 'rouble' ? filMoney.banknots === 'RUBLS' : filterBtn === 'dollar' ? filMoney.banknots === 'Dollars' : filMoney.banknots === filMoney.banknots)

    const filterHandler = (nameBtn: FilterPropsType) => {
        setFilterBtn(nameBtn)
    }
    return (
        <NewComponent curMoney={currentMoney} filteredArrFn={(nameBtn) => filterHandler(nameBtn)}/>
    );
};
