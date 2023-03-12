import React from 'react'
import './Footer.css'
import { DiGitBranch } from 'react-icons/di' 
import { TiArrowSync } from 'react-icons/ti'
import { RiErrorWarningLine } from 'react-icons/ri'
import { AiOutlineWarning } from 'react-icons/ai'

function Footer() {
  return (
    <div className='container-footer'>
        <p><DiGitBranch />main*</p>
        <p><TiArrowSync /></p>
        <p><RiErrorWarningLine />0</p>
        <p><AiOutlineWarning />0</p>
    </div>
  )
}

export default Footer