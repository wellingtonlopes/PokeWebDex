import React from 'react';

function Card({ name, type, sprite }) {
    return (
        <div className="tc w5 bg-red dib br3 pa3 ma2 grow bw2 shadow-5">
            <div className="flex flex-column items-center">
                <img src={sprite} className='bg-light-yellow br-100 ba b--black-10' alt={`${name}`}/>             
                <h2 style={{textTransform: 'capitalize'}}>{name}</h2>
                <div className="h3 flex flex-column justify-center">
                   {type.map(element => <p className="ma1 br2 ba b--black-20 pa1 bg-light-green" style={{textTransform: 'capitalize'}}>{element}</p>)}
                </div>
            </div>
        </div>
    );
}

export default Card;