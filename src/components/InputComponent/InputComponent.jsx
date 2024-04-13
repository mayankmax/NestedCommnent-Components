import React from 'react';
import './inputcomponent.css';

export default function InputComponent() {
  return (
    <div className='input-conatiner'>
        <input className='parentreply' type='text' placeholder='Reply...' />
        <button className="parentbutton" >Submit</button>
    </div>
  )
}
