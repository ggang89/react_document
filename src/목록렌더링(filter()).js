const people = [{
  id: 0,
  name: 'Creola Katherine Johnson',
  profession: 'mathematician',
}, {
  id: 1,
  name: 'Mario José Molina-Pasquel Henríquez',
  profession: 'chemist',
}, {
  id: 2,
  name: 'Mohammad Abdus Salam',
  profession: 'physicist',
}, {
  id: 3,
  name: 'Percy Lavon Julian',
  profession: 'chemist',  
}, {
  id: 4,
  name: 'Subrahmanyan Chandrasekhar',
  profession: 'astrophysicist',
}];

export default function FilterList(){
//profession이 chemist인 사람만 추출 => filter()메서드 사용
const chemist =people.filter(p=>p.profession === 'chemist');

  const listItems=chemist.map((p)=> <li key={p.id}>{p.name}(profession:{p.profession})</li>)
  //{p}이렇게 하니까 오류남
  //객체 추출하는 방법 주의!
return(
  <>
  <ul>{listItems}</ul>
  </>
);
}
