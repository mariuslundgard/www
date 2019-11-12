import { NowRequest, NowResponse } from "@now/node";
import * as fragments from "./fragments";

const data = {
  siteName: "Marius Lundgård",
  title: "Marius Lundgård",
  description:
    "I’m a designer and visual storyteller working mainly with digital product design, web technology, art direction and branding."
};

const html = `<!DOCTYPE html>
<html class="no-js no-online no-standalone" lang="en-US">
  <head>
    ${fragments.commonMetaTags}
    <title>${data.title}</title>
    <meta name="description" content="${data.description}">
    <link rel="canonical" href="https://mariuslundgard.com/">
    <meta property="og:site_name" content="${data.siteName}">
    <meta property="og:locale" content="en_US">
    <meta property="og:type" content="website">
    <meta property="og:title" content="${data.title}">
    <meta property="og:description" content="${data.description}">
    <meta property="og:url" content="https://mariuslundgard.com/">
    <meta property="og:image" content="https://mariuslundgard.com/static/og-image.png">
    ${fragments.styleTags}
  </head>
  <body>
    <div id="ml-root">
      <div class="ml-screen">
        <h1 class="ml-screen__title">Marius Lundgård</h1>
        <h2 class="ml-screen__subtitle">Oslo, Norway</h2>
        <div class="ml-screen__content">
          <p>I’m a designer and visual storyteller working mainly with digital product design, web technology, art direction and branding.</p>
          <!-- <p> Previously I’ve worked with editorial design, data visualization, type design, and advertising.</p> -->
          <p>I work as lead designer at
            <a href="https://www.sanity.io" target="_blank" rel="noopener noreferrer">Sanity.io</a>.
          </p>
          <p>
            Before that I’ve worked at
            <a href="https://www.nrk.no" target="_blank" rel="noopener noreferrer">NRK</a>,
            <a href="https://www.yr.no/en" target="_blank" rel="noopener noreferrer">Yr.no</a>,
            <a href="http://nodeberlin.com/" target="_blank" rel="noopener noreferrer">NODE Berlin Oslo</a>,
            <a href="http://blastradius.com/" target="_blank" rel="noopener noreferrer">Blast Radius</a>,
            <a href="https://try.no/try-apt" target="_blank" rel="noopener noreferrer">TRY Apt</a>,
            <a href="https://www.odopod.com/" target="_blank" rel="noopener noreferrer">Odopod</a>, as well as stints of independent graphic design and visual art
            practice.
          </p>
          <p>
            You may reach out to me on
            <a href="https://twitter.com/mariuslundgard" target="_blank" rel="noopener noreferrer">Twitter</a>,
            <a href="https://github.com/mariuslundgard" target="_blank" rel="noopener noreferrer">GitHub</a>, and
            <a href="https://www.linkedin.com/in/mariuslundgard/" target="_blank" rel="noopener noreferrer">LinkedIn</a>.
          </p>
        </div>
      </div>
    </div>
  </body>
</html>
`;

export default (_: NowRequest, res: NowResponse) => {
  res.send(html);
};
