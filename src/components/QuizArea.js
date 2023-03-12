import React from 'react'
import './QuizArea.css';
import { DiJavascript1 } from 'react-icons/di'
import { TbBrandCSharp } from 'react-icons/tb'
import { AiOutlineClose } from 'react-icons/ai'

function QuizArea() {
  return (
    <div className='quiz-area-container'>
        
        
        <div className="tabsManager">
               
        <ul className="tabs">
            <li className="tab">
                <p><DiJavascript1 className='tab-icon'/>JS.js <AiOutlineClose className='close'/></p>
            </li>
            <li className="tab">
                <p><TbBrandCSharp className='tab-icon'/>Unity.cs <AiOutlineClose className='close'/></p>
            </li>
        </ul>
        
        </div>
    
    </div>
  )
}

export default QuizArea