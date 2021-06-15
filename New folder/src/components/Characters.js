
import { useState, useEffect } from 'react';
import { Character } from './Character';

const Characters = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        getData()
    }, [])

    const getData = () => {
        fetch('https://rickandmortyapi.com/api/character/')
            .then(results => results.json())
            .then(data => setData(data.results))
    }

    const renderCharacters = () => {
        return data.map(item => <Character data={item} />)
    }

    return (
        <div className="characters">{renderCharacters()}</div>
    )
}

export { Characters }