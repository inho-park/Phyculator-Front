const Header = () => {
  return (
    <header style={styles.header}>
      <h1>My App</h1>
      <nav>
        <a href="/" style={styles.link}>Home</a>
        <a href="/about" style={styles.link}>About</a>
      </nav>
    </header>
  );
};

const styles = {
  header: {
    padding: "16px",
    backgroundColor: "#222",
    color: "#fff",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  link: {
    color: "#fff",
    marginLeft: "12px",
    textDecoration: "none"
  }
};

export default Header;