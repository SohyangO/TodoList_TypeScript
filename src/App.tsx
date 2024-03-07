import { useState } from "react";
import Header from "./components/Header";
import AddForm from "./components/AddForm";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Header />
        <AddForm></AddForm>
      </div>
      <div>
        <h1>Is progress</h1>
      </div>
      <div>
        <h1>Done</h1>
      </div>
    </>
  );
}

export default App;
