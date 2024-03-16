- `app/page.tsx`
    - 메인 페이지
- `app/layout.tsx`
    - page.tsx 바깥에 적을 내용이 있다면..
    - header, 공유 컴포넌트

<img src="./screenshots/page-layout.png" />

- `xxx.module.css`
    - 특정 컴포넌트에서만 적용하는 css

- 해당 디렉터리에 `page.tsx`만 있는데 상관없나?
    - `layout.tsx`가 해당 디렉터리에 존재하는 경우 `layout.tsx`로 `page.tsx`를 감싸서 상위로 보냄

<img src="./screenshots/parent-layout.png" />
<img src="./screenshots/parent-parent-layout.png" />
- 페이지 변경과 상관없이 계속 보여줄 컴포넌트의 경우엔 `layout.tsx`에 작성하는게 좋을 듯(`header`, `footer`)

- `Next.js` 컴포넌트의 종류
    1. server component
        - default
        - html에 자바스크립트 기능 넣기 불가능
        - `onClick`, `useState`, `useEffect` 사용불가
        - 로딩속도 빠름
        - 검색엔진 노출 유리
    2. client component
        - `'use client'`
        - 로딩속도 느림, 브라우저가 읽어야할 파일양이 늘어남 + hydration 필요
            - hydration : html를 유저에게 보낸 후에 자바스크립트로 html 다시 읽고 분석하는 일 ?
    - 큰 페이지는 server component
    - js 기능이 필요한 곳만 client component