import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { MyInput } from './components/Form';
import  globalStyle from './config/style';

globalStyle();

ReactDOM.render(
        <React.Fragment>
            <MyInput />
        </React.Fragment>,
    document.getElementById('root')
)