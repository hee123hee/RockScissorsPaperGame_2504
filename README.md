[코딩알려주는누나] 리액트 수업 따라가기 / 가위바위보 게임

# 리액트 프로젝트 생성 (JSX, SCSS)
npm create vite@latest my-app  --template react
cd my-app
npm install sass

npm install   => 기존 CRA 방식과 다르게 노드모듈 따로 설치
npm run dev   => npm start 가 아닌 npm run dev로 시작


# Babel 설치
: 리액트에서 JSX 문법을 사용하려면 Babel이 필요함
npm install --save-dev @babel/preset-react
