import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import { ReactElement } from "react";
import { Horse } from "../../Types/Horse";

interface HorseListProps {
  horses: Horse[];
}

export function HorseList({ horses }: HorseListProps): ReactElement {
  return (
    <List>
      {horses.map((horse) => (
        <ListItem disablePadding key={horse.id}>
          <ListItemButton>
            <ListItemText primary={horse.name} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
}
