import React from 'react'
import { Link as RouterLink } from "react-router-dom";

import starwars from '../assets/img/star-wars.svg'
import characterBlackIcon from '../assets/svg/people-black.svg'
import movieBlackIcon from '../assets/svg/movie-black.svg'

function Home() {
    const starwarsPg = "Star Wars is an American epic space opera multimedia franchise created by George Lucas, which began with the eponymous 1977 film and quickly became a worldwide pop-culture phenomenons."

    return (
        <div className="container px-4 pb-1 mt-20 rounded-3xl bg-white">
            <div>
                <div class="flex justify-center">
                    <img src={starwars} alt="starwars logo" class="h-32"/>
                </div>
                <div class="flex justify-center text-center">
                    <p class="w-2/5">{starwarsPg}</p>
                </div>
                <div class="flex flex-row justify-center my-16 mb-16">
                <RouterLink to="/films">
                    <div class="mx-8 transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 hover:drop-shadow-md">
                        <div>
                            <img alt="movie icon" class="h-32" src={movieBlackIcon}/>
                        </div>
                        <div>
                        <p class="font-bold text-xl">Films</p>
                        </div>
                    </div>
                    </RouterLink>
                    <RouterLink to="/characters">
                    <div class="mx-8 transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 hover:drop-shadow-md">
                        <div>
                            <img alt="person icon" class="h-28" src={characterBlackIcon}/>
                        </div>
                        <div>
                        <p class="font-bold text-xl mt-4">Characters</p>
                        </div>
                    </div>
                    </RouterLink>
                </div>
            </div>
        </div>
    )
}

export default Home;