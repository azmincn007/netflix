import React from "react";
import "./SecondPage.css";
import Line from "./Line";

function SecondPage() {
  return (

    <div className="hi">
       <div className="mainSecond">
        <div className="left2">
          <h1>Enjoy on your TV</h1>
          <p>
            Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray
            players and more.
          </p>
        </div>
        <div className="right2">
          <img
            src="https://th.bing.com/th/id/R.b107114a5b80119aa4d47a37dec2b9a6?rik=f5tjzp6cAqjjtw&riu=http%3a%2f%2fmobilemarketingmagazine.com%2fwp-content%2fuploads%2f2015%2f08%2fNetflix-TV-tablet.png&ehk=ydXTQyqGc1fb0NcnwxeNZ%2balaLN3qQv2lca0pQ3B%2bJ8%3d&risl=&pid=ImgRaw&r=0"
            alt=""
          />
        </div>
    </div>
    <Line/>
    </div>
   
  );
}

export default SecondPage;
