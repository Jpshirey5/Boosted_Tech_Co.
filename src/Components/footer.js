import React from "react";
import Fade from 'react-reveal/Fade';

export default function Footer() {
    return (
        <Fade top distance='10%' duration={1500}>
            <div className="footer">
                <p className="footer_tag">Copyright © 2024 Boosted Technology Co. All rights reserved.</p>
            </div>
        </Fade>
    )
}
