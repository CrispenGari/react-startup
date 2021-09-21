import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Alert, AlertTitle } from "@material-ui/lab";
import "./SellerProducts.css";
import { Product } from "../../components";
const SellerProducts = () => {
  const products = useSelector((state) => state.allProducts);
  const user = useSelector((state) => state.user);
  const [showAlert, setShowAlert] = useState(null);
  useEffect(() => {
    if (showAlert) {
      const timeId = setTimeout(() => {
        setShowAlert(false);
      }, 5000);

      return () => {
        clearTimeout(timeId);
      };
    }
  }, [showAlert]);
  return (
    <div className="sellerproducts">
      <h1>Your Products</h1>
      <div className="sellerproducts__container">
        {products?.length ? (
          products
            ?.filter((product) => {
              return (
                product?.data?.seller?.email === user?.email &&
                product?.data?.seller?.displayName === user?.displayName
              );
            })
            ?.map((product, id) => (
              <Product
                key={id}
                product={product.data}
                id={product.id}
                editable={true}
                setShowAlert={setShowAlert}
              />
            ))
        ) : (
          <h1>You don't have products that are in the market yet.</h1>
        )}
      </div>
      {showAlert && (
        <>
          {!showAlert?.error ? (
            <Alert severity="success" className="sellerproduct__alert">
              <AlertTitle>
                <strong>{showAlert?.tittle}</strong>
              </AlertTitle>
              {showAlert?.message} — <strong>check it out!</strong>
            </Alert>
          ) : (
            <Alert severity="error" className="sellerproduct__alert">
              <AlertTitle>
                <strong>{showAlert?.tittle}</strong>
              </AlertTitle>
              {showAlert?.message} — <strong>try again later!</strong>
            </Alert>
          )}
        </>
      )}
    </div>
  );
};

export default SellerProducts;
