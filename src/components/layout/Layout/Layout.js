import MainNavigation from "../Header/MainNavigation";

const Layout = (props) => {
  return (
    <div>
      <MainNavigation></MainNavigation>
      {props.children}
    </div>
  );
};

export default Layout;
