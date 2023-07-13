import Head from "next/head";
import React, { useEffect } from 'react';
import styles from "../styles/themeLayout.module.css"

export default function LayoutTwoColumn(props) {

  return (
    <>
      <div className={`${styles.themeBody} ${styles.twoColumn}`}>
  <header className={`${styles.header} header`}>
    <img src="https://unsplash.it/1920/600" alt="" />
    <div className="text-container">
      <h1  aria-level="2">Module 1: Lorem ipsum dolor 2</h1>
      <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit </p>
    </div>
  </header>
  <div id="content-wrapper">
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
        <h3>Module Objectives:</h3>
        <ul>
          <li>Consequat ultricies eros</li>
          <li>Aenean euismod vulputate malesuada</li>
          <li>Donec luctus ullamcorper ornare</li>
        </ul>
      </div>
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
            euismod vulputate malesuada. Nam a risus purus. Orci varius natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            In vel neque tempus, porta enim a, feugiat purus. Donec luctus
            ullamcorper ornare. Suspendisse et luctus leo.
          </p>
        </div>
      </div>
    </div>
    <div className={styles.contentBody}>
      <h2>Nullam lobortis</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod
        vulputate malesuada. Nam a risus purus. Orci varius natoque penatibus et
        magnis dis parturient montes, nascetur ridiculus mus. In vel neque
        tempus, porta enim a, feugiat purus. Donec luctus ullamcorper ornare.
        Suspendisse et luctus leo.
      </p>
      <div className="call-out">
        <p>In vel neque tempus, porta enim a, feugiat purus.</p>
      </div>
    </div>
    <div className={styles.contentBody}>
      <h2>Donec Luctus</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod
        vulputate malesuada. Nam a risus purus. Orci varius natoque penatibus et
        magnis dis parturient montes, nascetur ridiculus mus. In vel neque
        tempus, porta enim a, feugiat purus. Donec luctus ullamcorper ornare.
        Suspendisse et luctus leo.
      </p>
      <div className="horizontal-display">
        <div>
          {" "}
          <img
            src="https://d2l.pima.edu/shared/images/placeholder/400x400.jpg"
            alt=""
          />{" "}
        </div>
        <div>
          {" "}
          <img
            src="https://d2l.pima.edu/shared/images/placeholder/400x400.jpg"
            alt=""
          />{" "}
        </div>
        <div>
          {" "}
          <img
            src="https://d2l.pima.edu/shared/images/placeholder/400x400.jpg"
            alt=""
          />{" "}
        </div>
        <div>
          {" "}
          <img
            src="https://d2l.pima.edu/shared/images/placeholder/400x400.jpg"
            alt=""
          />{" "}
        </div>
      </div>
    </div>
    <div className={styles.contentBody}>
      <blockquote className="text-center">
        {" "}
        " Mauris eros nibh, lobortis eu lacinia quis, mattis venenatis purus.
        Curabitur commodo lacus eget facilisis ornare. " <br />
        <br />- Lorem Ipsum{" "}
      </blockquote>
    </div>
    <div className={styles.contentBody}>
      <div className="card-horizontal">
        <div className="card-body">
          <p>
            Ut posuere vitae ante varius consequat. Vivamus id condimentum dui,
            et tincidunt enim. Vivamus mollis lorem nec metus aliquet, vulputate
            condimentum ante ultricies.
          </p>
        </div>
        <div className="card-img">
          {" "}
          <img
            src="https://d2l.pima.edu/shared/images/placeholder/400x400.jpg"
            alt=""
          />{" "}
        </div>
      </div>
    </div>
  </div>
  {/* End of first column */}
  <div id="second-column">
    <div className={styles.contentBody}>
      <h2 className="font-size-h4">Foleri Diciu</h2>
      <div className="image-gallery">
        <div className="gallery-wrapper">
          <div className="image-box">
            <img
              src="https://picsum.photos/id/1018/400/200"
              alt="This is the first image"
            />
          </div>
          <div className="image-box">
            <img
              src="https://picsum.photos/id/1047/300/400"
              alt="This is the second image"
            />
          </div>
          <div className="image-box">
            <img
              src="https://picsum.photos/id/1059/500/300"
              alt="This is the third image"
            />
          </div>
          <div className="image-box">
            <img
              src="https://picsum.photos/id/119/500/300"
              alt="This is the fourth image"
            />
          </div>
          <div className="image-box">
            <img
              src="https://picsum.photos/id/143/800/200"
              alt="This is the fifth image"
            />
          </div>
        </div>
      </div>
      <ul className="assignments-widget">
        <li className="assignment">
          <h3>Lorem Ipsum</h3>
          <ul>
            <li>
              {" "}
              <strong>Commodo:</strong> vivamus mollis lorem{" "}
            </li>
            <li>
              {" "}
              <strong>Morbi:</strong> vulputate condimentum ante{" "}
            </li>
            <li>
              {" "}
              <strong>Commodo:</strong> vitae ante varius{" "}
            </li>
            <li>
              {" "}
              <strong>Commodo:</strong> lobortis eu lacinia quis, mattis
              venenatis{" "}
            </li>
          </ul>
          <a className="btn" href="#">
            Ut posuere vitae
          </a>{" "}
        </li>
        <li className="assignment">
          <h3>Curabitur Sodales</h3>
          <ul>
            <li>
              {" "}
              <strong>Lorem:</strong> mattis venenatis{" "}
            </li>
            <li>
              {" "}
              <strong>Commodo:</strong> lobortis eu lacinia quis, mattis
              venenatis{" "}
            </li>
            <li>
              {" "}
              <strong>Morbi:</strong> vulputate condimentum ante{" "}
            </li>
          </ul>
          <a className="btn" href="#">
            Ut posuere vitae
          </a>{" "}
        </li>
        <li className="assignment">
          <h3>Lorem Ipsum</h3>
          <ul>
            <li>
              {" "}
              <strong>Commodo:</strong> vivamus mollis lorem{" "}
            </li>
            <li>
              {" "}
              <strong>Morbi:</strong> vulputate condimentum ante{" "}
            </li>
            <li>
              {" "}
              <strong>Commodo:</strong> vitae ante varius{" "}
            </li>
            <li>
              {" "}
              <strong>Commodo:</strong> lobortis eu lacinia quis, mattis
              venenatis{" "}
            </li>
          </ul>
          <a className="btn" href="#">
            Ut posuere vitae
          </a>{" "}
        </li>
      </ul>
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
        </ul>
      </div>
    </div>
    
  </footer>
  </div>
</>
  )
}