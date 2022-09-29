import { useState } from "react";
import Landing from "./Pages/Landing/Landing";

function App() {

  const [password, setPassword] = useState("");

  const inputHandler = (e) => {
    setPassword(e.target.value)
    console.log(e.target.value)
  }

  return (

    <Landing />
    /* password == "pruebas" ?
      <Landing />
      :
      
        <div className="text-2xl border-solid	border-black mx-32 my-32	">
          <input type="text" name="pasword" id="1" placeholder="password" autoFocus onChange={inputHandler}/>
        </div> */
  )
      
}

export default App;
