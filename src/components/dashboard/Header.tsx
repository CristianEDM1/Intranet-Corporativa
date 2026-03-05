const Header = () => {
  return (
    <header style={header}>
      <input placeholder="Buscar..." style={input} />
      <div>Usuario</div>
    </header>
  );
};

export default Header;

const header = {
  height: "70px",
  background: "white",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "0 40px",
  boxShadow: "0 4px 12px rgba(0,0,0,0.05)"
};

const input = {
  padding: "8px",
  borderRadius: "6px",
  border: "1px solid #ddd"
};