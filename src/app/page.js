import React from "react";

export async function getTodosData() {
  const response = await fetch(`https://jsonplaceholder.typicode.com/todos`);
  return response.json();
}

const Dashboard = async () => {
  const data = await getTodosData();

  return (
    <div className="px-5 max-w-[1400px] m-auto">
      <div className="pt-5">
        <h1 className="text-4xl pb-5">Todos Data</h1>
        <div>
          {data.map((item, index) => {
            return (
              <div>
                <div className="capitalize py-2">{item.title}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
