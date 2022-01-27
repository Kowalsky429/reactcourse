import { SearchBarWrapper, StatusInfo, SearchWrapper, SearchResults } from 'components/organisms/SearchBar/SearchBar.styles';
import React, { useState, useEffect } from 'react';
import debounce from 'lodash.debounce';
import { Input } from 'components/atoms/Input/Input';
import { students } from 'mocks/data/students';
import { useStudents } from 'hooks/useStudents';

const myFunc = (e) => {
  let inputValue = e.target.value;
  return students.filter((student) => student.name.includes(inputValue));
};

export const SearchBar = () => {
  const [searchPhrase, setSearchPhrase] = useState('');
  const [matchingStudents, setMatchingStudents] = useState('');
  const { findStudents } = useStudents();

  const getMatchingStudents = debounce(async (e) => {
    const { students } = await findStudents(searchPhrase);
    setMatchingStudents(students);
  }, 500);

  useEffect(() => {
    if (!searchPhrase) return;
    getMatchingStudents(searchPhrase);
  }, [searchPhrase, getMatchingStudents]);

  return (
    <SearchBarWrapper>
      <StatusInfo>
        <p>Logged as:</p>
        <p>
          <strong>Teacher</strong>
        </p>
      </StatusInfo>
      <SearchWrapper>
        <Input onChange={(e) => setSearchPhrase(e.target.value)} value={searchPhrase} name="Search" id="Search" />
        {searchPhrase && matchingStudents.length ? (
          <SearchResults>
            {matchingStudents.map((student) => (
              <li key={student.id}>{student.name}</li>
            ))}
          </SearchResults>
        ) : null}
      </SearchWrapper>
    </SearchBarWrapper>
  );
};
