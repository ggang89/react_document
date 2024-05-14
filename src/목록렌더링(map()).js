//map() 메서드

const people = ["kkk", "ppp", "lll", "jjj"];

export default function List() {
  const listItems = people.map((p) => <li>{p}</li>);
  return (
    <>
      
      <h3>목록렌더링 map()함수</h3>
      <ul>{listItems}</ul>
    </>
  );
}
