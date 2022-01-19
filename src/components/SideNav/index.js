import React from 'react'
import { useLocation, Link as RouterLink } from "react-router-dom";
import homeWhite from '../../assets/svg/home-white.svg'
import homeGray from '../../assets/svg/home-grey.svg'
import movieWhite from '../../assets/svg/movie-white.svg'
import peopleWhite from '../../assets/svg/people-white.svg'
import movieGray from '../../assets/svg/movie-grey.svg'
import peopleGray from '../../assets/svg/people-grey.svg'

// const tabData = [
//     {
//       label: 'Nigerian Jollof',
//       content: 'Perhaps the greatest dish ever invented.',
//     },
//     {
//       label: 'Pounded Yam & Egusi',
//       content:
//         'Perhaps the surest dish ever invented but fills the stomach more than rice.',
//     },
//   ]


function SideNav() {
    const location = useLocation()
    return (
        <div class="bg-white w-1/4 h-screen drop-shadow-lg">
            <div class="py-16">
                <p class="text-3xl font-bold">Star Wars</p>
                <p class="text-lg font-normal">Library</p>
            </div>
            <div class="px-12">
                <RouterLink to="/home">
                    <div class="py-2">
                    {location.pathname.split('/')[1] === 'home' ? (
                        <div class="flex flex-row align-center rounded-lg bg-blue-800 h-10">
                            <div class="flex align-center px-4">
                                <img alt="home white icon" src={homeWhite}/>
                            </div>
                            <div class="align-center">
                                <p class="text-white my-1.5 font-normal text-lg">Home</p>
                            </div>
                        </div>
                    ) : (
                        <div class="flex flex-row align-center rounded-lg h-10">
                            <div class="flex align-center px-4">
                                <img alt="home gray icon" src={homeGray}/>
                            </div>
                            <div class="align-center">
                                <p class="my-1.5 font-normal text-lg">Home</p>
                            </div>
                        </div>
                    )}
                    </div>
                </RouterLink>
                <RouterLink to="/films">
                <div class="py-2">
                {location.pathname.split('/')[1] === 'films' ? (
                    <div class="flex flex-row align-center rounded-lg bg-blue-800 h-10">
                        <div class="flex align-center px-4">
                                <img alt="movie white icon" src={movieWhite}/>
                        </div>
                        <div>
                            <p class="text-white my-1.5 font-normal text-lg">Films</p>
                        </div>
                    </div>
                ) : (
                    <div class="flex flex-row align-center rounded-lg h-10">
                        <div class="flex align-center px-4">
                                <img alt="movie gray icon" src={movieGray}/>
                        </div>
                        <div>
                            <p class="my-1.5 font-normal text-lg">Films</p>
                        </div>
                    </div>
                )}
                </div>
                </RouterLink>
                <RouterLink to="/characters">
                <div class="py-2">
                {location.pathname.split('/')[1] === 'characters' ? (
                    <div class="flex flex-row align-center rounded-lg bg-blue-800 h-10">
                        <div class="flex align-center px-4">
                            <img alt="people white icon" src={peopleWhite}/>
                        </div>
                        <div>
                            <p class="text-white my-1.5 font-normal text-lg">Characters</p>
                        </div>
                    </div>
                ) : (
                    <div class="flex flex-row align-center rounded-lg h-10">
                        <div class="flex align-center px-4">
                                <img alt="people gray icon" src={peopleGray}/>
                        </div>
                        <div>
                            <p class="my-1.5 font-normal text-lg">Characters</p>
                        </div>
                    </div>
                )}
                </div>
                </RouterLink>
            </div>
        </div>
    )
}

export default SideNav