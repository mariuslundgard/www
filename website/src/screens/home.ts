import { html } from "lit-html";

export interface Props {
  baseUrl: string;
  description: string;
  title: string;
  siteName: string;
}

export const MetaTags = ({ baseUrl, description, title, siteName }: Props) => html`
  <title>${siteName}</title>
  <meta name="description" content="${description}" />
  <link rel="canonical" href="${baseUrl}/" />
  <meta property="og:site_name" content="${siteName}" />
  <meta property="og:locale" content="en_US" />
  <meta property="og:type" content="website" />
  <meta property="og:title" content="${title}" />
  <meta property="og:description" content="${description}" />
  <meta property="og:url" content="${baseUrl}/" />
  <meta property="og:image" content="${baseUrl}/static/og-image.png" />
`;

export const Content = (_: Props) => {
  const handleClick = (evt: MouseEvent) => console.log(evt);

  return html`
    <div class="ml-screen">
      <h1 class="ml-screen__title" @click=${handleClick}>Marius Lundgård</h1>
      <h2 class="ml-screen__subtitle">Oslo, Norway</h2>
      <div class="ml-screen__content">
        <p>
          I’m a designer and visual storyteller working mainly with digital product design, web
          technology, art direction and branding.
        </p>
        <!-- <p> Previously I’ve worked with editorial design, data visualization, type design, and advertising.</p> -->
        <p>
          I’m a product designer at
          <a href="https://www.sanity.io" target="_blank" rel="noopener noreferrer">Sanity.io</a>.
        </p>
        <p>
          Before that I’ve worked at
          <a href="https://www.nrk.no" target="_blank" rel="noopener noreferrer">NRK</a>,
          <a href="https://www.yr.no/en" target="_blank" rel="noopener noreferrer">Yr.no</a>,
          <a href="http://nodeberlin.com/" target="_blank" rel="noopener noreferrer"
            >NODE Berlin Oslo</a
          >,
          <a href="http://blastradius.com/" target="_blank" rel="noopener noreferrer"
            >Blast Radius</a
          >, <a href="https://try.no/try-apt" target="_blank" rel="noopener noreferrer">TRY Apt</a>,
          <a href="https://www.odopod.com/" target="_blank" rel="noopener noreferrer">Odopod</a>, as
          well as stints of independent graphic design and visual art practice.
        </p>
        <p>
          You may reach out to me on
          <a href="https://twitter.com/mariuslundgard" target="_blank" rel="noopener noreferrer"
            >Twitter</a
          >,
          <a href="https://github.com/mariuslundgard" target="_blank" rel="noopener noreferrer"
            >GitHub</a
          >, and
          <a
            href="https://www.linkedin.com/in/mariuslundgard/"
            target="_blank"
            rel="noopener noreferrer"
            >LinkedIn</a
          >.
        </p>
      </div>
    </div>
  `;
};
