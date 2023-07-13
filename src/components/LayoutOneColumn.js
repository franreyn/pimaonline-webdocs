import Head from "next/head";
import { useRouter } from "next/router";
import styles from "../styles/themeLayout.module.css"
import Script from "next/script"
import { useEffect,useState, useRef } from 'react';

export default function LayoutOneColumn(props) {

  const { theme } = props;

  useEffect(() => {
    if (theme) {
      // Fetch the CSS file using the theme value
      const stylesheetUrl = `https://cdn.jsdelivr.net/npm/@pimaonline/pimaonline-themepack/dist/css/themes/${theme}/styles.css`;

      // Remove any existing theme link
      const existingLink = document.querySelector('link[data-theme-link]');
      if (existingLink) {
        document.head.removeChild(existingLink);
      }

      // Adds the link to the head of the document
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = stylesheetUrl;
      link.setAttribute('data-theme-link', ''); // Add a custom attribute to identify the theme link
      document.head.appendChild(link);

      // Gets the external stylesheet and parses it for matching styles
      fetch(stylesheetUrl)
      .then((response) => response.text())
      .then((cssContent) => {
        const h1StyleMatches = cssContent.match(/(h1|\.header\s\.text-container\sh1)\s*{([^}]*)}/);
        const bodyStyleMatches = cssContent.match(/body\s*{([^}]*)}/);

        // Matches body styles
if (bodyStyleMatches && bodyStyleMatches.length > 0) {
  const bodyStyleText = bodyStyleMatches[1];
  const bodyStyle = Object.fromEntries(
    bodyStyleText.split(";").map((declaration) => {
      const [property, ...values] = declaration.split(":");
      const value = values
        .map((val) => {
          const trimmedVal = val.trim();
          return trimmedVal.startsWith("url(") ? val : trimmedVal;
        })
        .join(":"); // Rejoin the split values into a single string
      return [property.trim(), value.trim()];
    })
  );

  const themeBodyElements = document.querySelectorAll(`.${styles.themeBody}`);
  themeBodyElements.forEach((themeBodyElement) => {
    Object.assign(themeBodyElement.style, bodyStyle);
  });
}
    })
      .catch((error) => {
        console.error('Error fetching or parsing the stylesheet:', error);
      });
    }
}, [theme]);


  return (
    <>
      <div className={`${styles.themeBody} ${styles.oneColumn}`}>
  <header className={`${styles.header} header`}>
    <img src="https://unsplash.it/1920/600" alt="" />
    <div className="text-container">
      <h1  aria-level="2">Module 1: Lorem ipsum dolor</h1>
      <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit </p>
    </div>
  </header>
  <div id="content-wrapper">
    <div className={styles.contentBody}>
      <h2 className="icon-clipboard">Donec Luctus</h2>
      <h3>Nam A Risus </h3>
      <p>
        {" "}
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod
        vulputate malesuada. Nam a risus purus. Orci varius natoque penatibus et
        magnis dis parturient montes, nascetur ridiculus mus. In vel neque
        tempus, porta enim a, feugiat purus. Donec luctus ullamcorper ornare.
        Suspendisse et luctus leo.{" "}
      </p>
      <ul>
        <li> Morbi id cursus velit </li>
        <li> Ut posuere vitae ante varius consequat</li>
        <li>
          {" "}
          Vivamus id condimentum dui{" "}
          <a
            rel="noopener"
            href="../Lecture%20Slides/Ch%201%20Slides.pdf"
            target="_blank"
          >
            pharetra
          </a>
          <a
            rel="noopener"
            href="../Lecture%20Slides/Ch%202%20slides.pdf"
            target="_blank"
          >
            sodales
          </a>{" "}
        </li>
        <li> Nulla vestibulum rhoncus neque non facilisis </li>
      </ul>
      <h3>Tabs Widget</h3>
      <div className="tabs" role="region" aria-label="tab group 1">
        <input
          className="tab-input"
          type="radio"
          id="tab1"
          name="hint-group-1"
          aria-describedby="tabHeading1"
        />
        <label className="tab-header" htmlFor="tab1">
          Tab Title 1
        </label>
        <div className="tab-panel" tabIndex={0} id="tabHeading1">
          <h4>Tab 1 Heading Inside</h4>
          <p>
            Some long text to demonstrate a tab widget. This text can be
            something as long as multiple paragraphs or as short as a couple of
            sentences.
          </p>
        </div>
        <input
          className="tab-input"
          type="radio"
          id="tab2"
          name="hint-group-1"
          aria-describedby="tabHeading2"
        />
        <label className="tab-header" htmlFor="tab2">
          Tab Title 2
        </label>
        <div className="tab-panel" tabIndex={0} id="tabHeading2">
          <h4>Tab 2 Heading Inside</h4>
          <p>
            Some long text to demonstrate a tab widget. This text can be
            something as long as multiple paragraphs or as short as a couple of
            sentences.
          </p>
        </div>
        <input
          className="tab-input"
          type="radio"
          id="tab3"
          name="hint-group-1"
          aria-describedby="tabHeading3"
        />
        <label className="tab-header" htmlFor="tab3">
          Tab Title 3
        </label>
        <div className="tab-panel" tabIndex={0} id="tabHeading3">
          <h4>Tab 3 Heading Inside</h4>
          <p>
            Some long text to demonstrate a tab widget. This text can be
            something as long as multiple paragraphs or as short as a couple of
            sentences.
          </p>
        </div>
        <input
          type="radio"
          id="tab4"
          name="hint-group-1"
          aria-describedby="tabHeading4"
          defaultChecked=""
        />
        <label className="tab-header hide-tab" htmlFor="tab4">
          Hide Title
        </label>
        <div
          className="tab-header hide-tab"
          tabIndex={0}
          id="tabHeading4"
        ></div>
      </div>
      <h3>Vocab Widget</h3>
      <dl className="vocab-list">
        <button>Close All</button>
        <dt tabIndex={0}>Term 1</dt>
        <dd>Term Definition 1</dd>
        <dt tabIndex={0}>Term 2</dt>
        <dd>Term Definition 2</dd>
        <dt tabIndex={0}>Term 3</dt>
        <dd>Term Definition 3</dd>
      </dl>
      <h3>Tellus Sollicitudin</h3>
      <p>
        Suspendisse quis tortor eget lorem condimentum malesuada mollis eget
        nulla. Vivamus non nisi ac orci efficitur ultrices. Mauris eros nibh,
        lobortis eu lacinia quis, mattis venenatis purus. Curabitur commodo
        lacus eget facilisis ornare.
      </p>
      <div className="media-container">
        <div className="media-object">
          <iframe
            width={560}
            height={315}
            src="https://www.youtube.com/embed/rFve845ScJ4"
            title="YouTube video player"
            frameBorder={0}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen=""
          />
        </div>
        <div className="media-info">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            euismod vulputate malesuada.
          </p>
        </div>
      </div>
    </div>
    <div className={styles.contentBody}>
      <h2 className="icon-envelope">Lorem</h2>
      <p>
        Curabitur leo nulla, ornare et bibendum imperdiet, congue id purus.
        Nullam lobortis quam id justo porta suscipit. Nulla vestibulum rhoncus
        neque non facilisis. Nunc ut enim dui. Morbi ut nunc ac erat luctus
        bibendum id in libero.
      </p>
      <table className={`${styles.displayLg}`}>
        <thead>
          <tr>
            <th scope="col">Nulla</th>
            <th scope="col">Morbi</th>
            <th scope="col">Nunc</th>
            <th scope="col">Curabitur</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td data-th="Assignment">
              Aenean euismod{" "}
              <a href="#" target="_blank" rel="noopener">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </a>
            </td>
            <td data-th="Time-On-Task">2 </td>
            <td data-th="Points">5</td>
            <td data-th="Due Date">[Lorem ipsum dolor sit]</td>
          </tr>
          <tr>
            <td data-th="Assignment">
              Aenean euismod{" "}
              <a href="#" target="_blank" rel="noopener">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </a>
            </td>
            <td data-th="Time-On-Task">
              <p>3 </p>
            </td>
            <td data-th="Points">10</td>
            <td data-th="Due Date">[Lorem ipsum dolor sit]</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div className={styles.contentBody}>
      <h2 className="icon-microscope">Fusce Posuere</h2>
      <p>
        Nunc sed lacus sit amet purus convallis vestibulum vitae quis libero.
        Nunc consectetur tristique aliquet. Suspendisse risus ex, vestibulum non
        leo sit amet, consequat ultricies eros. Curabitur leo nulla, ornare et
        bibendum imperdiet, congue id purus. Nullam lobortis quam id justo porta
        suscipit.{" "}
      </p>
      <h3>Suspendisse</h3>
      <p>
        Nunc sed lacus sit amet purus convallis vestibulum vitae quis libero.
        Nunc consectetur tristique aliquet. Suspendisse risus ex, vestibulum non
        leo sit amet, consequat ultricies eros. Curabitur leo nulla, ornare et
        bibendum imperdiet, congue id purus. Nullam lobortis quam id justo porta
        suscipit.{" "}
      </p>
      <ol>
        <li>Mattis venenatis purus</li>
        <li>Curabitur commodo lacus</li>
        <li>Mauris in augue tempor, porttitor nunc in</li>
        <li>Praesent a urna egestas, blandit ex at, ultrices urna</li>
      </ol>
    </div>
    <div className={styles.contentBody}>
      <h2>Video Widget</h2>
      <p>
        Nunc sed lacus sit amet purus convallis vestibulum vitae quis libero.
        Nunc consectetur tristique aliquet. Suspendisse risus ex, vestibulum non
        leo sit amet, consequat ultricies eros. Curabitur leo nulla, ornare et
        bibendum imperdiet, congue id purus. Nullam lobortis quam id justo porta
        suscipit.{" "}
      </p>
      <div className="video-widget">
        <div className="video-card">
          <h2>Lorem ipsum</h2>
          <div className="card-content">
            <h3 className="font-size-h3" lang="fr">
              Mauris in augue
            </h3>
            <p>(Length: 5:57 minutes)</p>
            <div className="media-container">
              <div className="media-object">
                <iframe
                  src="https://www.youtube.com/embed/Dxz8GPU-E1s?wmode=opaque"
                  title="YouTube video player?wmode=opaque"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen=""
                  width={560}
                  height={315}
                  frameBorder={0}
                />
              </div>
            </div>
            <a
              className="btn exit"
              href="https://www.youtube.com/embed/Dxz8GPU-E1s"
              target="_blank"
              rel="nonopener noopener"
            >
              Suspendisse
            </a>{" "}
          </div>
        </div>
        <div className="video-card">
          <h2>Lorem ipsum</h2>
          <div className="card-content">
            <h3 className="font-size-h3">Mauris in augue</h3>
            <p>(Length: 9:10 minutes)</p>
            <div className="media-container">
              <div className="media-object">
                <iframe
                  src="https://www.youtube.com/embed/oMrL8Lph9dY?wmode=opaque"
                  title="YouTube video player?wmode=opaque"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen=""
                  width={560}
                  height={315}
                  frameBorder={0}
                />
              </div>
            </div>
            <a
              className="btn exit"
              href="https://www.youtube.com/embed/oMrL8Lph9dY"
              target="_blank"
              rel="nonopener noopener"
            >
              Suspendisse
            </a>{" "}
          </div>
        </div>
        <div className="video-card">
          <h2>Lorem ipsum</h2>
          <div className="card-content">
            <h3 className="font-size-h3">Mauris in augue</h3>
            <p>(Length: 3:16 minutes)</p>
            <div className="media-container">
              <div className="media-object">
                <iframe
                  src="https://www.youtube.com/embed/n4eFwIkJQKI?wmode=opaque"
                  title="YouTube video player?wmode=opaque"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen=""
                  width={560}
                  height={315}
                  frameBorder={0}
                />
              </div>
            </div>
            <a
              className="btn exit"
              href="https://www.youtube.com/embed/n4eFwIkJQKI"
              target="_blank"
              rel="nonopener noopener"
            >
              Suspendisse
            </a>{" "}
          </div>
        </div>
        <div className="video-card">
          <h2>Lorem ipsum</h2>
          <div className="card-content">
            <h3 className="font-size-h3">Mauris in augue</h3>
            <p>(Length: 6:54 minutes)</p>
            <div className="media-container">
              <div className="media-object">
                <iframe
                  src="https://www.youtube.com/embed/QBX_YwFeoGk?wmode=opaque"
                  title="YouTube video player?wmode=opaque"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen=""
                  width={560}
                  height={315}
                  frameBorder={0}
                />
              </div>
            </div>
            <a
              className="btn exit"
              href="https://www.youtube.com/embed/QBX_YwFeoGk"
              target="_blank"
              rel="nonopener noopener"
            >
              Suspendisse
            </a>{" "}
          </div>
        </div>
      </div>
    </div>
  </div>
  <footer className={styles.footer}>
    <div id="footer">
      <p className="text-center toggle-footnotes">[Show Footnotes]</p>
      <div className={styles.footnotes}>
        <p>
          {" "}
          Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur arcu
          erat, accumsan id imperdiet et, porttitor at sem. Vivamus magna justo,
          lacinia eget consectetur sed, convallis at tellus.{" "}
        </p>
        <ul>
          <li>Lorem culim ghus.</li>
          <li>Ipsum guar havana.</li>
          <li>Doloret kava chec.</li>
          <li>Praesent a urna egestas, blandit ex at, ultrices urna</li>
        </ul>
      </div>
    </div>
  </footer>
  </div>
</>
  )
}