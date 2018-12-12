import * as React from 'react';
import { Wrapper, Title, FormWrapper, Button } from './styled';
import PropTypes from 'prop-types';

interface Props {
    title?: string;
    status?: string;
    clickButton?: Function;
}
export const Form: React.SFC<Props> = ({ title, status, clickButton }) => (
    <Wrapper>
        <Title>{title}</Title>
        <FormWrapper>
            <input type="text" name="FirstName" placeholder='Ingrese primer nombre' />
            <input type="text" name="LastName" placeholder='Ingrese apellido' />
            <Button onClick={() => clickButton()}>Press to turn {status}</Button>
        </FormWrapper>
    </Wrapper>
)

Form.propTypes = {
    title: PropTypes.string
}