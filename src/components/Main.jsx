import React from "react";
import {
  FormControl,
  Select,
  InputLabel,
  MenuItem,
  TextField,
  Button,
} from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import DeleteIcon from "@mui/icons-material/Delete";

function Main() {
  const [tower, changeTower] = React.useState("");
  const [floor, changeFloor] = React.useState("");
  const [room, changeRoom] = React.useState("");
  const [date, changeDate] = React.useState("");
  const [time, changeTime] = React.useState("");
  const [comment, changeComment] = React.useState("");

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  function updateTower(event) {
    changeTower(event.target.value);
  }
  function updateFloor(event) {
    changeFloor(event.target.value);
  }
  function updateRoom(event) {
    changeRoom(event.target.value);
  }
  function updateDate(value) {
    let str = value.$d.toString().split(" ").slice(1, 4).join();
    changeDate(str);
  }
  function updateTime(event) {
    changeTime(event.target.value);
  }
  function updateComment(event) {
    changeComment(event.target.value);
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    let str = `{"building":"${tower}", "floor":"${floor}", "room":"${room}", "date":"${date}", "time":"${time}", "commentary":"${comment}"}`;
    let obj = JSON.parse(str); //JSON.stringify();
    clearForm();
    console.log(obj);
  }

  function clearForm() {
    changeTower("");
    changeFloor("");
    changeRoom("");
    changeComment("");
  }

  return (
    <div className="main">
      <ThemeProvider theme={darkTheme}>
        <form onSubmit={handleFormSubmit} className="form">
          <FormControl>
            <InputLabel id="labelTower">Tower</InputLabel>
            <Select
              className="input input-tower"
              labelId="labelTower"
              label="Tower"
              value={tower}
              defaultValue=""
              onChange={updateTower}
            >
              <MenuItem value="Tower A">Tower A</MenuItem>
              <MenuItem value="Tower B">Tower B</MenuItem>
            </Select>
          </FormControl>
          <FormControl>
            <InputLabel id="labelFloor">Floor</InputLabel>
            <Select
              className="input input-floor"
              label="Floor"
              labelId="labelFloor"
              value={floor}
              defaultValue=""
              onChange={updateFloor}
            >
              Tower
              <MenuItem value="3">Floor 3</MenuItem>
              <MenuItem value="4">Floor 4</MenuItem>
              <MenuItem value="5">Floor 5</MenuItem>
              <MenuItem value="6">Floor 6</MenuItem>
              <MenuItem value="7">Floor 7</MenuItem>
              <MenuItem value="8">Floor 8</MenuItem>
              <MenuItem value="9">Floor 9</MenuItem>
              <MenuItem value="10">Floor 10</MenuItem>
              <MenuItem value="11">Floor 11</MenuItem>
              <MenuItem value="12">Floor 12</MenuItem>
              <MenuItem value="13">Floor 13</MenuItem>
              <MenuItem value="14">Floor 14</MenuItem>
              <MenuItem value="15">Floor 15</MenuItem>
              <MenuItem value="16">Floor 16</MenuItem>
              <MenuItem value="17">Floor 17</MenuItem>
              <MenuItem value="18">Floor 18</MenuItem>
              <MenuItem value="19">Floor 19</MenuItem>
              <MenuItem value="20">Floor 20</MenuItem>
              <MenuItem value="21">Floor 21</MenuItem>
              <MenuItem value="22">Floor 22</MenuItem>
              <MenuItem value="23">Floor 23</MenuItem>
              <MenuItem value="24">Floor 24</MenuItem>
              <MenuItem value="25">Floor 25</MenuItem>
              <MenuItem value="26">Floor 26</MenuItem>
              <MenuItem value="27">Floor 27</MenuItem>
            </Select>
          </FormControl>
          <FormControl>
            <InputLabel id="labelRoom">Room</InputLabel>
            <Select
              className="input input-room"
              label="Room"
              labelId="labelRoom"
              value={room}
              defaultValue=""
              onChange={updateRoom}
            >
              <MenuItem value=""></MenuItem>
              <MenuItem value="1">Room 1</MenuItem>
              <MenuItem value="2">Room 2</MenuItem>
              <MenuItem value="3">Room 3</MenuItem>
              <MenuItem value="4">Room 4</MenuItem>
              <MenuItem value="5">Room 5</MenuItem>
              <MenuItem value="6">Room 6</MenuItem>
              <MenuItem value="7">Room 7</MenuItem>
              <MenuItem value="8">Room 8</MenuItem>
              <MenuItem value="9">Room 9</MenuItem>
              <MenuItem value="10">Room 10</MenuItem>
            </Select>
          </FormControl>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              className="input input-date"
              onChange={(newValue) => updateDate(newValue)}
            />
          </LocalizationProvider>
          <FormControl>
            <InputLabel id="labelTime">Time</InputLabel>
            <Select
              className="input input-"
              label="Time"
              labelId="labelTime"
              value={time}
              defaultValue=""
              onChange={updateTime}
            >
              <MenuItem value="8-9">08.00 - 09.00</MenuItem>
              <MenuItem value="9-10">09.00 - 10.00</MenuItem>
              <MenuItem value="10-11">10.00 - 11.00</MenuItem>
              <MenuItem value="11-12">11.00 - 12.00</MenuItem>
              <MenuItem value="12-13">12.00 - 13.00</MenuItem>
              <MenuItem value="13-14">13.00 - 14.00</MenuItem>
              <MenuItem value="14-15">14.00 - 15.00</MenuItem>
              <MenuItem value="15-16">15.00 - 16.00</MenuItem>
              <MenuItem value="16-17">16.00 - 17.00</MenuItem>
              <MenuItem value="17-18">17.00 - 18.00</MenuItem>
              <MenuItem value="18-19">18.00 - 19.00</MenuItem>
            </Select>
          </FormControl>
          <TextField
            className="input input-text"
            label="Commentary"
            onInput={updateComment}
            value={comment}
          ></TextField>
          <Button
            className="button button-clear"
            variant="contained"
            onClick={clearForm}
            startIcon={<DeleteIcon />}
          >
            Clear
          </Button>
          <Button
            className={`button button-submit ${
              tower === "" ? ":disabled" : ""
            }`}
            variant="contained"
            type="submit"
            disabled={!(tower && floor && room)}
          >
            Submit
          </Button>
        </form>
      </ThemeProvider>
    </div>
  );
}

export default Main;
