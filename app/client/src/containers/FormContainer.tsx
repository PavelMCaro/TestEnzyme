import * as React from 'react';
import { Form } from '../components/Form';

interface State {
    stateButton?: boolean;
}


export class FormContainer extends React.Component<{}, State> {

    state = {
        stateButton: false
    }

    clickButton = () => {
        console.log('Button clicked');
        this.setState({
            stateButton: this.state.stateButton ? false : true
        })
    }
    render(): JSX.Element {

        const props = {
            title: 'Formulario',
            status: this.state.stateButton ? 'off' : 'on'
        }
        return < Form {...props} clickButton={this.clickButton} />

    }
}

