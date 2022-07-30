import React, {useState} from 'react';
import {FullInput} from "./FullInput";
import {Input} from "./input/Input";
import {Button} from "./input/Button";

export const InputMain = () => {
    let [message, setMessage] = useState([
        {message: "message1"},
        {message: "message2"},
        {message: "message3"}
    ])
    let [title, setTitle] = useState('')
    console.log(title)
    const addMessage = (title: string) => {
        let newMessage = {message: title}
        setMessage([newMessage, ...message])
    }
    const callbackButtonHandler = () => {
        addMessage(title)
        setTitle('')
    }
    return (
        <div>

            {/*<FullInput addMessage={addMessage}/>*/}
            <div>
                <Input setTitle={setTitle} title={title}/>
                <Button name={'+'} callback={callbackButtonHandler}/>
            </div>
            {
                message.map((el, index) => {
                    return (
                        <div key={index}>{el.message}</div>
                    )
                })
            }
        </div>
    );
};
