
import './App.css';
import Button from './Button';
import { b as Button2} from './Button2'
//export function b라고 해준 경우, as 컴포넌트명으로 import해줘야 함
import Label from './Label';
import Profile from './Profile';

const user1 = {
  name: "Hedy Lamarr",
  imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
  imageSize: 90,
};
const user2 = {
  
  imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
  imageSize: 0,//falsy한 값인 0은 그대로 반환된다.false,undefined,null은 표현이 안된다.=>&&작성의 주의점
};

function App() {
  //return 안에는 부모요소로 하나 감싸줘야 한다
  //<div></div> 이나 <></>(fragment)쓰기
  return (
    <div>
      <h1>리액트 공식문서 학습하기</h1>
      <Button/>
      <Button2/>
      <Label/>
      <Profile user={user1}/>
      <Profile user={user2}/>
    </div>
  );
}

export default App;
