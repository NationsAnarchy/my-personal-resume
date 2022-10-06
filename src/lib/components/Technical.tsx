const Technical = () => {
  return (
    <div className="p-4">
      <h1 className="my-4 text-xl font-bold lg:text-2xl">Technical Skills:</h1>
      <div className="collapse collapse-plus">
        <input title="Click here to show technical skills" type="checkbox" />
        <div className="text-md collapse-title m-0 flex items-center p-0 text-center font-medium md:text-left">
          Click here to show my technical skills
        </div>
        <div className="collapse-content p-0">
          <div className="flex max-w-[900px] flex-wrap justify-center gap-6 lg:justify-start">
            <div className="card card-compact min-w-[150px] bg-accent shadow-xl">
              <div className="card-body">
                <h2 className="card-title text-center">HTML5, CSS3</h2>
              </div>
            </div>
            <div className="card-compact card min-w-[150px] bg-accent shadow-xl">
              <div className="card-body">
                <h2 className="card-title text-center">
                  JavaScript, TypeScript
                </h2>
              </div>
            </div>
            <div className="card-compact card min-w-[150px] bg-accent shadow-xl">
              <div className="card-body">
                <h2 className="card-title text-center">
                  React, NextJS (and related tools)
                </h2>
              </div>
            </div>
            <div className="card-compact card min-w-[150px] bg-accent shadow-xl">
              <div className="card-body">
                <h2 className="card-title text-center">
                  UI libraries: Material, Ant, Chakra, Tailwind, Mantine
                </h2>
              </div>
            </div>
            <div className="card-compact card min-w-[150px] bg-accent shadow-xl">
              <div className="card-body">
                <h2 className="card-title text-center">
                  Traditional SQL DBs, Java/C# on backend (limited)
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technical;
