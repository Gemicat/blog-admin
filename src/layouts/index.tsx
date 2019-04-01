import UserLayout from './UserLaylout'
const styles =  require('./index.scss')

function BasicLayout(props) {
  // 用户登录相关页面不需要全局 layout
  if (props.location.pathname.indexOf('/User/') === 0) {
    return (
      <UserLayout>{props.children}</UserLayout>
    )
  }
  return (
    <div className={styles.normal}>
      <h1 className={styles.title}>Yay! Welcome to umi!</h1>
      {props.children}
    </div>
  );
}

export default BasicLayout;
