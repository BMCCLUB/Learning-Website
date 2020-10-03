import React from 'react';

const LearnPage = () => {
    return (
        <div className="learn-page">
            <div className="course">
                <h3>Available Course:</h3>
                <ul>
                    <li>
                        <a href="#" target="_blank" rel="noopener noreferrer">HTML</a>
                    </li>
                </ul>
            </div>
            <div className="resources">
                <h3>Available resource to download:</h3>
                <ul>
                    <li>
                        <a href="http://library.lol/main/5FBEB925700A45939C043CAB836CB583" target="_blank" rel="noopener noreferrer">HTML & CSS: Design and Build Websites by Jon Duckett</a>
                    </li>
                </ul>
            </div>
            <div className="refrences">
                <h3>References</h3>
                <ul>
                    <li>
                        <h4>HTML</h4>
                        <ul>
                            <li>
                            <a href="https://www.w3schools.com/tags/default.asp" target="_blank" rel="noopener noreferrer">W3Schools HTML</a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default LearnPage;