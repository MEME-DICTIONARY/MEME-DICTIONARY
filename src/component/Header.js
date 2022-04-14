import React from "react";
import '../assets/style/Header.module.css';

function Header(props) {
  return (
    <div className='headcontainer'>
      <button className="header_HamburgerBtn" onClick={props.openCategoryModal}>
        <img className="header_HamburgerImg" src={require("../assets/img/detailPage/hamburger.PNG")} alt="햄버거 아이콘" />
      </button>
      <article className="header_CircleParent">
        <div className="header_Circle1"></div>
        <div className="header_Circle2"></div>
        <div className="header_Circle3"></div>
      </article>
      <article className="header_SearchParent">
        <input className="header_SearchBox" type="text" style={{ color: 'white' }} />
        <button className="header_SearchBtn">
          <img className="header_SearchImg" src={require("../assets/img/detailPage/search.PNG")} alt="검색아이콘" />
        </button>
      </article>
      <button className="header_PersonBtn">
        <img className="header_PersonImg" src={require("../assets/img/detailPage/person.PNG")} alt="사람아이콘" />
      </button>
      <br />
      <br />
      <hr width="99%" style={{ marginbottom: '0' }} />
    </div >
  )
}
export default Header;