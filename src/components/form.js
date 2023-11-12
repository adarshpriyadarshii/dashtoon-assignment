import {
  Button,
  FormGroup,
  FormLabel,
  RadioGroup,
  Stack,
  Slider,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import CustomCB from "./common/customCB";
import CustomRadio from "./common/customRadio";
import horror from "../assets/genre/horror.jpg";
import romance from "../assets/genre/romance.jpg";
import superhero from "../assets/genre/superhero.jpeg";
import mystery from "../assets/genre/mystery.jpg";
import anime from "../assets/art_style/anime.jpg";
import cartoon from "../assets/art_style/cartoon.jpeg";
import realistic from "../assets/art_style/realistic.jpg";
import WarningAmberRoundedIcon from "@mui/icons-material/WarningAmberRounded";
import SelfImprovementRoundedIcon from "@mui/icons-material/SelfImprovementRounded";
import SentimentVerySatisfiedRoundedIcon from "@mui/icons-material/SentimentVerySatisfiedRounded";
import MoodBadRoundedIcon from "@mui/icons-material/MoodBadRounded";
import LocalFireDepartmentRoundedIcon from "@mui/icons-material/LocalFireDepartmentRounded";
import story from "../assets/story";

/* This a Input Form component . 
  Desc: 
  1. Custom Radio Buttons for Genre and Art Style selection.
  2. Custom CheckBoxes for Character Traits selection.
  3. Sliders for selecting range of emotion.
  4. Handling variuos input states.
  5. Funtion for  calling the API (text-to-image) for generaing images according to the user input.
*/

function Form({
  setUrl,
  setUrl1,
  setUrl2,
  setUrl3,
  setUrl4,
  setUrl5,
  setUrl6,
  setUrl7,
  setUrl8,
  setUrl9,
}) 
{
  async function query(data) { //Funtion for API call by fetch() method.
    const response = await fetch(
      "https://xdwvg9no7pefghrn.us-east-1.aws.endpoints.huggingface.cloud",
      {
        headers: {
          Accept: "image/png",
          Authorization:
            "Bearer VknySbLLTUjbxXAXCjyfaFIPwUTCeRXbFSOjwRiCxsxFyhbnGjSFalPKrpvvDAaPVzWEevPljilLVDBiTzfIbWFdxOkYJxnOPoHhkkVGzAknaOulWggusSFewzpqsNWM",
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(data),
      }
    );

    const result = await response.blob(); //we have used async and await method, so that the promise is returned properly.

    return result;
  }

  //Variuos inputs
  const [check, setCheck] = useState(0); //Checkbox 1
  const [check1, setCheck1] = useState(0); //Checkbox 2
  const [check2, setCheck2] = useState(0); //Checkbox 3
  const [check3, setCheck3] = useState(0); //Checkbox 4
  const [check4, setCheck4] = useState(0); //Checkbox 5
  const [genre, setGenre] = useState("superhero");
  const [art, setArt] = useState("cartoon");
  const [slid, setSlid] = useState(50); //Slider 1 for sad-happy emotion.
  const [slid1, setSlid1] = useState(50); // Slider 2 for angry-calm emotion.
  const [data, setData] = useState({});

  const handleSlid = (e, newValue) => { //Funtion for handling changes in Slider 1
    setSlid(newValue);
  };
  const handleSlid1 = (e, newValue) => { //Funtion for handling changes in Slider 2
    setSlid1(newValue);
  };

  const traits = [];
  if (check === 1) traits.push("Brave");
  if (check1 === 1) traits.push("Loyal");
  if (check2 === 1) traits.push("Intelligent");
  if (check3 === 1) traits.push("Witty");
  if (check4 === 1) traits.push("Curious");

  const newData = {
    Genre: genre,
    Art: art,
    Traits: traits,
    Slid: slid === 0 ? "Sad" : slid === 50 ? "Neutral" : "Happy",
    Slid1: slid1 === 0 ? "Angry" : slid1 === 50 ? "Neutral" : "Calm",
  };

  const urls = [
    setUrl,
    setUrl1,
    setUrl2,
    setUrl3,
    setUrl4,
    setUrl5,
    setUrl6,
    setUrl7,
    setUrl8,
    setUrl9,
  ];
  const handleClick = () => { //Funtion for getting all the input and calling of API using vaious user-defined inputs.
    setData(newData);
    for (let i = 0; i < urls.length; i++) {
      var plot=story[i].plot;
      query({
        "inputs":
          "Boy and Girl "+ 
          plot +
          "with emotions" +
          slid +
          "and" +
          slid1 +
          "of " +
          genre +
          " genre" +
          " in the art style of " +
          art +
          "with speech bubbles."
          ,
      })
        .then((res) => {
          const imageUrl = URL.createObjectURL(res); //Creating image url from big large object (blob).
          const setUrlFunction = urls[i];
          if (setUrlFunction) {
            setUrlFunction(imageUrl);
          } else {
            console.error(`Error: setUrl${i} is not defined.`);
          }
        })
        .catch((err) => { //Handling errors
          console.error("Error fetching image:", err);
        });
    }
    //Setting the various inputs to default.
    setCheck(0);
    setCheck1(0);
    setCheck2(0);
    setCheck3(0);
    setCheck4(0);
    setArt("cartoon");
    setGenre("superhero");
    setSlid(50);
    setSlid1(50);
  };

  return (
    <div>
      <FormGroup>
        <FormLabel
          sx={{
            color: "white",
            fontFamily: "cursive",
            fontSize: "14px",
            fontWeight: "bold",
          }}
        >
          Genre
        </FormLabel>
        <RadioGroup //Radio group for getting Genre of comic.
          row
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
          sx={{
            justifyContent: "center",
          }}
        >
          <CustomRadio
            value="superhero"
            src={superhero}
            check={genre}
            txt="Super Hero"
          />
          <CustomRadio 
            value="horror" 
            src={horror} 
            check={genre} 
            txt="Horror" 
          />
          <CustomRadio
            value="romance"
            src={romance}
            check={genre}
            txt="Romantic"
          />
          <CustomRadio
            value="mystery"
            src={mystery}
            check={genre}
            txt="Mystery"
          />
        </RadioGroup>
      </FormGroup>
      <FormGroup>
        <FormLabel
          sx={{
            color: "white",
            fontFamily: "cursive",
            fontSize: "14px",
            fontWeight: "bold",
          }}
        >
          Art Style
        </FormLabel>
        <RadioGroup //Radio group for getting Art Style of comic.
          row
          value={art}
          onChange={(e) => setArt(e.target.value)}
          sx={{
            justifyContent: "center",
          }}
        >
          <CustomRadio
            value="cartoon"
            src={cartoon}
            check={art}
            txt="Cartoon"
          />
          <CustomRadio
            value="anime"
            src={anime}
            check={art}
            txt="Anime/Manga"
          />
          <CustomRadio
            value="realistic"
            src={realistic}
            check={art}
            txt="Realistic"
          />
        </RadioGroup>
      </FormGroup>

      <FormGroup>
        <FormLabel
          sx={{
            color: "white",
            fontFamily: "cursive",
            fontSize: "14px",
            fontWeight: "bold",
          }}
        >
          Character Traits
        </FormLabel>
        <Stack direction="row" justifyContent="center">
          <CustomCB
            check={check}
            func={() => setCheck(1 - check)}
            txt="Brave"
          />
          <CustomCB
            check={check1}
            func={() => setCheck1(1 - check1)}
            txt="Loyal"
          />
          <CustomCB
            check={check2}
            func={() => setCheck2(1 - check2)}
            txt="Intelligent"
          />
          <CustomCB
            check={check3}
            func={() => setCheck3(1 - check3)}
            txt="Witty"
          />
          <CustomCB
            check={check4}
            func={() => setCheck4(1 - check4)}
            txt="Curious"
          />
        </Stack>
      </FormGroup>
      <FormGroup>
        <FormLabel
          sx={{
            color: "white",
            fontFamily: "cursive",
            fontSize: "14px",
            fontWeight: "bold",
          }}
        >
          Emotions
        </FormLabel>
        <Stack
          direction="row"
          spacing={{ xs: 1, sm: 2, md: 2 }}
          justifyContent="center"
          alignItems="center"
          sx={{
            padding: "20px",
          }}
        >
          <Stack direction="column">
            <MoodBadRoundedIcon fontSize="large" />
            <Typography>Sad</Typography>
          </Stack>
          <Slider //Slider 1 for emotion between sad and happy.
            size="small"
            style={{
              color: "#430470",
            }}
            step={50}
            value={slid}
            onChange={handleSlid}
          />
          <Stack direction="column">
            <SentimentVerySatisfiedRoundedIcon fontSize="large" />
            <Typography>Happy</Typography>
          </Stack>
        </Stack>
        <Stack
          direction="row"
          spacing={{ xs: 1, sm: 2, md: 2 }}
          justifyContent="center"
          alignItems="center"
          sx={{
            padding: "20px",
          }}
        >
          <Stack direction="column">
            <WarningAmberRoundedIcon fontSize="large" />
            <Typography>Angry</Typography>
          </Stack>
          <Slider //Slider 2 for emotion between angry and calm.
            size="small"
            style={{
              color: "#430470",
            }}
            step={50}
            value={slid1}
            onChange={handleSlid1}
          />
          <Stack direction="column">
            <SelfImprovementRoundedIcon fontSize="large" />
            <Typography>Calm</Typography>
          </Stack>
        </Stack>
      </FormGroup>
      <Button //Form submission button.
        onClick={handleClick}
        endIcon={<LocalFireDepartmentRoundedIcon />}
        variant="contained"
        size="small"
        sx={{
          backgroundColor:"#430470",
          color:'white'
        }}
      >
        Let's Cook
      </Button>
    </div>
  );
}

export default Form;
