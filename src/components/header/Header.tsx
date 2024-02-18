import tempAvatar from "../../assets/temp-avatar.png";

const Header = () => {
  return (
    <header className="h-screen flex flex-col justify-between text-[#542b10]">
      <div className="flex-1 font-bold">
        <h1 className="block w-[75%] text-4xl p-2 text-center mx-auto my-4 border-b-4 border-[#542b10]">
          Bartosz Pindel
        </h1>
        <h2 className="block w-4/6 text-2xl p-2 text-center mx-auto my-4 border-b-4 border-[#542b10]">
          Web developer
        </h2>
        <p className="text-center w-4/5 mx-auto my-2 font-normal">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
          dicta atque labore distinctio eveniet, reiciendis tempora suscipit
          fugiat reprehenderit ad minima adipisci omnis perferendis repudiandae
          aspernatur, quis odit, autem rerum.
        </p>
      </div>
      <div className="bg-red-500 flex-1">
        <img src={tempAvatar} width="100px" alt="avatar" />
      </div>
    </header>
  );
};

export default Header;
