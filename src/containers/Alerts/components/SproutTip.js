// ====================================
//            IMPORTS
// ====================================

// React
import React from 'react';

// Images
import closeBtn from '../images/x.svg';
import sproutTipIcon from '../images/sprout-shadow-light.svg';

// Styles
import '../styles/SproutTip.css';



// ====================================
//          REACT COMPONENT
// ====================================


/**
 * Return a SproutTip component with a randomly selected tip from tips.
 * @param {Array} tips - an array of tip objects, each tip object has a reference and a tip.
 * @returns - a SproutTip React component.
 */
const SproutTip = ({ tips }) => {

    // Randomly selects a tip from the given array of tips
    let random_tip = tips[Math.floor(Math.random()*tips.length)];

    const dismissTip = () => {
        document.getElementById("alert-sprout-tip").remove();
    }

    return (
        <div id="alert-sprout-tip">
            <div id="sprout-tip-header">

            <h5><img id="sprout-tip-icon" src={sproutTipIcon}/>Sprout Tip of the Day</h5>
            <img id="sprout-tip-close-btn" src={closeBtn} alt="close-btn" onClick={dismissTip}/>
            </div>
            <p id="tip-text" >{random_tip.tip_text}</p>

            <hr/>
            <p id="tip-reference" className="text-muted">{random_tip.tip_ref}</p>
        </div>
    )
}


export default SproutTip;