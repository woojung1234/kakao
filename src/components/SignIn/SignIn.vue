<template>
  <div>
    <div class="bg-image"></div>
    <div class="container">
      <div id="phone">
        <div id="content-wrapper">
          <!-- 카카오 로그인 버튼 -->
          <div class="card" id="kakao-login">
            <h1>Sign in with Kakao</h1>
            <button id="kakao-login-btn" @click="handleKakaoLogin">
              Login with Kakao
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { useToast } from "vue-toastification"; // Toast 사용

export default {
  setup() {
    const store = useStore();
    const router = useRouter();
    const toast = useToast();

    const handleKakaoLogin = async () => {
      const kakaoAppKey = process.env.KAKAO_API_KEY;
      const redirectUri = process.env.REDIRECT_URI;

      if (!kakaoAppKey || !redirectUri) {
        toast.error("Kakao API Key 또는 Redirect URI가 설정되지 않았습니다.");
        return;
      }

      // Kakao SDK 초기화
      if (!window.Kakao.isInitialized()) {
        window.Kakao.init(kakaoAppKey);
      }

      try {
        // Kakao 로그인 수행
        const authObj = await new Promise((resolve, reject) => {
          window.Kakao.Auth.login({
            success: (authObj) => resolve(authObj),
            fail: (error) => reject(error),
          });
        });

        // 사용자 정보 요청
        const userInfo = await window.Kakao.API.request({
          url: "/v2/user/me",
        });

        // Vuex에 로그인 상태 저장
        await store.dispatch("loginWithKakao", {
          accessToken: authObj.access_token,
          user: {
            id: userInfo.id,
            email: userInfo.kakao_account?.email || "이메일 없음",
            nickname: userInfo.properties.nickname,
          },
        });

        // 환영 메시지 표시
        toast.success(`환영합니다, ${userInfo.properties.nickname}!`);

        // 홈 페이지로 리디렉션
        router.push("/");
      } catch (error) {
        console.error("카카오 로그인 실패:", error);
        toast.error("로그인에 실패했습니다. 다시 시도해주세요.");
      }
    };

    return {
      handleKakaoLogin,
    };
  },
};
</script>

<style scoped>
#kakao-login-btn {
  background-color: #fee500;
  border: none;
  color: #3c1e1e;
  padding: 15px;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;
}

#kakao-login-btn:hover {
  background-color: #ffc107;
}
</style>
