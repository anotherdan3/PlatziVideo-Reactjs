import React from 'react';
import { connect } from 'react-redux';
import { searchVideos } from '../actions/index';
import '../assets/styles/components/Search.scss';

const Search = (props) => {
  const handleInput = (event) => {
    props.searchVideos(event.target.value);
  };
  return (
    <section className="main">
      <h2 className="main__title">¿Qué quieres ver hoy?</h2>
      <input
        type="text"
        className="searchBar"
        placeholder="Buscar..."
        onChange={handleInput}
      />
    </section>
  );
};
const mapDispatchToProps = {
  searchVideos,
};

export default connect(null, mapDispatchToProps)(Search);
