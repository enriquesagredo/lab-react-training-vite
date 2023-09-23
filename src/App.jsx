import "./App.css";
import IdCard from "./components/card/id-card";
import data from "./data/berlin.json"
import Greetings from "./components/greetings/greetings"

function App() {
  return (
    <div>
      {/* <IdCard data={data} /> */}
      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>
    </div>
  );
}

export default App;
