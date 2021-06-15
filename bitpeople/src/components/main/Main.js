import React from "react";
import { useEffect, useState } from 'react';
import { User } from '../user/User';
import { getData } from '../../Api'

const Main = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        getData().then(data => setData(data))
    }, [])

    return (
        <div className="main">
            <div className="search">
                <img src="icon.svg" alt="icon"></img>
                <input type="text" placeholder="Search user"></input>
            </div>
            <div className="text right">
                <span>Male 8</span>
                <span>Female:7</span>
            </div>
            <ul className="listPeople">
                <User />
            </ul>

        </div>
    )
}
console.log(Main)

export { Main };
