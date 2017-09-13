import React from 'react';
import Editor from '../Editor'
import Drawer from 'material-ui/Drawer'
import './Container.css'

const Container = () => (
    <div className="container">
        <Drawer open>
        </Drawer>
        <Editor />
    </div>
);

export default Container;