import React, {useState} from 'react';
import {UncontrolledAccordion} from "./UncontrolledAccordion";
import {action} from "@storybook/addon-actions";


export default {
    title: 'UncontrolledAccordion stories',
    component: UncontrolledAccordion
}
const callback = action('accordion change event fired!')

export const ModeChanging = () => {
    return <UncontrolledAccordion titleValue={'Users'}/>
}

