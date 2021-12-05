import React, {useState} from 'react';
import {Select} from "./Select";
import {action} from "@storybook/addon-actions";


export default {
    title: 'Select stories',
    component: Select
}

export const withValue = () => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value,setValue]=useState('2')

    return <div>
        <Select value={value}
                items={[
                    {value: 1, title: 'Brest'},
                    {value: 2, title: 'Minsk'},
                    {value: 3, title: 'Gomel'},
                ]}
                onChange={setValue}/>
    </div>
}

export const withoutValue = () => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value,setValue]=useState(null)

    return <div>
        <Select value={value}
            items={[
            {value: 1, title: 'Brest'},
            {value: 2, title: 'Minsk'},
            {value: 3, title: 'Gomel'},
        ]}
                onChange={setValue}/>
    </div>
}