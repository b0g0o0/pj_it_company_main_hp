/**
 * Firebase 설정 예시
 * 1. https://console.firebase.google.com 에서 프로젝트 생성
 * 2. Authentication > Sign-in method > 이메일/비밀번호 사용 설정
 * 3. Firestore Database 생성 (테스트 모드로 시작 후 규칙 적용)
 * 4. 프로젝트 설정 > 일반 > 앱 추가 > 웹 앱 > config 복사
 * 5. 이 파일을 firebase-config.js 로 복사 후 아래 값 채우기
 *    (또는 index.html 내 FIREBASE_CONFIG 객체를 직접 수정)
 */
const FIREBASE_CONFIG = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};
