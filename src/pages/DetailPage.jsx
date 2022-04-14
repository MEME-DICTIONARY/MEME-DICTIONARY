import React from 'react';
import '../assets/style/DetailPage.module.css';
import '../assets/style/Header.module.css';
import Header from '../component/Header.js';


function DetailPage() {
  const modal=document.querySelector(".categoryModal");
  function openCategoryModal(){
    
    modal.classList.remove("categoryModalHidden");
  }
  function closeCategoryModal(){
    modal.classList.add("categoryModalHidden");
  }
  
  return (
    <div>
     
    <Header onClick={openCategoryModal}></Header>
      <div className="detailPage_WordBody_Container  detailPage_WordBody_Hidden">
      <h1 className="detailPage_title">어쩔티비</h1>
      <h2 className="detailPage_WordMeaning">뜻</h2>
      <h2 className="detailPage_WordExample">예문</h2>
      <p className="detailPage_wordContent">
        줄바뀌니??
        어쩌라고, 어쩔건데, 안물어봤는데 등의 의미. 상대방이 귀찮게 하거나 대답하기 곤란한 질문을 했을 경우에 하는 말로, 상대방을 도발하는 의미
      </p>
      <br />
      <br />
      <p className="detailPage_wordContent">
        "야 너 못생김" "어쩔티비"
      </p>

      <div className="detailPage_hashtagParent">
        <div className="detailPage_hashtag">#어쩔티비</div>
        <div className="detailPage_hashtag">#저쩔티비</div>
        <div className="detailPage_hashtag">#신조어</div>
      </div>

      <div className="detailPage_buttonParent">
        <button className="detailPage_bottombtn">
          <img className="detailPage_buttonimg" src={require("../assets/img/detailPage/like.png")} alt='좋아요' />
          20
        </button>
        <button className="detailPage_bottombtn">
          <img className="detailPage_buttonimg" src={require("../assets/img/detailPage/report.png")} alt='신고'/>
          20
        </button>
        <button className="detailPage_bottombtn">
          <img className="detailPage_bookmarkimg" src={require("../assets/img/detailPage/bookmark.png")}  alt='북마크'/>
        </button>
      </div>
    </div>

    <div className="detailPage_imgBody_Container detailPage_imgBody_Hidden">
      <h1 className="detailPage_title">무야호</h1>
      <img className="detailPage_bodyImg" src={require("../assets/img/detailPage/무야호.png")} alt="무야호" />
      <p className="detailPage_imgContent">
          무한도전 197화 '알레스카 편'에 방영된 장면으로, 무한도전을 안다고 얘기하신 뒤 외치신 의미불명의 말이다. 그만큼 신날때 사용하면 유용한 짤이다.
      </p>
      <div className="detailPage_hashtagParent">
        <div className="detailPage_hashtag">#무한도전</div>
        <div className="detailPage_hashtag">#무야호</div>
        <div className="detailPage_hashtag">#신조어</div>
      </div>

      <div className="detailPage_buttonParent">
        <button className="detailPage_bottombtn">
          <img className="detailPage_buttonimg" src={require("../assets/img/detailPage/like.png")} alt="좋아요" />
          20
        </button>
        <button className="detailPage_bottombtn">
          <img className="detailPage_buttonimg" src={require("../assets/img/detailPage/report.png")} alt="신고"/>
          20
        </button>
        <button className="detailPage_bottombtn">
          <img className="detailPage_bookmarkimg" src={require("../assets/img/detailPage/bookmark.png")} alt="북마크" />
        </button>
      </div>
    </div>

    <div className="detailPage_Bottom_Container">
      <h3 className="detailPage_CommentTitle">댓글 3개</h3>
      <input
        className="detailPage_Comment"
        type="text"
        placeholder="  로그인 후 이용 가능합니다."
      />
      <button className="detailPage_commentbtn">등록</button>
    </div>
    <br />
    <br />
    <hr />
    <div className="categoryModal categoryModalHidden">
      <div className="categoryModal_overlay" onClick={closeCategoryModal}></div>
      <div className="categoryModal_content">
        <h2 className="category_title">용어</h2>
        <hr />
        <div className="categoryButton_container">
          <button className="categoryButton_word">ㄱ</button>
          <button className="categoryButton_word">ㄴ</button>
          <button className="categoryButton_word">ㄷ</button>
          <button className="categoryButton_word">ㄹ</button>
          <button className="categoryButton_word">ㅁ</button>
          <button className="categoryButton_word">ㅂ</button>
          <button className="categoryButton_word">ㅅ</button>
          <button className="categoryButton_word">ㅇ</button>
          <button className="categoryButton_word">ㅈ</button>
          <button className="categoryButton_word">ㅊ</button>
          <button className="categoryButton_word">ㅋ</button>
          <button className="categoryButton_word">ㅌ</button>
          <button className="categoryButton_word">ㅍ</button>
          <button className="categoryButton_word">ㅎ</button>
        </div>
        <br />
        <h2 className="category_title">짤</h2>
        <hr />
        <div className="categoryButton_container">
          <button className="categoryButton_img">TV</button>
          <button className="categoryButton_img">영화</button>
          <button className="categoryButton_img">커뮤니티</button>
          <button className="categoryButton_img">기타</button>
        </div>
      </div>
    </div>
    </div>
  );

}

export default DetailPage;
