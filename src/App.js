import React, { useState } from "react";
import "./App.scss";
import { ReactComponent as SearchIcon } from "./components/svg/search.svg";
import { ReactComponent as QueryIcon } from "./components/svg/query.svg";
import { ReactComponent as CloseIcon } from "./components/svg/close.svg";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-github";

function initCode(value) {
  const code = `{
  "q": "${value}",
  "filter": "_id != ''",
}
`;
  return code;
}

function App() {
  const [isOpen, setIsOpen] = useState(false);
  // const [code, setCode] = useState('');
  const code = initCode("support");

  function submitForm(e) {
    e.preventDefault();
    setIsOpen(true);
    console.log(e);
  }
  return (
    <div className="container">
      <div style={{ width: "538px" }} className="wrapper">
        <form onSubmit={submitForm} id="search-form">
          <input type="text" className="search-form__input" />
          <div className="search-form__right">
            <button type="submit" className="submit-button">
              <SearchIcon />
            </button>
            <div className="divider"></div>
            <QueryIcon />
            {isOpen ? (
              <button
                type="button"
                className="close"
                onClick={() => setIsOpen(false)}
              >
                <span className="small">Close</span>
                <CloseIcon />
              </button>
            ) : (
              <button
                type="button"
                className="open"
                onClick={() => setIsOpen(true)}
              >
                <div className="arrow black down"></div>
              </button>
            )}
          </div>
        </form>
        {isOpen && (
          <div className="code-block">
            <AceEditor
              mode="json"
              theme="github"
              name="UNIQUE_ID_OF_DIV"
              height="100px"
              value={code}
              tabSize={2}
              highlightActiveLine={false}
              editorProps={{ $blockScrolling: true }}
            />
            <div className="button-group">
              <div>
                <button className="transparent">Reset</button>
              </div>
              <div>
                <button className="blue">
                  Run
                  <div
                    className="arrow white right"
                    style={{ marginLeft: "20px" }}
                  />
                </button>
                <div
                  style={{
                    fontSize: "9px",
                    opacity: "0.4",
                    fontWeight: "bold",
                    whiteSpace: "nowrap"
                  }}
                >
                  Cmd/Ctrl + Enter
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
