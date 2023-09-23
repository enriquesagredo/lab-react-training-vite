import "./App.css";
import IdCard from "./components/card/id-card";
import data from "./data/berlin.json"
import Greetings from "./components/greetings/greetings"
import Random from "./components/random/random"

function App() {
  return (
    <div>
      {/* <IdCard data={data} /> */}
      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>
      <Random min={2} max={6}></Random>
      <Random min={2} max={100}></Random>
    </div>
  );
}

export default App;
