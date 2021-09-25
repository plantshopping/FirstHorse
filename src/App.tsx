import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { HorseDetail, HorseList } from "./Components";
import { getHorses } from "./Services/HorseService";
import { Horse } from "./Types/Horse";

function App() {
  const [horses, setHorses] = useState<Horse[]>([]);
  const [selectedHorseId, setSelectedHorseId] = useState<string | undefined>(
    undefined
  );

  useEffect(() => {
    const getData = async () => {
      const response = await getHorses();

      setHorses(response);
    };

    getData();
  }, []);

  const handleHorseClicked = (horseId: string) => {
    setSelectedHorseId(horseId);
  };

  return (
    <Grid container role="main" flexDirection="row">
      <Grid item xs={3}>
        <HorseList horses={horses} onHorseClicked={handleHorseClicked} />
      </Grid>
      {selectedHorseId && (
        <Grid item>
          <HorseDetail horse={horses.find((h) => h.id === selectedHorseId)} />
        </Grid>
      )}
    </Grid>
  );
}

export default App;
