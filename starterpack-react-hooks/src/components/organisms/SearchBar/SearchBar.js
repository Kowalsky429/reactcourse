import { SearchBarWrapper, StatusInfo, SearchWrapper, SearchResults, SearchResultsItem } from 'components/organisms/SearchBar/SearchBar.styles';
import React, { useState } from 'react';
import debounce from 'lodash.debounce';
import { Input } from 'components/atoms/Input/Input';
import { students } from 'mocks/data/students';
import { useStudents } from 'hooks/useStudents';
import { useCombobox } from 'downshift';

const myFunc = (e) => {
  let inputValue = e.target.value;
  return students.filter((student) => student.name.includes(inputValue));
};

export const SearchBar = () => {
  const [matchingStudents, setMatchingStudents] = useState([]);
  const { findStudents } = useStudents();

  const getMatchingStudents = debounce(async ({ inputValue }) => {
    const { students } = await findStudents(inputValue);
    setMatchingStudents(students);
  }, 500);

  const { isOpen, getToggleButtonProps, getLabelProps, getMenuProps, getInputProps, getComboboxProps, highlightedIndex, getItemProps } = useCombobox({
    items: matchingStudents,
    onInputValueChange: getMatchingStudents,
  });

  return (
    <SearchBarWrapper>
      <StatusInfo>
        <p>Logged as:</p>
        <p>
          <strong>Teacher</strong>
        </p>
      </StatusInfo>
      <SearchWrapper {...getComboboxProps()}>
        <Input {...getInputProps()} name="Search" id="Search" placeholder="search" />
        <SearchResults isVisible={isOpen && matchingStudents.length > 0} {...getMenuProps()}>
          {isOpen &&
            matchingStudents.map((item, index) => (
              <SearchResultsItem isHighlighted={highlightedIndex === index} {...getItemProps({ item, index })} key={item.id}>
                {item.name}
              </SearchResultsItem>
            ))}
        </SearchResults>
      </SearchWrapper>
    </SearchBarWrapper>
  );
};
