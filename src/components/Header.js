const Title = () => (
  <a href="/">
    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw7klc_4cnckngeiQbTRTX-9u87a-8sU5OLQ&usqp=CAU"
      alt="logo"
      className="logo"
    />
  </a>
);

const Header = () => {
  return (
    <div className="header">
      <Title />
      <nav className="navbar-item">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;