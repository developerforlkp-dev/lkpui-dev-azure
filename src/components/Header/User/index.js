import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import cn from "classnames";
import OutsideClickHandler from "react-outside-click-handler";
import styles from "./User.module.sass";
import Icon from "../../Icon";

const User = ({ className, items }) => {
  const [visible, setVisible] = useState(false);

  // Logout function that clears all user data and redirects to landing page
  const handleLogout = (e) => {
    e.preventDefault();
    
    // Clear all authentication-related data from localStorage
    localStorage.removeItem("jwtToken");
    localStorage.removeItem("userInfo");
    localStorage.removeItem("firstName");
    localStorage.removeItem("lastName");
    localStorage.removeItem("email");
    
    // Close the menu
    setVisible(false);
    
    // Redirect to landing page (home) and reload to update the header state
    window.location.href = "/";
  };

  return (
    <OutsideClickHandler onOutsideClick={() => setVisible(false)}>
      <div className={cn(styles.user, className, { [styles.active]: visible })}>
        <button className={styles.head} onClick={() => setVisible(!visible)}>
          <Icon name="user" size="24" />
        </button>
        <div className={styles.body}>
          <div className={styles.group}>
            {items.map((item, index) => (
              <div className={styles.menu} key={index}>
                {item.menu.map((x, index) => (
                  <NavLink
                    className={styles.item}
                    activeClassName={styles.active}
                    to={x.url}
                    onClick={() => setVisible(!visible)}
                    key={index}
                  >
                    <div className={styles.icon}>
                      <Icon name={x.icon} size="24" />
                    </div>
                    <div className={styles.text}>{x.title}</div>
                  </NavLink>
                ))}
              </div>
            ))}
          </div>
          <div className={styles.btns}>
            <NavLink
              className={cn("button button-small", styles.button)}
              activeClassName={styles.active}
              to="/account-settings"
              onClick={() => setVisible(!visible)}
            >
              Account
            </NavLink>
            <button 
              className={cn("button-stroke button-small", styles.button)}
              onClick={handleLogout}
            >
              Log out
            </button>
          </div>
        </div>
      </div>
    </OutsideClickHandler>
  );
};

export default User;
