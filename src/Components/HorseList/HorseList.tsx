import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import { ReactElement } from "react";
import { Horse } from "../../Types/Horse";

interface HorseListProps {
  horses: Horse[];
  onHorseClicked(horseId: string): void;
}

export function HorseList({
  horses,
  onHorseClicked,
}: HorseListProps): ReactElement {
  return (
    <List>
      {horses.map((horse) => (
        <ListItem disablePadding key={horse.id}>
          <ListItemButton onClick={() => onHorseClicked(horse.id)}>
            <ListItemText primary={horse.name} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
}
