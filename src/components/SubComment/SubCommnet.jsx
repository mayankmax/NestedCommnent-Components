import React, { useState } from 'react'
import './subcomment.css';
import InputComponent from '../InputComponent';
import ReplyComment from '../ReplyComment';
export default function SubCommnet() {
    const [toggle,setToggle] = useState(false);
    const [commentToggle, setCommentToggle] = useState(false);
    
    const handleReply = () =>{
        setToggle(!toggle);
    }



    const handleViewComment = () =>{

        setCommentToggle(!commentToggle);
        
    }
  return (
    
    <div className='subcomment-container'>
        <div className='subcomment-main'>
            <div>
                <p style={{left: "40%", position: "absolute"}}>This is new comment</p>
                <p className='reply-link' onClick={handleReply}>reply</p>
                <p className='view-comment-link' onClick={handleViewComment}>view comment</p>
                <div className='input'>
                {toggle && 
                    <InputComponent />
                }
                </div>
                <div className='subComment'>
                {commentToggle && <ReplyComment />}
                </div>
            </div>
            
            <br />
            

        </div>
    </div>
  )
}
