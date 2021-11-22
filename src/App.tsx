import React, {useState} from 'react';
import './App.css';
import {OnOff} from "./components/OnOffStyle/OnOffStyle";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import {StarRating} from "./components/UncontrolledStars/UncontrolledStars";
import UncontrolledAccordion from "./components/UncontrolledAccordion/UncontrolledAccordion";
import Accordion, {AccordionCollapsedType} from "./components/Accordion/Accordion";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {ControlledOnOff, OnOffValueType} from "./components/OnOffStyle/ControlledOnOffStyle";
import {UncontrolledOnOff} from "./components/OnOffStyle/UncontrolledOnOffStyle";



function App() {
    console.log('App  rendering')
    console.log('App  rendering')
    console.log('App  rendering')
    console.log('App  rendering')
    console.log('App  rendering')

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let [accordionCollapsed, setAccordionCollapsed] = useState<AccordionCollapsedType>(false)
    let [switchOn, setSwitchOn] = useState<OnOffValueType>(true)

    return (
        <div className={'AppWrap'}>
            <UncontrolledRating/>
            <Rating value={ratingValue} onClick={setRatingValue}/>
            <Accordion titleValue={'MENU'}
                       collapsed={accordionCollapsed}
                       onClick={setAccordionCollapsed}/>

            {/*<ControlledOnOff on={switchOn} change={setSwitchOn}/>*/}
            <UncontrolledOnOff onChange={setSwitchOn}/> {switchOn.toString()}
            <UncontrolledAccordion titleValue={'Bla Bla'}/>


        </div>
    );
}


type PageTitlePropsType = {
    title: string
}

export function PageTitle(props: PageTitlePropsType) {

    console.log('PageTitle rendering')
    return (
        <h1>{props.title}</h1>
    );
}

export default App;

