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

1. `이름.module.css` 파일을 만들고
2. `.이름 {색깔, 폰트 등등}`
3. 적용할 파일에 import 시킨 후 `className={improt이름.이름}` 적용시킨다.

```
Button.module.css

.btn {
  color: white;
  background-color: red;
}


Button.js

import styled from "./Button.module.css";

function Button({ text }) {
  return <button className={styled.btn}>{text}</button>;
}
```

# useEffect

# react-router

- npm i react-router-dom@5.3.0
- url로 연결 시켜주는 역할

# react-router-dom 6 버젼이상부턴 이런 형식으로 써야한다.

- switch ===>> routes
- 주소를 <Route path="" element={}> element prop에 할당한다.

## react-router-dom 5 버젼

```
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
function App() {
  return (
    <Switch>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
}

```

## react-router-dom 6 이상 버젼

```
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </Router>
  );
}
```

## 파일로 연결하는것이 아닌 자체적으로 만들어서 할 때 역시 element 안에 감싸야한다.

```
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/hello" element={<h1>hello</h1>}></Route>
        <Route path="/movie" element={<Detail />}></Route>
      </Routes>
    </Router>
  );
}
```

# <Link to={경로}> </Link>

- html의 href=""와 같은 기능
- 하지만 `새로고침 되지 않고 이동한다`

# /경로/원하는 값(ex: id)

1. app.js에 `/경로:id`

```
  <Route path="/movie:id" element={<Detail />}></Route>
```

2.  파일.js의 `` Link to={`/경로/${값의 이름}`} ``

```
<Link to={`/movie/${id}`}>{title}</Link>
```

# useParams

```
  <Route path="/movie/:id" element={<Detail />}></Route>
```

- id 값으로 넘어왔을 때 useParams를 이용하면

```
import { useParams } from "react-router-dom";

function Detail() {
  const x = useParams();
  console.log(x);

  return <h1>Detail</h1>;
}
export default Detail;

{id: '68073'}id: "68073"[[Prototype]]: Object
```

- 넘겨준 값을 받아와 지정한 이름으로 값이 넘어온다.
