import React from "react";
import { Spinner } from "reactstrap";

import { IRecipeListState } from "./types";
import { useDispatch, useSelector } from "../../hooks/react-redux";
import RecipeItem from "./RecipeItem/RecipeItem";
import Paging from "./Paging/Paging";
import { useSearchContext } from "../../contexts/SearchContext";
import { search } from "./actions";
import { COUNT_RECIPIES_ON_PAGE } from "../../config";

import "./RecipeList.scss";

const RecipeList: React.FC = () => {
  const { query } = useSearchContext();
  const dispatch = useDispatch();

  const { data, isLoading, error } = useSelector(
    ({ recipeList }: { recipeList: IRecipeListState }) => {
      return {
        isLoading: recipeList.isLoading,
        data: recipeList.data,
        error: recipeList.error
      };
    }
  ) as IRecipeListState;

  React.useEffect(() => {
    if (query.length < 1) return;
    dispatch(search(query, 0));
  }, [query, dispatch]);

  const onPageClickHandler = (page: string) => {
    if (page === "next") {
      dispatch(search(query, data ? Number(data.offset) + COUNT_RECIPIES_ON_PAGE : 0));
    } else if (page === "prev") {
      dispatch(search(query, data ? Number(data.offset) - COUNT_RECIPIES_ON_PAGE : 0));
    }
  };

  let result = null;
  let totalResults = 0;

  if (isLoading) {
    result = <Spinner />;
  } else if (error) {
    result = <div>{error.message}</div>;
  } else if (data && data.results) {
    result = data.results.map(item => (
      <RecipeItem recipe={item} key={item.id} />
    ));

    // need this because there is a bug in api of spoonacular
    totalResults =
      Number(data.totalResults) < data.results.length
        ? data.results.length
        : Number(data.totalResults);
  }

  return (
    <div className="recipies d-flex justify-content-start justify-content-md-between flex-column">
      <div className="recipies__list d-flex flex-column ">{result}</div>
      <div className="text-center">
        <Paging
          pageChangedHandler={onPageClickHandler}
          totalResults={totalResults}
          offset={data ? Number(data.offset) : 0}
          cntOnPage={COUNT_RECIPIES_ON_PAGE}
        />
      </div>
    </div>
  );
};

export { RecipeList };

export default RecipeList;
