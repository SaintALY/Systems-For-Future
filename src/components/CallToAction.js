import React from "react";
import './Commandments.css';

function CallToAction () {
    return (
        <div className="commandments--box">
            <div className="german">
                <section className="hero--ger">
                    <h2><span className="highlight-ger">Mitmachen</span></h2>
                </section>
            </div>
            <div className="english">
                <section className="hero--eng">
                    <h2><span className="highlight-eng">Participate</span></h2>
                </section>
            </div>
        </div>
    )
}

export default CallToAction;