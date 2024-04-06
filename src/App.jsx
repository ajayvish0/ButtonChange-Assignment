import { useState } from "react";
function App() {
  const [change, setChange] = useState("");

  return (
    <div
      className={`min-h-screen overflow-hidden flex items-center justify-center  ${change}`}
    >
      <div className="flex">
        <Button title="red" setchange={setChange} />
        <Button title="blue" setchange={setChange} />
        <Button title="yellow" setchange={setChange} />
      </div>
    </div>
  );
}
function Button({ title, setchange }) {
  const colorVariants = {
    blue: "bg-blue-600 hover:bg-blue-500 text-white",
    red: "bg-red-500 hover:bg-red-400 text-white",
    yellow: "bg-yellow-300 hover:bg-yellow-400 text-black",
  };

  return (
    <button
      className={` border-4  p-5 ${colorVariants[title]} rounded-full`}
      onClick={() => {
        setchange(colorVariants[title]);
      }}
    >
      {title}
    </button>
  );
}
export default App;
