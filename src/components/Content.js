import React from "react";
import './Content.css';

function Content () {
    return (
        <div className="content">
            <div className="german">
                <section className="hero--ger">
                    <h1><span className="highlight-ger">Wir wollen</span></h1>
                    <h1><span className="highlight-ger">zukunftsfähige</span></h1>
                    <h1><span className="highlight-ger">Systeme</span></h1>
                </section>

                <section className="context">
                    <p>Die Zeit ist reif für gezielte Aktionen, Ideen und Initiativen, um die Systeme positiv zu aktivieren.</p>
                    <p>Wir disruptieren mit Humor, Kreativität, Positivität, Spaß, Innovationsgeist und immer gewaltfrei.</p>
                    <p>Wir wollen nichts weniger als die große Transformation und den dazu nötigen Mindshift ermöglichen.</p>
                </section>
            </div>

            <div className="english">
                <section className="hero--eng">
                    <h1><span className="highlight-eng">We want</span></h1>
                    <h1><span className="highlight-eng">future-proof</span></h1>
                    <h1><span className="highlight-eng">systems</span></h1>
                </section>

                <section className="context">
                    <p>The time is ripe for pointed action, ideas and initiatives, to positively activate our systems.</p>
                    <p>We disrupt with the humour, creativity, positivity, innovation and always non-violent.</p>
                    <p>We want nothing less than unleashing the necessary mindshift for the great transformation.</p>
                </section>
            </div>
        </div>
    );
}

export default Content;
