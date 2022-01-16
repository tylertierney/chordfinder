import React from "react";
import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";
import styles from "./Layout.module.css";

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className={styles.mainContainer}>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
