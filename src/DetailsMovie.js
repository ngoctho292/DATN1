import React, { Component } from "react";

const options = {
  method: "GET",
  url: "https://moviesdatabase.p.rapidapi.com/titles",
  params: { list: "top_boxoffice_200", year: "2022" },
  headers: {
    "X-RapidAPI-Key": "18ed8068bemsh0e28e6d1af6ef66p1a98c4jsnc64d87faea08",
    "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
  },
};

export default class DetailsMovie extends Component {
  render() {
    return (
      <div className="details">
        <h2>ada</h2>
      </div>
    );
  }
}
