import './App.css';
import EditorJs from 'react-editor-js';
import {EDITOR_JS_TOOLS} from "./tools";
import {data} from "./datas"
import {useRef} from "react";

function App() {
    const instanceRef = useRef(null);

    async function handleSave() {
        const savedData = await instanceRef.current.save();
        console.log({instanceRef})
        console.log("savedData", savedData);
    }

    return (
        <div className="App">
            <header className="App-header">
                <p>
                    EditorJs
                </p>
            </header>
            <EditorJs
                onChange={handleSave}
                instanceRef={instance => (instanceRef.current = instance)}
                data={data} tools={EDITOR_JS_TOOLS}/>
        </div>
    );
}

export default App;
