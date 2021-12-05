import React, {useState} from 'react';
import './App.css';
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import UncontrolledAccordion from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {Accordion} from "./components/Accordion/Accordion";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {OnOffValueType} from "./components/OnOff/ControlledOnOff";
import {UncontrolledOnOff} from "./components/UncontrolledOnOff/UncontrolledOnOff";


function App() {
    console.log('App  rendering')
    console.log('App  rendering')
    console.log('App  rendering')
    console.log('App  rendering')
    console.log('App  rendering')

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let [accordionCollapsed, setAccordionCollapsed] = useState(false)
    let [switchOn, setSwitchOn] = useState<OnOffValueType>(true)
    const onChange = () => alert('yo')


    return (
        <div className={'AppWrap'}>
            <UncontrolledRating
                onChange={function (value: RatingValueType): void {
                    throw new Error('Function not implemented.');
                }}/>
            <Rating value={ratingValue} onClick={setRatingValue}/>
            <Accordion titleValue={'MENU'}
                       collapsed={accordionCollapsed}
                       onClick={setAccordionCollapsed}
                       items={[]}
                       onChange={onChange}/>

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

