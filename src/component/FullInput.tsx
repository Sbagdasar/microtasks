import React, {ChangeEvent, useState} from 'react';

type FullInputPropsType = {
    addMessage: (title:string) => void
}

export const FullInput: React.FC<FullInputPropsType> = (props) => {
    let [title, setTitle] = useState('')

    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value)
    }
const onClickButtonHundler = ()=>{
        props.addMessage(title)
    setTitle('')
}
    return (
        <div>
            <input value={title} type="text" onChange={onChangeInputHandler}/>
            <button onClick={onClickButtonHundler}>+
            </button>
        </div>
    );
};
