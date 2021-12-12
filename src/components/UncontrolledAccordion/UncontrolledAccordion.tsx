import React, {useReducer, useState} from "react";

type AccordionPropsType = {
    titleValue: string

}

type ActionType = {
    type: string
}
const TOGGLE_CONSTANT = 'TOGGLE-COLLAPSED'
const reducer = (state: boolean, action: ActionType) => {
    switch (action.type) {
        case TOGGLE_CONSTANT:
            return !state
        default:
            return state
    }
}

export function UncontrolledAccordion(props: AccordionPropsType) {

    console.log('SelfControlledAccordion renderind!');
    // let [collapsed, setCollapsed] = useState(true);
    let [collapsed, dispatch] = useReducer(reducer, false);

    console.log('Accordion  rendered')
    return (
        <div>
            {/*<AccordionTitle title={props.titleValue} onClick={() => setCollapsed(!collapsed)}/>*/}
            <AccordionTitle title={props.titleValue} onClick={() => dispatch({type: TOGGLE_CONSTANT})}/>
            {!collapsed && <AccordionBody/>}

        </div>
    )
}

type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}

export function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('AccordionTitle rendering')
    return (
        <h3 onClick={() => props.onClick()}>
            -- {props.title} --</h3>
    );
}

export function AccordionBody() {
    console.log('AccordionBody rendering')
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    );
}

export default UncontrolledAccordion;