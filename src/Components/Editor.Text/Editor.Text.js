import React, { Component } from 'react'
import './Editor.Text.css'

class EditorText extends Component {
    render() {
        return (
            <div className="editor-text" contentEditable="true" draggable="true">
                This is a test text.
            </div>
        )
    }
}

export default EditorText