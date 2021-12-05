import React from "react";

export type AccordionCollapsedType = boolean
export type itemType={
    title:string
    value:any
}
export type AccordionPropsType = {
    titleValue: string
    collapsed: AccordionCollapsedType
    /**
     * коллбэк вызывается когда что-то кликнуто, вот и всё!
     * @param value кликнутого айтема
     */
    onClick: (value: AccordionCollapsedType) => void
    onClickItems: (value:any) => void
    /**
     * my comments: bla-bla)
     */
    items: itemType[]
}

export function Accordion(props: AccordionPropsType) {
    console.log('Accordion  rendering')
    return (
        <div>
            <AccordionTitle title={props.titleValue}
                            onClick={props.onClick}
                            collapsed={props.collapsed}/>
            {!props.collapsed && <AccordionBody items={props.items} onClick={props.onClick}
                                                onClickItems={props.onClickItems}/>}

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
    items: itemType[]
    onClick: (value: AccordionCollapsedType) => void
    onClickItems:(value:any)=>void
}
export function AccordionBody(props:AccordionBodyPropsType) {
    console.log('AccordionBody rendering')

    return (
        <ul>
            {props.items.map((i,index)=><li
                onClick={()=>props.onClick(i.value)}
                key={index}>{i.title}</li>)}
        </ul>
    );
}

export default Accordion;