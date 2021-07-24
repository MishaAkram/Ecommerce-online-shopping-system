import React from 'react'
import ScrollToTopOnMount from '../../shared/ScrollToTopOnMount';
import './AboutUs.scss'
import { Divider } from '@material-ui/core';
const AboutUs = () => {
    return (
        <>
        <ScrollToTopOnMount />
        <div className="aboutus-container">
          <h2 className="main-title" style={{ fontFamily: "ACourier New, monospace" }}>About Us</h2>
          <Divider/>
          <br/>
            <h3 style={{ fontWeight: "bold", fontFamily: "ACourier New, monospace" }}>
                Our Philosophy
            </h3>
            <br />
            We draw our inspirations from the diverse global arena and pack it under one roof, to share the fact that beauty is
            universal. We constantly strive to challenge the limitations of all the possibilities when it comes to weaving, printing,
            embroidery & embellishments. The cloth used is not mere fabric for us, we treat it like an artist treats his canvas;
            with the love, respect and dedication that it deserves. We understand that style and fashion are a vital part of your lives
            and so we strive to bring it to your doorstep in the easiest possible way. Our motto has always been to provide excellent
            quality and service.
            <br />
            <br />
            You will find a variety of fashion lines including prêt wear, unstitched fabric and the diverse range of casual and formal wear.
            We have introduced a number of new trends including high-class G.prêt wear, Chantilly Chiffon, Digital-print Kurtis,
            Accessories (shoes and handbags) and so much more. Our designs are fashionably contemporary yet timeless because of their strong
            pedigree. It is our originality and respect for business ethics that today, We not only provides fashion at great value,
            but also caters to various customer needs by offering a diverse product mix. This leads to a complete and enjoyable retail
            experience. We don’t just aim at setting trends, but believe in mastering them.
        </div>
        </>
    )
}

export default AboutUs;