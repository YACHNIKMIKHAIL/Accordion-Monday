import React, {useState} from 'react';
import {Accordion} from "./Accordion";
import {action} from "@storybook/addon-actions";



export default {
    title: 'Accordion stories',
    component: Accordion
}

const callback = action('accordion change event fired!')
const onClickCallback = action('some items was clicked')

const callbackProps = {
    onChange: callback,
    onClick: onClickCallback
}

export const MenuCollapsedMode = ()=> <Accordion titleValue={'Menu'} collapsed={true} onChange={callback} onClick={onClickCallback} items={[]}/>

export const UsersUncollapsedMode = ()=> <Accordion titleValue={'Users'} collapsed={false} onChange={callback} onClick={onClickCallback}
                   items={[{title: 'Me', value: 30},
                       {title: 'Vitalia', value: 19},
                       {title: 'Igor', value: 25}]}/>

    export const ModeChanging = ()=> {
        const [value,setValue]=useState<boolean>(true)

        return <Accordion titleValue={'Users'}
        collapsed={value}
        onChange={() => setValue(!value)}
                   onClick={(value) => alert(`Yser with ID${value} should be happy!`)}
                   items={[{title: 'Me', value: 30},
                       {title: 'Vitalia', value: 19},
                       {title: 'Igor', value: 25}]}/>}


