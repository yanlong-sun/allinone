import { useContext } from "react";
import ExpandedCard from "../components/ui/ExpandedCard";
import FavoritesContext from "../store/FavoritesContext";
import Item from "../components/items/Item";

function FavoritesPage() {
  const favoriteCtx = useContext(FavoritesContext);
  let content;
  if (favoriteCtx.totalFavorites === 0) {
    content = <main>Bookmark your favorite Moives!</main>;
  } else {
    content = (
      <ExpandedCard>
        {favoriteCtx.favorites.map((data) => (
          <Item
            key={data.titleId}
            isDisplayBookmark="false"
            id={data.titleId}
            title={data.title}
            isAdult={data.isAdult}
            startYear={data.startYear}
            runtimeMinutes={data.runtimeMinutes}
            genres={data.genres}
            imageUrl={data.imageUrl}
            rating={data.rating}
          />
        ))}
      </ExpandedCard>
    );
  }
  return (
    <section>
      <h1>Bookmarks</h1>
      {content}
    </section>
  );
}

export default FavoritesPage;
