import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    isLoggedIn: false, // 로그인 상태
    accessToken: null, // 카카오 액세스 토큰
    user: null, // 사용자 정보
    popularMovies: [], // 인기 영화 목록
    movieDetails: null, // 선택된 영화의 상세 정보
    searchedMovies: [], // 검색된 영화 목록
    genreMovies: [], // 장르별 영화 목록
    genres: [], // 영화 장르 목록
  },
  getters: {
    isLoggedIn: (state) => state.isLoggedIn,
    user: (state) => state.user,
    accessToken: (state) => state.accessToken,
    popularMovies: (state) => state.popularMovies,
    movieDetails: (state) => state.movieDetails,
    searchedMovies: (state) => state.searchedMovies,
    genreMovies: (state) => state.genreMovies,
    genres: (state) => state.genres,
    apiKey: () => localStorage.getItem("apiKey"),
  },
  mutations: {
    SET_LOGIN_STATE(state, payload) {
      state.isLoggedIn = true;
      state.accessToken = payload.accessToken;
      state.user = payload.user;
    },
    LOGOUT(state) {
      state.isLoggedIn = false;
      state.accessToken = null;
      state.user = null;
    },
    SET_POPULAR_MOVIES(state, movies) {
      state.popularMovies = movies;
    },
    SET_MOVIE_DETAILS(state, details) {
      state.movieDetails = details;
    },
    SET_SEARCHED_MOVIES(state, movies) {
      state.searchedMovies = movies;
    },
    SET_GENRE_MOVIES(state, movies) {
      state.genreMovies = movies;
    },
    SET_GENRES(state, genres) {
      state.genres = genres;
    },
  },
  actions: {
    async loginWithKakao({ commit }) {
      if (!window.Kakao.isInitialized()) {
        const kakaoApiKey = process.env.KAKAO_API_KEY;
        if (!kakaoApiKey) {
          console.error("Kakao API Key is missing in the environment variables.");
          throw new Error("Kakao API Key가 설정되지 않았습니다.");
        }
        window.Kakao.init(kakaoApiKey);
      }

      try {
        const authResponse = await new Promise((resolve, reject) => {
          window.Kakao.Auth.login({
            success: (authObj) => resolve(authObj),
            fail: (error) => reject(error),
          });
        });

        const userInfo = await window.Kakao.API.request({
          url: "/v2/user/me",
        });

        commit("SET_LOGIN_STATE", {
          accessToken: authResponse.access_token,
          user: {
            id: userInfo.id,
            email: userInfo.kakao_account.email,
            nickname: userInfo.properties.nickname,
          },
        });

        // TMDB API Key 저장
        localStorage.setItem("apiKey", process.env.TMDB_API_KEY || "");
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("accessToken", authResponse.access_token);
        localStorage.setItem("user", JSON.stringify(userInfo));
        console.log("Kakao login successful:", userInfo);
      } catch (error) {
        console.error("Kakao login failed:", error);
        throw new Error("Kakao 로그인에 실패했습니다.");
      }
    },

    logout({ commit }) {
      commit("LOGOUT");
      localStorage.removeItem("isLoggedIn");
      localStorage.removeItem("accessToken");
      localStorage.removeItem("user");
      localStorage.removeItem("apiKey");

      if (window.Kakao.Auth) {
        window.Kakao.Auth.logout(() => console.log("Logged out from Kakao"));
      }
    },

    loadAuthState({ commit }) {
      const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
      const accessToken = localStorage.getItem("accessToken");
      const user = JSON.parse(localStorage.getItem("user"));

      if (isLoggedIn && accessToken) {
        commit("SET_LOGIN_STATE", { accessToken, user });
      }
    },

    async fetchPopularMovies({ commit }) {
      try {
        const apiKey = localStorage.getItem("apiKey");
        if (!apiKey) {
          throw new Error("API Key is missing. Please login again.");
        }
        const response = await axios.get("https://api.themoviedb.org/3/movie/popular", {
          params: {
            api_key: apiKey,
            language: "ko-KR",
            page: 1,
          },
        });
        commit("SET_POPULAR_MOVIES", response.data.results);
      } catch (error) {
        console.error("Error fetching popular movies:", error);
        throw new Error("TMDB API로 인기 영화를 가져오는 데 실패했습니다.");
      }
    },

    async fetchMovieDetails({ commit }, movieId) {
      try {
        const apiKey = localStorage.getItem("apiKey");
        if (!apiKey) {
          throw new Error("API Key is missing. Please login again.");
        }
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}`, {
          params: {
            api_key: apiKey,
            language: "ko-KR",
          },
        });
        commit("SET_MOVIE_DETAILS", response.data);
      } catch (error) {
        console.error("Error fetching movie details:", error);
        throw new Error("TMDB API로 영화 정보를 가져오는 데 실패했습니다.");
      }
    },

    async fetchSearchedMovies({ commit }, query) {
      try {
        const apiKey = localStorage.getItem("apiKey");
        if (!apiKey) {
          throw new Error("API Key is missing. Please login again.");
        }
        const response = await axios.get("https://api.themoviedb.org/3/search/movie", {
          params: {
            api_key: apiKey,
            language: "ko-KR",
            query,
            page: 1,
          },
        });
        commit("SET_SEARCHED_MOVIES", response.data.results);
      } catch (error) {
        console.error("Error fetching searched movies:", error);
        throw new Error("TMDB API로 검색된 영화를 가져오는 데 실패했습니다.");
      }
    },

    async fetchGenreMovies({ commit }, genreId) {
      try {
        const apiKey = localStorage.getItem("apiKey");
        if (!apiKey) {
          throw new Error("API Key is missing. Please login again.");
        }
        const response = await axios.get("https://api.themoviedb.org/3/discover/movie", {
          params: {
            api_key: apiKey,
            language: "ko-KR",
            with_genres: genreId,
            page: 1,
          },
        });
        commit("SET_GENRE_MOVIES", response.data.results);
      } catch (error) {
        console.error("Error fetching genre movies:", error);
        throw new Error("TMDB API로 장르 영화를 가져오는 데 실패했습니다.");
      }
    },

    async fetchGenres({ commit }) {
      try {
        const apiKey = localStorage.getItem("apiKey");
        if (!apiKey) {
          throw new Error("API Key is missing. Please login again.");
        }
        const response = await axios.get("https://api.themoviedb.org/3/genre/movie/list", {
          params: {
            api_key: apiKey,
            language: "ko-KR",
          },
        });
        commit("SET_GENRES", response.data.genres);
      } catch (error) {
        console.error("Error fetching genres:", error);
        throw new Error("TMDB API로 영화 장르를 가져오는 데 실패했습니다.");
      }
    },
  },
  modules: {},
});
