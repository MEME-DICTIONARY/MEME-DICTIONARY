
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
            <h1 class="word">어쩔티비</h1>

           
                <h2 class="meaning">뜻</h2>
                <h2 class="example">예문</h2>


                <p>  어쩌라고, 어쩔건데 안물어봤는데 등의 의미. 상대방이 귀찮게 하거나 대답하기 곤란한 질문을 했을 경우에 하는 말로. 상대방을 도발하는 의미</p>
                <br/>
                <p class="sentence"> "야 너 못생김" "어쩔티비" "어쩔티비 저쩔티비 안물티비 안궁티비 어쩔냉장고 저쩔냉장고 쿠쿠루삥뽕 지금 화났죠 =? 개킹받죠? 죽이고싶죠?" </p>
           

            <div class="hashtagparent">
                <div class=" hashtag"> #어쩔티비</div>
                <div class=" hashtag"> #저쩔티비</div>
                <div class=" hashtag"> #신조어</div>
            </div>

            <div class="buttonparent">
                <button class="bottombtn"><img class="buttonimg" src="png/좋아요.png"/>20</button>
                <button class="bottombtn"><img class="buttonimg" src="png/신고.png"/>20</button>
                <button class="bottombtn"><img class="bookmarkimg" src="png/북마크.png"/></button>
            </div>
    </div>
    
        <hr style="border:1px color= silver;" width="100%"/>


        <h3>댓글 3개</h3>
        <input class="comment" type="text" placeholder="  로그인 후 이용 가능합니다."/>
        <button class="commentbtn">등록</button>

        
       


        </div>


    )
}





