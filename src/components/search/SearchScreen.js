import React, { useMemo } from 'react';
import queryString from 'query-string';

import { useLocation } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../heroes/HeroCard';
import { getHeroesByName } from '../../selectors/getHeroesByName';

export const SearchScreen = ({ history }) => {

    // hook para obtener location
    const location = useLocation();    
    const { q = '' } = queryString.parse( location.search );

    const [ formValues, handleInputChange ] = useForm({
        searchText: q
    });

    const { searchText } = formValues;

    const heroesFiltered = useMemo( () => getHeroesByName(q), [q]);

    const handleSearch = (e) => {
        e.preventDefault();
        history.push(`?q=${ searchText }`);
    }

    return (
        <div>
            <h1>Search Heroes</h1>
            <hr/>

            <form
                onSubmit={ handleSearch }
            >
                <input
                    type="text"
                    placeholder="Find your hero"
                    className="form-control form-control-sm"
                    name="searchText"
                    autoComplete="off"
                    value={ searchText }
                    onChange={ handleInputChange }
                />
                <button
                    type="submit"
                    className="btn btn-primary btn-sm btn-block mt-2"
                >
                    Search
                </button>

            </form>

            <br/>

            {
                ( q !== '' && heroesFiltered.length === 0 )
                    &&
                    <div className="alert alert-danger">
                        There is no a hero with { q }
                    </div>
            }

            <div className="card-columns animate__animated animate__fadeInRight">
                {
                    heroesFiltered.map( hero => (
                        <HeroCard
                            key={ hero.id }
                            { ...hero }
                        />
                    ))
                }
            </div>


        </div>
    )
}
