interface DescriptionProps {
  level: number;
}

const Description = ({ level }: DescriptionProps) => {
  //   const divStyle = "border-2 border-primary rounded mx-2";
  //   const pStyle = "text-sm px-1";
  //   const smallDivStyle = "border-2 border-primary w-3 h-3 rounded";

  return (
    <div className="flex">
      <p className="flex-grow">Name:</p>
      <div className="flex ml-auto *:pr-1 *:mr-1 *:border-r-2 *:border-primary *:border-dashed">
        <p>20%</p>
        <p>40%</p>
        <p>60%</p>
        <p>80%</p>
        <p>100%</p>
      </div>
    </div>
  );
  /*<div className="flex flex-grow justify-between items-center">
      <div className={`${divStyle}`}>
        <p
          className={`${level === 20 && "bg-primary text-secondary"} ${pStyle}`}
        >
          20%
        </p>
      </div>
      <div
        className={`${level === 30 && "bg-primary text-secondary"} ${smallDivStyle}`}
      ></div>
      <div className={`${divStyle}`}>
        <p
          className={`${level === 40 && "bg-primary text-secondary"} ${pStyle}`}
        >
          40%
        </p>
      </div>
      <div className={`${smallDivStyle}`}></div>
      <div className={`${divStyle}`}>
        <p
          className={`${level === 60 && "bg-primary text-secondary"} ${pStyle}`}
        >
          60%
        </p>
      </div>
      <div className={`${smallDivStyle}`}></div>
      <div className={`${divStyle}`}>
        <p
          className={`${level === 80 && "bg-primary text-secondary"} ${pStyle}`}
        >
          80%
        </p>
      </div>
      <div className={`${smallDivStyle}`}></div>
      <div className={`${divStyle}`}>
        <p
          className={`${level === 100 && "bg-primary text-secondary"} ${pStyle}`}
        >
          100%
        </p>
      </div>
  </div>*/
};

export default Description;
