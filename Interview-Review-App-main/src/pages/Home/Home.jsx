import React from "react";
import "./Home.scss";
import Header from "../../components/Header/Header";
import Card from "../../components/Card/Card";
import { MdSearch } from "react-icons/md";

const Home = ({ candidates }) => {
  return (
    <div>
      <Header />
      <div>
        <div className="search-div">
          <input
            type="search"
            name="search"
            id="home-search"
            placeholder="Search here..."
          />
          <button id="home-search-button">
            <MdSearch size="24px" />
          </button>
        </div>
      </div>
      <section id="wrapper-section">
        <div id="people-container">
          <Card candidates={candidates} />
        </div>
      </section>
    </div>
  );
};

export default Home;
