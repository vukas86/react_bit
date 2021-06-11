import React, { Component } from 'react';
import "./Videos.css";

const key = "AIzaSyAOk3Z68hHEJgXvaE1WAY6gpr4BZmAE41c";
const url = "https://youtube.googleapis.com/youtube/v3/search";
const query = "?part=snippet&maxResults=15&type=video&key=" + key;

class Videos extends Component {

    getVideos = () => {
        fetch(url + query)
            .then(data => data.json())
    }

}