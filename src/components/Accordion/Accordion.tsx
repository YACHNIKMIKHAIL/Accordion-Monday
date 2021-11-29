import React from "react";

export type AccordionCollapsedType = boolean
export type AccordionPropsType = {
    titleValue: string
    collapsed: AccordionCollapsedType
    /**
     * коллбэк вызывается когда что-то кликнуто, вот и всё!
     * @param value кликнутого айтема
     */
    onClick: (value: AccordionCollapsedType) => void
    onChange: () => void
    /**
     * my comments: bla-bla)
     */
    items: Array<{ title: string, value: number }>
}

export function Accordion(props: AccordionPropsType) {
    console.log('Accordion  rendering')
    return (
        <div>
            <AccordionTitle title={props.titleValue}
                            onClick={props.onClick}
                            collapsed={props.collapsed}/>
            {!props.collapsed && <AccordionBody items={props.items} onClick={props.onClick}/>}

        </div>
    )
}

type AccordionTitlePropsType = {
    title: string
    onClick: (collapsed: AccordionCollapsedType) => void
    collapsed: AccordionCollapsedType
}

export function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('AccordionTitle rendering')
    return (
        <h3 onClick={() => props.onClick(!props.collapsed)}> -- {props.title} -- controlled </h3>
    );
}

type AccordionBodyPropsType={
    items: Array<{ title: string, value: number }>
    onClick: (value: AccordionCollapsedType) => void
}
export function AccordionBody(props:AccordionBodyPropsType) {
    console.log('AccordionBody rendering')

    return (
        <ul>
            {props.items.map(i=><li>{i.title}</li>)}
        </ul>
    );
}

export default Accordion;