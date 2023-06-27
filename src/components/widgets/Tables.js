export default function Tables() {
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
            <code className="language-html">
              <span className="display-block">{'<table class="display-lg">'}</span>
              <span className="display-block">{'  <thead>'}</span>
              <span className="display-block">{'    <tr>'}</span>
              <span className="display-block">{'      <th>Assignments</th>'}</span>
              <span className="display-block">{'      <th>Points</th>'}</span>
              <span className="display-block">{'      <th>Due Dates</th>'}</span>
              <span className="display-block">{'    </tr>'}</span>
              <span className="display-block">{'  </thead>'}</span>
              <span className="display-block">{'  <tbody>'}</span>
              <span className="display-block">{'    <tr>'}</span>
              <span className="display-block">{'      <td>Read Start Here Module</td>'}</span>
              <span className="display-block">{'      <td>--</td>'}</span>
              <span className="display-block">{'      <td>May 1st</td>'}</span>
              <span className="display-block">{'    </tr>'}</span>
              <span className="display-block">{'    <tr>'}</span>
              <span className="display-block">{'      <td>Course Contract Quiz</td>'}</span>
              <span className="display-block">{'      <td>5</td>'}</span>
              <span className="display-block">{'      <td>May 7th</td>'}</span>
              <span className="display-block">{'    </tr>'}</span>
              <span className="display-block">{'  </tbody>'}</span>
              <span className="display-block">{'</table>'}</span>
            </code>
          </pre>
        </div>
        <div className="wd-btn-container">
          <button className="wd-copy-btn">Copy code</button>
        </div>
      </div>
    </section>
  );
}
