import classes from "./CategoryCard.module.css";
import ScrollLoopCard from "./ScrollLoopCard";

function CategoryCard(props) {
  const allData = Array.from(props.data);
  return (
    <div className={classes.container}>
      <header className={classes.header}>{props.header}</header>
      <ScrollLoopCard data={allData} />
    </div>
  );
}

export default CategoryCard;
