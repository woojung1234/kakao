(function(){"use strict";var e={5306:function(e,t,i){var o=i(3751),a=i(641),s=(i(4114),i(33)),r=i(6278),n=i(5220);const l={class:"header"},c={class:"logo"},u={class:"nav-links"},d={class:"auth"},g={key:0,class:"user-info"},h=["src"],p={class:"user-name"};var v={__name:"AppHeader",setup(e){const t=(0,r.Pj)(),i=(0,n.rd)(),o=(0,a.EW)((()=>t.getters.isLoggedIn)),v=(0,a.EW)((()=>{const e=t.getters.user;return e?e.nickname:""})),m=()=>{t.dispatch("logout"),i.push("/signin")},k=()=>{i.push("/search")},f=()=>{i.push("/")},y=()=>{i.push("/popular")},w=()=>{i.push("/wishlist")},S=(0,a.EW)((()=>{const e=t.getters.user;return e&&e.profile_image?e.profile_image:""}));return(e,t)=>{const i=(0,a.g2)("font-awesome-icon");return(0,a.uX)(),(0,a.CE)("header",l,[(0,a.Lk)("div",c,[(0,a.Lk)("button",{onClick:f,"aria-label":"로고"},[(0,a.bF)(i,{icon:["fas","tape"]})])]),(0,a.Lk)("nav",u,[(0,a.Lk)("button",{onClick:f,"aria-label":"홈화면"},[(0,a.bF)(i,{icon:["fas","house"]})]),(0,a.Lk)("button",{onClick:y,"aria-label":"인기 영화"},[(0,a.bF)(i,{icon:["fas","fire"]})]),(0,a.Lk)("button",{onClick:w,"aria-label":"좋아하는 영화"},[(0,a.bF)(i,{icon:["fas","heart"]})]),(0,a.Lk)("button",{class:"fab",onClick:k,"aria-label":"검색"},[(0,a.bF)(i,{icon:["fas","magnifying-glass"]})])]),(0,a.Lk)("div",d,[o.value?((0,a.uX)(),(0,a.CE)("div",g,[(0,a.Lk)("img",{class:"profile-image",src:S.value,alt:"프로필 이미지"},null,8,h),(0,a.Lk)("span",p,(0,s.v_)(v.value),1)])):(0,a.Q3)("",!0),o.value?((0,a.uX)(),(0,a.CE)("button",{key:1,onClick:m,"aria-label":"로그아웃"},[(0,a.bF)(i,{icon:["fas","right-from-bracket"]})])):((0,a.uX)(),(0,a.CE)("button",{key:2,onClick:t[0]||(t[0]=(...t)=>e.goToSignIn&&e.goToSignIn(...t)),"aria-label":"로그인"},[(0,a.bF)(i,{icon:["fas","user"]})]))])])}}},m=i(6262);const k=(0,m.A)(v,[["__scopeId","data-v-347b8ae6"]]);var f=k;const y={id:"app"};var w={__name:"App",setup(e){const t=(0,r.Pj)(),i=(0,a.EW)((()=>t.getters.isLoggedIn));return(0,a.sV)((()=>{t.dispatch("loadAuthState")})),(e,t)=>{const o=(0,a.g2)("router-view");return(0,a.uX)(),(0,a.CE)("div",y,[i.value?((0,a.uX)(),(0,a.Wv)(f,{key:0})):(0,a.Q3)("",!0),(0,a.bF)(o)])}}};const S=w;var I=S,E=i(4335),b=(0,r.y$)({state:{isLoggedIn:!1,accessToken:null,user:null,popularMovies:[],movieDetails:null,searchedMovies:[],genreMovies:[],genres:[]},getters:{isLoggedIn:e=>e.isLoggedIn,user:e=>e.user,accessToken:e=>e.accessToken,popularMovies:e=>e.popularMovies,movieDetails:e=>e.movieDetails,searchedMovies:e=>e.searchedMovies,genreMovies:e=>e.genreMovies,genres:e=>e.genres,apiKey:()=>localStorage.getItem("apiKey")},mutations:{SET_LOGIN_STATE(e,t){e.isLoggedIn=!0,e.accessToken=t.accessToken,e.user=t.user},LOGOUT(e){e.isLoggedIn=!1,e.accessToken=null,e.user=null},SET_POPULAR_MOVIES(e,t){e.popularMovies=t},SET_MOVIE_DETAILS(e,t){e.movieDetails=t},SET_SEARCHED_MOVIES(e,t){e.searchedMovies=t},SET_GENRE_MOVIES(e,t){e.genreMovies=t},SET_GENRES(e,t){e.genres=t}},actions:{async loginWithKakao({commit:e}){if(!window.Kakao.isInitialized()){const e={NODE_ENV:"production",BASE_URL:"/kakao/",KAKAO_API_KEY:"2e7a8b2dc56be80194e332a47c4774e9",TMDB_API_KEY:"1cc6831125c4a1baf8f809dc1f68ec14",API_BASE_URL:"https://woojung1234.github.io/kakao/api",REDIRECT_URI:"https://woojung1234.github.io/kakao/oauth/callback",DEBUG:"false"}.VUE_APP_KAKAO_API_KEY;if(!e)throw console.error("Kakao API Key is missing in the environment variables."),new Error("Kakao API Key가 설정되지 않았습니다.");window.Kakao.init(e)}try{const t=await new Promise(((e,t)=>{window.Kakao.Auth.login({success:t=>e(t),fail:e=>t(e)})})),i=await window.Kakao.API.request({url:"/v2/user/me"}),o={id:i.id,nickname:i.properties.nickname,profile_image:i.properties.profile_image};e("SET_LOGIN_STATE",{accessToken:t.access_token,user:o}),localStorage.setItem("apiKey","1cc6831125c4a1baf8f809dc1f68ec14"),localStorage.setItem("isLoggedIn","true"),localStorage.setItem("accessToken",t.access_token),localStorage.setItem("user",JSON.stringify(o)),console.log("Kakao login successful:",i)}catch(t){throw console.error("Kakao login failed:",t),alert("Kakao 로그인에 실패했습니다. 다시 시도해주세요."),new Error("Kakao 로그인에 실패했습니다.")}},logout({commit:e}){e("LOGOUT"),localStorage.removeItem("isLoggedIn"),localStorage.removeItem("accessToken"),localStorage.removeItem("user"),localStorage.removeItem("apiKey"),window.Kakao.Auth&&window.Kakao.Auth.logout((()=>console.log("Logged out from Kakao")))},loadAuthState({commit:e}){const t="true"===localStorage.getItem("isLoggedIn"),i=localStorage.getItem("accessToken"),o=JSON.parse(localStorage.getItem("user"));t&&i?e("SET_LOGIN_STATE",{accessToken:i,user:o}):console.warn("Failed to restore login state from localStorage.")},async fetchPopularMovies({commit:e}){try{const t=localStorage.getItem("apiKey");if(!t)throw new Error("API Key is missing. Please login again.");const i=await E.A.get("https://api.themoviedb.org/3/movie/popular",{params:{api_key:t,language:"ko-KR",page:1}});e("SET_POPULAR_MOVIES",i.data.results)}catch(t){throw console.error("Error fetching popular movies:",t),new Error("TMDB API로 인기 영화를 가져오는 데 실패했습니다.")}},async fetchMovieDetails({commit:e},t){try{const i=localStorage.getItem("apiKey");if(!i)throw new Error("API Key is missing. Please login again.");const o=await E.A.get(`https://api.themoviedb.org/3/movie/${t}`,{params:{api_key:i,language:"ko-KR"}});e("SET_MOVIE_DETAILS",o.data)}catch(i){throw console.error("Error fetching movie details:",i),new Error("TMDB API로 영화 정보를 가져오는 데 실패했습니다.")}},async fetchSearchedMovies({commit:e},t){try{const i=localStorage.getItem("apiKey");if(!i)throw new Error("API Key is missing. Please login again.");const o=await E.A.get("https://api.themoviedb.org/3/search/movie",{params:{api_key:i,language:"ko-KR",query:t,page:1}});e("SET_SEARCHED_MOVIES",o.data.results)}catch(i){throw console.error("Error fetching searched movies:",i),new Error("TMDB API로 검색된 영화를 가져오는 데 실패했습니다.")}},async fetchGenreMovies({commit:e},t){try{const i=localStorage.getItem("apiKey");if(!i)throw new Error("API Key is missing. Please login again.");const o=await E.A.get("https://api.themoviedb.org/3/discover/movie",{params:{api_key:i,language:"ko-KR",with_genres:t,page:1}});e("SET_GENRE_MOVIES",o.data.results)}catch(i){throw console.error("Error fetching genre movies:",i),new Error("TMDB API로 장르 영화를 가져오는 데 실패했습니다.")}},async fetchGenres({commit:e}){try{const t=localStorage.getItem("apiKey");if(!t)throw new Error("API Key is missing. Please login again.");const i=await E.A.get("https://api.themoviedb.org/3/genre/movie/list",{params:{api_key:t,language:"ko-KR"}});e("SET_GENRES",i.data.genres)}catch(t){throw console.error("Error fetching genres:",t),new Error("TMDB API로 영화 장르를 가져오는 데 실패했습니다.")}}},modules:{}});function _(e,t,i,o,s,r){const n=(0,a.g2)("PopularMoviesTemplate");return(0,a.uX)(),(0,a.Wv)(n)}const L={class:"home"},K={key:0,class:"loading"},C={key:1},M={key:0,class:"featured-movie"},A=["src","alt"],P={class:"featured-info"},T={class:"button-group"},R={class:"genre-sections"},O=["onWheel"];function X(e,t,i,r,n,l){const c=(0,a.g2)("MovieCard");return(0,a.uX)(),(0,a.CE)("div",L,[n.loading?((0,a.uX)(),(0,a.CE)("div",K,"데이터를 불러오는 중입니다...")):((0,a.uX)(),(0,a.CE)("div",C,[n.featuredMovie?((0,a.uX)(),(0,a.CE)("div",M,[(0,a.Lk)("img",{src:"https://image.tmdb.org/t/p/original"+n.featuredMovie.backdrop_path,alt:n.featuredMovie.title,class:"featured-image"},null,8,A),(0,a.Lk)("div",P,[(0,a.Lk)("h1",null,(0,s.v_)(n.featuredMovie.title),1),(0,a.Lk)("p",null,(0,s.v_)(n.featuredMovie.overview),1),(0,a.Lk)("div",T,[(0,a.Lk)("button",{class:"play-button",onClick:t[0]||(t[0]=(...e)=>l.playMovie&&l.playMovie(...e))},"▶ 재생"),(0,a.Lk)("button",{class:"details-button",onClick:t[1]||(t[1]=e=>l.goToDetails(n.featuredMovie.id))}," 상세정보 ")])])])):(0,a.Q3)("",!0),(0,a.Lk)("div",R,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(n.genres,((e,t)=>((0,a.uX)(),(0,a.CE)("div",{key:e.name,class:"genre-section",ref_for:!0,ref:"genreSections"},[(0,a.Lk)("h2",null,(0,s.v_)(e.name),1),(0,a.Lk)("div",{class:"movie-slider",onWheel:(0,o.D$)((e=>l.handleScroll(t,e)),["prevent"])},[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(e.movies,(e=>((0,a.uX)(),(0,a.Wv)(c,{key:e.id,movie:e},null,8,["movie"])))),128))],40,O)])))),128))])]))])}i(8992),i(3949),i(1454);const W={class:"movie-card"},$=["src","alt"];function F(e,t,i,r,n,l){return(0,a.uX)(),(0,a.CE)("div",W,[(0,a.Lk)("img",{src:"https://image.tmdb.org/t/p/w500"+i.movie.poster_path,alt:i.movie.title,onClick:t[0]||(t[0]=(...e)=>l.toggleWishlist&&l.toggleWishlist(...e))},null,8,$),n.isWishlisted?((0,a.uX)(),(0,a.CE)("div",{key:0,class:"wishlist-icon",onClick:t[1]||(t[1]=(0,o.D$)(((...e)=>l.toggleWishlist&&l.toggleWishlist(...e)),["stop"]))}," ★ ")):(0,a.Q3)("",!0),(0,a.Lk)("h3",null,(0,s.v_)(i.movie.title),1)])}i(7550);var D={props:{movie:Object},data(){return{isWishlisted:!1}},created(){this.checkWishlistStatus()},methods:{toggleWishlist(){const e=JSON.parse(localStorage.getItem("wishlist"))||[],t=e.findIndex((e=>e.id===this.movie.id));t>-1?(e.splice(t,1),this.isWishlisted=!1):(e.push(this.movie),this.isWishlisted=!0),localStorage.setItem("wishlist",JSON.stringify(e)),this.$emit("wishlist-updated")},checkWishlistStatus(){const e=JSON.parse(localStorage.getItem("wishlist"))||[];this.isWishlisted=e.some((e=>e.id===this.movie.id))}}};const j=(0,m.A)(D,[["render",F],["__scopeId","data-v-de878ece"]]);var N=j,V=i(5246),U={components:{MovieCard:N},data(){return{featuredMovie:null,genres:[{name:"최신",endpoint:"now_playing",movies:[]},{name:"인기",endpoint:"popular",movies:[]},{name:"코믹",genreId:35,movies:[]},{name:"액션",genreId:28,movies:[]},{name:"로맨스",genreId:10749,movies:[]}],loading:!0}},computed:{...(0,r.L8)(["apiKey","isLoggedIn"])},async mounted(){const e=(0,V.dj)(),t=this.apiKey||localStorage.getItem("apiKey");if(!t)return e.error("API Key가 없습니다. 로그인을 먼저 진행해주세요."),console.error("API Key is missing!"),void this.$router.push("/signin");try{const e=await E.A.get(`https://api.themoviedb.org/3/movie/popular?api_key=${t}&language=ko-KR&page=1`);this.featuredMovie=e.data.results[0];const i=this.genres.map((e=>{const i=e.endpoint?`https://api.themoviedb.org/3/movie/${e.endpoint}?api_key=${t}&language=ko-KR&page=1`:`https://api.themoviedb.org/3/discover/movie?api_key=${t}&with_genres=${e.genreId}&language=ko-KR&page=1`;return console.log("Fetching genre URL:",i),E.A.get(i)})),o=await Promise.all(i);this.genres.forEach(((e,t)=>{e.movies=o[t].data.results.slice(0,20)}))}catch(i){console.error("Error fetching movie data:",i),e.error("영화 데이터를 불러오는 데 실패했습니다. 다시 시도해주세요."),this.$router.push("/signin")}finally{this.loading=!1}},methods:{handleScroll(e,t){const i=this.$refs.genreSections[e].querySelector(".movie-slider");i.scrollLeft+=t.deltaY>0?100:-100},playMovie(){console.log("Play Movie clicked!")},goToDetails(e){this.$router.push({name:"movie-details",params:{id:e}})}}};const q=(0,m.A)(U,[["render",X]]);var G=q,J={components:{MovieCard:N},data(){return{featuredMovie:null,genres:[{name:"최신",endpoint:"now_playing",movies:[]},{name:"인기",endpoint:"popular",movies:[]},{name:"코믹",genreId:35,movies:[]},{name:"액션",genreId:28,movies:[]},{name:"로맨스",genreId:10749,movies:[]}],apiKey:null,loading:!0}},async mounted(){const e=(0,V.dj)();if(this.apiKey=localStorage.getItem("apiKey"),!this.apiKey)return e.error("API Key가 없습니다. 로그인을 먼저 진행해주세요."),void this.$router.push("/signin");try{const e=await E.A.get(`https://api.themoviedb.org/3/movie/popular?api_key=${this.apiKey}&language=ko-KR&page=1`);this.featuredMovie=e.data.results[0];for(let t of this.genres){const e=t.endpoint?`https://api.themoviedb.org/3/movie/${t.endpoint}?api_key=${this.apiKey}&language=ko-KR&page=1`:`https://api.themoviedb.org/3/discover/movie?api_key=${this.apiKey}&with_genres=${t.genreId}&language=ko-KR&page=1`,i=await E.A.get(e);t.movies=i.data.results.slice(0,20)}}catch(t){console.error("영화 데이터를 불러오는 데 실패했습니다:",t.message),e.error("영화 데이터를 불러오는 데 실패했습니다. 다시 시도해주세요."),this.$router.push("/signin")}finally{this.loading=!1}},methods:{handleScroll(e,t){const i=this.$refs.genreSections[t].querySelector(".movie-slider");i.scrollLeft+=e.deltaY>0?100:-100},playMovie(){console.log("Play Movie clicked!")},goToDetails(e){this.$router.push({name:"movie-details",params:{id:e}})}}},x={components:{PopularMoviesTemplate:G},mixins:[J]};const Q=(0,m.A)(x,[["render",_]]);var B=Q;const H={key:0,class:"movie-details"},Y=["src","alt"],z={key:1};function Z(e,t,i,o,r,n){return n.movie?((0,a.uX)(),(0,a.CE)("div",H,[(0,a.Lk)("h1",null,(0,s.v_)(n.movie.title),1),(0,a.Lk)("img",{src:"https://image.tmdb.org/t/p/w500"+n.movie.poster_path,alt:n.movie.title},null,8,Y),(0,a.Lk)("p",null,(0,s.v_)(n.movie.overview),1),(0,a.Lk)("ul",null,[(0,a.Lk)("li",null,[t[0]||(t[0]=(0,a.Lk)("strong",null,"평점:",-1)),(0,a.eW)(" "+(0,s.v_)(n.movie.vote_average),1)]),(0,a.Lk)("li",null,[t[1]||(t[1]=(0,a.Lk)("strong",null,"개봉일:",-1)),(0,a.eW)(" "+(0,s.v_)(n.movie.release_date),1)])])])):((0,a.uX)(),(0,a.CE)("div",z,t[2]||(t[2]=[(0,a.Lk)("p",null,"영화 정보를 불러오는 중입니다...",-1)])))}var ee={data(){return{movieId:this.$route.params.id}},computed:{...(0,r.L8)(["movieDetails"]),movie(){return this.movieDetails}},methods:{...(0,r.i0)(["fetchMovieDetails"])},async mounted(){await this.fetchMovieDetails(this.movieId)}};const te=(0,m.A)(ee,[["render",Z],["__scopeId","data-v-293801ce"]]);var ie=te;function oe(e,t,i,o,s,r){const n=(0,a.g2)("SearchMovies",!0);return(0,a.uX)(),(0,a.Wv)(n)}const ae={class:"search"},se={class:"search-filters"},re=["value"],ne={key:0,class:"recent-searches"},le=["onClick"],ce={class:"poster-wrapper"},ue=["src","alt","onClick"],de={key:0,class:"wishlist-star"},ge={key:0,class:"loading"};function he(e,t,i,r,n,l){return(0,a.uX)(),(0,a.CE)("div",ae,[(0,a.Lk)("div",se,[(0,a.bo)((0,a.Lk)("input",{"onUpdate:modelValue":t[0]||(t[0]=t=>e.query=t),onInput:t[1]||(t[1]=(...t)=>e.debouncedSearch&&e.debouncedSearch(...t)),placeholder:"영화 검색..."},null,544),[[o.Jo,e.query]]),(0,a.bo)((0,a.Lk)("select",{"onUpdate:modelValue":t[2]||(t[2]=t=>e.selectedGenre=t),onChange:t[3]||(t[3]=(...t)=>e.applyFilters&&e.applyFilters(...t))},[t[10]||(t[10]=(0,a.Lk)("option",{value:""},"장르 선택",-1)),((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(e.genres,(e=>((0,a.uX)(),(0,a.CE)("option",{key:e.id,value:e.id},(0,s.v_)(e.name),9,re)))),128))],544),[[o.u1,e.selectedGenre]]),(0,a.bo)((0,a.Lk)("input",{type:"number","onUpdate:modelValue":t[4]||(t[4]=t=>e.minRating=t),onInput:t[5]||(t[5]=(...t)=>e.applyFilters&&e.applyFilters(...t)),placeholder:"최소 평점 (0 ~ 10)",min:"0",max:"10"},null,544),[[o.Jo,e.minRating]]),(0,a.bo)((0,a.Lk)("input",{type:"date","onUpdate:modelValue":t[6]||(t[6]=t=>e.releaseDate=t),onChange:t[7]||(t[7]=(...t)=>e.applyFilters&&e.applyFilters(...t))},null,544),[[o.Jo,e.releaseDate]]),(0,a.Lk)("button",{onClick:t[8]||(t[8]=(...t)=>e.resetFilters&&e.resetFilters(...t))},"필터 초기화")]),e.recentSearches.length?((0,a.uX)(),(0,a.CE)("div",ne,[t[11]||(t[11]=(0,a.Lk)("h4",null,"최근 검색어",-1)),(0,a.Lk)("ul",null,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(e.recentSearches,(t=>((0,a.uX)(),(0,a.CE)("li",{key:t,onClick:i=>e.applyRecentSearch(t)},(0,s.v_)(t),9,le)))),128))])])):(0,a.Q3)("",!0),(0,a.Lk)("div",{class:"movie-list",ref:"scrollContainer",onScroll:t[9]||(t[9]=(...t)=>e.handleScroll&&e.handleScroll(...t))},[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(e.filteredMovies,(t=>((0,a.uX)(),(0,a.CE)("div",{key:t.id,class:"movie-card"},[(0,a.Lk)("div",ce,[(0,a.Lk)("img",{src:"https://image.tmdb.org/t/p/w500"+t.poster_path,alt:t.title,onClick:i=>e.toggleWishlist(t)},null,8,ue),e.isInWishlist(t)?((0,a.uX)(),(0,a.CE)("span",de,"★")):(0,a.Q3)("",!0)]),(0,a.Lk)("h3",null,(0,s.v_)(t.title),1)])))),128)),e.loading?((0,a.uX)(),(0,a.CE)("div",ge,"로딩 중...")):(0,a.Q3)("",!0)],544)])}i(4520);var pe=i(2543),ve={data(){return{movies:[],allMovies:[],genres:[],selectedGenre:"",minRating:"",releaseDate:"",query:"",recentSearches:[],page:1,loading:!1,isEndOfData:!1,apiKey:localStorage.getItem("apiKey")}},created(){const e=(0,V.dj)();if(!this.apiKey)return e.error("로그인 세션이 만료되었습니다. 다시 로그인해주세요."),void this.$router.push("/signin");this.debouncedSearch=(0,pe.debounce)(this.searchMovies,500),this.fetchGenres(),this.loadInitialMovies(),this.loadRecentSearches()},computed:{filteredMovies(){return this.movies.filter((e=>{const t=!this.selectedGenre||e.genre_ids.includes(parseInt(this.selectedGenre)),i=!this.minRating||e.vote_average>=parseFloat(this.minRating),o=!this.releaseDate||e.release_date>=this.releaseDate;return t&&i&&o}))}},methods:{loadRecentSearches(){const e=JSON.parse(localStorage.getItem("recentSearches"))||[];this.recentSearches=e},saveSearchQuery(e){if(!e.trim())return;const t=[e,...this.recentSearches.filter((t=>t!==e))];this.recentSearches=t.slice(0,10),localStorage.setItem("recentSearches",JSON.stringify(this.recentSearches))},async fetchGenres(){const e=(0,V.dj)();try{const e=await E.A.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${this.apiKey}&language=ko-KR`);this.genres=e.data.genres}catch(t){console.error("장르 목록 가져오기 실패:",t),e.error("장르 데이터를 불러오지 못했습니다.")}},async loadInitialMovies(){const e=(0,V.dj)();try{this.loading=!0;const e=await E.A.get(`https://api.themoviedb.org/3/movie/popular?api_key=${this.apiKey}&language=ko-KR&page=${this.page}`);this.allMovies=[...this.allMovies,...e.data.results],this.movies=[...this.allMovies],0===e.data.results.length&&(this.isEndOfData=!0)}catch(t){console.error("초기 영화 데이터 로드 실패:",t),e.error("영화 데이터를 불러오지 못했습니다.")}finally{this.loading=!1}},handleScroll(){const e=this.$refs.scrollContainer;e.scrollTop+e.clientHeight>=e.scrollHeight&&!this.loading&&!this.isEndOfData&&(this.page++,this.loadInitialMovies())},applyFilters(){this.movies=this.allMovies},resetFilters(){this.query="",this.selectedGenre="",this.minRating="",this.releaseDate="",this.applyFilters()},async searchMovies(){const e=(0,V.dj)();if(this.query.trim()){this.saveSearchQuery(this.query);try{const e=await E.A.get(`https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${this.query}&language=ko-KR`);this.movies=e.data.results}catch(t){console.error("영화 검색 오류:",t),e.error("검색 결과를 가져오지 못했습니다.")}}else this.movies=this.allMovies},applyRecentSearch(e){this.query=e,this.searchMovies()},toggleWishlist(e){let t=JSON.parse(localStorage.getItem("wishlist"))||[];const i=t.findIndex((t=>t.id===e.id));-1===i?t.push(e):t.splice(i,1),localStorage.setItem("wishlist",JSON.stringify(t)),this.movies=this.movies.map((t=>(t.id===e.id&&(t.isInWishlist=!t.isInWishlist),t)))},isInWishlist(e){const t=JSON.parse(localStorage.getItem("wishlist"))||[];return t.some((t=>t.id===e.id))}}};const me=(0,m.A)(ve,[["render",he],["__scopeId","data-v-d6d052fa"]]);var ke=me,fe={name:"SearchMoviesPage",components:{SearchMovies:ke}};const ye=(0,m.A)(fe,[["render",oe]]);var we=ye;function Se(e,t,i,o,s,r){const n=(0,a.g2)("TrendMovies",!0);return(0,a.uX)(),(0,a.Wv)(n)}const Ie={class:"trend-movies"},Ee={class:"view-options"},be={key:0,class:"movie-list table-view"},_e={class:"pagination"},Le=["disabled"],Ke=["disabled"],Ce={key:0,class:"loading"};function Me(e,t,i,o,r,n){const l=(0,a.g2)("movie-card");return(0,a.uX)(),(0,a.CE)("div",Ie,[(0,a.Lk)("div",Ee,[(0,a.Lk)("button",{onClick:t[0]||(t[0]=t=>e.changeView("table"))},"Table View"),(0,a.Lk)("button",{onClick:t[1]||(t[1]=t=>e.changeView("infinite"))},"Infinite Scroll")]),"table"===e.viewType?((0,a.uX)(),(0,a.CE)("div",be,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(e.paginatedMovies,(e=>((0,a.uX)(),(0,a.Wv)(l,{key:e.id,movie:e},null,8,["movie"])))),128)),(0,a.Lk)("div",_e,[(0,a.Lk)("button",{onClick:t[2]||(t[2]=t=>e.changePage("previous")),disabled:1===e.page},(0,s.v_)(e.page-1),9,Le),(0,a.Lk)("span",null,(0,s.v_)(e.page),1),(0,a.Lk)("button",{onClick:t[3]||(t[3]=t=>e.changePage("next")),disabled:e.page*e.itemsPerPage>=e.totalResults},(0,s.v_)(e.page+1),9,Ke)])])):(0,a.Q3)("",!0),"infinite"===e.viewType?((0,a.uX)(),(0,a.CE)("div",{key:1,class:"movie-list infinite-scroll",onScroll:t[4]||(t[4]=(...t)=>e.loadMore&&e.loadMore(...t)),ref:"scrollContainer"},[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(e.movies,(e=>((0,a.uX)(),(0,a.Wv)(l,{key:e.id,movie:e},null,8,["movie"])))),128)),e.loading?((0,a.uX)(),(0,a.CE)("div",Ce,"Loading...")):(0,a.Q3)("",!0)],544)):(0,a.Q3)("",!0),"infinite"===e.viewType?((0,a.uX)(),(0,a.CE)("button",{key:2,class:"scroll-to-top",onClick:t[5]||(t[5]=(...t)=>e.scrollToTop&&e.scrollToTop(...t))}," ▲ ")):(0,a.Q3)("",!0)])}var Ae={components:{MovieCard:N},data(){return{viewType:"table",movies:[],page:1,loading:!1,itemsPerPage:20,totalResults:0,isScrolled:!1}},mounted(){this.calculateItemsPerPage(),window.addEventListener("resize",this.calculateItemsPerPage),this.$refs.scrollContainer&&this.$refs.scrollContainer.addEventListener("scroll",this.checkScroll),this.fetchMovies()},beforeUnmount(){this.$refs.scrollContainer&&this.$refs.scrollContainer.removeEventListener("scroll",this.checkScroll)},computed:{paginatedMovies(){const e=(this.page-1)*this.itemsPerPage,t=e+this.itemsPerPage;return this.movies.slice(e,t)}},methods:{calculateItemsPerPage(){const e=320,t=220,i=100,o=50,a=window.innerHeight-i-o-50,s=window.innerWidth-50,r=Math.floor(a/e),n=Math.floor(s/t);this.itemsPerPage=r*n},async fetchMovies(){const e="1cc6831125c4a1baf8f809dc1f68ec14";try{this.loading=!0;const t=await E.A.get(`https://api.themoviedb.org/3/movie/popular?api_key=${e}&language=ko-KR&page=${this.page}`);1===this.page?this.movies=t.data.results:this.movies.push(...t.data.results),this.totalResults=t.data.total_results}catch(t){console.error("영화 데이터를 가져오는 데 오류가 발생했습니다.",t)}finally{this.loading=!1}},toggleWishlist(e){const t=JSON.parse(localStorage.getItem("wishlist"))||[],i=t.findIndex((t=>t.id===e.id));-1===i?t.push(e):t.splice(i,1),localStorage.setItem("wishlist",JSON.stringify(t))},changeView(e){this.viewType=e,this.page=1,this.movies=[],this.fetchMovies()},changePage(e){"previous"===e&&this.page>1?this.page--:"next"===e&&this.page*this.itemsPerPage<this.totalResults&&this.page++,this.fetchMovies()},loadMore(){this.loading||(this.page++,this.fetchMovies())},scrollToTop(){const e=this.$refs.scrollContainer;e.scrollTo({top:0,behavior:"smooth"})},checkScroll(){const e=this.$refs.scrollContainer;this.isScrolled=e.scrollTop>300}}};const Pe=(0,m.A)(Ae,[["render",Me],["__scopeId","data-v-582c3ad9"]]);var Te=Pe,Re={name:"TrendMoviesPage",components:{TrendMovies:Te}};const Oe=(0,m.A)(Re,[["render",Se]]);var Xe=Oe;const We={class:"wishlist"},$e={key:0,class:"movie-list"},Fe={key:1};function De(e,t,i,o,s,r){const n=(0,a.g2)("movie-card");return(0,a.uX)(),(0,a.CE)("div",We,[t[1]||(t[1]=(0,a.Lk)("h1",null,"위시리스트",-1)),s.movies.length>0?((0,a.uX)(),(0,a.CE)("div",$e,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(s.movies,(e=>((0,a.uX)(),(0,a.Wv)(n,{key:e.id,movie:e,onWishlistUpdated:r.loadWishlist},null,8,["movie","onWishlistUpdated"])))),128))])):((0,a.uX)(),(0,a.CE)("div",Fe,t[0]||(t[0]=[(0,a.Lk)("p",null,"찜한 영화가 없습니다.",-1)])))])}var je={components:{MovieCard:N},data(){return{movies:[]}},created(){this.loadWishlist()},methods:{loadWishlist(){const e=JSON.parse(localStorage.getItem("wishlist"))||[];this.movies=e}}};const Ne=(0,m.A)(je,[["render",De],["__scopeId","data-v-4b137768"]]);var Ve=Ne;const Ue={class:"signin-page"};function qe(e,t,i,o,s,r){const n=(0,a.g2)("SignIn");return(0,a.uX)(),(0,a.CE)("div",Ue,[(0,a.bF)(n)])}const Ge={class:"container"},Je={id:"phone"},xe={id:"content-wrapper"},Qe={class:"card",id:"kakao-login"};function Be(e,t,i,o,s,r){return(0,a.uX)(),(0,a.CE)("div",null,[t[2]||(t[2]=(0,a.Lk)("div",{class:"bg-image"},null,-1)),(0,a.Lk)("div",Ge,[(0,a.Lk)("div",Je,[(0,a.Lk)("div",xe,[(0,a.Lk)("div",Qe,[t[1]||(t[1]=(0,a.Lk)("h1",null,"Sign in with Kakao",-1)),(0,a.Lk)("button",{id:"kakao-login-btn",onClick:t[0]||(t[0]=(...e)=>o.handleKakaoLogin&&o.handleKakaoLogin(...e))}," Login with Kakao ")])])])])])}var He={setup(){const e=(0,r.Pj)(),t=(0,n.rd)(),i=(0,V.dj)(),o=async()=>{const o="2e7a8b2dc56be80194e332a47c4774e9",a="https://woojung1234.github.io/kakao/oauth/callback";if(o&&a){window.Kakao.isInitialized()||window.Kakao.init(o);try{const o=await new Promise(((e,t)=>{window.Kakao.Auth.login({success:t=>e(t),fail:e=>t(e)})})),a=await window.Kakao.API.request({url:"/v2/user/me"});await e.dispatch("loginWithKakao",{accessToken:o.access_token,user:{id:a.id,email:a.kakao_account?.email||"이메일 없음",nickname:a.properties.nickname}}),i.success(`환영합니다, ${a.properties.nickname}!`),t.push("/")}catch(s){console.error("카카오 로그인 실패:",s),i.error("로그인에 실패했습니다. 다시 시도해주세요.")}}else i.error("Kakao API Key 또는 Redirect URI가 설정되지 않았습니다.")};return{handleKakaoLogin:o}}};const Ye=(0,m.A)(He,[["render",Be],["__scopeId","data-v-8787cd4c"]]);var ze=Ye;function Ze({useRouter:e,useStore:t,ref:i,computed:o}){const a=(0,V.dj)(),s=i(!0),r=i(""),n=i(""),l=i(""),c=i(""),u=i(!1),d=i(!1),g=i(!1),h=i(!1),p=i(!1),v=e(),m=t(),k=o((()=>r.value&&n.value)),f=o((()=>l.value&&c.value)),y=()=>{s.value=!s.value},w=e=>{"email"===e&&(d.value=!0),"password"===e&&(g.value=!0),"registerEmail"===e&&(h.value=!0),"registerPassword"===e&&(p.value=!0)},S=e=>{"email"===e&&(d.value=!1),"password"===e&&(g.value=!1),"registerEmail"===e&&(h.value=!1),"registerPassword"===e&&(p.value=!1)},I=async()=>{const e=(0,V.dj)();try{const t=await E.A.get("https://api.themoviedb.org/3/movie/popular",{params:{api_key:n.value,language:"en-US",page:1}});200===t.status&&(await m.dispatch("login",{apiKey:n.value,user:{email:r.value}}),u.value&&localStorage.setItem("email",r.value),e.success("반가워요!"),v.push("/"))}catch(t){e.error("API 키가 아님.")}},b=async()=>{try{const e=await E.A.get("https://api.themoviedb.org/3/movie/popular",{params:{api_key:c.value,language:"en-US",page:1}});if(200===e.status){if(localStorage.getItem(l.value))return void a.error("이미 등록됨.");localStorage.setItem(l.value,JSON.stringify({password:c.value})),a.success("회원가입 완료."),y()}}catch(e){a.error("API키가 아님.")}};return{isLoginVisible:s,email:r,password:n,registerEmail:l,registerPassword:c,rememberMe:u,isEmailFocused:d,isPasswordFocused:g,isRegisterEmailFocused:h,isRegisterPasswordFocused:p,isLoginFormValid:k,isRegisterFormValid:f,toggleCard:y,focusInput:w,blurInput:S,handleLogin:I,handleRegister:b}}var et=i(953),tt={components:{SignIn:ze},setup(){const e=Ze({useRouter:n.rd,useStore:r.Pj,ref:et.KR,computed:a.EW});return{...e}}};const it=(0,m.A)(tt,[["render",qe],["__scopeId","data-v-714c2fbd"]]);var ot=it;const at={key:0},st={key:1},rt={key:2};function nt(e,t,i,o,r,n){return(0,a.uX)(),(0,a.CE)("div",null,[t[0]||(t[0]=(0,a.Lk)("h1",null,"OAuth Callback",-1)),o.error?((0,a.uX)(),(0,a.CE)("p",at,"Error: "+(0,s.v_)(o.error),1)):o.loading?((0,a.uX)(),(0,a.CE)("p",st,"Processing login...")):((0,a.uX)(),(0,a.CE)("p",rt,"Login successful! Redirecting..."))])}i(4603),i(7566),i(8721);var lt={setup(){const e=(0,n.rd)(),t=(0,r.Pj)(),i=(0,et.KR)(null),o=(0,et.KR)(!0);return(0,a.sV)((async()=>{const a=e.currentRoute.value.query;if(a.error)return i.value=a.error_description||"Authentication failed.",void(o.value=!1);const s=a.code;try{const i=await fetch("https://kauth.kakao.com/oauth/token",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:new URLSearchParams({grant_type:"authorization_code",client_id:"2e7a8b2dc56be80194e332a47c4774e9",redirect_uri:"https://woojung1234.github.io/kakao/oauth/callback",code:s})}),o=await i.json();if(o.error)throw new Error(o.error_description);t.dispatch("login",{token:o.access_token}),alert("로그인 성공!"),e.push("/")}catch(r){i.value=r.message||"Failed to authenticate."}finally{o.value=!1}})),{error:i,loading:o}}};const ct=(0,m.A)(lt,[["render",nt]]);var ut=ct;const dt=[{path:"/signin",name:"signin",component:ot},{path:"/oauth/callback",name:"oauth-callback",component:ut},{path:"/",name:"home",component:B,meta:{requiresAuth:!0}},{path:"/popular",name:"popular",component:Xe,meta:{requiresAuth:!0}},{path:"/movie/:id",name:"movie-details",component:ie,props:!0,meta:{requiresAuth:!0}},{path:"/search",name:"search",component:we,meta:{requiresAuth:!0}},{path:"/wishlist",name:"wishlist",component:Ve,meta:{requiresAuth:!0}}],gt=(0,n.aE)({history:(0,n.LA)("/kakao/"),routes:dt});gt.beforeEach(((e,t,i)=>{const o=b.getters.isLoggedIn;"signin"===e.name&&o?i({name:"home"}):e.meta.requiresAuth&&!o?i({name:"signin"}):i()}));var ht=gt,pt=(i(7917),i(7107)),vt=i(1273),mt=i(6188);const kt=(0,o.Ef)(I),ft={position:"top-right",timeout:3e3,closeOnClick:!0,pauseOnHover:!0,draggable:!0,draggablePercent:.6,showCloseButtonOnHover:!1,hideProgressBar:!1,closeButton:"button",icon:!0};pt.Yv.add(mt.X7I),pt.Yv.add(mt.$UM),kt.use(V.Ay,ft),kt.component("font-awesome-icon",vt.gc),kt.use(b).use(ht).mount("#app")}},t={};function i(o){var a=t[o];if(void 0!==a)return a.exports;var s=t[o]={id:o,loaded:!1,exports:{}};return e[o].call(s.exports,s,s.exports,i),s.loaded=!0,s.exports}i.m=e,function(){var e=[];i.O=function(t,o,a,s){if(!o){var r=1/0;for(u=0;u<e.length;u++){o=e[u][0],a=e[u][1],s=e[u][2];for(var n=!0,l=0;l<o.length;l++)(!1&s||r>=s)&&Object.keys(i.O).every((function(e){return i.O[e](o[l])}))?o.splice(l--,1):(n=!1,s<r&&(r=s));if(n){e.splice(u--,1);var c=a();void 0!==c&&(t=c)}}return t}s=s||0;for(var u=e.length;u>0&&e[u-1][2]>s;u--)e[u]=e[u-1];e[u]=[o,a,s]}}(),function(){i.d=function(e,t){for(var o in t)i.o(t,o)&&!i.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){i.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){var e={524:0};i.O.j=function(t){return 0===e[t]};var t=function(t,o){var a,s,r=o[0],n=o[1],l=o[2],c=0;if(r.some((function(t){return 0!==e[t]}))){for(a in n)i.o(n,a)&&(i.m[a]=n[a]);if(l)var u=l(i)}for(t&&t(o);c<r.length;c++)s=r[c],i.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return i.O(u)},o=self["webpackChunkkakao"]=self["webpackChunkkakao"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=i.O(void 0,[504],(function(){return i(5306)}));o=i.O(o)})();
//# sourceMappingURL=app.575c5080.js.map