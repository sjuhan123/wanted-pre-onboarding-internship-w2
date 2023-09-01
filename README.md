# wanted-pre-onboarding-internship-w2

원티드 프리온보딩 인턴십 2주차 과제

## 과제 소개

- Gihub API를 이용하여 특정 Github Organization의 repository issue 탭의 이슈 목록을 조회하는 페이지 만들기.

## 실행 방법

- 배포 링크:
- 로컬 실행 방법
  - `git clone`
  - `npm install`
  - `npm start`

## 데모 영상

![2주차과제](https://user-images.githubusercontent.com/81420856/265029544-d67dd6ae-1116-4079-a671-5066918aa87e.gif)

## 기술 스택

- View: React with TypeScript, Styled-Components, React-Router
- State Management: Context API

## 구현 내용

- 이슈 목록 페이지
  - 이슈 목록 정렬
  - 다섯번째 셀마다 광고 이미지 출력
  - 이슈 목록 스크롤 시 이슈 목록 추가 로딩(인피티니 스크롤)
- 이슈 상세 페이지
  - 이슈 상세 정보 출력
- 공통
  - API 응답 대기 시 로딩 대응 로직 구현
  - API 응답 에러 대응 로직 구현

## 페이지 구성

- 메인 페이지(자체 구현): 보고 싶은 이슈목록을 조회할 Organization과 repository를 입력하는 페이지
- 이슈 목록 페이지: Organization과 repository를 입력하면 해당 Organization의 repository의 이슈 목록을 조회하는 페이지
- 이슈 상세 페이지: 이슈 목록 페이지에서 이슈를 클릭하면 해당 이슈의 상세 정보를 조회하는 페이지
