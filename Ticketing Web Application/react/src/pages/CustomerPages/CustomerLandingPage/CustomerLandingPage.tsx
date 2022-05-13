import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import classes from "./CustomerLandingPage.module.css";
import { useDispatch } from "react-redux";
import { uiAction } from "../../../store/ui-slice";

const CustomerLandingPage: React.FC<{}> = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(uiAction.closeMobileMenu());
  }, [dispatch]);
  return (
    <section className={classes.entire}>
      <div className={`${classes.common}`}>
        <div className={`${classes.heading}`}>
          <h1>Air Bus</h1>
          <h1>Bus Ticketing System</h1>
        </div>
        <Link className={classes.ctaBtn} to={"/login"}>
          Let's Go
        </Link>
      </div>
    </section>
  );
};
export default CustomerLandingPage;
