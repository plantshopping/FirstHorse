import { useEffect, useState } from "react";
import { HorseList } from "./Components";
import { getHorses } from "./Services/HorseService";
import { Horse } from "./Types/Horse";

function App() {
  const [horses, setHorses] = useState<Horse[]>([]);

  useEffect(() => {
    const getData = async () => {
      const response = await getHorses();

      setHorses(response);
    };

    getData();
  }, []);

  return (
    <div role="main">
      <HorseList horses={horses} />
    </div>
  );
}

export default App;
