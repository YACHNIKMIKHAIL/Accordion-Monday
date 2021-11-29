import React, {useState} from 'react';
import {Accordion, AccordionPropsType} from "./Accordion";
import {action} from "@storybook/addon-actions";
import {Story} from "@storybook/react";


export default {
    title: 'Accordion stories',
    component: Accordion
}
const callback = action('accordion change event fired!')
const onClickCallback = action('some items was clicked')

const Template: Story<AccordionPropsType> = (args) => <Accordion {...args}/>
const callbackProps = {
    onChange: callback,
    onClick: onClickCallback
}

export const MenuUncollapsedMode = Template.bind([])
MenuUncollapsedMode.args = {
    ...callbackProps,
    titleValue: 'Menu',
    collapsed: false,
    items: [],
}

export const UsersUncollapsedMode = Template.bind([])
UsersUncollapsedMode.args = {
    ...callbackProps,
    titleValue: 'Users',
    collapsed: false,
    items: [
        {title: 'Me', value: 30},
        {title: 'Vitalia', value: 19},
        {title: 'Igor', value: 25}
    ]
}


export const ModeChanging: Story<AccordionPropsType> = (args) => {
    let [value, setValue] = useState<boolean>(true)
    return <Accordion {...args} onChange={() => setValue(!value)}/>
}
ModeChanging.args = {
    ...callbackProps,
    titleValue: 'Users',
    items: [{title: 'asdcad', value: 30},
        {title: '`adc`', value: 19},
        {title: 'da`', value: 25}],
}

