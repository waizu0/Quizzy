import React from 'react'
import './Sidebar.css'
import { BiDownArrow } from 'react-icons/bi'
import { DiJavascript1 } from 'react-icons/di'
import { TbBrandCSharp } from 'react-icons/tb'


function Sidebar() {
  return (
    <div className='container-sidebar'>

      <div className='title-sidebar'>
        <h4 className='explorer-text'>EXPLORER</h4>

        <div className='dropdown'>
          <h5 className='dropdown-title'>
            <BiDownArrow /> QUIZZY
          </h5>

          <ul className='dropdown-list'>
            <li className='sidebar-item'><DiJavascript1 />JS.js</li>
            <li className='sidebar-item'><TbBrandCSharp/>Unity.cs</li>
          </ul>

        </div>
      </div>
    </div>
  )
}

export default Sidebar