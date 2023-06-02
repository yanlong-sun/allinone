import classes from "./ScrollCardContainer.module.css";
import MovieCard from "./MovieCard";
import { ReactComponent as Back } from "../../img/icons/back.svg";
import { ReactComponent as Forward } from "../../img/icons/forward.svg";
import { useState, useRef } from "react";

function ScrollCardContainer(props) {
  const data = Array.from(props.data);
  const container = useRef(null);
  const [isStart, setIsStart] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  function clickBackHandler() {
    setIsEnd(false);
    const containerNow = container.current;
    if (!containerNow) return;
    const { scrollLeft } = containerNow;
    const newScrollLeft = scrollLeft - 300;
    containerNow.scrollTo({ left: newScrollLeft, behavior: "smooth" });
    if (containerNow.scrollLeft === 0) setIsStart(true);
  }

  function clickForwardHandler() {
    setIsStart(false);
    const containerNow = container.current;
    if (!containerNow) return;
    const { scrollLeft, scrollWidth, clientWidth } = containerNow;
    const maxScrollLeft = scrollWidth - clientWidth;
    const newScrollLeft = scrollLeft + 300;
    if (newScrollLeft >= maxScrollLeft) {
      setIsEnd(true);
    } else {
      containerNow.scrollTo({ left: newScrollLeft, behavior: "smooth" });
    }
  }

  return (
    <div className={classes.container}>
      <div className={classes.headLine}>
        <header className={classes.header}>{props.header}</header>
      </div>

      <div className={classes.subContainer}>
        <button
          className={classes.buttonContainerBack}
          onClick={clickBackHandler}
          style={isStart ? { display: "none" } : null}
        >
          <Back className={classes.btnBack} />
        </button>
        <main className={classes.bar}>
          <div className={classes.bar} ref={container}>
            {data.map((item) => (
              <MovieCard
                className={classes.movieCard}
                key={item.titleId}
                title={item.title}
                isAdult={item.isAdult}
                startYear={item.startYear}
                runtimeMinutes={item.runtimeMinutes}
                genres={item.genres}
                imageUrl={item.imageUrl}
                rating={item.rating}
              />
            ))}
          </div>
        </main>
        <button
          className={classes.buttonContainerForward}
          onClick={clickForwardHandler}
          style={isEnd ? { display: "none" } : null}
        >
          <Forward className={classes.btnForward} />
        </button>
      </div>
    </div>
  );
}

export default ScrollCardContainer;
