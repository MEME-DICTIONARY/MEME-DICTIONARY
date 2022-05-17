import styled from "styled-components";
import { Link } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";

function FirstContainer({ hashTagList }) {
  return (
    <FirstContainerWrapper>
      <SearchBar>
        <SearchBarInput
          type="text"
          id="search"
          placeholder="키워드를 입력하여 밈을 검색해보세요!"
        />
        <Link to="/search">
          <AiOutlineSearch className="search__icon" size="50" color="#828282" />
        </Link>
      </SearchBar>
      <HashTagLists>
        {hashTagList.map((hashTag) => {
          return <HashTagList key={hashTag}>{hashTag}</HashTagList>;
        })}
      </HashTagLists>
    </FirstContainerWrapper>
  );
}

//첫 번째 컨테이너
const FirstContainerWrapper = styled.div`
  background-color: #232332;
  height: 820px;
  padding: 0 175px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SearchBar = styled.div`
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

const SearchBarInput = styled.input`
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

const HashTagLists = styled.ul`
  display: flex;
  text-align: end;
  justify-content: end;
  width: 100%;
  margin-top: 24px;
`;

const HashTagList = styled.li`
  color: #fff;
  margin-right: 25px;
  cursor: pointer;
`;

export default FirstContainer;