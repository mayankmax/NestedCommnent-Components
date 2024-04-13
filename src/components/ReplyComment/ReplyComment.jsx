import React, { useState } from 'react';
import './replycomment.css';
import SubCommnet from '../SubComment/SubCommnet';

export default function ReplyComment(props) {
    const [toggle, setToggle] = useState(false);
    const handleSubmit = () => {};
    const handlereplycomment = () =>{
        setToggle(!toggle);
    }

    // let say we have message id 1 and it have 10 comments so we will render 10 reply components
    //if subcomment(act like a parent) also have 5 comments we will render 5 reply comment componet


    return (
        <div className='reply-container'>
            <div className='reply-main'>
                <div className='reply-comment'>
                <SubCommnet />
                <SubCommnet />
                <SubCommnet />
                <SubCommnet />
                <SubCommnet />
                <SubCommnet />
                <SubCommnet />
                <SubCommnet />
                <SubCommnet />

                </div>
               
            </div>
        </div>
    );
}
