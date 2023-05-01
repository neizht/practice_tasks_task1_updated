import './MyAppStyle.css';
import React from 'react';
import data from '../givenData.json';
import logo from '../img/logoSvg.png';
import avatar from '../img/avatar.png';
import puzle from '../img/puzle.png';

export default class MyApp extends React.Component {

    state = {
        btnClicked: false,
    }

    selectedMovieId = null;

    render() {
        return (
            <div className="container">
                <div className="header">
                    <span className='logo'>
                        <img src={logo} alt="" width={'263px'} height={'97px'}/>
                    </span>
                    <span className='creator'>
                        <img src={avatar} alt="" style={{width:'44px', height:'44px'}} />
                        <p style={{color:'#FF6100', fontWeight:'600', fontSize:'18px'}}>Created by George</p>
                    </span>
                </div>
                <div className="randomButtonSection">
                <button className='myRandomButton' onClick={() => {
                    let randomButtonInnerText = document.querySelector('#randomButtonInnerText');
                    if(this.state.btnClicked){
                        console.log('deactivating...');
                        randomButtonInnerText.innerHTML = 'Random Rating';
                        this.setState({
                            btnClicked: false
                        })
                        return;
                    }
                    console.log('activating...');

                    let myInterval = setInterval(() => {
                        if(!this.state.btnClicked){
                            clearInterval(myInterval);
                            return;
                        }
                        setRandomRatingForRandomItem();
                        this.forceUpdate();
                    }, 2000)
                    randomButtonInnerText.innerHTML = 'Stop';
                    this.setState({
                        btnClicked: true
                    })
                }}> <img src={puzle} alt="" style={{width:'18px', marginRight:'10px'}}/> <span id='randomButtonInnerText'>Random Rating</span></button>
                </div>
                <ul className='myMoviesList'>
                    {reorderArr(data.body).map(el => <li key={el.id} onClick={() => {
                        console.log(el.rating);
                    }} onLoad={() => {
                        setRandomRating(el);
                        drawRating(el.rating, el.id);
                        this.forceUpdate();
                    }}>
                        <span style={{display:'flex'}}>
                            <img src={el.coverUrl} alt="" width={266} height={'150px'} style={{marginRight:'52px'}}/>
                            <span style={{marginTop:'19px'}}>
                                <h1 style={{color:`${el.color}`, marginBottom:'5px'}}>{`${el.name}`}</h1>
                                <h2>{`${el.single}`}</h2>
                                <div className='ratingSystem'>
                                    <span style={{fontSize:'12px', marginRight:'10px'}}>
                                        Rate me:
                                    </span>
                                    <span className='stars'>
                                        <i className='fa-solid fa-star' id={`rating-1-${el.id}`} style={{color:`${el.color}`, opacity:'35%'}} onClick={(e) => {
                                            el.rating = 1;
                                            drawRating(el.rating, el.id);
                                            this.forceUpdate();
                                            console.log(`my rating is ${el.rating}!!!`);
                                        }}></i>
                                        <i className='fa-solid fa-star' id={`rating-2-${el.id}`} style={{color:`${el.color}`, opacity:'35%'}} onClick={(e) => {
                                            el.rating = 2;
                                            drawRating(el.rating, el.id);
                                            this.forceUpdate();
                                            console.log(`setted ${el.rating} as a rating for ${el.name}`);
                                        }}></i>
                                        <i className='fa-solid fa-star' id={`rating-3-${el.id}`} style={{color:`${el.color}`, opacity:'35%'}} onClick={(e) => {
                                            el.rating = 3;
                                            drawRating(el.rating, el.id);
                                            this.forceUpdate();
                                            console.log(`setted ${el.rating} as a rating for ${el.name}`);
                                        }}></i>
                                        <i className='fa-solid fa-star' id={`rating-4-${el.id}`} style={{color:`${el.color}`, opacity:'35%'}} onClick={(e) => {
                                            el.rating = 4;
                                            drawRating(el.rating, el.id);
                                            this.forceUpdate();
                                            console.log(`setted ${el.rating} as a rating for ${el.name}`);
                                        }}></i>
                                        <i className='fa-solid fa-star' id={`rating-5-${el.id}`} style={{color:`${el.color}`, opacity:'35%'}} onClick={(e) => {
                                            el.rating = 5;
                                            drawRating(el.rating, el.id);
                                            this.forceUpdate();
                                            console.log(`setted ${el.rating} as a rating for ${el.name}`);
                                        }}></i>
                                        <i className='fa-solid fa-star' id={`rating-6-${el.id}`} style={{color:`${el.color}`, opacity:'35%'}} onClick={(e) => {
                                            el.rating = 6;
                                            drawRating(el.rating, el.id);
                                            this.forceUpdate();
                                            console.log(`setted ${el.rating} as a rating for ${el.name}`);
                                        }}></i>
                                        <i className='fa-solid fa-star' id={`rating-7-${el.id}`} style={{color:`${el.color}`, opacity:'35%'}} onClick={(e) => {
                                            el.rating = 7;
                                            drawRating(el.rating, el.id);
                                            this.forceUpdate();
                                            console.log(`setted ${el.rating} as a rating for ${el.name}`);
                                        }}></i>
                                        <i className='fa-solid fa-star' id={`rating-8-${el.id}`} style={{color:`${el.color}`, opacity:'35%'}} onClick={(e) => {
                                            el.rating = 8;
                                            drawRating(el.rating, el.id);
                                            this.forceUpdate();
                                            console.log(`setted ${el.rating} as a rating for ${el.name}`);
                                        }}></i>
                                        <i className='fa-solid fa-star' id={`rating-9-${el.id}`} style={{color:`${el.color}`, opacity:'35%'}} onClick={(e) => {
                                            el.rating = 9;
                                            drawRating(el.rating, el.id);
                                            this.forceUpdate();
                                            console.log(`setted ${el.rating} as a rating for ${el.name}`);
                                        }}></i>
                                        <i className='fa-solid fa-star' id={`rating-10-${el.id}`} style={{color:`${el.color}`, opacity:'35%'}} onClick={(e) => {
                                            el.rating = 10;
                                            drawRating(el.rating, el.id);
                                            this.forceUpdate();
                                            console.log(`setted ${el.rating} as a rating for ${el.name}`);
                                        }}></i>
                                    </span>
                                </div>
                            </span>
                        </span>
                        <span className="colorBlock" style={{height:'150px', width:'9px', minHeight:'150px', minWidth:'9', backgroundColor:`${el.color}`}}></span>
                    </li>)}   
                </ul>
            </div>
        )
    }
}

const drawRating = (settedRating, elID) => {
    for(let i = 1; i <= 10; i++) {
        document.querySelector(`#rating-${i}-${elID}`).style.opacity = '35%';
    }
    for(let i = 1; i <= settedRating; i++) {
        document.querySelector(`#rating-${i}-${elID}`).style.opacity = '100%';
    }
}
const setRandomRatingForRandomItem = () => {
    let randomElementIndex = Math.floor(Math.random() * data.body.length);
    let randomRating = Math.floor(Math.random() * (10) + 1);

    data.body[randomElementIndex].rating = randomRating;
    drawRating(randomRating, data.body[randomElementIndex].id);
    console.log(data.body);
}
const setRandomRating = (element) => {
    element.rating = Math.floor(Math.random() * (10) + 1);

}
const reorderArr = (array) => {    
    return ([...array].sort((a,b) => b.rating - a.rating));
}