import { ButtonGroup, Button } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { set } from "../../store/categories";

function Categories () {

  const { categories } = useSelector((state)=> state.store)

  const dispatch = useDispatch();

  return (
    <>
    <h1>Browse our Categories</h1>

    <ButtonGroup variant="text" aria-aria-label="category button group">
      {
        categories.map((category, idx) => (
            <Button 
              key={`cat-${idx}`}
              onClick={() => dispatch(set(category))}>
              {category.displayName}
            </Button>
          )
        )
      }
    </ButtonGroup>
    </>
  );

}

export default Categories;