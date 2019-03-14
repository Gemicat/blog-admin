function UserLayout(props) {
  return (
    <div>
      <h1>Yay! Welcome to umi!</h1>
      { props.children }
    </div>
  );
}

export default UserLayout;
