import React from "react";
import mongo from "../../public/mongoo.jpg";
import Reactimg from "../../public/reactlogo.png";
import java from "../../public/java.png";
import javascript from "../../public/javascript.png";
import node from "../../public/node.png";

import Express from "../../public/express.png";
import MYSQL from "../../public/mysql.jpg";
import PowerBi from "../../public/powerbi.png"


function Skills() {
  const cardItem = [
    {
      id: 1,
      logo: mongo,
      name: "MongoDB",
    },
    {
      id: 2,
      logo: Reactimg,
      name: "React",
    },
    {
      id: 3,
      logo: java,
      name: "Java",
    },
    {
      id: 4,
      logo: javascript,
      name: "JavaScript",
    },
    {
      id: 5,
      logo: node,
      name: "node",
    },
    
    {
      id: 7,
      logo: Express,
      name: "Express",
    },{
      id:8,
      logo:MYSQL,
      name:"MYSQL"
    },{
      id:9,
      logo:PowerBi,
      name:""
    }
    
  ];
  return (
    <div
      name="Skills"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">Skills</h1>
        <p className="  ">
          I've more than 2 years of experiance in below technologies.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-7 my-3 justify-center">
          {cardItem.map(({ id, logo, name }) => (
            <div
              className="flex flex-col items-center justify-center border-[2px] rounded-2xl md:w-[200px] md:h-[200px] shadow-md p-4 cursor-pointer hover:scale-105 duration-300 bg-white"
              key={id}
            >
              <img
                src={logo}
                className="w-[90px] h-[90px] object-contain"
                alt={name}
              />
              <div className="mt-4 text-center font-medium text-sm md:text-base">
                {name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
