import { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import { default as icSearch } from '../../assets/img/icon_search.svg';

function FirstContainer({ hashTagList }) {
  const navigator = useNavigate();

  const [input, setInput] = useState('');

  const onEnterPress = (e) => {
    if (e.key === 'Enter') {
      if (input !== '') {
        navigator(`/search/result/${input}`);
      }
    }
  };
  const onChangeSearchInput = (e) => {
    setInput(e.target.value);
  };
  return (
    <StWrapper>
      <StSearchBar>
        <StSearchBarInput
          type="text"
          id="search"
          value={input || ''}
          onChange={onChangeSearchInput}
          placeholder="키워드를 입력하여 밈을 검색해보세요!"
          onKeyDown={onEnterPress}
        />
        <StSearchIconWrapper>
          <img
            src={icSearch}
            alt="검색"
            onClick={() => {
              input && navigator(`/search/result/${input}`);
            }}
          />
        </StSearchIconWrapper>
      </StSearchBar>
      <StHashTagList>
        {hashTagList.map((hashTag) => {
          return <StHashTagItem key={hashTag}>{hashTag}</StHashTagItem>;
        })}
      </StHashTagList>
    </StWrapper>
  );
}

//첫 번째 컨테이너
const StWrapper = styled.div`
  background-color: #232332;
  height: 720px;
  padding: 0 175px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StSearchBar = styled.div`
  display: flex;
  width: 100%;
  height: 114px;
  border-radius: 30px;
  border: 3px solid transparent;
  align-items: center;
  background-image: linear-gradient(#fff, #fff),
    linear-gradient(to right, #ff0000 0%, #d422ff 50%, #2737ff 100%);
  background-origin: border-box;
  background-clip: content-box, border-box;

  .search__icon {
    padding-right: 32px;
  }
`;

const StSearchBarInput = styled.input`
  width: 100%;
  height: 50%;
  border: none;
  border-radius: 30px;
  text-align: center;
  font-size: 18px;

  &:focus {
    background: none;
  }
  &::placeholder {
    letter-spacing: 0.7px;
  }
`;

const StSearchIconWrapper = styled.div`
  & > img {
    padding-right: 30px;
  }
  &:hover {
    cursor: pointer;
  }
`;

const StHashTagList = styled.ul`
  display: flex;
  text-align: end;
  justify-content: end;
  width: 100%;
  margin-top: 24px;
`;

const StHashTagItem = styled.li`
  color: #fff;
  margin-right: 25px;
  cursor: pointer;
`;

export default FirstContainer;
