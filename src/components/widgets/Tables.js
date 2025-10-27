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
      </p>
      <p>
        Add <span className="wd-monospace">.display-lg</span> to <span className="wd-monospace">&lt;table&gt;</span> to create a responsive table.
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
				)}
      </div>
    </section>
  );
}
