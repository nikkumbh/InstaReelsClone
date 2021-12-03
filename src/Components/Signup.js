import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { makeStyles } from '@material-ui/styles';
import Alert from '@mui/material/Alert';
import TextField from '@mui/material/TextField';
import "./Signup.css";
import insta from "../Assets/i2.jpg";
import CloudUploadIcon from '@material-ui/icons/CloudUpload'

export default function Login() {
  const useStyles = makeStyles({
    text1: {
      color: "grey",
      textAlign: "center",
    },
  });
  const classes = useStyles();
  return (
    <div className="signupWrapper">
      <div className="signupCard">
        <Card variant="outlined">
          <div className="insta-logo">
            <img src={insta} alt="" />
          </div>
          <CardContent>
            <Typography className={classes.text1} variant="subtitle1">
              Sign up to see photos and videos from your friends
            </Typography>
            {true && <Alert severity="error">This is an error alert — check it out!</Alert>}
            
            <Button size="small" color="primary" color="secondary" fullWidth={true} variant="outlined" margin="dense" startIcon={< CloudUploadIcon />}>
              UPLOAD PROFILE IMAGE
              <input type="file" accept="images/*" />
            </Button>
          </CardContent>
          <CardActions>
            <Button size="small" color="primary">
              Share
            </Button>
          </CardActions>
        </Card>
      </div>
    </div>
  );
}
