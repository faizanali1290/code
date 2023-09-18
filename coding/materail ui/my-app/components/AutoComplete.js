import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { Button } from "@mui/material";

export default function ComboBox() {
  return (
    <>
      <Autocomplete
        disablePortal={false}
        //   autoComplete={true}
        clearOnEscape={false}
        loading={true}
        loadingText={"Loading…"}
        id="combo-box-demo"
        options={AutoCompleteValue}
        //   autoHighlight={true}
        multiple
        limitTags={2}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="faizan" />} //the faizan is place holder
      />
      <Button variant="contained" disableElevation>
        Disable elevation
      </Button>
    </>
  );
}

const AutoCompleteValue = [
  { label: 0 },
  { label: 1 },
  { label: 2 },
  { label: 3 },
  { label: 4 },
  { label: 5 },
];
