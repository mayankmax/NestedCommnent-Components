import React, { useState } from 'react';
import './comment.css';
import ReplyComment from '../ReplyComment';
import InputComponent from '../InputComponent';


export default function Comment() {

  const [replySection, setReplySection] = useState(false);

  const handleReply = () =>{

    setReplySection(!replySection);

  }

  return (
    <div className='comment-container'>
        <div className='comment-main'>
        <div>
            <p>This is GrandParent Comment</p>
            <p className="reply" onClick={handleReply}>reply</p>
        </div>
           
        
        <div className='reply-section'>
        { replySection && 
          
          <div>
              <InputComponent />
         </div>
         
         }
        </div>
        

        </div>
        {/* pass the id of message */}
        <ReplyComment isTrue={true}/> 


        
        
    </div>
  )
}
