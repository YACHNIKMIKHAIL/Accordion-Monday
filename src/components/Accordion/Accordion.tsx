import React from "react";

export type AccordionCollapsedType=boolean
export type AccordionPropsType = {
    titleValue: string
    collapsed: AccordionCollapsedType
    onClick:(collapsed:AccordionCollapsedType)=>void
}

export function Accordion(props: AccordionPropsType) {
    console.log('Accordion  rendering')
    return (
        <div>
            <AccordionTitle title={props.titleValue}
                            onClick={props.onClick}
                            collapsed={props.collapsed}/>
            {!props.collapsed && <AccordionBody/>}

        </div>
    )
}

type AccordionTitlePropsType = {
    title: string
    onClick:(collapsed:AccordionCollapsedType)=>void
    collapsed:AccordionCollapsedType
}

export function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('AccordionTitle rendering')
    return (
        <h3 onClick={()=>props.onClick(!props.collapsed)}> -- {props.title} -- controlled </h3>
    );
}

export function AccordionBody() {
    console.log('AccordionBody rendering')
    return (
        <ul>
            <li>1yo </li>
            <li>2yo yo</li>
            <li>3yo yo yo</li>
        </ul>
    );
}

export default Accordion;