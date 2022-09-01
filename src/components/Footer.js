import React from "react";
import './Footer.css';

function Footer() {
  return (
    <footer>
      <div className="footer-top">
        <section>Slack Channel: <a href="systemsforfuture.slack.com">systemforfuture</a></section>
        <section>Next Meeting: 02.09.2022, 2pm - 4pm</section>
        <section>Instagram: <a href="https://www.instagram.com/systemsforfuture/">systemsforfuture</a></section>
      </div>
      <div className="footer-bottom">
        Established 2022. Systems for Future is part of Creatives for Future
      </div>
      <br />
    </footer>
  );
}

export default Footer;