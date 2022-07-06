import { React, useState } from "react";
import 'styles/MainContent.css'
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import { useEditorStore } from 'store/EditorStore';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 3.5 + ITEM_PADDING_TOP,
      width: 200
    }
  }
};

const names = ["Favourite","Popular"];

function CheckmarkSearch() {
  // console.log("CheckmarkSearch render");
  const [personName, setPersonName] = useState([]);
  const setState = useEditorStore(store => store.setState);

  const handleChange = (event) => {
    const {
      target: { value }
    } = event;
    const tempArr = [...value];
    if(tempArr.length===1)
      tempArr.push("K")
    tempArr.sort();
    setState('checkmarkSearchFilter',[...tempArr]);
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );

  };
  return (
    <FormControl sx={{ m: 0, width: 250 }}>
      <InputLabel id="demo-multiple-checkbox-label">Search Bar</InputLabel>
      <Select
        labelId="demo-multiple-checkbox-label"
        id="demo-multiple-checkbox"
        multiple
        value={personName}
        onChange={handleChange}
        input={<OutlinedInput label="Search Bar" />}
        renderValue={(selected) => selected.join(", ")}
        MenuProps={MenuProps}
        >
        {names.map((name) => (
          <MenuItem key={name} value={name}>
            <Checkbox checked={personName.indexOf(name) > -1} />
            <ListItemText primary={name} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}

export default CheckmarkSearch