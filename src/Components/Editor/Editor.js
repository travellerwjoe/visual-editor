import React, { Component } from 'react'
import EditorText from '../Editor.Text'
import './Editor.css'


class Editor extends Component {
    render() {
        return (
            <div className="editor">
                <EditorText />
            </div>
        )
    }
}

export default Editor