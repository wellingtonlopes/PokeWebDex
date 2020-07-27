import React, {Fragment} from 'react';
import Card from './Card';

function CardList({ pokemons }) {
    return (
        <Fragment>
            {
                pokemons.map((monster, i) => {
                    return (
                    <Card 
                        key={i}
                        name={monster.forms[0].name}
                        type={monster.types.map( type => type.type.name)}
                        sprite={monster.sprites.front_default}
                    />);
                })
            }
        </Fragment>
    );
}

export default CardList;