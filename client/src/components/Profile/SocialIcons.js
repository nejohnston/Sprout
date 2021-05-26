// ====================================
//            	IMPORT
// ====================================

// React
import React from "react";

// Styles
import "./styles/SocialIcons.css";
import "bootstrap/dist/css/bootstrap.min.css";

// React Share
import { TwitterShareButton, FacebookShareButton } from "react-share";

// ====================================
//           REACT COMPONENT
// ====================================

const SocialIcons = (shareUrl) => {
  return (
    <>
    <TwitterShareButton url={shareUrl}/>
    </>
  );
};

export default SocialIcons;
