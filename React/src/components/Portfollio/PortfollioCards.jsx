import React, { useState } from "react";
import Carousel from "react-spring-3d-carousel";
import { v4 as uuidv4 } from "uuid";
import { config } from "react-spring";
import PCard1 from "./Cards/PCard1";


function PortfollioCards() {
    const [state, setState] = useState({
        goToSlide: 0,
        offsetRadius: 4,
        showNavigation: false,
        config: config.wobbly
      });
    
      let slides = [
        {
          key: uuidv4(),
          content: <PCard1 imagen='https://updates.theme-fusion.com/wp-content/uploads/2019/01/pwa_880_660.jpg'/>
        },
        {
          key: uuidv4(),
          content: <PCard1 imagen='https://updates.theme-fusion.com/wp-content/uploads/2017/12/convertplus_thumbnail.jpg'/>
        },
        {
          key: uuidv4(),
          content: <PCard1 imagen='https://updates.theme-fusion.com/wp-content/uploads/2017/12/acf_pro.png'/>
        },
        {
          key: uuidv4(),
          content: <PCard1 imagen='https://updates.theme-fusion.com/wp-content/uploads/2017/12/layer_slider_plugin_thumb.png'/>
        },
        {
          key: uuidv4(),
          content: <PCard1 imagen='https://updates.theme-fusion.com/wp-content/uploads/2016/08/slider_revolution-1.png'/>
        },
        {
          key: uuidv4(),
          content: <PCard1 imagen='https://updates.theme-fusion.com/wp-content/uploads/2017/12/layer_slider_plugin_thumb.png'/>
        },
        {
          key: uuidv4(),
          content: <PCard1 imagen='https://updates.theme-fusion.com/wp-content/uploads/2017/12/convertplus_thumbnail.jpg'/>
        },
        {
          key: uuidv4(),
          content: <PCard1 imagen='https://updates.theme-fusion.com/wp-content/uploads/2016/08/slider_revolution-1.png'/>
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

export default PortfollioCards