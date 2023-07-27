import React from "react";

const CardUI = (props) => {
  const style = {
    border: "1px solid #F5F5DC",
  };

  return (
    <div className="mt-8">
      <div className="grid grid-cols-3 gap-2">
        <div className="col-span-1"></div>
        <div className="col-span-1">
          <div className="card bg-white max-w-md mx-auto rounded-lg overflow-hidden shadow-lg border border-beige">
            <div className="h-60">
              <img
                className="object-cover w-full h-full"
                src="https://th.bing.com/th/id/OIP.7smhyDV5Trm2SNKpwrX9cgHaBo?w=322&h=77&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                alt="logo"
              />
            </div>
            <div className="card-body text-dark">
              <h4 className="card-title text-2xl font-bold">{props.title}</h4>{" "}
              <p className="card-text text-secondary" style={style}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                necessitatibus nisi amet dolores maiores temporibus voluptatem
                quaerat adipisci veniam quasi!
              </p>
              <div className="flex justify-center">
                <a
                  href="#"
                  className="btn btn-outline-success px-4 py-2 mt-4 inline-block border border-green-500 text-green-500 rounded"
                >
                  Daha Fazla
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-1">
          <div className="card bg-white max-w-md mx-auto rounded-lg overflow-hidden shadow-lg border border-beige">
            <div className="h-60">
              <img
                className="object-cover w-full h-full"
                src="https://th.bing.com/th/id/OIP.7smhyDV5Trm2SNKpwrX9cgHaBo?w=322&h=77&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                alt="logo"
              />
            </div>
            <div className="card-body text-dark">
              <h4 className="card-title text-2xl font-bold">{props.title}</h4>{" "}
              <p className="card-text text-secondary" style={style}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                necessitatibus nisi amet dolores maiores temporibus voluptatem
                quaerat adipisci veniam quasi!
              </p>
              <div className="flex justify-center">
                <a
                  href="#"
                  className="btn btn-outline-success px-4 py-2 mt-4 inline-block border border-green-500 text-green-500 rounded"
                >
                  Daha Fazla
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-1"></div>
      </div>
    </div>
  );
};

export default CardUI;
