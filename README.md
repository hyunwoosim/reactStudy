## react app 사용 방법

- 조건 : nodeJS, npx

1. 터미널에 npx create-react-app 앱 이름
2. code 앱 이름
3. 끝

## app.js에 다른 js 연결

1. 연결하고 싶은 js에 `exprot default 이름 ` 을 적는다
2. app.js에 `import 이름 from 경로 `를 적는다

- 예시

```
- Button.js
function Button({ text }) {
  return <button>{text}</button>;
}
export default Button;

- App.js
import Button from "./Button";

function App() {
  return (
    <div>
      <h1>Welcome back!!!!!!!!</h1>
      <Button text={"Continue"} />
    </div>
  );
}

export default App;

```

## css에도 module화로 적용 가능

1. 이름.module.css 파일을 만들고
2. .이름 {색깔, 폰트 등등}
3. 적용할 파일에 import 시킨 후 className={improt이름.이름} 적용시킨다.
