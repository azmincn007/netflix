import React from 'react'
import { IoIosAdd } from "react-icons/io";
import './lastpage.css'
import Line from './Line';
function Lastpage() {
  return (
    <div className="MainLast">
        <div className="headding">
        <h1>Frequently Asked Questions</h1>
         </div>

        
        <div className="contentsgrid">
            <div className="contents-box">
                <div className="data">
                <p>What is netflix</p>
                <IoIosAdd className='iconn' />
                </div>
                
            </div>

            <div className="contents-box">
            <div className="data">
            <p>How much does netflix cost</p>
                <IoIosAdd className='iconn' />
                </div>
            </div>

            <div className="contents-box">
                <div className="data">
                <p>Where i can watch</p>
                <IoIosAdd className='iconn'/>
                </div>
              
            </div>

            <div className="contents-box">
                <div className="data">
                <p>How do i cancel</p>
                <IoIosAdd className='iconn'/>
                </div>
                
            </div>

            <div className="contents-box">
                <div className="data">
                <p>What i can watch in netflix</p>
                <IoIosAdd  className='iconn'/>
                </div>
             
            </div>

            <div className="contents-box">\
            <div className="data">
            <p>is netflix good for kids</p>
                <IoIosAdd className='iconn' />
            </div>
                
            </div>

            
        </div>

        <div className="button-included-grid">
            <p>Ready to watch? Enter your email to create or restart your membership.</p>
            <div className="txt-but-flex">
                <input type="text"  placeholder='Email address'/>
                <button>Get started</button>
            </div>
        </div>
        <Line/>
    </div>
  )
}

export default Lastpage