import React, { useEffect, useState } from "react";
import { useCustomContext } from "../../ContextManager/ContextProvider";
import { ProductCard } from "../../components";
import "../../../src/App.css";
import "./HomePage.css";

const HomePage = () => {
  const { products } = useCustomContext();
  const [searchProduct, setSearchProduct] = useState("");

  const [max, setMax] = useState(1000000);
  const [min, setMin] = useState(0);

  const [currentProducts, setCurrentProducts] = useState(products);

  useEffect(() => {
    setCurrentProducts(
      products.filter(
        (producto) =>
          producto.nombre.toLowerCase().includes(searchProduct.toLowerCase()) &&
          producto.precio >= min &&
          producto.precio <= max
      )
    );
  }, [searchProduct, max, min]);

  return (
    <>
      <div className="ContentHomePage">
        <div className="ContentMain">
          <div className="ContentTitule">
            <h1>Product Store</h1>
          </div>
          <div className="Cuerpo">
            <div className="Cartas">
              {currentProducts.length > 0 ? (
                currentProducts.map((product) => (
                  <ProductCard producto={product} key={product.id} />
                ))
              ) : (
                <h2>No se encuentran productos bajo esas especificaciones</h2>
              )}
            </div>

            <div className="Filtros">
              <div className="TitleFilter">
                Search by:
            </div>
              <div className="filterNombre">
                  <div className="TitleName">Name</div>

                <input
                  className="inputName"
                  placeholder="Product Name"
                  value={searchProduct}
                  onChange={(e) => setSearchProduct(e.target.value)}
                />
              </div>

              <div className="filterPrecio">
                <div className="TitleName">
                  Price
                </div>

                <div className="rango">
                  <div className="RangeExtreme">
                    <p>Minimum</p>
                    <input
                      className="inputPrecio"
                      type="text"
                      value={min}
                      onChange={(e) => setMin(Number(e.target.value))}
                    />
                  </div>
                  <div className="RangeExtreme">
                    <p>Maximum</p>
                    <input
                      className="inputPrecio"
                      type="text"
                      value={max}
                      onChange={(e) => setMax(Number(e.target.value))}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
