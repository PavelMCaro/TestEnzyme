import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { FormContainer } from './containers/FormContainer';
import  globalStyle from './config/style';

globalStyle();

ReactDOM.render(
        <React.Fragment>
            <FormContainer />
        </React.Fragment>,
    document.getElementById('root')
)