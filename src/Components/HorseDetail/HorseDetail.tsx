import { Grid } from "@mui/material";
import { ReactElement } from "react";
import { Horse } from "../../Types/Horse";

interface HorseDetailProps {
  horse: Horse | undefined;
}

export function HorseDetail({ horse }: HorseDetailProps): ReactElement {
  if (!horse) return <>No horse </>;

  // TODO Could apply nested destructuring for height and weight
  const { name, profile } = horse;

  return (
    <Grid container flexDirection="column">
      <Grid item role="heading">
        Name: {name}
      </Grid>
      <Grid item>Favourite Food: {profile?.favouriteFood}</Grid>
      <Grid item>Height: {profile?.physical?.height}</Grid>
      <Grid item>Weight: {profile?.physical?.weight}</Grid>
    </Grid>
  );
}
