import React, { useState } from "react";
import Carousel from "react-spring-3d-carousel";
import { v4 as uuidv4 } from "uuid";
import { config } from "react-spring";
import Card1 from "./Cards/Card1";


function CardNews() {
    const [state, setState] = useState({
        goToSlide: 0,
        offsetRadius: 2,
        showNavigation: false,
        config: config.gentle
      });
    
      let slides = [
        {
          key: uuidv4(),
          content: <Card1 value='1'/>
        },
        {
          key: uuidv4(),
          content: <Card1 value='2'/>
        },
        {
          key: uuidv4(),
          content: <Card1 value='3'/>
        },
        {
          key: uuidv4(),
          content: <Card1 value='4'/>
        },
        {
          key: uuidv4(),
          content: <Card1 value='5'/>
        },
        {
          key: uuidv4(),
          content: <Card1 value='6'/>
        },
        {
          key: uuidv4(),
          content: <Card1 value='7'/>
        },
        {
          key: uuidv4(),
          content: <Card1 value='8'/>
        }
      ].map((slide, index) => {
        return { ...slide, onClick: () => setState({ goToSlide: index }) };
      });
    
      const onChangeInput = (e) => {
        setState({
          [e.target.name]: parseInt(e.target.value, 10) || 0
        });
      };
    
      let xDown = null;
      let yDown = null;
    
      const getTouches = (evt) => {
        return (
          evt.touches || evt.originalEvent.touches // browser API
        ); // jQuery
      };
    
      const handleTouchStart = (evt) => {
        const firstTouch = getTouches(evt)[0];
        xDown = firstTouch.clientX;
        yDown = firstTouch.clientY;
      };
    
      const handleTouchMove = (evt) => {
        if (!xDown || !yDown) {
          return;
        }
    
        let xUp = evt.touches[0].clientX;
        let yUp = evt.touches[0].clientY;
    
        let xDiff = xDown - xUp;
        let yDiff = yDown - yUp;
    
        if (Math.abs(xDiff) > Math.abs(yDiff)) {
          /*most significant*/
          if (xDiff > 0) {
            /* left swipe */
            setState({ goToSlide: state.goToSlide + 1 });
          } else {
            /* right swipe */
            setState({ goToSlide: state.goToSlide - 1 });
          }
        } else {
          if (yDiff > 0) {
            /* up swipe */
          } else {
            /* down swipe */
          }
        }
        /* reset values */
        xDown = null;
        yDown = null;
      };
    
      return (
        <div
          style={{ width: "80%", height: "500px", margin: "0 auto" }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
        >
          <Carousel
            slides={slides}
            goToSlide={state.goToSlide}
            offsetRadius={state.offsetRadius}
            showNavigation={state.showNavigation}
            animationConfig={state.config}
          />
          <div
            style={{
              margin: "0 auto",
              marginTop: "2rem",
              width: "50%",
              display: "flex",
              justifyContent: "space-around"
            }}
          >
          </div>
        </div>
    );
}

export default CardNews