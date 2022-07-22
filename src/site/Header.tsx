import React from 'react';
type HeaderPropsType={
    title:string
}
export const Header: React.FC<HeaderPropsType> = (props) => {
    return (
        <>
            {props.title}
        </>
    );
};
