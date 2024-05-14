//map() 메서드

const people = [
  { name: "kkk", id: 1 },
  { name: "ppp", id: 0 },
  { name: "lll", id: 2 },
  { name: "jjj", id: 3 },
];

export default function List() {
  const listItems = people.map((p) => <li key={p.id}>{p.name}</li>);
  return (
    <>
      <h3>목록렌더링 map()함수</h3>
      <ul>{listItems}</ul>
    </>
  );
}
