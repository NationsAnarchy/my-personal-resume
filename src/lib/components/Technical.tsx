const Technical = () => {
  return (
    <div className="p-4">
      <h1 className="my-4 text-xl font-bold lg:text-2xl">Technical Skills:</h1>
      <div className="flex max-w-[600px] flex-wrap justify-center gap-6 lg:justify-start">
        <div className="card-compact min-w-[150px] rounded-md bg-accent  shadow-xl">
          <div className="card-body">
            <h2 className="card-title text-center">HTML5, CSS3</h2>
          </div>
        </div>
        <div className="card-compact min-w-[150px] rounded-md bg-accent shadow-xl">
          <div className="card-body">
            <h2 className="card-title text-center">JavaScript, TypeScript</h2>
          </div>
        </div>
        <div className="card-compact min-w-[150px] rounded-md bg-accent shadow-xl">
          <div className="card-body">
            <h2 className="card-title text-center">
              React, NextJS (and related tools)
            </h2>
          </div>
        </div>
        <div className="card-compact min-w-[150px] rounded-md bg-accent shadow-xl">
          <div className="card-body">
            <h2 className="card-title text-center">
              UI libraries: Material, Ant, Chakra, Tailwind, Mantine
            </h2>
          </div>
        </div>
        <div className="card-compact min-w-[150px] rounded-md bg-accent shadow-xl">
          <div className="card-body">
            <h2 className="card-title text-center">
              Traditional SQL DBs, Java/C# on backend (limited)
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technical;
