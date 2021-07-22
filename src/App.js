import './App.css';
import EditorJs from 'react-editor-js';
import {EDITOR_JS_TOOLS} from "./tools";
import {data} from "./datas"
import {useRef, useState} from "react";

function App() {
    const editorRef=useRef(null)
    const [editorInstance, ] = useState()
    return (
        <div className="App">
            <header className="App-header">
                <p>
                    EditorJs
                </p>
            </header>
            <EditorJs
                // instanceRef={instance => editorRef = instance}
                data={data} tools={EDITOR_JS_TOOLS}/>
        </div>
    );
}

export default App;
