import React,{useState,useEffect} from 'react';
import { Domashno } from './components/Domashno';
import {Comments} from './components/Comments';
import {Car} from './components/Car';
import { StateClassExample } from './components/StateClassExample';


export function App() {

    const [promenliva,setPromenliva] = useState('Vrednost 1');
    const [brojac,setBrojac] = useState(0);

    let user1 = { ime: "Ivan", prezime: "Jovanov", adresa: "Skopje", godini: 15 };
    let user2 = { ime: "Petar", prezime: "Perov", adresa: "Debar", godini: 22 };
    let user3 = { ime: "Dime", prezime: "Dimovski", adresa: "Skopje", godini: 40 };
    let user4 = { ime: "Sime", prezime: "Simovski", adresa: "Gostivar", godini: 12 };

    let comments = [
        {id:0,author:'Filip',content:"Comment 1"},
        {id:1,author:"Simona",content:"Comment 2"},
        {id:2,author:"Marko",content:"Email in Spam"}
        
    ];
    
    let registracija = [
        {grad:{naselba:'N1',ulica:'Ul.1'},oznaka:'SK-0000-AB'},
        {grad:{naselba:'N2',ulica:'Ul.2'},oznaka:'GV-0000-AB'},
        {grad:{naselba:'N3',ulica:'Ul.3'},oznaka:'TE-0000-AB'}
    ]
    let cars = [
        {brand:"Ford",model:"Fiesta",year:2010,plates:registracija[0]},
        {brand:"Opel",model:"Astra",year:2020,plates:registracija[1]},
        {brand:"VW",model:"Polo",year:2025,plates:registracija[2]}
    ]

    // function handleChangedValue(){
    //     setPromenliva('Vrednost 2');
        
    // }

    useEffect(()=>{
        console.log("This is Component Did Mount")
    },[])

    return (
        <div id='app'>
            {/* <Comments listOfComments={comments} datum={'06/04/2026'}/>
            <hr/>
            <Car vozila={cars}/>
            <hr/>
            <Domashno 
                korisnik1={user1} 
                korisnik2={user2} 
                korisnik3={user3} 
                korisnik4={user4} 
                /> */}
                <p>State: {promenliva}</p>
                <button onClick={()=>{setPromenliva('Nova')}}>Change My Value</button>
            {/* <StateClassExample/> */}
            <br/>
            <br/>
                <p>Brojace: {brojac}</p>
                <img src={'https://mediaproxy.tvtropes.org/width/1200/https://static.tvtropes.org/pmwiki/pub/images/batman_91.png'}
                width={"450px"}
                height={"500px"}
                onClick={()=>{setBrojac(brojac + 1)}}
                />
        </div>
    )
}