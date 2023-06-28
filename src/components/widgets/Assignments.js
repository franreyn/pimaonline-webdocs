export default function Assignments() {
  return (
    <section className="wd-content" id="toc-assignments">
      <h2 id="assignments" className="section-top">Assignments Widget</h2>
      <p>Use <strong>Assignments Widget</strong> to display each assignment in a unit or module as a card.</p>
      <p>Use <span className="monospace">&lt;ul class="assignments-widget"&gt;&lt;/ul&gt;</span> to wrap your content.</p>
      <div className="wd-window">
        <div className="wd-visual-ex">
          <ul className="assignments-widget">
            <li className="assignment">
              <h3>Module 1 Readings</h3>
              <p>The readings in the list have interactive exercises that will help you determine if you are fully understanding the material.</p>
              <a className="btn" href="/d2l/common/dialogs/quickLink/quickLink.d2l?ou=608068&amp;type=content&amp;rcode=PIMA-3638367" target="_blank" rel="noopener">Go to Readings</a>
            </li>
            <li className="assignment">
              <h3>Reading Review Activity</h3>
              <p>Rhetorical Analysis Review Activity</p>
              <a className="btn" href="/d2l/common/dialogs/quickLink/quickLink.d2l?ou=608068&amp;type=content&amp;rcode=PIMA-3596885" target="_blank">Go to Activity</a>
            </li>
            <li className="assignment">
              <h3>Mindful Reading Discussion 1A</h3>
              <p>Reading Fables</p>
              <a className="btn" href="/d2l/common/dialogs/quickLink/quickLink.d2l?ou=608068&amp;type=content&amp;rcode=PIMA-3639476" target="_blank">Join Discussion</a>
            </li>
          </ul>
        </div>
        <div className="wd-html-code">
          <pre>
            <code className="language-html">
            <span className="display-block">{'<ul class="assignments-widget">'}</span>
            <span className="display-block">{'  <li class="assignment">'}</span>
            <span className="display-block">{'    <h3>Module 1 Readings</h3>'}</span>
            <span className="display-block">{'    <p>The readings in the list have interactive exercises that will help you determine if you are fully understanding the material.</p>'}</span>
            <span className="display-block">{'    <a class="btn" href="/d2l/common/dialogs/quickLink/quickLink.d2l?ou=608068&amp;type=content&amp;rcode=PIMA-3596885" target="_blank">Go to Readings</a>'}</span>
            <span className="display-block">{'  </li>'}</span>
            <span className="display-block">{'  <li class="assignment">'}</span>
            <span className="display-block">{'    <h3>Reading Review Activity</h3>'}</span>
            <span className="display-block">{'    <p>Rhetorical Analysis Review Activity</p>'}</span>
            <span className="display-block">{'    <a class="btn ext" href="/d2l/common/dialogs/quickLink/quickLink.d2l?ou=608068&amp;type=content&amp;rcode=PIMA-3596885" target="_blank">Go to Activity</a>'}</span>
            <span className="display-block">{'  </li>'}</span>
            <span className="display-block">{'  <li class="assignment">'}</span>
            <span className="display-block">{'    <h3>Mindful Reading Discussion 1A</h3>'}</span>
            <span className="display-block">{'    <p>Reading Fables</p>'}</span>
            <span className="display-block">{'    <a class="btn ext" href="/d2l/common/dialogs/quickLink/quickLink.d2l?ou=608068&amp;type=content&amp;rcode=PIMA-3639476" target="_blank">Join Discussion</a>'}</span>
            <span className="display-block">{'  </li>'}</span>
            <span className="display-block">{'</ul>'}</span>
              </code>
              </pre>
              </div>
        <div className="wd-btn-container">
          <button className="wd-copy-btn">Copy code</button>
        </div>
      </div>
    </section>
  )
}
