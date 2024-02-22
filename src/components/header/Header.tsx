import tempAvatar from "../../assets/temp-avatar.png";

const Header = () => {
  return (
    <header className="h-screen flex flex-col justify-between text-primary">
      <div className="flex-1 flex-shrink-0 font-bold font-headlines">
        <h1 className="block w-4/5 text-4xl p-2 text-center mx-auto my-4 border-b-4 border-primary">
          Bartosz Pindel
        </h1>
        <h2 className="block w-4/6 text-2xl p-2 text-center mx-auto my-4 border-b-4 border-primary">
          Web developer
        </h2>
        <p className="text-center w-[90%] mx-auto my-2 font-normal">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. OffiFciis
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
