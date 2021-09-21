import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Product } from "../../components";
import "./Products.css";
const Products = () => {
  const selectedTab = useSelector((state) => state.selectedTab);
  const products = useSelector((state) => state.allProducts);
  const [products_, setProducts_] = useState([]);
  useEffect(() => {
    if (selectedTab === "all products") {
      setProducts_(products);
    } else {
      setProducts_(
        products.filter((product) => {
          return (
            String(product?.data?.category).toLocaleLowerCase() === selectedTab
          );
        })
      );
    }
    // setProducts_(products.slice(0, 20));
  }, [products, selectedTab]);
  return (
    <div className="products">
      <h1>
        {selectedTab?.toLowerCase() !== "searches"
          ? selectedTab
          : `${products_?.length} Best search matches...`}
      </h1>
      {products_?.length !== 0 ? (
        <>
          <div className="products__container">
            {products_?.map((product, id) => (
              <Product key={id} product={product.data} id={product.id} />
            ))}
          </div>
          <div className="products__buttons">
            {products_?.length !== products.length ? (
              <button onClick={() => setProducts_(products)}>
                Show All Products
              </button>
            ) : (
              <button
                onClick={() => setProducts_(products.shuffle().slice(0, 20))}
              >
                Show Few Products
              </button>
            )}
          </div>
        </>
      ) : (
        <div className="products__container--noproducts">
          <h1>
            No Products Found under <span>{selectedTab}. </span>
          </h1>
        </div>
      )}
    </div>
  );
};

export default Products;
