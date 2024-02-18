import dogs from "../../assets/dogs.png";

const Slide = () => {
  return (
    <div className="flex flex-col grow">
      <h4 className="text-xl px-3 py-1">Project 1</h4>
      <p className="text-center p-2 w-[90%] mx-auto">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas dolor vel
        consequuntur ea repudiandae quod eum et maxime autem corporis maiores!
      </p>
      <ul className="flex justify-evenly">
        <li>tech1</li>
        <li>tech2</li>
        <li>tech3</li>
        <li>tech4</li>
      </ul>
      <img src={dogs} width="350px" alt="project " className="mt-auto" />
    </div>
  );
};

export default Slide;
