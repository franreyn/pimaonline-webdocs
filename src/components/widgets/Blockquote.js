export default function Blockquote() {
  return (
    <>
      <section className="wd-content" id="toc-blockquote">
        <h2 id="blockquote" className="section-top">Blockquote</h2>
        <p>Use <strong>Blockquote</strong> to separate any block of text along with supportive quotes. The space around the blockquote helps separate the block of text from the content that surrounds it.</p>
        <p>Use <span className="monospace">&lt;blockquote&gt;&lt;/blockquote&gt;</span> to wrap your content.</p>
        <div className="wd-window">
          <div className="wd-visual-ex">
            <blockquote className="text-center">Some text used to help display a blockquote</blockquote>
          </div>
          <div className="wd-html-code">
            <pre>
              <code className="language-html">
              {'<blockquote class="text-center">Some text used to help display a blockquote</blockquote>'}
                </code>
                </pre>
                </div>
          <div className="wd-btn-container">
            <button className="wd-copy-btn">Copy code</button>
          </div>
        </div>
      </section>
    </>
  )
}