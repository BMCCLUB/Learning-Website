import React from 'react'
import UnderConstruction from "./../img/download.png";

const LandingPage = () => {
    return (
        <>
            <div className="banner">
                <img src={UnderConstruction} alt="Under Construction"/>
            </div>
            <main>
                <p>This website is under construction</p>
                <p>Go to Learn Menu to search learning module</p>
                <p>Thank you!</p>
                <p>CTO BMCC - Rafli Jaskandi</p>
            </main>
        </>
    );
}

export default LandingPage;