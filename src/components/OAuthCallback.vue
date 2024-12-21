<template>
  <div>
    <h1>OAuth Callback</h1>
    <p v-if="error">Error: {{ error }}</p>
    <p v-else-if="loading">Processing login...</p>
    <p v-else>Login successful! Redirecting...</p>
  </div>
</template>

<script>
import { ref, onMounted } from "vue"; // Composition API 가져오기
import { useRouter } from "vue-router";
import { useStore } from "vuex";

export default {
  setup() {
    const router = useRouter();
    const store = useStore();
    const error = ref(null); // ref로 reactive 데이터 정의
    const loading = ref(true);

    onMounted(async () => {
      const query = router.currentRoute.value.query;

      if (query.error) {
        error.value = query.error_description || "Authentication failed.";
        loading.value = false;
        return;
      }

      const code = query.code;
      try {
        // 인증 코드로 토큰 요청
        const response = await fetch("https://kauth.kakao.com/oauth/token", {
          method: "POST",
          headers: {"Content-Type": "application/x-www-form-urlencoded"},
          body: new URLSearchParams({
            grant_type: "authorization_code",
            client_id: process.env.KAKAO_API_KEY,
            redirect_uri: process.env.REDIRECT_URI,
            code,
          }),
        });

        const data = await response.json();
        if (data.error) {
          throw new Error(data.error_description);
        }

        // Vuex에 로그인 상태 저장
        store.dispatch("login", {
          token: data.access_token,
        });

        alert("로그인 성공!");
        router.push("/");
      } catch (err) {
        error.value = err.message || "Failed to authenticate.";
      } finally {
        loading.value = false;
      }
    });

    return {error, loading};
  },
};
</script>
