import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useCustomContext } from "../../ContextManager/ContextProvider";
import { Counter } from "../../components";
import "./DetailPage.css";

const DetailPage = () => {
  const { id } = useParams();
  const { getProductById, addProductCart, isInCart, cart, getProductCartById } =
    useCustomContext();
  const [productDetail, setProductDetail] = useState(
    isInCart(id) ? getProductCartById(id) : getProductById(id)
  );
  
  return (
    <div className="bodyPag">
      <div className="detailCard">

        <div className="tituleDetail">
          <p>{productDetail.nombre}</p>
        </div>

        <div className="horizontalDetail">
          <div className="leftDetail">
            <div>{productDetail.imagen}</div>
            <h2>$ {productDetail.precio}</h2>
          </div>
          <div className="rightDetail">
            <p>Descripción: {productDetail.descripcion}</p>

            {isInCart(id) ? (
              <Counter
                initialValue={productDetail.quantity}
                stock={productDetail.stock}
                id={productDetail.id}
              />
            ) : (
              <Counter
                initialValue={1}
                stock={productDetail.stock}
                id={productDetail.id}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
