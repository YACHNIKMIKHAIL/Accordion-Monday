import React from 'react';

import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOffStyle/OnOffStyle";
import SelfControlledAccordion from "./components/SelfControlledAccordion/SelfControlledAccordion";
import {StarRating} from "./components/selfOffStars/selfOffStars";


function App() {
    console.log('App  rendering')
    return (
        <div>
            {/*<img*/}
            {/*    src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMRRE3QXJdtV-fX_C8kljp0x7OJiaF0RTKjA&usqp=CAU"}*/}
            {/*    alt={" dream bike "}/>*/}
            {/*<PageTitle title={"This is App component"}/>*/}
            {/*<PageTitle title={"Ritka!"}/>*/}
            {/*Article 1*/}
            {/*<Accordion titleValue={"Menu"} collapsed={true}/>*/}
            {/*<Accordion titleValue={"Users"} collapsed={false}/>*/}
            {/*Article 2*/}
            {/*<Rating value={0}/>*/}
            {/*<Rating value={1}/>*/}
            {/*<Rating value={2}/>*/}
            {/*<Rating value={3}/>*/}
            {/*<Rating value={4}/>*/}
            {/*<Rating value={5}/>*/}


            <StarRating value={0}/>
            <StarRating value={1}/>
            <StarRating value={2}/>
            <StarRating value={3}/>
            <StarRating value={4}/>
            <StarRating value={5}/>


            {/*<OnOff />*/}
            {/*<SelfControlledAccordion   titleValue={'hook'}/>*/}
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

