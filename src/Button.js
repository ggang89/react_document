function a(){
  //컴포넌트 문서 안의 이름은 반드시 대문자를 사용할 필요 없다.
  //Button이라고 이름지어도 되고 
  //위에처럼 그냥 a라고 해도 제대로 로딩됨
  //->이 경우 export defualt를 밑에 해줌, 밑에 export해주면
  // 이름을 맘대로 지어도 정상적으로 로딩됨(export function과 비교!)
  //사용하는 jsx문법 안에서만 대문자를 사용하면 됨
return <button>I'm button a</button>
};

export default a;