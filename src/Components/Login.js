import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
//import FacebookIcon from '@mui/icons-material/Facebook';
import 'pure-react-carousel/dist/react-carousel.es.css';
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import {CarouselProvider,  Slider,  Slide,  ButtonBack,  ButtonNext, Image} from "pure-react-carousel";
import { makeStyles } from "@material-ui/styles";
import TextField from "@mui/material/TextField";
import "./Login.css";
import instaLogin from "../Assets/instaLogin.png";
import insta from "../Assets/i2.jpg";
import { Link } from "react-router-dom";
import img1 from "../Assets/img1.jpg";
import img2 from "../Assets/img2.jpg";
import img3 from "../Assets/img3.jpg";
import img4 from "../Assets/img4.jpg";
import img5 from "../Assets/img5.jpg";

export default function Login() {
  const useStyles = makeStyles({
    text1: {
      color: "grey",
      textAlign: "center",
    },
    text2: {
      textAlign: "center",
    },
    text3: {
      color: "black",
      textAlign: "center",
    },
    card2: {
      height: "5vh",
      marginTop: "2%",
    },
  });
  const classes = useStyles();
  return (
    <div className="loginWrapper">
      <div
        className="imgcar"
        style={{
          backgroundImage: "url(" + instaLogin + ")",
          backgroundSize: "cover",
        }}
      >
        <div className="car">
          <CarouselProvider
            visibleSlides={1}
            totalSlides={5}
            naturalSlideWidth={238}
            naturalSlideHeight={423}
            hasMasterSpinner
            isPlaying={true}
            infinite={true}
            dragEnabled={false}
            touchEnabled={false}
          >
            <Slider>
              <Slide index={0}><Image src={img1}/></Slide>
              <Slide index={1}><Image src={img2}/></Slide>
              <Slide index={2}><Image src={img3}/></Slide>
              <Slide index={3}><Image src={img4}/></Slide>
              <Slide index={4}><Image src={img5}/></Slide>
            </Slider>
          </CarouselProvider>
        </div>
      </div>
      <div className="loginCard">
        <Card variant="outlined">
          <div className="insta-logo">
            <img src={insta} alt="" />
          </div>
          <CardContent>
            <TextField
              id="outlined-basic"
              label="Enter Email"
              variant="outlined"
              fullWidth={true}
              margin="dense"
              size="small"
            />
            <TextField
              id="outlined-basic"
              label="Password"
              variant="outlined"
              fullWidth={true}
              margin="dense"
              size="small"
            />
            <Typography
              className={classes.text2}
              color="primary"
              variant="subtitle1"
            >
              Forgot Password?
            </Typography>
          </CardContent>
          <CardActions>
            <Button color="primary" variant="contained" fullWidth={true}>
              LOG IN
            </Button>
          </CardActions>
        </Card>
        <Card variant="outlined" className={classes.card2}>
          <CardContent>
            <Typography className={classes.text1} variant="subtitle1">
              Don't have an account?
              <Link to="/signup" style={{ textDecoration: "none" }}>
                Sign up
              </Link>
            </Typography>
          </CardContent>
        </Card>
        <Typography
          className={classes.text3}
          marginTop="5%"
          variant="subtitle1"
        >
          Get the app.
        </Typography>
      </div>
    </div>
  );
}
