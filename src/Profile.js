

export default function Profile({user}) {
  // const style = {
  //   width: user.imageSize,
  //   height: user.imageSize,
  // };
  
  

  return (
    user.imageSize &&(
    <>
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={"Photo of " + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize,
        }}
        // style={style}
      />
    </>
  )
  )
}
