// ====================================
//            	IMPORT
// ====================================

// React
import React from "react";

// Styles
import "./styles/SocialIcons.css";
import "bootstrap/dist/css/bootstrap.min.css";

// React Share
// documentation: https://www.npmjs.com/package/react-share
import { TwitterShareButton, FacebookShareButton, FacebookIcon, TwitterIcon } from "react-share"; 

// ====================================
//           REACT COMPONENT
// ====================================

/**
 * Return social media icon componen for sharing to a User's social media.
 * @returns Twitter and FB share icons.
 */

const SocialIcons = () => {
  return (
    <>
    <div id="social-container">
    <TwitterShareButton url = {"Join Sprout today at www.my-sprout.ca!"}><TwitterIcon size={35} round={true} id="twitter-icon"/> </TwitterShareButton>
    <FacebookShareButton url = {"www.my-sprout.ca"} quote={"Join Sprout today!"}><FacebookIcon size={35} round={true} id="fb-icon"/> </FacebookShareButton>
    </div>
    </>
  );
};

export default SocialIcons;
