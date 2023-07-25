import React, { useState } from "react";
import { useCustomContext } from "../../ContextManager/ContextProvider";
import "./Counter.css";

const Counter = ({ initialValue, stock, id }) => {
  const { addProductCart } = useCustomContext();
  const [quantity, setQuantity] = useState(initialValue);

  const onClickAddProduct = () => {
    addProductCart(id, quantity);
    Swal.fire(
      "¡Añadido al carrito!",
      "Dirijase al carrito para finalizar",
      "success"
    );
  };

  return (
    <>
      <div className="Counters">
        <button
          className="buttonOp"
          onClick={() => setQuantity(quantity > 1 ? quantity - 1 : quantity)}
        >
          -
        </button>
        <button className="quantityButton">{quantity}</button>
        <button
          className="buttonOp"
          onClick={() =>
            setQuantity(quantity === stock ? quantity : quantity + 1)
          }
        >
          +
        </button>
      </div>

      <div className="centerButton">
        <button className="buttonConfirme" onClick={onClickAddProduct}>
          Add to cart
        </button>
        {/*             <button onClick={() => {
                addProductCart(id, quantity)
                alert('se añadio correctamente al carrito')
            }}>Confirmar</button>
 */}
      </div>
    </>
  );
};

export default Counter;
