import React from "react";
import './Commandments.css';

function Commandments () {
    return (
        <div className="commandments--box">
            <div className="german">
            <section className="hero--ger">
                    <h2><span className="highlight-ger">Wer sind wir?</span></h2>
                </section>

                <section className="commandments">
                    <p>Wir denken und handeln systemisch</p>
                    <p>Wir genießen Komplexität</p>
                    <p>Wir leben Transformation</p>
                    <p>Wir feiern Diversität</p>
                    <p>Wir verstehen den Mensch als Beschützer der Mitwelt und nehmen die damit verbundene Verantwortung würdevoll an</p>
                    <p>Wir bekennen uns zu regelmäßiger Reflexion unserer selbst und unserer Prozesse</p>
                    <p>Wir kommunizieren offen und aufrichtig miteinander</p>
                    <p>Wir kämpfen für holistische Gesundheit in Mensch, Tier und Mitwelt</p>
                    <p>Wir glauben an die Kraft der Kreativität und bewussten Gestaltung</p>
                    <p>Wir geben Hoffnung, dass wir kollektiv eine schöne und überaus lebenswerte Zukunft für alle gestalten können</p>
                    <p>Komm, wir packen's zusammen an!</p>
                </section>

                <section className="hero--ger">
                    <h2><span className="highlight-ger">Mitmachen</span></h2>
                </section>
            </div>
            <div className="english">
            <section className="hero--eng">
                    <h2><span className="highlight-eng">Who are we?</span></h2>
                </section>

                <section className="commandments">
                    <p>We think and act systemically</p>
                    <p>We enjoy complexity</p>
                    <p>We live transformation</p>
                    <p>We celebrate diversity</p>
                    <p>We understand the human being as protectors of the world around us accept the responsibility with dignity</p>
                    <p>We commit ourselves to regular reflection on ourselves and our processes</p>
                    <p>We communicate openly and honestly with each other</p>
                    <p>We fight for holistic health in humans, animals and our environment</p>
                    <p>We believe in the power of creativity and conscious design</p>
                    <p>We give hope that collectively we can create a beautiful and extremely liveable future for all creatures<br /></p>
                    <p>Come on, let's do it together!</p>
                </section>

                <section className="hero--eng">
                    <h2><span className="highlight-eng">Participate</span></h2>
                </section>
            </div>
        </div>
    );
}

export default Commandments;