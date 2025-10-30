import { useRef, useState, useEffect } from "react";
import hljs from "highlight.js/lib/core";
import html from "highlight.js/lib/languages/xml";

hljs.registerLanguage("html", html);

export default function PersistentChecklist() {
	const codeRef = useRef(null);
	const [buttonText, setButtonText] = useState("Copy code");
	const [showCode, setShowCode] = useState(false);

	useEffect(() => {
		if (showCode) {
			hljs.highlightElement(codeRef.current);
		}
	}, [showCode]);

	useEffect(() => {
		loadChecklistState();
	
		const checklistEl = document.querySelector(".persistent-checklist");
		const checkboxes = checklistEl?.querySelectorAll("input[type='checkbox']");
		const clearBtn = document.querySelector("#clearProgressButton");
	
		checkboxes?.forEach(box => {
			box.addEventListener("change", saveChecklistState);
		});
	
		clearBtn?.addEventListener("click", clearProgress);
	
		// Cleanup
		return () => {
			checkboxes?.forEach(box => {
				box.removeEventListener("change", saveChecklistState);
			});
			clearBtn?.removeEventListener("click", clearProgress);
		};
	}, []);
	

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

	function openChecklistDB() {
		return new Promise((resolve, reject) => {
			const request = indexedDB.open("WebDocsPersistentChecklistDB", 1);
	
			request.onupgradeneeded = function (event) {
				const db = event.target.result;
				if (!db.objectStoreNames.contains("checklists")) {
					db.createObjectStore("checklists");
				}
			};
	
			request.onsuccess = function (event) {
				resolve(event.target.result);
			};
	
			request.onerror = function (event) {
				reject("IndexedDB error: " + event.target.errorCode);
			};
		});
	}
	

	const clearProgress = async () => {
		const checklistEl = document.querySelector(".persistent-checklist");
		const checklistKey = checklistEl?.dataset.persistentChecklistKey || "default";
	
		const checklistItems = checklistEl.querySelectorAll("input[type='checkbox']");
		checklistItems.forEach(item => {
			item.checked = false;
		});
	
		const db = await openChecklistDB();
		const tx = db.transaction("checklists", "readwrite");
		const store = tx.objectStore("checklists");
	
		store.delete(`persistentChecklist-${checklistKey}`);
	
		tx.oncomplete = () => {
			db.close();
		};
	};

	const saveChecklistState = async () => {
		const checklistEl = document.querySelector(".persistent-checklist");
		const checklistKey = checklistEl?.dataset.persistentChecklistKey || "default";
	
		const db = await openChecklistDB();
		const tx = db.transaction("checklists", "readwrite");
		const store = tx.objectStore("checklists");
	
		const checklistItems = checklistEl.querySelectorAll("input[type='checkbox']");
		const checklistState = Array.from(checklistItems).map(item => item.checked);
	
		store.put(checklistState, `persistentChecklist-${checklistKey}`);
	
		tx.oncomplete = () => db.close();
	};
	
	const loadChecklistState = async () => {
		const checklistEl = document.querySelector(".persistent-checklist");
		const checklistKey = checklistEl?.dataset.persistentChecklistKey || "default";
	
		const db = await openChecklistDB();
		const tx = db.transaction("checklists", "readonly");
		const store = tx.objectStore("checklists");
	
		const request = store.get(`persistentChecklist-${checklistKey}`);
	
		request.onsuccess = function () {
			const checklistItems = checklistEl.querySelectorAll("input[type='checkbox']");
			const checklistState = request.result;
	
			if (checklistState) {
				checklistItems.forEach((item, index) => {
					item.checked = checklistState[index] || false;
				});
			}
		};
	
		tx.oncomplete = () => db.close();
	};
	
	return (
		<section className="wd-content" id="toc-persistent-checklist">
			<h2 className="section-top anchor" id="persistent-checklist">Persistent Checklist</h2>
			<p>
				Use the <strong>Persistent Checklist</strong> to create a group of checklist items that will save the checked state across page loads. This is useful for tasks that users may want to track over time, such as assignments, reading lists, or project tasks.
			</p>
			<p>
				Use <span className="wd-monospace">.persistent-checklist</span> to wrap the vocabulary list. Use a <span className="wd-monospace">&lt;ul&gt;</span> tag to wrap the list items and a <span className="wd-monospace">&lt;li&gt;</span> for each checklist item.
			</p>
			<p><strong>Note:</strong> Try refreshing your page after making a change to the checklist and notice how the checklist state is saved.</p>
			<div className="wd-window">
				<div className="wd-visual-ex">
					<div className="persistent-checklist-container">
					<ul className="persistent-checklist" data-persistent-checklist-key="1">
						<li>
							<input type="checkbox" id="task-1" />
							<label htmlFor="task-1">Task 1</label>
						</li>
						<li><input type="checkbox" id="task-2"/><label htmlFor="task-4">Task 2</label>
						</li>
						<li><input type="checkbox" id="task-3"/><label htmlFor="task-4">Task 3</label>
						</li>
			<a className="clear-progress-button btn" tabIndex="0" role="button" id="clearProgressButton">Clear List Progress</a></ul>
					</div>
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
              {String.raw`<ul class="persistent-checklist">
        <li>Task 1</li>
        <li>Task 2</li>
        <li>Task 3</li>
    </ul>`}
            </code>
          </pre>
        </div>
				)}
      </div>
    </section>
  );
}
