import React, { useState, useEffect } from 'react'
import { useQuery } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import { Button } from '@chakra-ui/react'
import { GET_ALL_CHARACTERS } from '../apollo/queries';
import DropdownMenu from '../components/DropdownMenu';
import InputSearch from '../components/InputSearch';
import PanelWhite from '../components/Panel';
import MemoizedPagination from '../components/Pagination';
import LoadingComponent from '../components/LoadingComponent';

function Characters({ dataCharacters }) {
    const itemsPerPage = 10;
    const [allDataCharacters, setAllDataCharacters] = useState([]);
    const [perPageCharacters, setPerPageCharacters] = useState([]);
    const [filterGender, setFilterGender] = useState("");
    const [filterSkin, setFilterSkin] = useState("");
    const [filterText, setFilterText] = useState("");
    const [pageOffset, setPageOffset] = useState(0);
    const [filteredCharacters, setFilteredCharacters] = useState([]);
    const [dataLength, setDataLength] = useState(0);
    const { data, loading, error } = useQuery(GET_ALL_CHARACTERS, {
        onCompleted: (data) => {
            if(dataCharacters){
                setAllDataCharacters(dataCharacters);
                setFilteredCharacters(dataCharacters);
                setPerPageCharacters(dataCharacters.slice(0, itemsPerPage));
                setDataLength(dataCharacters.length);
            }else{
                setAllDataCharacters(data.allPeople.people);
                setFilteredCharacters(data.allPeople.people);
                setPerPageCharacters(data.allPeople.people.slice(0, itemsPerPage));
                setDataLength(data.allPeople.people.length);
            }
        }
    });

    useEffect(() => {
        
    },[data, loading]);

    const navigate = useNavigate()
    const filterCharacters = (filterStr) => {
        setFilterText(filterStr);
        let charListTmp = allDataCharacters.filter((character) => {
            let characterGender = character.gender.replace(/(^\w{1}|\.\s*\w{1})/gi, function(toReplace) {
                return toReplace.toUpperCase();
            });
            let characterfilterGender = filterGender.replace(/(^\w{1}|\.\s*\w{1})/gi, function(toReplace) {
                return toReplace.toUpperCase();
            });
            if(characterGender.includes(characterfilterGender) && character.skinColor.includes(filterSkin) && character.name.toLowerCase().includes(filterStr)){
                return character
            }
            return ""
        })
        setFilteredCharacters(charListTmp)
        setDataLength(charListTmp.length)
        setPerPageCharacters(charListTmp.slice(0, itemsPerPage));
        }
    const filterGenderFunc = (filterStr) => {
        if(filterStr === 'allGender') 
            filterStr = '';
        setFilterGender(filterStr);
        let charListTmp = allDataCharacters.filter((character) => {
            let characterGender = character.gender.replace(/(^\w{1}|\.\s*\w{1})/gi, function(toReplace) {
                return toReplace.toUpperCase();
            });
            let characterfilterGender = filterStr.replace(/(^\w{1}|\.\s*\w{1})/gi, function(toReplace) {
                return toReplace.toUpperCase();
            });
            if(characterGender.includes(characterfilterGender) && character.skinColor.includes(filterSkin) && character.name.toLowerCase().includes(filterText)){
                return character
            }
            return ""
        })
        setFilteredCharacters(charListTmp)
        setDataLength(charListTmp.length)
        setPerPageCharacters(charListTmp.slice(0, itemsPerPage));
    }
    const filterSkinFunc = (filterStr) => {
        if(filterStr === 'allSkin') 
            filterStr = '';
        setFilterSkin(filterStr);
        // let filter = filterStr;
        let charListTmp = allDataCharacters.filter((character) => {
            let characterGender = character.gender.replace(/(^\w{1}|\.\s*\w{1})/gi, function(toReplace) {
                return toReplace.toUpperCase();
            });
            let characterfilterGender = filterGender.replace(/(^\w{1}|\.\s*\w{1})/gi, function(toReplace) {
                return toReplace.toUpperCase();
            });
            if(characterGender.includes(characterfilterGender) && character.skinColor.includes(filterStr) && character.name.toLowerCase().includes(filterText)){
                return character
            }
            return ""
        })
        setFilteredCharacters(charListTmp)
        setDataLength(charListTmp.length)
        setPerPageCharacters(charListTmp.slice(0, itemsPerPage));
    }
    const filterReset = () => {
        setFilterGender("");
        setFilterSkin("");
        setFilterText("");
        // let filter = filterStr;
        let charListTmp = allDataCharacters.filter((character) => {
            if(character.gender.includes('') && character.skinColor.includes('') && character.name.toLowerCase().includes('')){
                return character
            }
            return ""
        })
        setFilteredCharacters(charListTmp)
        setDataLength(charListTmp.length)
        setPerPageCharacters(charListTmp.slice(0, itemsPerPage));
    }
    const renderPageItems = //useCallback(
        (newOffset) => {
            setPageOffset(newOffset);
            let endOffset = newOffset + itemsPerPage;
            setPerPageCharacters(filteredCharacters.slice(newOffset, endOffset));
        }
    //     ,
    //     [allDataCharacters, perPageCharacters, filteredCharacters, filterGender, filterSkin, filter],
    // )
    const genderList = ['allGender', 'male', 'female', 'n/a']
    const skinList = ['allSkin', 'green', 'fair', 'light']
    if (error) {
    return <p>{error.message}</p>;
    }

    return (
        <div>
            <PanelWhite>
                <div className="flex align-center">
                    <InputSearch filterList={filterCharacters} valueInput={filterText} />
                    <div className="flex align-center rounded-lg drop-shadow-md mx-4 my-4">
                        <DropdownMenu data={genderList} selectedOption={filterGenderFunc} valueSelect={filterGender}/>
                        <DropdownMenu data={skinList} selectedOption={filterSkinFunc} valueSelect={filterSkin}/>
                    </div>
                    <div className="flex align-center">
                        <Button colorScheme='teal' variant='outline' className="my-auto" onClick={() => {
                            filterReset();
                        }}>Reset</Button>
                    </div>
                </div>
                <div>
                {loading ? (
                    <LoadingComponent />
                    ): (
                <table>
                    <thead>
                        <tr>
                            <th class="px-6 py-3 font-light">NO.</th>
                            <th class="w-3/12 py-3 font-light">NAME</th>
                            <th class="w-4/12 py-3 font-light">GENDER</th>
                            <th class="w-3/12 py-3 font-light">BIRTH YEAR</th>
                            <th class="w-3/12 py-3 font-light">SPECIES</th>
                        </tr>
                    </thead>
                    <tbody >
                        {perPageCharacters.map((character, key) => {
                            return(
                            <tr key={key} class="odd:bg-white even:bg-slate-100 h-12 hover:bg-slate-300" onClick={() => navigate(`/characters/${character.id}`)}>
                                <td>{key+1+pageOffset}</td>
                                <td>{character.name}</td>
                                <td>{character.gender}</td>
                                <td>{character.birthYear}</td>
                                <td>{character.species ? character.species.name : "null"}</td>
                            </tr>
                            )
                        })}
                        
                    </tbody>
                </table>
                    )}
                </div>
                <div>
                    <MemoizedPagination dataLength={dataLength} pageItemOffset={renderPageItems}/>
                </div>
            </PanelWhite>
        </div>
    )
}

export default Characters;