import * as React from 'react';
import { Wrapper, Title, FormWrapper, Button } from './styled';
import PropTypes from 'prop-types';

interface Props {
    title?: string;
}
export const MyInput: React.SFC<Props> = ({ title }) => (
    <Wrapper>
        <Title>{title}</Title>
        <FormWrapper>
            <input type='checkbox' name='businessRadio' />
            <input type="text" name="FirstName" placeholder='Ingrese primer nombre' />
            <input type="text" name="LastName" placeholder='Ingrese apellido' />
            <Button onClick={() => console.log('Button clicked')}>Press</Button>
        </FormWrapper>
    </Wrapper>
)

MyInput.propTypes = {
    title: PropTypes.string
}