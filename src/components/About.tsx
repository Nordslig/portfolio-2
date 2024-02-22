const About = () => {
  const divStyle = "w-5/6 mx-auto text-center";

  return (
    <div className="h-screen font-headlines flex flex-col">
      <h4 className="text-3xl text-center text-primary border-b-4 border-primary w-4/5 mx-auto">
        Personal details
      </h4>
      <div className="h-full flex flex-col justify-evenly">
        <div className={`${divStyle}`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
          doloremque, dicta at eligendi repellendus eum nisi sunt. Repellendus
          odio necessitatibus, dicta ratione assumenda corporis beatae ex
          doloremque perspiciatis quis rerum?
        </div>
        <div className={`${divStyle}`}>
          Exercitationem quibusdam quisquam illo sapiente aperiam alias
          dignissimos itaque tempore, amet atque sit a modi nesciunt quae,
          aliquam ab debitis unde recusandae hic id officiis eius ratione
          numquam voluptatibus. Earum.
        </div>
      </div>
    </div>
  );
};

export default About;
