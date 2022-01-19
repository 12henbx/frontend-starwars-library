import React, { useState, useCallback } from 'react';
import { useQuery } from "@apollo/client";
import { GET_ALL_FILMS } from '../apollo/queries';
import { useNavigate } from "react-router-dom";
import LoadingComponent from '../components/LoadingComponent';
import InputSearch from '../components/InputSearch';

function Films() {
    const [filteredFilms, setFilteredFilms] = useState([]);
    const { data, loading, error } = useQuery(GET_ALL_FILMS, {
        onCompleted: (data) => setFilteredFilms(data.allFilms.films)
    });
    const navigate = useNavigate()
    const filterFilms = useCallback(
        (filterStr) => {
            setFilteredFilms(data.allFilms.films.filter((film) => film.title.toLowerCase().includes(filterStr)))
        },
        [filteredFilms],
    )
    if (error) {
    return <p>{error.message}</p>;
    }

    return (
        <div className="container px-4 my-20 h-5/6 bg-zinc-50 rounded-3xl bg-white">
            <div class="px-6 py-4">
                <InputSearch filterList={filterFilms} />
                {loading ? (
                    <LoadingComponent />
                    ): (
                    <table>
                        <thead>
                            <tr>
                                <th class="px-6 py-3 font-light">NO.</th>
                                <th class="w-5/12 py-3 font-light">TITLE</th>
                                <th class="w-4/12 py-3 font-light">DIRECTOR</th>
                                <th class="w-3/12 py-3 font-light">RELEASE DATE</th>
                            </tr>
                        </thead>
                        <tbody >
                            {filteredFilms.map((film, key) => {
                                return(
                                <tr key={key} class="odd:bg-white even:bg-slate-100 h-12 hover:bg-slate-300" onClick={() => navigate(`/films/${film.id}`)}>
                                    <td>{key+1}</td>
                                    <td>{film.title}</td>
                                    <td>{film.director}</td>
                                    <td>{film.releaseDate}</td>
                                </tr>
                                )
                            })}
                            
                        </tbody>
                    </table>
                    )
                }
            
            </div>
        </div>
    )
}

export default Films;