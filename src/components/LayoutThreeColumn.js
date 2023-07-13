import styles from "../styles/themeLayout.module.css"

export default function LayoutThreeColumn(props) {


  return (
    <>
      <div className={`${styles.themeBody} ${styles.threeColumn}`}>
          <header className={`${styles.header} header`}>
    <img src="https://unsplash.it/1920/600" alt="" />
    <div className="text-container">
      <h1  aria-level="2">Module 1: Lorem ipsum dolor 3</h1>
      <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit </p>
    </div>
  </header>
  <div id="content-wrapper" className={styles.contentWrapper}>
    <div className={styles.contentBody}>
      <h2 className="icon-book-open">Aenean euismod</h2>
      <p>
        {" "}
        Nunc sed lacus sit amet purus convallis vestibulum vitae quis libero.
        Nunc consectetur tristique aliquet. Suspendisse risus ex, vestibulum non
        leo sit amet, consequat ultricies eros. Curabitur leo nulla, ornare et
        bibendum imperdiet, congue id purus. Nullam lobortis quam id justo porta
        suscipit.{" "}
        <a rel="noopener" href="#">
          Fusce posuere
        </a>{" "}
        lectus turpis, egestas rhoncus ex vitae, porttitor commodo nisl.
        Vestibulum tempor ante{" "}
        <a href="#" target="_blank" rel="noopener">
          Curabitur
        </a>
        , "{" "}
        <a href="#" target="_blank" rel="noopener">
          Vivamus mollis
        </a>
        vitae nunc nec tellus sollicitudin cursus. Suspendisse quis tortor eget
        lorem condimentum malesuada mollis eget nulla.{" "}
      </p>
      <div className="border">
        <h3>Nec Ultricies</h3>
        <p>Mauris eros nibh, lobortis eu lacinia quis:</p>
        <ul>
          <li> Mattis venenatis purus </li>
          <li> Curabitur commodo lacus </li>
          <li>Mauris in augue tempor, porttitor nunc in</li>
          <li> Praesent a urna egestas, blandit ex at, ultrices urna </li>
        </ul>
      </div>
    </div>
    <div className={styles.contentBody}>
      <h2 className="icon-pencil font-size-h3">Fusce Posuere</h2>
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
      <div className="side-by-side">
        <div className="side-by-side-item">
          {" "}
          <img
            src="https://d2l.pima.edu/shared/images/placeholder/400x400.jpg"
            alt=""
          />{" "}
        </div>
        <div className="side-by-side-item">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            euismod vulputate malesuada. Nam a risus purus.
          </p>
        </div>
      </div>
    </div>
  </div>
  <div id="secondColumn" className={styles.secondColumn}>
    <div className={styles.contentBody}>
      <h2 className="icon-pencil font-size-h3">Nam A Risus</h2>
      <figure>
        {" "}
        <img
          src="https://d2l.pima.edu/shared/images/placeholder/400x400.jpg"
          alt=""
        />{" "}
      </figure>
    </div>
    <div className={styles.contentBody}>
      <h2 className="font-size-h3">Nullam lobortis</h2>
      <dl>
        <dt>Feathers:</dt>
        <dd>Covers a penguin's body and keeps them dry.</dd>
        <dt>Incubate:</dt>
        <dd>Grow under conditions that promote development.</dd>
        <dt>Feathers:</dt>
        <dd>Covers a penguin's body and keeps them dry.</dd>
        <dt>Incubate:</dt>
        <dd>Grow under conditions that promote development.</dd>
        <dt>Feathers:</dt>
        <dd>Covers a penguin's body and keeps them dry.</dd>
        <dt>Incubate:</dt>
        <dd>Grow under conditions that promote development.</dd>
        <dt>Feathers:</dt>
        <dd>Covers a penguin's body and keeps them dry.</dd>
        <dt>Incubate:</dt>
        <dd>Grow under conditions that promote development.</dd>
      </dl>
    </div>
    <div className={styles.contentBody}>
      <div className="border border-yellow">
        <h2 className="icon-ruler font-size-h3">Did you know?!</h2>
        <p>
          {" "}
          The <strong>Galapagos Penguin</strong> is the only penguin species
          that ventures north of the equator in the wild.{" "}
        </p>
      </div>
    </div>
  </div>
  <div id="thirdColumn" className={styles.thirdColumn}>
    <div className={styles.contentBody}>
      <h2>Lorem Ipsum Dolor</h2>
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
      </div>
    </div>
  </div>
  <footer className={styles.footer}>
    <div id="footer">
      <p className="text-center toggle-footnotes">[Show Footnotes]</p>
      <div className="footnotes">
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
          <li>Lorem culim ghus.</li>
          <li>Ipsum guar havana.</li>
          <li>Doloret kava chec.</li>
        </ul>
      </div>
    </div>
  </footer>
  </div>
</>
  )
}