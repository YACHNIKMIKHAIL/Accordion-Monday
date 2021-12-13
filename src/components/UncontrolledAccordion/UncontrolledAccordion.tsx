import {reducer, TOGGLE_COLLAPSED} from "./Reducer";
import {useReducer} from "react";

type AccordionPropsType = {
    titleValue: string

}

export function UncontrolledAccordion(props: AccordionPropsType) {
    console.log('SelfControlledAccordion renderind!');

    let [state, dispatch] = useReducer(reducer, {collapsed: false});

    console.log('Accordion  rendered')
    return (
        <div>
            {/*<AccordionTitle title={props.titleValue} onClick={() => setCollapsed(!collapsed)}/>*/}
            <AccordionTitle title={props.titleValue} onClick={() => dispatch({type: TOGGLE_COLLAPSED})}/>
            {!state.collapsed && <AccordionBody/>}

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