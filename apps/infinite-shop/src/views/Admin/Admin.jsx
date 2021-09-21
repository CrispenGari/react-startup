import React, { useEffect } from "react";
import "./Admin.css";
import {
  Header,
  Profile,
  Uploader,
  Footer,
  SellerProducts,
} from "../../components";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";
const Admin = () => {
  const history = useHistory();
  const user = useSelector((state) => state.user);
  useEffect(() => {
    if (!user) {
      history.replace("/");
    }
  }, [user, history]);

  useEffect(() => {
    window?.document?.querySelector(".admin")?.scrollIntoView();
  }, []);
  return (
    <div className="admin">
      <Header />
      <div className="admin__main">
        <Profile />
        <Uploader />
      </div>
      <SellerProducts />
      <Footer />
    </div>
  );
};

export default Admin;
