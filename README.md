## Nonsense Quiz
Node.js(Express) + MySQL 넌센스 퀴즈 어플리케이션

## Stack
- **[Framework]** Express 2.5.7
- **[Database]** MySQL 2.15.0
- **[Template Engine]** EJS 2.5.7

## Note
### input 데이터 view(Back-end)에서 받기
- body-parser 모듈 bodyParser 변수에 할당
- `app.use(bodyParser.urlencoded({extended: true}))` 본문에 대한 UTF-8 인코딩만 허용
- `app.use(bodyParser.json())` body 데이터를 json 형식으로 변환
- `req.body` 를 통해 데이터 호출

참고: [Node.js body parsing middleware](https://www.npmjs.com/package/body-parser)

### 주요 응답 메소드

| 메소드 | 설명 |
| :--: | :--:|
| res.download() | 파일이 다운로드 되도록 프롬프트 |
| res.end() | 응답 프로세스 종료 |
| res.json() | JSON 응답 전송 |
| res.redirect() | 요청의 경로 재지정 |
| res.render() | 템플릿 렌더링 |
| res.send() | 다양한 유형의 응답 전송|