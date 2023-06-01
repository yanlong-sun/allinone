import classes from "./ScrollLoopCard.module.css";
import MovieCard from "./MovieCard";
import { ReactComponent as Back } from "../../img/icons/back.svg";
import { ReactComponent as Forward } from "../../img/icons/forward.svg";
import { useState, useRef } from "react";

function ScrollLoopCard(props) {
  const data = Array.from(props.data);
  const container = useRef(null);
  const [isStart, setIsStart] = useState(true);

  function clickBackHandler() {
    const containerNow = container.current;
    if (!containerNow) return;
    const { scrollLeft, scrollWidth, clientWidth } = containerNow;
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
      containerNow.scrollTo({ left: 0, behavior: "smooth" });
      setIsStart(true);
    } else {
      containerNow.scrollTo({ left: newScrollLeft, behavior: "smooth" });
    }
  }

  return (
    <div className={classes.container}>
      <a
        className={classes.buttonContainerBack}
        onClick={clickBackHandler}
        style={isStart ? { display: "none" } : null}
      >
        <Back className={classes.btnBack} />
      </a>
      <main className={classes.bar}>
        <div className={classes.bar} ref={container}>
          {data.map((item) => (
            <MovieCard
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
      <a
        className={classes.buttonContainerForward}
        onClick={clickForwardHandler}
      >
        <Forward className={classes.btnForward} />
      </a>
    </div>
  );
}

export default ScrollLoopCard;
