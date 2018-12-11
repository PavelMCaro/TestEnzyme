import * as React from 'react';
import * as Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount } from 'enzyme';
import { MyInput } from './index';
import { FormWrapper, Button } from './styled';

Enzyme.configure({ adapter: new Adapter() });


describe('Test component using shallow', () => {

    const component = mount (<MyInput title='Form' />);

    beforeAll(() => {
        component.setProps({ title: 'Formulario'});
    });

    it('Test exists component', () => {
        expect(component.exists()).toEqual(true);
    });

    it('Test exists Tags', () =>{
        console.log(component.debug());
        expect(component.find(FormWrapper).exists()).toEqual(true);
    });
    
    it('Test exists Props', () =>{
        expect(component.props().title).toEqual('Formulario');
    });

    it('Test exists Button', () =>{
        expect(component.find('button').exists()).toEqual(true);
        component.find(Button).simulate('click');
    });

});

