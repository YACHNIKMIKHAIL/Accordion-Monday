import React, {useState} from "react";

type AccordionPropsType = {
    titleValue: string
    // collapsed: boolean
}

export function SelfControlledAccordion(props: AccordionPropsType) {

    console.log('SelfControlledAccordion renderind!');
    let [collapsed, setCollapsed] = useState(true);

    console.log('Accordion  rendered')
    return (
        <div>
            <AccordionTitle title={props.titleValue}/>
            <button onClick={() => setCollapsed(!collapsed)}>TOGGLE</button>
            {!collapsed && <AccordionBody/>}

        </div>
    )
}

type AccordionTitlePropsType = {
    title: string
}

export function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('AccordionTitle rendering')
    return (
        <h3>
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

export default SelfControlledAccordion;