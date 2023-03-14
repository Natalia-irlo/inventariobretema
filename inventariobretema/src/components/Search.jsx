import React from 'react';
import agarimo from '../assets/img/agarimo.jpg';
import '../components/Searchjs.js';

const Search = () => {

    return (
<>
    <div className="content-search">
        <input type="text" placeholder="Find your vivence" class="search" id="search-input"></input>
    </div>

    <div className="container mt-3">
        <table className="table table-borderless" id="songs-table">
            <thead>
                <tr>
                </tr>
            </thead>
            <tbody>
                <br />
                <tr>
                    <br />
                    <td><img className="Dos sm-3" src={agarimo} alt="imagen" width={60} />lago</td>
                    <td><img className="Dos sm-3" src={agarimo} alt="imagen" width={60} />cmontaña</td>
                    <td><img className="Dos sm-3" src={agarimo} alt="imagen" width={60} />Destino3</td>
                    <td><img className="Dos sm-3" src={agarimo} alt="imagen" width={60} />cascada</td>
                </tr>            
            </tbody>
        </table>
    </div>
    
</>
    )
}

export default Search;