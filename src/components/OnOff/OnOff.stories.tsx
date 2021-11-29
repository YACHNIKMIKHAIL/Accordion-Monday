import React, {useState} from 'react';
import {ControlledOnOff} from "./ControlledOnOff";
import {action} from "@storybook/addon-actions";


export default {
    title: 'ControlledOnOff stories',
    component: ControlledOnOff
}
const callback = action('клиткед ВКЛ или ВЫКЛ')
export const OnMode = () => <ControlledOnOff on={true} change={callback}/>
export const OffMode = () => <ControlledOnOff on={false} change={callback}/>


export const ModeChanging = () => {
    let [value, setValue] = useState<boolean>(true)
    return <ControlledOnOff on={value} change={setValue}/>
}

