<<<<<<< HEAD
# moviewsd
=======
## 🎬 영화 추천 웹 애플리케이션
이 프로젝트는 Vue.js로 구현된 영화 추천 웹 애플리케이션입니다. TMDB API를 통해 인기 영화, 장르별 영화, 검색 기능 및 위시리스트를 관리할 수 있습니다. 또한, 로그인 및 회원가입 기능을 통해 사용자 인증을 지원합니다.

## 🚀 주요 기능

사용자 인증
- 카카오 oauth를 이용한 로그인 기능 구현
- 로그인 및 로그아웃 기능
- 회원가입 및 API 키 유효성 검증

영화 데이터
- 인기 영화 목록 조회
- 영화 검색 및 상세 정보 보기
- 장르별 영화 필터링

위시리스트
- 좋아하는 영화 추가 및 관리
- 위시리스트 페이지에서 영화 리스트 조회

한국어(ko-KR) 기반의 영화 정보 제공

## ⚙️ 설치 및 실행 방법
## 1. 프로젝트 클론
   먼저 GitHub에서 프로젝트를 클론합니다:
```
git clone https://github.com/woojung1234/kakao.git
cd kakao
```
## 2. Project setup
    
npm을 사용하여 필수 의존성들을 설치합니다.
```
npm install
```
.env-prod, .env-dev를 알맞게 설정합니다.
```
#.env-dev

IP_ADDRESS=localhost
PORT=3000
TMDB_API_KEY=
KAKAO_API_KEY=
API_BASE_URL=http://localhost:3000/api
REDIRECT_URI=http://localhost:3000/oauth/callback
DEBUG=true

```
```
#.env-prod

IP_ADDRESS=0.0.0.0
PORT=80
TMDB_API_KEY=
KAKAO_API_KEY=
API_BASE_URL=https://woojung1234.github.io/kakao/api
REDIRECT_URI=https://woojung1234.github.io/kakao/oauth/callback
DEBUG=false

```

## 3. 개발 서버 실행
```
npm run serve:dev
```

## 4. 프로덕션 빌드
```
npm run build:prod
```
생성된 빌드는 dist/ 폴더에 저장됩니다.

## 5. 배포
```
npm run deploy
```
배포 후 GitHub Pages에서 앱을 확인할 수 있습니다.

### 6. 기타 명령어
로컬에서 프로덕션 빌드 확인
```
npm run serve:prod
```