import { useCallback, useEffect, useState } from 'react'
import { useQuery } from "@apollo/client";
import { GET_FILM } from '../apollo/queries';

const useFilmDetail = (id) => {
  const [balance, setBalance] = useState()

  const fetchCharacters = useCallback(async () => {
    const { data, loading, error } = useQuery(GET_ALL_CHARACTERS, {
      onCompleted: (data) => {
          setAllDataCharacters(data.allPeople.people);
          setFilteredCharacters(data.allPeople.people);
          setPerPageCharacters(data.allPeople.people.slice(0, itemsPerPage));
          setDataLength(data.allPeople.people.length);
          // renderPageItems(0);
      }
  });
  }, [account])

  useEffect(() => {
      fetchCharacters()
  }, [id])

  return {data: 'a', loading: 'b', error: 'c'}
}

export default useFilmDetail