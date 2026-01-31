# Firebase 설정 가이드 (로그인 / 외주 신청) *외주 신청은 firebase의 단점을 보완하기 위해 supabase라는 프로그램을 활용할꺼임


## 1. Firebase 프로젝트 만들기

1. [Firebase Console](https://console.firebase.google.com) 접속
2. **프로젝트 추가** → 프로젝트 이름 입력 후 생성
3. (선택) Google Analytics 사용 안 해도 됨

## 2. Authentication (이메일 로그인)

1. 왼쪽 메뉴 **Authentication** → **시작하기**
2. **Sign-in method** 탭 → **이메일/비밀번호** 사용 설정

## 3. Firestore Database

1. 왼쪽 메뉴 **Firestore Database** → **데이터베이스 만들기**
2. **테스트 모드로 시작** 선택 후 다음
3. 리전 선택 (asia-northeast3 권장) 후 활성화
4. **규칙** 탭에서 `firestore.rules` 내용으로 교체 후 게시

## 4. 관리자 지정

1. Firestore **데이터** 탭
2. **컬렉션 시작** → 컬렉션 ID: `admins`
3. 문서 ID: `list`
4. 필드 추가: `emails` (타입: **배열**) → 값에 관리자 이메일 추가 (예: `admin@pj-it-company.com`)

## 5. 웹 앱에 설정 넣기

1. Firebase 콘솔 **프로젝트 설정** (톱니바퀴) → **일반** 탭
2. **앱**에서 웹 아이콘 추가 → 앱 닉네임 입력 후 등록
3. 나오는 `firebaseConfig` 객체를 복사
4. **index.html** 안에서 `FIREBASE_CONFIG` 검색 후, 복사한 값으로 교체

```javascript
const FIREBASE_CONFIG = {
  apiKey: "...",
  authDomain: "...",
  projectId: "...",
  storageBucket: "...",
  messagingSenderId: "...",
  appId: "..."
};
```

## Firebase 무료 한도 (Spark 플랜)

- **Authentication**: 일 3,000 DAU, 이메일 인증 1,000/일
- **Firestore**: 일 50,000 읽기, 20,000 쓰기/삭제, 저장 1GB

외주/관리자용 규모에는 보통 충분합니다.
