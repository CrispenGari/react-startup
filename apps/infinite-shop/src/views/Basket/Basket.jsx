import React, { useEffect } from "react";

import "./Basket.css";
import { Footer, BasketContainer, Checkout, Header } from "../../components";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";

const Basket = () => {
  const user = useSelector((state) => state.user);
  const basket = useSelector((state) => state.basket);
  const history = useHistory();
  useEffect(() => {
    window?.document?.querySelector(".basket")?.scrollIntoView();
  }, []);
  useEffect(() => {
    if (!user) {
      history.replace("/");
    }
  }, [history, user]);
  return (
    <div className="basket">
      <Header />
      <h1>
        Hi, <span>{user?.displayName?.split(/\s/)[0]?.toUpperCase()}</span>{" "}
        there are <span>{basket?.length}</span> products in your basket ready to
        be checked out!!
      </h1>
      <BasketContainer />
      <Checkout basket={basket} user={user} />
      <Footer />
    </div>
  );
};

export default Basket;
