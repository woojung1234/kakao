(function(){"use strict";var e={7853:function(e,i,t){var s=t(5130),o=t(6768),a=(t(4114),t(4232)),r=t(782),n=t(1387);const l={class:"header"},c={class:"logo"},u={class:"nav-links"},d={class:"auth"},p={key:0,class:"user-email"};var g={__name:"AppHeader",setup(e){const i=(0,r.Pj)(),t=(0,n.rd)(),s=(0,o.EW)((()=>i.getters.isLoggedIn)),g=(0,o.EW)((()=>{const e=i.getters.user;return e?e.email:""})),h=()=>{i.dispatch("logout"),t.push("/signin")},m=()=>{t.push("/search")},v=()=>{t.push("/")},f=()=>{t.push("/popular")},y=()=>{t.push("/wishlist")};return(e,i)=>{const t=(0,o.g2)("font-awesome-icon");return(0,o.uX)(),(0,o.CE)("header",l,[(0,o.Lk)("div",c,[(0,o.Lk)("button",{onClick:v,"aria-label":"로고"},[(0,o.bF)(t,{icon:["fas","tape"]})])]),(0,o.Lk)("nav",u,[(0,o.Lk)("button",{onClick:v,"aria-label":"홈화면"},[(0,o.bF)(t,{icon:["fas","house"]})]),(0,o.Lk)("button",{onClick:f,"aria-label":"인기 영화"},[(0,o.bF)(t,{icon:["fas","fire"]})]),(0,o.Lk)("button",{onClick:y,"aria-label":"좋아하는 영화"},[(0,o.bF)(t,{icon:["fas","heart"]})]),(0,o.Lk)("button",{class:"fab",onClick:m,"aria-label":"검색"},[(0,o.bF)(t,{icon:["fas","magnifying-glass"]})])]),(0,o.Lk)("div",d,[s.value?((0,o.uX)(),(0,o.CE)("span",p,(0,a.v_)(g.value),1)):(0,o.Q3)("",!0),s.value?((0,o.uX)(),(0,o.CE)("button",{key:1,onClick:h,"aria-label":"로그아웃"},[(0,o.bF)(t,{icon:["fas","right-from-bracket"]})])):((0,o.uX)(),(0,o.CE)("button",{key:2,onClick:i[0]||(i[0]=(...i)=>e.goToSignIn&&e.goToSignIn(...i)),"aria-label":"로그인"},[(0,o.bF)(t,{icon:["fas","user"]})]))])])}}},h=t(1241);const m=(0,h.A)(g,[["__scopeId","data-v-9a807bf6"]]);var v=m;const f={id:"app"};var y={__name:"App",setup(e){const i=(0,r.Pj)(),t=(0,o.EW)((()=>i.getters.isLoggedIn));return(e,i)=>{const s=(0,o.g2)("router-view");return(0,o.uX)(),(0,o.CE)("div",f,[t.value?((0,o.uX)(),(0,o.Wv)(v,{key:0})):(0,o.Q3)("",!0),(0,o.bF)(s)])}}};const k=y;var b=k,w=t(4373),L=t(7411);const I=(0,L.dj)();var S=(0,r.y$)({state:{isLoggedIn:!1,apiKey:null,user:null,popularMovies:[],movieDetails:null,searchedMovies:[],genreMovies:[],genres:[]},getters:{isLoggedIn:e=>e.isLoggedIn,user:e=>e.user,apiKey:e=>e.apiKey,popularMovies:e=>e.popularMovies,movieDetails:e=>e.movieDetails,searchedMovies:e=>e.searchedMovies,genreMovies:e=>e.genreMovies,genres:e=>e.genres},mutations:{SET_LOGIN_STATE(e,i){e.isLoggedIn=i.isLoggedIn,e.apiKey=i.apiKey,e.user=i.user},LOGOUT(e){e.isLoggedIn=!1,e.apiKey=null,e.user=null},SET_POPULAR_MOVIES(e,i){e.popularMovies=i},SET_MOVIE_DETAILS(e,i){e.movieDetails=i},SET_SEARCHED_MOVIES(e,i){e.searchedMovies=i},SET_GENRE_MOVIES(e,i){e.genreMovies=i},SET_GENRES(e,i){e.genres=i}},actions:{async login({commit:e},{apiKey:i,user:t}){try{const s=await w.A.get("https://api.themoviedb.org/3/movie/popular",{params:{api_key:i,language:"ko-KR",page:1}});200===s.status&&(e("SET_LOGIN_STATE",{isLoggedIn:!0,apiKey:i,user:t}),localStorage.setItem("isLoggedIn","true"),localStorage.setItem("apiKey",i),localStorage.setItem("user",JSON.stringify(t)))}catch(s){throw I.error("Invalid API Key. Please try again."),new Error("API Key is not valid")}},logout({commit:e}){e("LOGOUT"),localStorage.removeItem("isLoggedIn"),localStorage.removeItem("apiKey"),localStorage.removeItem("user")},loadAuthState({commit:e}){const i="true"===localStorage.getItem("isLoggedIn"),t=localStorage.getItem("apiKey"),s=JSON.parse(localStorage.getItem("user"));i&&t&&e("SET_LOGIN_STATE",{isLoggedIn:i,apiKey:t,user:s})},async fetchPopularMovies({commit:e,state:i}){try{if(!i.apiKey)throw new Error("API Key is missing");const t=await w.A.get("https://api.themoviedb.org/3/movie/popular",{params:{api_key:i.apiKey,language:"ko-KR",page:1}});e("SET_POPULAR_MOVIES",t.data.results)}catch(t){console.error("Error fetching popular movies:",t),I.error("Failed to fetch movies. Please check your API Key.")}},async fetchMovieDetails({commit:e,state:i},t){try{if(!i.apiKey)throw new Error("API Key is missing");const s=await w.A.get(`https://api.themoviedb.org/3/movie/${t}`,{params:{api_key:i.apiKey,language:"ko-KR"}});e("SET_MOVIE_DETAILS",s.data)}catch(s){console.error("Error fetching movie details:",s),I.error("Failed to fetch movie details. Please check your API Key.")}},async fetchSearchedMovies({commit:e,state:i},t){try{if(!i.apiKey)throw new Error("API Key is missing");const s=await w.A.get("https://api.themoviedb.org/3/search/movie",{params:{api_key:i.apiKey,language:"ko-KR",query:t,page:1}});e("SET_SEARCHED_MOVIES",s.data.results)}catch(s){console.error("Error fetching searched movies:",s),I.error("Failed to fetch searched movies. Please check your API Key.")}},async fetchGenreMovies({commit:e,state:i},t){try{if(!i.apiKey)throw new Error("API Key is missing");const s=await w.A.get("https://api.themoviedb.org/3/discover/movie",{params:{api_key:i.apiKey,language:"ko-KR",with_genres:t,page:1}});e("SET_GENRE_MOVIES",s.data.results)}catch(s){console.error("Error fetching genre movies:",s),I.error("Failed to fetch genre movies. Please check your API Key.")}},async fetchGenres({commit:e,state:i}){try{if(!i.apiKey)throw new Error("API Key is missing");const t=await w.A.get("https://api.themoviedb.org/3/genre/movie/list",{params:{api_key:i.apiKey,language:"ko-KR"}});e("SET_GENRES",t.data.genres)}catch(t){console.error("Error fetching genres:",t),I.error("Failed to fetch genres. Please check your API Key.")}}},modules:{}});function E(e,i,t,s,a,r){const n=(0,o.g2)("PopularMoviesTemplate");return(0,o.uX)(),(0,o.Wv)(n)}const C={class:"home"},_={key:0,class:"loading"},P={key:1},M={key:0,class:"featured-movie"},K=["src","alt"],A={class:"featured-info"},F={class:"button-group"},R={class:"genre-sections"},T=["onWheel"];function O(e,i,t,r,n,l){const c=(0,o.g2)("MovieCard");return(0,o.uX)(),(0,o.CE)("div",C,[n.loading?((0,o.uX)(),(0,o.CE)("div",_," 데이터를 불러오는 중입니다... ")):((0,o.uX)(),(0,o.CE)("div",P,[n.featuredMovie?((0,o.uX)(),(0,o.CE)("div",M,[(0,o.Lk)("img",{src:"https://image.tmdb.org/t/p/original"+n.featuredMovie.backdrop_path,alt:n.featuredMovie.title,class:"featured-image"},null,8,K),(0,o.Lk)("div",A,[(0,o.Lk)("h1",null,(0,a.v_)(n.featuredMovie.title),1),(0,o.Lk)("p",null,(0,a.v_)(n.featuredMovie.overview),1),(0,o.Lk)("div",F,[(0,o.Lk)("button",{class:"play-button",onClick:i[0]||(i[0]=(...e)=>l.playMovie&&l.playMovie(...e))},"▶ 재생"),(0,o.Lk)("button",{class:"details-button",onClick:i[1]||(i[1]=e=>l.goToDetails(n.featuredMovie.id))}," 상세정보 ")])])])):(0,o.Q3)("",!0),(0,o.Lk)("div",R,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(n.genres,((e,i)=>((0,o.uX)(),(0,o.CE)("div",{key:e.name,class:"genre-section",ref_for:!0,ref:"genreSections"},[(0,o.Lk)("h2",null,(0,a.v_)(e.name),1),(0,o.Lk)("div",{class:"movie-slider",onWheel:(0,s.D$)((e=>l.handleScroll(e,i)),["prevent"])},[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(e.movies,(e=>((0,o.uX)(),(0,o.Wv)(c,{key:e.id,movie:e},null,8,["movie"])))),128))],40,T)])))),128))])]))])}const X={class:"movie-card"},W=["src","alt"];function $(e,i,t,r,n,l){return(0,o.uX)(),(0,o.CE)("div",X,[(0,o.Lk)("img",{src:"https://image.tmdb.org/t/p/w500"+t.movie.poster_path,alt:t.movie.title,onClick:i[0]||(i[0]=(...e)=>l.toggleWishlist&&l.toggleWishlist(...e))},null,8,W),n.isWishlisted?((0,o.uX)(),(0,o.CE)("div",{key:0,class:"wishlist-icon",onClick:i[1]||(i[1]=(0,s.D$)(((...e)=>l.toggleWishlist&&l.toggleWishlist(...e)),["stop"]))}," ★ ")):(0,o.Q3)("",!0),(0,o.Lk)("h3",null,(0,a.v_)(t.movie.title),1)])}t(8992),t(7550);var V={props:{movie:Object},data(){return{isWishlisted:!1}},created(){this.checkWishlistStatus()},methods:{toggleWishlist(){const e=JSON.parse(localStorage.getItem("wishlist"))||[],i=e.findIndex((e=>e.id===this.movie.id));i>-1?(e.splice(i,1),this.isWishlisted=!1):(e.push(this.movie),this.isWishlisted=!0),localStorage.setItem("wishlist",JSON.stringify(e)),this.$emit("wishlist-updated")},checkWishlistStatus(){const e=JSON.parse(localStorage.getItem("wishlist"))||[];this.isWishlisted=e.some((e=>e.id===this.movie.id))}}};const D=(0,h.A)(V,[["render",$],["__scopeId","data-v-de878ece"]]);var j=D,q={components:{MovieCard:j},data(){return{featuredMovie:null,genres:[{name:"최신",endpoint:"now_playing",movies:[]},{name:"인기",endpoint:"popular",movies:[]},{name:"코믹",genreId:35,movies:[]},{name:"액션",genreId:28,movies:[]},{name:"로맨스",genreId:10749,movies:[]}],apiKey:null,loading:!0}},async mounted(){const e=(0,L.dj)();if(this.apiKey=localStorage.getItem("apiKey"),!this.apiKey)return e.error("API Key가 없습니다. 로그인을 먼저 진행해주세요."),void this.$router.push("/signin");try{const e=await w.A.get(`https://api.themoviedb.org/3/movie/popular?api_key=${this.apiKey}&language=ko-KR&page=1`);this.featuredMovie=e.data.results[0];for(let i of this.genres){const e=i.endpoint?`https://api.themoviedb.org/3/movie/${i.endpoint}?api_key=${this.apiKey}&language=ko-KR&page=1`:`https://api.themoviedb.org/3/discover/movie?api_key=${this.apiKey}&with_genres=${i.genreId}&language=ko-KR&page=1`,t=await w.A.get(e);i.movies=t.data.results.slice(0,20)}}catch(i){console.error("영화 데이터를 불러오는 데 실패했습니다:",i.message),e.error("영화 데이터를 불러오는 데 실패했습니다. 다시 시도해주세요."),this.$router.push("/signin")}finally{this.loading=!1}},methods:{handleScroll(e,i){const t=this.$refs.genreSections[i].querySelector(".movie-slider");t.scrollLeft+=e.deltaY>0?100:-100},playMovie(){},goToDetails(e){this.$router.push({name:"movie-details",params:{id:e}})}}};const J=(0,h.A)(q,[["render",O]]);var U=J,N={components:{MovieCard:j},data(){return{featuredMovie:null,genres:[{name:"최신",endpoint:"now_playing",movies:[]},{name:"인기",endpoint:"popular",movies:[]},{name:"코믹",genreId:35,movies:[]},{name:"액션",genreId:28,movies:[]},{name:"로맨스",genreId:10749,movies:[]}],apiKey:null,loading:!0}},async mounted(){const e=(0,L.dj)();if(this.apiKey=localStorage.getItem("apiKey"),!this.apiKey)return e.error("API Key가 없습니다. 로그인을 먼저 진행해주세요."),void this.$router.push("/signin");try{const e=await w.A.get(`https://api.themoviedb.org/3/movie/popular?api_key=${this.apiKey}&language=ko-KR&page=1`);this.featuredMovie=e.data.results[0];for(let i of this.genres){const e=i.endpoint?`https://api.themoviedb.org/3/movie/${i.endpoint}?api_key=${this.apiKey}&language=ko-KR&page=1`:`https://api.themoviedb.org/3/discover/movie?api_key=${this.apiKey}&with_genres=${i.genreId}&language=ko-KR&page=1`,t=await w.A.get(e);i.movies=t.data.results.slice(0,20)}}catch(i){console.error("영화 데이터를 불러오는 데 실패했습니다:",i.message),e.error("영화 데이터를 불러오는 데 실패했습니다. 다시 시도해주세요."),this.$router.push("/signin")}finally{this.loading=!1}},methods:{handleScroll(e,i){const t=this.$refs.genreSections[i].querySelector(".movie-slider");t.scrollLeft+=e.deltaY>0?100:-100},playMovie(){console.log("Play Movie clicked!")},goToDetails(e){this.$router.push({name:"movie-details",params:{id:e}})}}},G={components:{PopularMoviesTemplate:U},mixins:[N]};const x=(0,h.A)(G,[["render",E]]);var Q=x;const H={key:0,class:"movie-details"},B=["src","alt"],Y={key:1};function z(e,i,t,s,r,n){return n.movie?((0,o.uX)(),(0,o.CE)("div",H,[(0,o.Lk)("h1",null,(0,a.v_)(n.movie.title),1),(0,o.Lk)("img",{src:"https://image.tmdb.org/t/p/w500"+n.movie.poster_path,alt:n.movie.title},null,8,B),(0,o.Lk)("p",null,(0,a.v_)(n.movie.overview),1),(0,o.Lk)("ul",null,[(0,o.Lk)("li",null,[i[0]||(i[0]=(0,o.Lk)("strong",null,"평점:",-1)),(0,o.eW)(" "+(0,a.v_)(n.movie.vote_average),1)]),(0,o.Lk)("li",null,[i[1]||(i[1]=(0,o.Lk)("strong",null,"개봉일:",-1)),(0,o.eW)(" "+(0,a.v_)(n.movie.release_date),1)])])])):((0,o.uX)(),(0,o.CE)("div",Y,i[2]||(i[2]=[(0,o.Lk)("p",null,"영화 정보를 불러오는 중입니다...",-1)])))}var Z={data(){return{movieId:this.$route.params.id}},computed:{...(0,r.L8)(["movieDetails"]),movie(){return this.movieDetails}},methods:{...(0,r.i0)(["fetchMovieDetails"])},async mounted(){await this.fetchMovieDetails(this.movieId)}};const ee=(0,h.A)(Z,[["render",z],["__scopeId","data-v-293801ce"]]);var ie=ee;function te(e,i,t,s,a,r){const n=(0,o.g2)("SearchMovies",!0);return(0,o.uX)(),(0,o.Wv)(n)}const se={class:"search"},oe={class:"search-filters"},ae=["value"],re={key:0,class:"recent-searches"},ne=["onClick"],le={class:"poster-wrapper"},ce=["src","alt","onClick"],ue={key:0,class:"wishlist-star"},de={key:0,class:"loading"};function pe(e,i,t,r,n,l){return(0,o.uX)(),(0,o.CE)("div",se,[(0,o.Lk)("div",oe,[(0,o.bo)((0,o.Lk)("input",{"onUpdate:modelValue":i[0]||(i[0]=i=>e.query=i),onInput:i[1]||(i[1]=(...i)=>e.debouncedSearch&&e.debouncedSearch(...i)),placeholder:"영화 검색..."},null,544),[[s.Jo,e.query]]),(0,o.bo)((0,o.Lk)("select",{"onUpdate:modelValue":i[2]||(i[2]=i=>e.selectedGenre=i),onChange:i[3]||(i[3]=(...i)=>e.applyFilters&&e.applyFilters(...i))},[i[10]||(i[10]=(0,o.Lk)("option",{value:""},"장르 선택",-1)),((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(e.genres,(e=>((0,o.uX)(),(0,o.CE)("option",{key:e.id,value:e.id},(0,a.v_)(e.name),9,ae)))),128))],544),[[s.u1,e.selectedGenre]]),(0,o.bo)((0,o.Lk)("input",{type:"number","onUpdate:modelValue":i[4]||(i[4]=i=>e.minRating=i),onInput:i[5]||(i[5]=(...i)=>e.applyFilters&&e.applyFilters(...i)),placeholder:"최소 평점 (0 ~ 10)",min:"0",max:"10"},null,544),[[s.Jo,e.minRating]]),(0,o.bo)((0,o.Lk)("input",{type:"date","onUpdate:modelValue":i[6]||(i[6]=i=>e.releaseDate=i),onChange:i[7]||(i[7]=(...i)=>e.applyFilters&&e.applyFilters(...i))},null,544),[[s.Jo,e.releaseDate]]),(0,o.Lk)("button",{onClick:i[8]||(i[8]=(...i)=>e.resetFilters&&e.resetFilters(...i))},"필터 초기화")]),e.recentSearches.length?((0,o.uX)(),(0,o.CE)("div",re,[i[11]||(i[11]=(0,o.Lk)("h4",null,"최근 검색어",-1)),(0,o.Lk)("ul",null,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(e.recentSearches,(i=>((0,o.uX)(),(0,o.CE)("li",{key:i,onClick:t=>e.applyRecentSearch(i)},(0,a.v_)(i),9,ne)))),128))])])):(0,o.Q3)("",!0),(0,o.Lk)("div",{class:"movie-list",ref:"scrollContainer",onScroll:i[9]||(i[9]=(...i)=>e.handleScroll&&e.handleScroll(...i))},[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(e.filteredMovies,(i=>((0,o.uX)(),(0,o.CE)("div",{key:i.id,class:"movie-card"},[(0,o.Lk)("div",le,[(0,o.Lk)("img",{src:"https://image.tmdb.org/t/p/w500"+i.poster_path,alt:i.title,onClick:t=>e.toggleWishlist(i)},null,8,ce),e.isInWishlist(i)?((0,o.uX)(),(0,o.CE)("span",ue,"★")):(0,o.Q3)("",!0)]),(0,o.Lk)("h3",null,(0,a.v_)(i.title),1)])))),128)),e.loading?((0,o.uX)(),(0,o.CE)("div",de,"로딩 중...")):(0,o.Q3)("",!0)],544)])}t(4520),t(1454);var ge=t(8626),he={data(){return{movies:[],allMovies:[],genres:[],selectedGenre:"",minRating:"",releaseDate:"",query:"",recentSearches:[],page:1,loading:!1,isEndOfData:!1,apiKey:localStorage.getItem("apiKey")}},created(){const e=(0,L.dj)();if(!this.apiKey)return e.error("로그인 세션이 만료되었습니다. 다시 로그인해주세요."),void this.$router.push("/signin");this.debouncedSearch=(0,ge.debounce)(this.searchMovies,500),this.fetchGenres(),this.loadInitialMovies(),this.loadRecentSearches()},computed:{filteredMovies(){return this.movies.filter((e=>{const i=!this.selectedGenre||e.genre_ids.includes(parseInt(this.selectedGenre)),t=!this.minRating||e.vote_average>=parseFloat(this.minRating),s=!this.releaseDate||e.release_date>=this.releaseDate;return i&&t&&s}))}},methods:{loadRecentSearches(){const e=JSON.parse(localStorage.getItem("recentSearches"))||[];this.recentSearches=e},saveSearchQuery(e){if(!e.trim())return;const i=[e,...this.recentSearches.filter((i=>i!==e))];this.recentSearches=i.slice(0,10),localStorage.setItem("recentSearches",JSON.stringify(this.recentSearches))},async fetchGenres(){const e=(0,L.dj)();try{const e=await w.A.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${this.apiKey}&language=ko-KR`);this.genres=e.data.genres}catch(i){console.error("장르 목록 가져오기 실패:",i),e.error("장르 데이터를 불러오지 못했습니다.")}},async loadInitialMovies(){const e=(0,L.dj)();try{this.loading=!0;const e=await w.A.get(`https://api.themoviedb.org/3/movie/popular?api_key=${this.apiKey}&language=ko-KR&page=${this.page}`);this.allMovies=[...this.allMovies,...e.data.results],this.movies=[...this.allMovies],0===e.data.results.length&&(this.isEndOfData=!0)}catch(i){console.error("초기 영화 데이터 로드 실패:",i),e.error("영화 데이터를 불러오지 못했습니다.")}finally{this.loading=!1}},handleScroll(){const e=this.$refs.scrollContainer;e.scrollTop+e.clientHeight>=e.scrollHeight&&!this.loading&&!this.isEndOfData&&(this.page++,this.loadInitialMovies())},applyFilters(){this.movies=this.allMovies},resetFilters(){this.query="",this.selectedGenre="",this.minRating="",this.releaseDate="",this.applyFilters()},async searchMovies(){const e=(0,L.dj)();if(this.query.trim()){this.saveSearchQuery(this.query);try{const e=await w.A.get(`https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${this.query}&language=ko-KR`);this.movies=e.data.results}catch(i){console.error("영화 검색 오류:",i),e.error("검색 결과를 가져오지 못했습니다.")}}else this.movies=this.allMovies},applyRecentSearch(e){this.query=e,this.searchMovies()},toggleWishlist(e){let i=JSON.parse(localStorage.getItem("wishlist"))||[];const t=i.findIndex((i=>i.id===e.id));-1===t?i.push(e):i.splice(t,1),localStorage.setItem("wishlist",JSON.stringify(i)),this.movies=this.movies.map((i=>(i.id===e.id&&(i.isInWishlist=!i.isInWishlist),i)))},isInWishlist(e){const i=JSON.parse(localStorage.getItem("wishlist"))||[];return i.some((i=>i.id===e.id))}}};const me=(0,h.A)(he,[["render",pe],["__scopeId","data-v-d6d052fa"]]);var ve=me,fe={name:"SearchMoviesPage",components:{SearchMovies:ve}};const ye=(0,h.A)(fe,[["render",te]]);var ke=ye;function be(e,i,t,s,a,r){const n=(0,o.g2)("TrendMovies",!0);return(0,o.uX)(),(0,o.Wv)(n)}const we={class:"trend-movies"},Le={class:"view-options"},Ie={key:0,class:"movie-list table-view"},Se={class:"pagination"},Ee=["disabled"],Ce=["disabled"],_e={key:0,class:"loading"};function Pe(e,i,t,s,r,n){const l=(0,o.g2)("movie-card");return(0,o.uX)(),(0,o.CE)("div",we,[(0,o.Lk)("div",Le,[(0,o.Lk)("button",{onClick:i[0]||(i[0]=i=>e.changeView("table"))},"Table View"),(0,o.Lk)("button",{onClick:i[1]||(i[1]=i=>e.changeView("infinite"))},"Infinite Scroll")]),"table"===e.viewType?((0,o.uX)(),(0,o.CE)("div",Ie,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(e.paginatedMovies,(e=>((0,o.uX)(),(0,o.Wv)(l,{key:e.id,movie:e},null,8,["movie"])))),128)),(0,o.Lk)("div",Se,[(0,o.Lk)("button",{onClick:i[2]||(i[2]=i=>e.changePage("previous")),disabled:1===e.page},(0,a.v_)(e.page-1),9,Ee),(0,o.Lk)("span",null,(0,a.v_)(e.page),1),(0,o.Lk)("button",{onClick:i[3]||(i[3]=i=>e.changePage("next")),disabled:e.page*e.itemsPerPage>=e.totalResults},(0,a.v_)(e.page+1),9,Ce)])])):(0,o.Q3)("",!0),"infinite"===e.viewType?((0,o.uX)(),(0,o.CE)("div",{key:1,class:"movie-list infinite-scroll",onScroll:i[4]||(i[4]=(...i)=>e.loadMore&&e.loadMore(...i)),ref:"scrollContainer"},[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(e.movies,(e=>((0,o.uX)(),(0,o.Wv)(l,{key:e.id,movie:e},null,8,["movie"])))),128)),e.loading?((0,o.uX)(),(0,o.CE)("div",_e,"Loading...")):(0,o.Q3)("",!0)],544)):(0,o.Q3)("",!0),"infinite"===e.viewType?((0,o.uX)(),(0,o.CE)("button",{key:2,class:"scroll-to-top",onClick:i[5]||(i[5]=(...i)=>e.scrollToTop&&e.scrollToTop(...i))}," ▲ ")):(0,o.Q3)("",!0)])}var Me={components:{MovieCard:j},data(){return{viewType:"table",movies:[],page:1,loading:!1,itemsPerPage:20,totalResults:0,isScrolled:!1}},mounted(){this.calculateItemsPerPage(),window.addEventListener("resize",this.calculateItemsPerPage),this.$refs.scrollContainer&&this.$refs.scrollContainer.addEventListener("scroll",this.checkScroll),this.fetchMovies()},beforeUnmount(){this.$refs.scrollContainer&&this.$refs.scrollContainer.removeEventListener("scroll",this.checkScroll)},computed:{paginatedMovies(){const e=(this.page-1)*this.itemsPerPage,i=e+this.itemsPerPage;return this.movies.slice(e,i)}},methods:{calculateItemsPerPage(){const e=320,i=220,t=100,s=50,o=window.innerHeight-t-s-50,a=window.innerWidth-50,r=Math.floor(o/e),n=Math.floor(a/i);this.itemsPerPage=r*n},async fetchMovies(){const e="1cc6831125c4a1baf8f809dc1f68ec14";try{this.loading=!0;const i=await w.A.get(`https://api.themoviedb.org/3/movie/popular?api_key=${e}&language=ko-KR&page=${this.page}`);1===this.page?this.movies=i.data.results:this.movies.push(...i.data.results),this.totalResults=i.data.total_results}catch(i){console.error("영화 데이터를 가져오는 데 오류가 발생했습니다.",i)}finally{this.loading=!1}},toggleWishlist(e){const i=JSON.parse(localStorage.getItem("wishlist"))||[],t=i.findIndex((i=>i.id===e.id));-1===t?i.push(e):i.splice(t,1),localStorage.setItem("wishlist",JSON.stringify(i))},changeView(e){this.viewType=e,this.page=1,this.movies=[],this.fetchMovies()},changePage(e){"previous"===e&&this.page>1?this.page--:"next"===e&&this.page*this.itemsPerPage<this.totalResults&&this.page++,this.fetchMovies()},loadMore(){this.loading||(this.page++,this.fetchMovies())},scrollToTop(){const e=this.$refs.scrollContainer;e.scrollTo({top:0,behavior:"smooth"})},checkScroll(){const e=this.$refs.scrollContainer;this.isScrolled=e.scrollTop>300}}};const Ke=(0,h.A)(Me,[["render",Pe],["__scopeId","data-v-582c3ad9"]]);var Ae=Ke,Fe={name:"TrendMoviesPage",components:{TrendMovies:Ae}};const Re=(0,h.A)(Fe,[["render",be]]);var Te=Re;const Oe={class:"wishlist"},Xe={key:0,class:"movie-list"},We={key:1};function $e(e,i,t,s,a,r){const n=(0,o.g2)("movie-card");return(0,o.uX)(),(0,o.CE)("div",Oe,[i[1]||(i[1]=(0,o.Lk)("h1",null,"위시리스트",-1)),a.movies.length>0?((0,o.uX)(),(0,o.CE)("div",Xe,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(a.movies,(e=>((0,o.uX)(),(0,o.Wv)(n,{key:e.id,movie:e,onWishlistUpdated:r.loadWishlist},null,8,["movie","onWishlistUpdated"])))),128))])):((0,o.uX)(),(0,o.CE)("div",We,i[0]||(i[0]=[(0,o.Lk)("p",null,"찜한 영화가 없습니다.",-1)])))])}var Ve={components:{MovieCard:j},data(){return{movies:[]}},created(){this.loadWishlist()},methods:{loadWishlist(){const e=JSON.parse(localStorage.getItem("wishlist"))||[];this.movies=e}}};const De=(0,h.A)(Ve,[["render",$e],["__scopeId","data-v-4b137768"]]);var je=De;const qe={class:"signin-page"};function Je(e,i,t,s,a,r){const n=(0,o.g2)("SignIn");return(0,o.uX)(),(0,o.CE)("div",qe,[(0,o.bF)(n)])}const Ue={class:"container"},Ne={id:"phone"},Ge={id:"content-wrapper"},xe={class:"checkbox remember"},Qe=["disabled"],He={class:"checkbox remember"},Be=["disabled"];function Ye(e,i,t,r,n,l){return(0,o.uX)(),(0,o.CE)("div",null,[i[32]||(i[32]=(0,o.Lk)("div",{class:"bg-image"},null,-1)),(0,o.Lk)("div",Ue,[(0,o.Lk)("div",Ne,[(0,o.Lk)("div",Ge,[(0,o.Lk)("div",{class:(0,a.C4)(["card",{hidden:!r.isLoginVisible}]),id:"login"},[(0,o.Lk)("form",{onSubmit:i[7]||(i[7]=(0,s.D$)(((...e)=>r.handleLogin&&r.handleLogin(...e)),["prevent"]))},[i[24]||(i[24]=(0,o.Lk)("h1",null,"Sign in",-1)),(0,o.Lk)("div",{class:(0,a.C4)(["input",{active:r.isEmailFocused||r.email}])},[(0,o.bo)((0,o.Lk)("input",{id:"email",type:"email","onUpdate:modelValue":i[0]||(i[0]=e=>r.email=e),onFocus:i[1]||(i[1]=e=>r.focusInput("email")),onBlur:i[2]||(i[2]=e=>r.blurInput("email")),required:""},null,544),[[s.Jo,r.email]]),i[21]||(i[21]=(0,o.Lk)("label",{for:"email"},"Username or Email",-1))],2),(0,o.Lk)("div",{class:(0,a.C4)(["input",{active:r.isPasswordFocused||r.password}])},[(0,o.bo)((0,o.Lk)("input",{id:"password",type:"password","onUpdate:modelValue":i[3]||(i[3]=e=>r.password=e),onFocus:i[4]||(i[4]=e=>r.focusInput("password")),onBlur:i[5]||(i[5]=e=>r.blurInput("password")),required:""},null,544),[[s.Jo,r.password]]),i[22]||(i[22]=(0,o.Lk)("label",{for:"password"},"Password",-1))],2),(0,o.Lk)("span",xe,[(0,o.bo)((0,o.Lk)("input",{type:"checkbox",id:"remember","onUpdate:modelValue":i[6]||(i[6]=e=>r.rememberMe=e)},null,512),[[s.lH,r.rememberMe]]),i[23]||(i[23]=(0,o.Lk)("label",{for:"remember",class:"read-text"},"Remember me",-1))]),(0,o.Lk)("button",{disabled:!r.isLoginFormValid},"Login",8,Qe)],32),(0,o.Lk)("a",{href:"javascript:void(0)",class:"account-check",onClick:i[8]||(i[8]=(...e)=>r.toggleCard&&r.toggleCard(...e))},i[25]||(i[25]=[(0,o.eW)(" Already have an account? "),(0,o.Lk)("b",null,"Sign in",-1)]))],2),(0,o.Lk)("div",{class:(0,a.C4)(["card",{hidden:r.isLoginVisible}]),id:"register"},[(0,o.Lk)("form",{onSubmit:i[19]||(i[19]=(0,s.D$)(((...e)=>r.handleRegister&&r.handleRegister(...e)),["prevent"]))},[i[30]||(i[30]=(0,o.Lk)("h1",null,"Sign up",-1)),(0,o.Lk)("div",{class:(0,a.C4)(["input",{active:r.isRegisterEmailFocused||r.registerEmail}])},[(0,o.bo)((0,o.Lk)("input",{id:"register-email",type:"email","onUpdate:modelValue":i[9]||(i[9]=e=>r.registerEmail=e),onFocus:i[10]||(i[10]=e=>r.focusInput("registerEmail")),onBlur:i[11]||(i[11]=e=>r.blurInput("registerEmail")),required:""},null,544),[[s.Jo,r.registerEmail]]),i[26]||(i[26]=(0,o.Lk)("label",{for:"register-email"},"Email",-1))],2),(0,o.Lk)("div",{class:(0,a.C4)(["input",{active:r.isRegisterPasswordFocused||r.registerPassword}])},[(0,o.bo)((0,o.Lk)("input",{id:"register-password",type:"password","onUpdate:modelValue":i[12]||(i[12]=e=>r.registerPassword=e),onFocus:i[13]||(i[13]=e=>r.focusInput("registerPassword")),onBlur:i[14]||(i[14]=e=>r.blurInput("registerPassword")),required:""},null,544),[[s.Jo,r.registerPassword]]),i[27]||(i[27]=(0,o.Lk)("label",{for:"register-password"},"Password",-1))],2),(0,o.Lk)("div",{class:(0,a.C4)(["input",{active:e.isConfirmPasswordFocused||e.confirmPassword}])},[(0,o.bo)((0,o.Lk)("input",{id:"confirm-password",type:"password","onUpdate:modelValue":i[15]||(i[15]=i=>e.confirmPassword=i),onFocus:i[16]||(i[16]=e=>r.focusInput("confirmPassword")),onBlur:i[17]||(i[17]=e=>r.blurInput("confirmPassword")),required:""},null,544),[[s.Jo,e.confirmPassword]]),i[28]||(i[28]=(0,o.Lk)("label",{for:"confirm-password"},"Confirm Password",-1))],2),(0,o.Lk)("span",He,[(0,o.bo)((0,o.Lk)("input",{type:"checkbox",id:"terms","onUpdate:modelValue":i[18]||(i[18]=i=>e.acceptTerms=i),required:""},null,512),[[s.lH,e.acceptTerms]]),i[29]||(i[29]=(0,o.Lk)("label",{for:"terms",class:"read-text"},[(0,o.eW)("회원가입을 "),(0,o.Lk)("b",null,"동의"),(0,o.eW)("합니다.")],-1))]),(0,o.Lk)("button",{disabled:!r.isRegisterFormValid},"Register",8,Be)],32),(0,o.Lk)("a",{href:"javascript:void(0)",class:"account-check",onClick:i[20]||(i[20]=(...e)=>r.toggleCard&&r.toggleCard(...e))},i[31]||(i[31]=[(0,o.eW)(" Don't have an account? "),(0,o.Lk)("b",null,"Sign up",-1)]))],2)])])])])}function ze({useRouter:e,useStore:i,ref:t,computed:s}){const o=(0,L.dj)(),a=t(!0),r=t(""),n=t(""),l=t(""),c=t(""),u=t(!1),d=t(!1),p=t(!1),g=t(!1),h=t(!1),m=e(),v=i(),f=s((()=>r.value&&n.value)),y=s((()=>l.value&&c.value)),k=()=>{a.value=!a.value},b=e=>{"email"===e&&(d.value=!0),"password"===e&&(p.value=!0),"registerEmail"===e&&(g.value=!0),"registerPassword"===e&&(h.value=!0)},I=e=>{"email"===e&&(d.value=!1),"password"===e&&(p.value=!1),"registerEmail"===e&&(g.value=!1),"registerPassword"===e&&(h.value=!1)},S=async()=>{const e=(0,L.dj)();try{const i=await w.A.get("https://api.themoviedb.org/3/movie/popular",{params:{api_key:n.value,language:"en-US",page:1}});200===i.status&&(await v.dispatch("login",{apiKey:n.value,user:{email:r.value}}),u.value&&localStorage.setItem("email",r.value),e.success("반가워요!"),m.push("/"))}catch(i){e.error("API 키가 아님.")}},E=async()=>{try{const e=await w.A.get("https://api.themoviedb.org/3/movie/popular",{params:{api_key:c.value,language:"en-US",page:1}});if(200===e.status){if(localStorage.getItem(l.value))return void o.error("이미 등록됨.");localStorage.setItem(l.value,JSON.stringify({password:c.value})),o.success("회원가입 완료."),k()}}catch(e){o.error("API키가 아님.")}};return{isLoginVisible:a,email:r,password:n,registerEmail:l,registerPassword:c,rememberMe:u,isEmailFocused:d,isPasswordFocused:p,isRegisterEmailFocused:g,isRegisterPasswordFocused:h,isLoginFormValid:f,isRegisterFormValid:y,toggleCard:k,focusInput:b,blurInput:I,handleLogin:S,handleRegister:E}}var Ze=t(144),ei={setup(){const{isLoginVisible:e,email:i,password:t,registerEmail:s,registerPassword:a,rememberMe:l,isEmailFocused:c,isPasswordFocused:u,isRegisterEmailFocused:d,isRegisterPasswordFocused:p,isLoginFormValid:g,isRegisterFormValid:h,toggleCard:m,focusInput:v,blurInput:f,handleLogin:y,handleRegister:k}=ze({useRouter:n.rd,useStore:r.Pj,ref:Ze.KR,computed:o.EW});return{isLoginVisible:e,email:i,password:t,registerEmail:s,registerPassword:a,rememberMe:l,isEmailFocused:c,isPasswordFocused:u,isRegisterEmailFocused:d,isRegisterPasswordFocused:p,isLoginFormValid:g,isRegisterFormValid:h,toggleCard:m,focusInput:v,blurInput:f,handleLogin:y,handleRegister:k}}};const ii=(0,h.A)(ei,[["render",Ye],["__scopeId","data-v-19c4031e"]]);var ti=ii,si={components:{SignIn:ti},setup(){const e=ze({useRouter:n.rd,useStore:r.Pj,ref:Ze.KR,computed:o.EW});return{...e}}};const oi=(0,h.A)(si,[["render",Je],["__scopeId","data-v-714c2fbd"]]);var ai=oi;const ri=[{path:"/signin",name:"signin",component:ai},{path:"/",name:"home",component:Q,meta:{requiresAuth:!0}},{path:"/popular",name:"popular",component:Te,meta:{requiresAuth:!0}},{path:"/movie/:id",name:"movie-details",component:ie,props:!0,meta:{requiresAuth:!0}},{path:"/search",name:"search",component:ke,meta:{requiresAuth:!0}},{path:"/wishlist",name:"wishlist",component:je,meta:{requiresAuth:!0}}],ni=(0,n.aE)({history:(0,n.LA)("/moviewsd/"),routes:ri});ni.beforeEach(((e,i,t)=>{const s=S.getters.isLoggedIn;"signin"===e.name&&s?t({name:"home"}):e.meta.requiresAuth&&!s?t({name:"signin"}):t()}));var li=ni,ci=(t(7917),t(8950)),ui=t(292),di=t(2353);const pi=(0,s.Ef)(b),gi={position:"top-right",timeout:3e3,closeOnClick:!0,pauseOnHover:!0,draggable:!0,draggablePercent:.6,showCloseButtonOnHover:!1,hideProgressBar:!1,closeButton:"button",icon:!0};ci.Yv.add(di.X7I),ci.Yv.add(di.$UM),pi.use(L.Ay,gi),pi.component("font-awesome-icon",ui.gc),pi.use(S).use(li).mount("#app")}},i={};function t(s){var o=i[s];if(void 0!==o)return o.exports;var a=i[s]={id:s,loaded:!1,exports:{}};return e[s].call(a.exports,a,a.exports,t),a.loaded=!0,a.exports}t.m=e,function(){var e=[];t.O=function(i,s,o,a){if(!s){var r=1/0;for(u=0;u<e.length;u++){s=e[u][0],o=e[u][1],a=e[u][2];for(var n=!0,l=0;l<s.length;l++)(!1&a||r>=a)&&Object.keys(t.O).every((function(e){return t.O[e](s[l])}))?s.splice(l--,1):(n=!1,a<r&&(r=a));if(n){e.splice(u--,1);var c=o();void 0!==c&&(i=c)}}return i}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[s,o,a]}}(),function(){t.n=function(e){var i=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(i,{a:i}),i}}(),function(){t.d=function(e,i){for(var s in i)t.o(i,s)&&!t.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:i[s]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,i){return Object.prototype.hasOwnProperty.call(e,i)}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){var e={524:0};t.O.j=function(i){return 0===e[i]};var i=function(i,s){var o,a,r=s[0],n=s[1],l=s[2],c=0;if(r.some((function(i){return 0!==e[i]}))){for(o in n)t.o(n,o)&&(t.m[o]=n[o]);if(l)var u=l(t)}for(i&&i(s);c<r.length;c++)a=r[c],t.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return t.O(u)},s=self["webpackChunkmoviewsd"]=self["webpackChunkmoviewsd"]||[];s.forEach(i.bind(null,0)),s.push=i.bind(null,s.push.bind(s))}();var s=t.O(void 0,[504],(function(){return t(7853)}));s=t.O(s)})();
//# sourceMappingURL=app.a14aad4d.js.map