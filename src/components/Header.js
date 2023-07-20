function Header(props) {
  return (
    <>
      <header className="header">
        <img alt='mesto' src={props.logo} />
      </header>
    </>
  );
}
export default Header;