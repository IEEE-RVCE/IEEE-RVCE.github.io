import {
  Button,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  FormControlLabel,
  InputLabel,
  makeStyles,
  MenuItem,
  Select,
  Snackbar,
  TextField,
  Typography,
} from "@material-ui/core";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { ecats, hostname } from "../links";
import Alert from "@material-ui/lab/Alert";
import { CircularProgress } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    position: "absolute",
    top: "30%",
  },
  button: theme.button,
  formControl: {
    minWidth: 240,
  },
  fields: {
    padding: theme.spacing(1),
  },
}));

//Nice prototype to convert Date objects to datetime local strings
// eslint-disable-next-line
Date.prototype.toDatetimeLocal = function toDatetimeLocal() {
  var date = this,
    ten = function (i) {
      return (i < 10 ? "0" : "") + i;
    },
    YYYY = date.getFullYear(),
    MM = ten(date.getMonth() + 1),
    DD = ten(date.getDate()),
    HH = ten(date.getHours()),
    II = ten(date.getMinutes()),
    SS = ten(date.getSeconds());
  return YYYY + "-" + MM + "-" + DD + "T" + HH + ":" + II + ":" + SS;
};

export const AddEventDialog = (props) => {
  const classes = useStyles();

  // Textfields related
  const [values, setValues] = useState({
    ename: "",
    eventstart: new Date().toDatetimeLocal(),
    eventend: new Date().toDatetimeLocal(),
    pubstart: new Date().toDatetimeLocal(),
    pubend: new Date().toDatetimeLocal(),
    details: "",
    feeno: "",
    feeyes: "",
    ecat: "",
    smallposterlink: "",
    largeposterlink: "",
    reglink: "",
    brochurelink: "",
    hosts: [],
    keywords: "",
  });
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (props.data !== undefined) {
      setValues({
        ...props.data,
        eventstart: props.data.eventstart.toDatetimeLocal(),
        eventend: props.data.eventend.toDatetimeLocal(),
        pubstart: props.data.pubstart.toDatetimeLocal(),
        pubend: props.data.pubend.toDatetimeLocal(),
      });
    }
  }, [props.data]);

  // new way of uploading filw without promised and axios

  const handleFileInput = async (file) => {
    const data = new FormData();
    data.append("image", file);
    try {
      const res = await axios.post(
        `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_IMGBB_API_KEY}`,
        data
      );
      setValues({
        ...values,
        smallposterlink: res.data.data.display_url,
        largeposterlink: res.data.data.display_url,
      });
      setLoading((v) => !v);
    } catch (err) {
      console.log(err);
      setLoading((v) => !v);
    }
  };

  const handleChange = (prop) => (event) => {
    setValues({
      ...values,
      [prop]: event.target.value,
    });
  };

  const [meta, setMeta] = useState({
    error: false,
    success: false,
  });

  const submitData = () => {
    props.onClose();
    if (props.edit === true) {
      axios
        .put(hostname + "/api/event/" + props.data.eid, values, {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("atoken"),
          },
        })
        .then((response) => {
          if (response.data.ok === true) setMeta({ ...meta, success: true });
          else setMeta({ ...meta, error: true });
        })
        .then(() => {
          window.location.reload();
        })
        .catch((error) => {
          console.error(error.response);
          setMeta({ ...meta, error: true });
        });
    } else {
      axios
        .post(hostname + "/api/event", values, {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("atoken"),
          },
        })
        .then((response) => {
          if (response.data.ok === true) setMeta({ ...meta, success: true });
          else setMeta({ ...meta, error: true });
        })
        .then(() => {
          window.location.reload();
        })
        .catch((error) => {
          console.error(error.response);
          setMeta({ ...meta, error: true });
        });
    }
  };

  // Handle closing of snackbars
  const handleClose = (prop) => (event, reason) => {
    if (reason === "clickaway") return;
    setMeta({ ...meta, [prop]: false });
  };

  const [checked, setChecked] = useState(false);
  // Handle internal registration checkbox
  const handleChecked = (event) => {
    setChecked(event.target.checked);
    if (event.target.checked)
      setValues({
        ...values,
        reglink: window.location.origin + "/#/register/",
      });
    else
      setValues({
        ...values,
        reglink: props.data !== undefined ? props.data.reglink : "",
      });
  };

  return (
    <>
      <Dialog
        onClose={props.onClose}
        open={props.open}
        className={classes.root}
      >
        <DialogTitle>Add event</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Add event details here for users to read about the event. Abide to
            the datatypes used in the form and use submit button to add the
            event.
          </DialogContentText>
          <div className={classes.fields}>
            <TextField
              id="ename"
              label="Event Name"
              type="text"
              placeholder="Enter name of the event"
              variant="outlined"
              value={values.ename}
              onChange={handleChange("ename")}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </div>
          <div className={classes.fields}>
            <TextField
              id="eventstart"
              label="Event start time"
              type="datetime-local"
              variant="outlined"
              defaultValue={new Date().toDatetimeLocal()}
              value={values.eventstart}
              onChange={handleChange("eventstart")}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </div>
          <div className={classes.fields}>
            <TextField
              id="eventend"
              label="Event end time"
              type="datetime-local"
              variant="outlined"
              defaultValue={new Date().toDatetimeLocal()}
              value={values.eventend}
              onChange={handleChange("eventend")}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </div>
          {/* <div className={classes.fields}>
                        <TextField
                            id="pubstart"
                            label="Publicity start time"
                            type="datetime-local"
                            variant="outlined"
                            defaultValue={new Date().toDatetimeLocal()}
                            value={values.pubstart}
                            onChange={handleChange('pubstart')}
                            InputLabelProps={{
                                shrink: true
                            }}
                        />
                    </div>
                    <div className={classes.fields}>
                        <TextField
                            id="pubend"
                            label="Publicity end time"
                            type="datetime-local"
                            variant="outlined"
                            defaultValue={new Date().toDatetimeLocal()}
                            value={values.pubend}
                            onChange={handleChange('pubend')}
                            InputLabelProps={{
                                shrink: true
                            }}
                        />
                    </div> */}
          <div className={classes.fields}>
            <TextField
              id="details"
              label="Event details"
              type="text"
              variant="outlined"
              placeholder="Enter details of the event"
              multiline
              value={values.details}
              onChange={handleChange("details")}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </div>
          <div className={classes.fields}>
            <TextField
              id="feeno"
              label="Non-IEEE member fee"
              type="text"
              variant="outlined"
              placeholder="Enter fee for Non-IEEE member"
              multiline
              value={values.feeno}
              onChange={handleChange("feeno")}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </div>
          <div className={classes.fields}>
            <TextField
              id="feeyes"
              label="IEEE member fee"
              type="text"
              variant="outlined"
              placeholder="Enter fee for IEEE member"
              multiline
              value={values.feeyes}
              onChange={handleChange("feeyes")}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </div>
          <div className={classes.fields}>
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel id="ecat-select-label">
                Society or Affinity
              </InputLabel>
              <Select
                labelId="ecat-select-label"
                id="ecat-select"
                value={values.ecat}
                onChange={handleChange("ecat")}
              >
                <MenuItem value={ecats.main}>Main IEEE</MenuItem>
                <MenuItem value={ecats.compsoc}>Computer Society</MenuItem>
                <MenuItem value={ecats.comsoc}>Communication Society</MenuItem>
                <MenuItem value={ecats.aps}>
                  Antenna Propogation Society
                </MenuItem>
                <MenuItem value={ecats.sps}>Signal Processing Society</MenuItem>
                <MenuItem value={ecats.pes}>Power and Energy Society</MenuItem>
                <MenuItem value={ecats.ras}>
                  Robotic and Automation Society
                </MenuItem>
                <MenuItem value={ecats.cas}>
                  Circuits and Systems Society
                </MenuItem>
                <MenuItem value={ecats.sc}>
                  Sensors Council
                </MenuItem>
                <MenuItem value={ecats.sight}>
                  Special Interest Group on Humanitarian Technology
                </MenuItem>
                <MenuItem value={ecats.wie}>Women in Engineering</MenuItem>
              </Select>
            </FormControl>
          </div>
          {!loading ? (
            <div className={classes.fields}>
              <Button variant="contained" component="label">
                Upload Poster File
                <input
                  type="file"
                  hidden
                  onChange={async (e) => {
                    setLoading((v) => !v);
                    const file = e.target.files[0];
                    await handleFileInput(file);
                  }}
                />
              </Button>
              {values.smallposterlink !== "" ? (
                <div
                  style={{
                    padding: "10px",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img
                    src={values.smallposterlink}
                    alt="smallposter"
                    width="100"
                    height="100"
                  />
                </div>
              ) : null}
            </div>
          ) : (
            <div className={classes.fields}>
              <CircularProgress />
            </div>
          )}

          {/* <TextField
              id="smallposterlink"
              label="Small poster link"
              type="text"
              placeholder="Enter link of small poster"
              variant="outlined"
              value={values.smallposterlink}
              onChange={handleChange("smallposterlink")}
              InputLabelProps={{
                shrink: true,
              }}
            /> */}
          {/* <div className={classes.fields}>
            <Button variant="contained" component="label">
              Upload Large Poster File
              <input type="file" hidden />
            </Button>
            <TextField
              id="largeposterlink"
              label="Large poster link"
              type="text"
              placeholder="Enter link of large poster"
              variant="outlined"
              value={values.largeposterlink}
              onChange={handleChange("largeposterlink")}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </div> */}
          <div className={classes.fields}>
            <TextField
              id="brochurelink"
              label="Brochure link"
              type="text"
              placeholder="Enter link of Brochure"
              variant="outlined"
              value={values.brochurelink}
              onChange={handleChange("brochurelink")}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </div>
          <div className={classes.fields}>
            <FormControlLabel
              control={
                <Checkbox
                  color="#fff"
                  checked={checked}
                  onChange={handleChecked}
                  inputProps={{ "aria-label": "internal-reg-checkbox" }}
                  className={classes.checkbox}
                />
              }
              label="Internal registration link?"
            />
          </div>
          {!checked && (
            <div className={classes.fields}>
              <TextField
                id="reglink"
                label="Registration link"
                type="text"
                placeholder="Enter link for registration"
                variant="outlined"
                value={values.reglink}
                onChange={handleChange("reglink")}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </div>
          )}
          <div className={classes.fields}>
            <TextField
              id="keywords"
              label="Keywords"
              type="text"
              placeholder="Enter keywords separated by commas"
              variant="outlined"
              value={values.keywords}
              onChange={handleChange("keywords")}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </div>
          {values.hosts.map((host, i) => {
            return (
              <>
                <Typography variant="h6" className={classes.fields}>
                  {"Host " + Number(i + 1)}
                </Typography>
                <div className={classes.fields}>
                  <TextField
                    id={"name" + Number(i + 1)}
                    label={"Host " + Number(i + 1) + " name"}
                    type="text"
                    placeholder={"Enter name of Host " + Number(i + 1)}
                    variant="outlined"
                    value={values.hosts[i].name}
                    onChange={(event) => {
                      host.name = event.target.value;
                      let newHosts = [...values.hosts];
                      newHosts = newHosts.filter((ele, index) => {
                        return index !== i;
                      });
                      newHosts.splice(i, 0, host);
                      setValues({ ...values, hosts: newHosts });
                    }}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </div>
                {/* <div className={classes.fields}>
                                        <TextField
                                            id={"piclink"+ Number(i+1)}
                                            label={"Host " + Number(i+1) + " picture link"}
                                            type="text"
                                            placeholder={"Enter link of picture"}
                                            variant="outlined"
                                            value={values.hosts[i].piclink}
                                            onChange={
                                                (event) => {
                                                    host.piclink = event.target.value
                                                    let newHosts = [...values.hosts]
                                                    newHosts = newHosts.filter((ele, index) => {return index!==i})
                                                    newHosts.splice(i, 0, host)
                                                    setValues({...values, hosts: newHosts});
                                                }
                                            }
                                            InputLabelProps={{
                                                shrink: true
                                            }}
                                        />
                                    </div> */}
                {/* <div className={classes.fields}>
                                        <TextField
                                            id={"details"+ Number(i+1)}
                                            label={"Host " + Number(i+1) + " details"}
                                            type="text"
                                            placeholder={"Enter details of Host " + Number(i+1)}
                                            variant="outlined"
                                            multiline
                                            value={values.hosts[i].details}
                                            onChange={
                                                (event) => {
                                                    host.details = event.target.value
                                                    let newHosts = [...values.hosts]
                                                    newHosts = newHosts.filter((ele, index) => {return index!==i})
                                                    newHosts.splice(i, 0, host)
                                                    setValues({...values, hosts: newHosts});
                                                }
                                            }
                                            InputLabelProps={{
                                                shrink: true
                                            }}
                                        />
                                    </div> */}
              </>
            );
          })}
          <Button
            onClick={() => {
              setValues({
                ...values,
                hosts: [
                  ...values.hosts,
                  { name: "", piclink: "", details: "" },
                ],
              });
            }}
            className={classes.button}
          >
            Add host
          </Button>
        </DialogContent>
        <DialogActions>
          <Button onClick={submitData} className={classes.button}>
            Submit
          </Button>
        </DialogActions>
      </Dialog>
      <Snackbar
        open={meta.error}
        autoHideDuration={6000}
        onClose={handleClose("error")}
      >
        <Alert
          elevation={6}
          variant="filled"
          onClose={handleClose("error")}
          severity="error"
        >
          {props.edit
            ? "An error occurred while editing an event"
            : "An error occurred while adding event"}
        </Alert>
      </Snackbar>
      <Snackbar
        open={meta.success}
        autoHideDuration={6000}
        onClose={handleClose("success")}
      >
        <Alert
          elevation={6}
          variant="filled"
          onClose={handleClose("success")}
          severity="success"
        >
          {props.edit
            ? "Event edited successfully"
            : "Event added successfully"}
        </Alert>
      </Snackbar>
    </>
  );
};
