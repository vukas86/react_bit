import React from 'react';
import './CharacterTable.scss'
import CharacterItem from './CharacterItem';

export default function CharacterTable({datas, isLoading}) {
    return isLoading ? <h3>loading</h3> :
    <section className="contents">
        datas.map(data = >{

        })
    </section>
}

export default CharacterTable