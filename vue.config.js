const { defineConfig } = require('@vue/cli-service');
const path = require('path');
const dotenv = require('dotenv');

// 환경 변수 로드
module.exports = defineConfig(() => {
  // NODE_ENV에 따라 .env 파일 경로 설정
  const envFile = process.env.NODE_ENV === 'production' ? '.env-prod' : '.env-dev';

  // dotenv를 사용하여 환경 변수 로드
  const envPath = path.resolve(__dirname, envFile);
  dotenv.config({ path: envPath });

  console.log(`Loaded environment variables from: ${envPath}`); // 디버깅 로그

  // 반환된 Vue CLI 설정
  return {
    // GitHub Pages에서 호스팅될 때 기본 경로 설정
    publicPath: process.env.NODE_ENV === 'production' ? '/kakao/' : '/',
    // 개발 서버 설정
    devServer: {
      host: process.env.IP_ADDRESS || 'localhost', // 기본값 설정
      port: process.env.PORT || 3000,             // 기본값 설정
    },
    configureWebpack: {
      plugins: [],
    },
    // 환경 변수를 Vue 앱 내에서 사용할 수 있도록 설정
    chainWebpack: (config) => {
      config.plugin('define').tap((definitions) => {
        definitions[0]['process.env'] = {
          ...definitions[0]['process.env'],
          KAKAO_API_KEY: JSON.stringify(process.env.KAKAO_API_KEY || ''), // 카카오 API 키
          TMDB_API_KEY: JSON.stringify(process.env.TMDB_API_KEY || ''),   // TMDB API 키
          API_BASE_URL: JSON.stringify(process.env.API_BASE_URL || ''),   // API 기본 URL
          REDIRECT_URI: JSON.stringify(process.env.REDIRECT_URI || ''),   // REDIRECT URI
          DEBUG: JSON.stringify(process.env.DEBUG || 'false'),            // 디버깅 플래그
        };
        return definitions;
      });
    },
  };
});
