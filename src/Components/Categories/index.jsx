import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { Typography } from '@mui/material';
import { getCategories, setCategory } from '../../store/categories';
import { setProducts } from '../../store/products';

function Categories() {
  const { categories } = useSelector((state) => state.categories)
  const dispatch = useDispatch();

  const setDispatcher = (category) => {
    dispatch(setCategory(category));
  };

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  return (
    <div style={{textAlign:'center'}}>
      <Typography variant='h4' style={{marginTop: '100px'}}>Browse our Categories</Typography>
      <ButtonGroup variant="text" aria-label="category button group">
        {
          categories.map((category, idx) => (
            <Button
              key={`${category}-${idx}`}
              onClick={() => setDispatcher(category)} >
              {category.name}
            </Button>
          ))
        }
      </ButtonGroup>

    </div>
  )
}

export default Categories
