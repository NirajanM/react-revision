import React from "react";
let Footer = () => {
    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();
    return (
        <>
            <p>copyright © {currentYear}</p>
        </>
    )
}
export default Footer;