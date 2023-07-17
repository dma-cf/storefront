import { useDispatch, useSelector } from 'react-redux';
import { When } from 'react-if';
import { removeFromCart } from '../../store/cart';
import { backToStock } from '../../store/products';

import './styles.scss';

function SimpleCart() {
  const { cart } = useSelector(state => state);
  const dispatch = useDispatch();

  const removeDispatcher = (product) => {
    dispatch(removeFromCart(product));
    dispatch(backToStock(product));
  };

  return (
    <>
      <When condition={cart.length > 0}>
        <div className="simple-cart">
          <ul>
            {
              cart.map((product, index) => (
                <li key={`simpleCart-${index}`} className="item" style={{textTransform:'capitalize'}}>
                  {product.name}
                  <span
                    onClick={() => removeDispatcher(product)}
                    className="remove"
                    style={{textAlign: 'center'}}
                  >
                    x
                  </span>
                </li>
              ))
            }
          </ul>
        </div>
      </When>
    </>
  )
}

export default SimpleCart;
