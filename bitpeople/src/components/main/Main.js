import React from "react";
import { useEffect, useState } from 'react';
import { User } from '../user/User';
import { getData } from '../../Api'
import SearchIcon from '@material-ui/icons/Search';
import './Main.scss';

const Main = (props) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        getData().then(data => setData(data.results))
    }, [])

    return (
        <>
            <div className="main">
                <div className="search">
                    <SearchIcon className="searchIcon" />
                    <input type="text" placeholder="Search user"></input>
                </div>
            </div>

            <div className="text_right">
                <span>Male 8</span>
                <span>Female:7</span>
            </div>

            <ul className="listPeople">
                {data.map(u => <User user={u} />)}
            </ul>

        </>


    )


}
console.log(Main)


export { Main };
