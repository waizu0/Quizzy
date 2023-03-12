import React from 'react';
import './TopArea.css';
import { TbBrandVscode } from 'react-icons/tb'

function TopArea() {
  return (
    <div className='container-top-area'>
        

        <ul className='top-area-list'>
            <li><TbBrandVscode className='vs-icon'/></li>
            <li>File</li>
            <li>Edit</li>
            <li>Selection</li>
            <li>View</li>
            <li>Go</li>
            <li>Run</li>
            <li>Terminal</li>
            <li>Help</li>
            
        </ul>

        
        
        </div>
  )
}

export default TopArea