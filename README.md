# MEME-DICTIONARY
📖22-1 시스템종합설계 프로젝트📖

### 📌 주요 기능

**`메인페이지`**
<br>
밈 검색, 단어 밈 랭킹 조회, 이미지 밈 추천 캐러셀, 카테고리 및 로그인/마이페이지/밈 등록 모달
  
![image](https://user-images.githubusercontent.com/66051416/173975454-32de2940-eaf0-4dd2-8fd0-5d428577011a.png)![image](https://user-images.githubusercontent.com/66051416/173975947-ab5b342e-8f35-4899-8178-ed2d93393c2d.png)



**`검색결과페이지`**
<br>
- 밈과 관련된 단어를 입력하여 찾고자 하는 밈 검색
- 제목,3개의 키워드에 입력된 단어가 하나라도 일치할 시 검색 결과로 반환

![image](https://user-images.githubusercontent.com/66051416/173975854-86125103-8259-436c-be1a-6d4c3a557cd1.png)

**`상세페이지`**
<br>
- 밈의 이름과 뜻, 밈을 사용하는 방법에 대한 간단한 예시 등을 포함한 상세 정보를 보여줌 
- 좋아요, 신고하기, 북마크, 댓글 등록 기능
- 신고 누적횟수 3번 시 금지 단어로 자동 등록


![image](https://user-images.githubusercontent.com/66051416/173976408-6283417c-73c0-4a2b-a471-eb7c36760bea.png)

**`밈 등록페이지`**
<br>
- 사용자가 직접 밈을 등록할 수 있는 페이지
- 필터링 기능을 통해 DB에 금지단어로 저장된 밈 등록 불가

![image](https://user-images.githubusercontent.com/66051416/173976632-e929451c-35ef-4433-a615-32092889b5ec.png)

**`마이페이지`**
<br>
- 유저가 직접 업로드한 밈과 북마크한 밈을 저장/보관 가능
- 짤/용어를 나누어 이미지, 단어 게시글  각각 확인 가능
- 작성한 댓글, 댓글을 작성한 게시글의 제목, 댓글의 내용, 댓글 작성 시간 확인 가능

![image](https://user-images.githubusercontent.com/66051416/173976791-87c1e35c-f13d-46b8-bed2-0e071946672b.png)

### 🛠️ 기술 스택
![image](https://user-images.githubusercontent.com/66051416/173978447-924ccb0f-8351-4bd3-a151-d7fd8065c90e.png)




### 📦 폴더 구조 
```
├── .github : 워크플로우 관련 파일
├── public : index.html과 파비콘이 있는 곳
├── src
│   ├── api  : API 처리 관련 파일 작성 
│   ├── assets
│   │   ├── img : 이미지, 아이콘 파일
│   │   └── style : 스타일링 관련 CSS 파일
│   ├── component 
│   │   ├── base : 공통으로 사용되는 컴포넌트 파일 작성
│   │   ├── authpage : 로그인 및 회원가입 관련 컴포넌트 파일 작성
│   │   ├── mainpage : 메인페이지 관련 컴포넌트 파일 작성
│   │   └── detailpage : 디테일페이지 관련 컴포넌트 파일 작성
│   └── pages : 화면에 보이는 뷰 관련 파일
└── 각종 세팅 파일들과 리드미 파일
```

### 🏃 역할 분담
| 팀원   | 역할             |
| ------ | :--------------- |
| 이서영 | 랜딩페이지, 메인페이지, 검색결과페이지, 밈 등록페이지   |
| 윤혜진 | 상세페이지, 마이페이지, 헤더 및 각종 모달창 |

### ⚙️ Dependencies Module
```
"dependencies": {
    "@testing-library/jest-dom": "^5.16.3",
    "@testing-library/react": "^12.1.4",
    "@testing-library/user-event": "^13.5.0",
    "axios": "^0.27.2",
    "bootstrap": "^5.1.3",
    "react": "^18.1.0",
    "react-bootstrap": "^2.4.0",
    "react-dom": "^18.1.0",
    "react-icons": "^4.3.1",
    "react-redux": "^8.0.1",
    "react-router-dom": "^6.3.0",
    "react-scripts": "5.0.0",
    "recoil": "^0.7.3-alpha.2",
    "recoil-persist": "^4.2.0",
    "redux": "^4.2.0",
    "redux-persist": "^6.0.0",
    "styled-components": "^5.3.5",
    "styled-reset": "^4.3.4",
    "web-vitals": "^2.1.4"
  },
"devDependencies": {
    "prettier-eslint": "^15.0.0"
  }
```
