import { ButtonGroup, Button } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { filterProducts,set } from "../../store/actions";

function Categories () {
  const {categories} = useSelector((state) => state.categories);

  const dispatch = useDispatch();

  const handleChangeCategory = (category) => {
    dispatch(filterProducts(category));
  }

  onload = () => {
    dispatch(set(categories[0]));
  }

  return (
    <>
      <h1>Browse our Categories</h1>

      <ButtonGroup variant="text">
        {categories.map((category, idx) => (
          <Button 
            key={`cat-${idx}`}
            onClick={() => handleChangeCategory(category)}
          >
            {category.displayName}
          </Button>
        ))}
      </ButtonGroup>
    </>
  );
}

export default Categories;
