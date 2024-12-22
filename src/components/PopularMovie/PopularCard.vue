<template>
  <div class="home">
    <div v-if="loading" class="loading">데이터를 불러오는 중입니다...</div>

    <div v-else>
      <div v-if="featuredMovie" class="featured-movie">
        <img
            :src="'https://image.tmdb.org/t/p/original' + featuredMovie.backdrop_path"
            :alt="featuredMovie.title"
            class="featured-image"
        />
        <div class="featured-info">
          <h1>{{ featuredMovie.title }}</h1>
          <p>{{ featuredMovie.overview }}</p>
          <div class="button-group">
            <button class="play-button" @click="playMovie">▶ 재생</button>
            <button
                class="details-button"
                @click="goToDetails(featuredMovie.id)"
            >
              상세정보
            </button>
          </div>
        </div>
      </div>

      <div class="genre-sections">
        <div
            v-for="(genre, index) in genres"
            :key="genre.name"
            class="genre-section"
            ref="genreSections"
        >
          <h2>{{ genre.name }}</h2>
          <div class="movie-slider" @wheel.prevent="handleScroll(index, $event)">
            <MovieCard
                v-for="movie in genre.movies"
                :key="movie.id"
                :movie="movie"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MovieCard from "@/components/MovieCard.vue"; // MovieCard 컴포넌트
import axios from "axios"; // API 요청을 위한 axios
import { useToast } from "vue-toastification"; // Toast 알림
import { mapGetters } from "vuex"; // Vuex getters

export default {
  components: {
    MovieCard,
  },
  data() {
    return {
      featuredMovie: null,
      genres: [
        { name: "최신", endpoint: "now_playing", movies: [] },
        { name: "인기", endpoint: "popular", movies: [] },
        { name: "코믹", genreId: 35, movies: [] },
        { name: "액션", genreId: 28, movies: [] },
        { name: "로맨스", genreId: 10749, movies: [] },
      ],
      loading: true, // 로딩 상태
    };
  },
  computed: {
    ...mapGetters(["apiKey", "isLoggedIn"]), // Vuex 상태 가져오기
  },
  async mounted() {
    const toast = useToast();
    const apiKey = this.apiKey || localStorage.getItem("apiKey");

    // API Key 확인
    if (!apiKey) {
      toast.error("API Key가 없습니다. 로그인을 먼저 진행해주세요.");
      console.error("API Key is missing!");
      this.$router.push("/signin");
      return;
    }

    try {

      // 대표 영화 데이터 로드
      const popularResponse = await axios.get(
          `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=ko-KR&page=1`
      );
      this.featuredMovie = popularResponse.data.results[0];

      // 장르별 영화 데이터 로드
      const genreRequests = this.genres.map((genre) => {
        const url = genre.endpoint
            ? `https://api.themoviedb.org/3/movie/${genre.endpoint}?api_key=${apiKey}&language=ko-KR&page=1`
            : `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${genre.genreId}&language=ko-KR&page=1`;
        console.log("Fetching genre URL:", url); // 디버깅 로그 추가
        return axios.get(url);
      });

      const genreResponses = await Promise.all(genreRequests);
      this.genres.forEach((genre, index) => {
        genre.movies = genreResponses[index].data.results.slice(0, 20);
      });
    } catch (error) {
      console.error("Error fetching movie data:", error);
      toast.error("영화 데이터를 불러오는 데 실패했습니다. 다시 시도해주세요.");
      this.$router.push("/signin");
    } finally {
      this.loading = false;
    }
  },
  methods: {
    handleScroll(index, event) {
      const slider = this.$refs.genreSections[index].querySelector(".movie-slider");
      slider.scrollLeft += event.deltaY > 0 ? 100 : -100;
    },
    playMovie() {
      console.log("Play Movie clicked!");
    },
    goToDetails(movieId) {
      this.$router.push({ name: "movie-details", params: { id: movieId } });
    },
  },
};
</script>

