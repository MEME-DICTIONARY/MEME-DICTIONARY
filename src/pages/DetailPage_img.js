export default function LandingPage() {
    function onClick() {
        //각 원 article 중앙 translate 애니메이션, /home으로 이동
    }
    return (
    <div>
        <div class="header">
                <div class ="circleparent">
                    <div class = "circle1"></div>
                    <div class = "circle2"></div>
                    <div class=  "circle3"></div>
                </div>
                <button class="hamburgerbtn"><img class="hamburgerimg" src="png/햄버거.png"/></button>
                <div class="searchparent">
                    <input class="searchbox"  type="text" style="color:white"/>
                    <button class="searchbtn"><img class="searchimg" src="png/검색.png"/></button>
                </div>
                <button class="personbtn"><img class="personimg" src="png/사람.png"/></button>
        </div>
    
        <div class="detailPage_">
                <h1 class="title">무야호</h1>
                <img class="bodyimg" src="png/무야호.png"/>
                <P class="content">무한도전 197화 "알래스카 편"에서 방영된 장면으로, 무한도전을 안다고 얘기하신 뒤 외치신 의미불명의 말. 그만큼 신날때 사용하면 유용한짤이다 </P>
                <div class="hashtagparent">
                    <div class=" hashtag"> #무한도전</div>
                    <div class=" hashtag"> #무야호</div>
                    <div class=" hashtag"> #웃긴짤</div>
                </div>

                <div class="buttonparent">
                    <button class="bottombtn"><img class="buttonimg" src="png/좋아요.png"/>20</button>
                    <button class="bottombtn"><img class="buttonimg" src="png/신고.png"/>20</button>
                    <button class="bottombtn"><img class="bookmarkimg" src="png/북마크.png"/></button>
                </div>
        </div>
        
            <hr style="border:1px color= silver;" width="100%"></hr>


            <h3 class="commentWord">댓글 3개</h3>
            <input class="comment" type="text" placeholder="  로그인 후 이용 가능합니다."></input>
            <button class="commentbtn">등록</button>

        </div>)}
