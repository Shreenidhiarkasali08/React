import React from "react";
import './TransformCard'

function TransformCard() {
    return (
        <div className="Transform-container">
            <h1> Tranform Traslate example</h1>

            <div className="transform-card">
                <div className="card-content">
                   <h3>Hover me</h3>
                   <p> Move to up </p>
                </div>
            </div>
            
             <div className="transform-card">
               <div className="card-content">
                 <h3>Hover Me Too!</h3>
                 <p>I will move right</p>
               </div>
            </div>

             <div className="transform-card">
              <div className="card-content">
               <h3>And Me!</h3>
          <p>I will move diagonally</p>
        </div>
      </div>
    </div>
  );
}

export default TransformCard;