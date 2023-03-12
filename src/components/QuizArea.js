import React from 'react'
import './QuizArea.css';
import { DiJavascript1 } from 'react-icons/di'
import { TbBrandCSharp } from 'react-icons/tb'
import { AiOutlineClose } from 'react-icons/ai'
import { FiPlay } from 'react-icons/fi'
import { TiFlowSwitch } from 'react-icons/ti'
import { BsLayoutSplit } from 'react-icons/bs'
import { BiDotsHorizontalRounded, BiCube } from 'react-icons/bi'

function QuizArea() {
  return (
    <div className='quiz-area-container'>
        
        
        <div className="tabs-manager">
               
        <ul className="tabs">
            <li className="tab">
                <p><DiJavascript1 className='tab-icon'/>JS.js <AiOutlineClose className='close'/></p>
            </li>
            <li className="tab">
                <p><TbBrandCSharp className='tab-icon'/>Unity.cs <AiOutlineClose className='close'/></p>
            </li>
        </ul>

        <div className="right-corner">
            <p className="btn"><FiPlay/></p>
            <p className="btn"><TiFlowSwitch/></p>
            <p className="btn"><BsLayoutSplit/></p>
            <p className="btn"><BiDotsHorizontalRounded/></p>
        </div>
        
        </div>

        <div className="path-manager">
               
            <p>src {'>'} components {'>'} <DiJavascript1 className='js-path'/> quizzy.js {'>'} <BiCube className='cube'/> quizzy</p>
               
               </div>
    
    </div>
  )
}

export default QuizArea