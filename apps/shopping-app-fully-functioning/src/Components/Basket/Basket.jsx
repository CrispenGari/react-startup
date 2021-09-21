import React, { useEffect, useState } from "react";
import "./Basket.css";
import { useSelector } from "react-redux";
import { Item } from "../../Components";

import CountUp from "react-countup";
import { Button } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { emptyBasket } from "../../actions";
function Basket() {
  const addedIterms = useSelector((state) => state?.addtobasket);
  const [basketAmmount, setBasketAmmount] = useState(0);
  const dispatch = useDispatch();
  useEffect(() => {
    const total_price = addedIterms.reduce(
      (amount, value) => Number(amount) + Number(value.price),
      0
    );
    setBasketAmmount(total_price);
  }, [addedIterms]);

  const emptyBasketHandler = () => {
    dispatch(emptyBasket());
  };
  return (
    <div className="basket">
      <div className="basket__top">
        <div className="basket__delivery">
          <h2>User Dedaild</h2>
        </div>
        <div className="basket__amount">
          <h2>
            Basket Price
            <CountUp
              className="item__info--price"
              start={0}
              end={basketAmmount}
              duration={2.75}
              separator=" "
              decimals={2}
              decimal="."
              prefix="R "
            />
          </h2>

          <h2>
            Discount{" "}
            <CountUp
              className="item__info--price"
              start={0}
              end={10}
              duration={2}
              separator=" "
              decimals={2}
              decimal="."
              suffix="%"
            />
          </h2>
          <h2>
            Discount Amount
            <CountUp
              className="item__info--price"
              start={0}
              end={basketAmmount * 0.1}
              duration={2.75}
              separator=" "
              decimals={2}
              decimal="."
              prefix="R "
            />
          </h2>

          <h2>
            Quantity
            <CountUp
              className="item__info--price"
              start={0}
              end={addedIterms?.length}
              duration={2}
              separator=" "
            />
          </h2>
          <h2>
            Total Cost{" "}
            <CountUp
              className="item__info--price"
              start={0}
              end={basketAmmount - 0.1 * basketAmmount}
              duration={2.75}
              separator=" "
              decimals={2}
              decimal="."
              prefix="R "
            />
          </h2>
        </div>
      </div>
      <hr />

      <div className="basket__items">
        {addedIterms.map((addedIterm) => (
          <Item
            long
            basket_iterm
            src={addedIterm?.scr}
            price={addedIterm?.price}
            key={addedIterm?.id}
            product_id={addedIterm?._id}
            title={addedIterm?.name}
            rating={Number.parseInt(addedIterm?.ratting) || 0}
          />
        ))}
      </div>
      <div className="basket__control">
        <div className="basket__control--left">
          <h2>
            Basket Price
            <CountUp
              className="item__info--price"
              start={0}
              end={basketAmmount}
              duration={2.75}
              separator=" "
              decimals={2}
              decimal="."
              prefix="R "
            />
          </h2>
          <h2>
            Quantity
            <CountUp
              className="item__info--price"
              start={0}
              end={addedIterms?.length}
              duration={2}
              separator=" "
            />
          </h2>
          <h2>
            Total Cost{" "}
            <CountUp
              className="item__info--price"
              start={0}
              end={basketAmmount - 0.1 * basketAmmount}
              duration={2.75}
              separator=" "
              decimals={2}
              decimal="."
              prefix="R "
            />
          </h2>
        </div>
        <div className="basket__control--center">
          <h2>Card</h2>
        </div>
        <div className="basket__control--right">
          <Button className="basket__button" onClick={emptyBasketHandler}>
            Empty Basket
          </Button>
          <Button className="basket__button">Purchase</Button>
        </div>
      </div>
    </div>
  );
}

export default Basket;
