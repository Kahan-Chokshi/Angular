import React, { useEffect } from "react";
import classes from "./AdminLandingPage.module.css";
import { useDispatch } from "react-redux";
import { uiAction } from "../../../store/ui-slice";

const AdminLandingPage:React.FC = () => {
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(uiAction.closeMobileMenu());
    }, [dispatch]);
    return (
      <section className={classes.entire}>
        <div className={`${classes.common}`}>
          <div className={`${classes.heading} }`}>
            <h1>Hello Admin</h1>
            <h1>Welcome to Air bus </h1>
          </div>
        </div>
      </section>
    );
  };
export default AdminLandingPage;