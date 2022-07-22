import React from 'react';
export type HeaderPropsType={
    title:string
}
export const Header: React.FC<HeaderPropsType> = (props) => {
    return (
        <>
            {props.title}
        </>
    );
};
