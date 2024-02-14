import tempAvatar from "../../assets/temp-avatar.png";

const Header = () => {
  return (
    <header>
      <div>
        <h1>Bartosz Pindel</h1>
        <h2>Web developer</h2>
      </div>
      <div>
        <img src={tempAvatar} width="100px" alt="avatar" />
      </div>
    </header>
  );
};

export default Header;
