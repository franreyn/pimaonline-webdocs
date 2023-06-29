import { useRef, useState } from 'react';

export default function Tables() {
  const codeRef = useRef(null);
  const [buttonText, setButtonText] = useState('Copy code');

  const handleCopyCode = () => {
    const codeElement = codeRef.current;
    const range = document.createRange();
    range.selectNode(codeElement);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();

    setButtonText('Copied!');

    setTimeout(() => {
      setButtonText('Copy code');
    }, 2000);
  };

  return (
    <section className="wd-content" id="toc-tables">
      <h2 id="tables" className="section-top">
        Tables
      </h2>
      <p>
        Use <strong>Tables</strong> to organize information in rows and columns.
      </p>
      <p>
        Add <span className="monospace">.display-lg</span> to <span className="monospace">&lt;table&gt;</span> to create a responsive table.
      </p>
      <div className="wd-window">
        <div className="wd-visual-ex">
          <table className="display-lg">
            <thead>
              <tr>
                <th>Assignments</th>
                <th>Points</th>
                <th>Due Dates</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Read Start Here Module</td>
                <td>--</td>
                <td>May 1st</td>
              </tr>
              <tr>
                <td>Course Contract Quiz</td>
                <td>5</td>
                <td>May 7th</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="wd-html-code">
          <pre>
            <code className="language-html" ref={codeRef}>
              {String.raw`<table class="display-lg">
  <thead>
    <tr>
      <th>Assignments</th>
      <th>Points</th>
      <th>Due Dates</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Read Start Here Module</td>
      <td>--</td>
      <td>May 1st</td>
    </tr>
    <tr>
      <td>Course Contract Quiz</td>
      <td>5</td>
      <td>May 7th</td>
    </tr>
  </tbody>
</table>`}
            </code>
          </pre>
        </div>
        <div className="wd-btn-container">
          <button className="wd-copy-btn" onClick={handleCopyCode}>{buttonText}</button>
        </div>
      </div>
    </section>
  );
}
