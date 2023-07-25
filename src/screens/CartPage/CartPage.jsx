import React from "react";
import { useCustomContext } from "../../ContextManager/ContextProvider";
import { ProductCartCard } from "../../components";
import "./CartPage.css";


const CartPage = () => {
  const { cart, getTotal,clearCart } = useCustomContext();
  
  const onClickClearCart = () => {
    clearCart();
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Compra realizada con éxito',
      showConfirmButton: true,
    })
    };

  return (
    <>
      <div className="bodyCart">
        {cart.length > 0 ? (
          <>
            <div className="bodyWithElements">
              <div className="cardCarts">
                {cart.map((product) => (
                  <ProductCartCard key={product.id} producto={product} />
                ))}
              </div>
              <div className="total">Total: $ {getTotal()}</div>
            </div>
          </>
        ) : (
          <div className="centerText">
            <p className="alerta">Aún no ha comprado nada </p> 
            <p>¡Dirijase al inicio para realizar una compra!</p>
            </div>
        )}
      </div>
      <div className="endBuy">
        <button className="endButton" onClick={onClickClearCart}>
          Comprar
        </button>
      </div>
    </>
  );
};

export default CartPage;
