import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import TabPanel from "./components/TabPanel";
import FormatJson from "./components/FormatJson";
import EditorJson from "./components/EditorJson";

const useStyles = makeStyles((theme) => ({
  paper: {
    boxShadow: "none",
  },
  grid: {
    maxWidth: 1280,
    margin: "0 auto",
    backgroundColor: "#fff",
    padding: "20px",
  },
  button: {
    backgroundColor: "#e09d22",
    color: "#fff",
    marginTop: "15px",
    "&:hover": {
      backgroundColor: "#dea439",
    },
  },
}));
const App = () => {
  const classes = useStyles();
  const [userInput, setUserInput] = useState("");
  const [json, setJson] = useState();
  const [value, setValue] = useState(0);
  const [message, setMessage] = useState("");
  const addJson = (event) => {
    event.preventDefault();
    try {
      const jsons = JSON.parse(userInput);
      setJson(jsons);
      setMessage("");
    } catch (e) {
      console.error(e);
      setMessage("Your json data is invalid");
      setTimeout(() => {
        setMessage("");
      }, 3000);
    }
    setUserInput("");
  };
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleJsonChange = (event) => {
    setUserInput(event.target.value);
  };

  return (
    <div className={classes.grid}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper} style={{ paddingTop: "2%" }}>
            <Typography
              variant="h1"
              component="h1"
              style={{
                fontWeight: "700",
                fontSize: "25px",
                paddingBottom: "15px",
                textAlign: "center",
              }}
            >
              Please insert your json data to the field below
            </Typography>
            <form onSubmit={addJson}>
              <TextField
                value={userInput}
                onChange={handleJsonChange}
                fullWidth
                label="Your json data"
                variant="outlined"
                type="text"
              />
              <div style={{ width: "100%", textAlign: "center" }}>
                <Button className={classes.button} type="submit">
                  Format
                </Button>
              </div>
              <Typography
                variant="body2"
                style={{
                  textAlign: "center",
                  color: "#d80d0d",
                  fontSize: "1.5em",
                  marginTop: "20px",
                  textTransform: "uppercase",
                }}
              >
                {message}
              </Typography>
            </form>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <AppBar position="static" style={{ backgroundColor: "#e09d21" }}>
            <Tabs value={value} onChange={handleChange}>
              <Tab label="code" />
              <Tab label="tree" />
            </Tabs>
          </AppBar>
          {value === 0 && (
            <TabPanel>
              <FormatJson data={json} />
            </TabPanel>
          )}
          {value === 1 && (
            <TabPanel>
              <EditorJson json={json} />
            </TabPanel>
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
