import { useRef, useState, useEffect } from "react";
import hljs from "highlight.js/lib/core";
import html from "highlight.js/lib/languages/xml";

hljs.registerLanguage("html", html);

export default function Tables() {
  const codeRef = useRef(null);
  const [buttonText, setButtonText] = useState("Copy code");
	const [showCode, setShowCode] = useState(false);

	useEffect(() => {
		if (showCode) {
			hljs.highlightElement(codeRef.current); 
		}
	}, [showCode]);

  const handleCopyCode = async () => {
    if (!codeRef.current) return;
    try {
      await navigator.clipboard.writeText(codeRef.current.textContent);
      setButtonText("Copied!");
      setTimeout(() => setButtonText("Copy code"), 2000);
    } catch (err) {
      console.error("Copy failed:", err);
      setButtonText("Failed to copy");
    }
  };

  const tableData = [
    { assignment: "Read Start Here Module", points: "--", dueDate: "May 1st" },
    { assignment: "Course Contract Quiz", points: "5", dueDate: "May 7th" },
  ];

  return (
    <section className="wd-content" id="toc-tables">
      <h2 id="tables" className="section-top anchor">
        Tables
      </h2>
      <p>
        Use <strong>Tables</strong> to organize information in rows and columns.
        Add <span className="wd-monospace">.display-lg</span> to <span className="wd-monospace">&lt;table&gt;</span> to create a responsive table.
      </p>
      <p>Additional classes are globally available to further customize your tables:</p>
      <dl className="info-table lined">
        <dt>Table Variants</dt>
        <dd>
          <div><code>.display-lg</code> → Applies responsive js to table (mobile stacking)</div>
          <div><code>.custom-width</code> → Sets specific column widths and can be customized (use alongside <code>.display-lg</code>)</div>
          <div><code>.two-column-table</code> → Two-column label/value table layout (use in place of <code>.display-lg</code>)</div>
        </dd>
        <dt>Utility Classes</dt>
        <dd>
          <code>.no-margin</code> → Removes all margin (add to <code>&lt;table&gt;</code>)<br />
          <code>.no-padding</code> → Removes all padding (add to <code>&lt;table&gt;</code>)<br />
          <code>.sm-table-col</code> → 20% column width (add to individual <code>&lt;th&gt;</code>)<br />
          <code>.md-table-col</code> → 30% column width (add to individual <code>&lt;th&gt;</code>)<br />
          <code>.lg-table-col</code> → 50% column width (add to individual <code>&lt;th&gt;</code>)
        </dd>
      </dl>
      <div className="wd-window">
        <div className="wd-visual-ex">
          <table className="display-lg">
            <thead>
              <tr>
                <th scope="col">Assignments</th>
                <th scope="col">Points</th>
                <th scope="col">Due Dates</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row, index) => (
                <tr key={index}>
                  <td data-th="Assignment">{row.assignment}</td>
                  <td data-th="Points">{row.points}</td>
                  <td data-th="Due Dates">{row.dueDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="wd-btn-container">
					<button
						className="wd-toggle-btn"	onClick={() => setShowCode(!showCode)}>
						{showCode ? "Hide code" : "Show code"}
					</button>
					{showCode && (
					<button className="wd-copy-btn" onClick={handleCopyCode}>
						{buttonText}
					</button>
					)}
        </div>
				{showCode && (
        <div className="wd-html-code">
          <pre>
            <code className="language-html" ref={codeRef}>
              {String.raw`<table class="display-lg">
  <thead>
    <tr>
      <th scope="col">Assignments</th>
      <th scope="col">Points</th>
      <th scope="col">Due Dates</th>
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
				)}
      </div>
    </section>
  );
}
