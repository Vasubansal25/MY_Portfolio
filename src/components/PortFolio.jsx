import React from "react";

function PortFolio() {
  const cardItem = [
    {
      id: 1,
      logo: "/droneaaa.jpg",
      name: "Drona-Acharya",
      github: "https://github.com/Vasubansal25/Drona-a-charya.git",
    },
    {
      id: 2,
      logo: "/pini.jpg",
      name: "Pinterest Clone",
      github: "https://github.com/Vasubansal25/Pinterest.git",
    },
    {
      id: 3,
      logo: "/CRUD.jpg",
      name: "CRUD Ops",
      github: "https://github.com/Vasubansal25/CRUD_OPS.git",
    },
    {
      id: 4,
      logo: "/healthcare.png",
      name: "HealthCare Analysis",
      github: "https://github.com/Vasubansal25/Dashboards-healthcare-dataset-.git",
    },
  ];

  return (
    <div  
      name="Portfolio"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">PortFolio</h1>
        <span className="underline font-semibold">Featured Projects</span>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 my-5 px-4 md:px-20">
          {cardItem.map(({ id, logo, name, github }) => (
            <div
              className="md:w-[300px] md:h-[330px] border-[2px] rounded-2xl shadow-lg p-5 cursor-pointer hover:scale-105 duration-300 flex flex-col items-center justify-between"
              key={id}
            >
              <img
                src={logo}
                className="w-[120px] h-[120px] p-2 rounded-full border-[2px] mx-auto object-cover"
                alt={name}
              />
              <div className="text-center pt-4">
                <div className="font-bold text-xl mb-2">{name}</div>
                <p className="text-gray-700"></p>
              </div>
              <div className="w-full flex justify-center py-4">
              
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded">
                    Source code
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PortFolio;
