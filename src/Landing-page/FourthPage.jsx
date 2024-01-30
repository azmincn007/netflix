import React from 'react'
import Line from './Line';
import './fourthpage.css'

function FourthPage() {
    return (

        <div className="hi">
           <div className="mainSecond">
            <div className="left2">
              <h1>Watch everywhere</h1>
              <p>
              Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.
              </p>
            </div>
            <div className="right2">
              <img
                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png"
                alt=""
              />
            </div>
        </div>
        <Line/>
        </div>
       
      );
}

export default FourthPage