import React from "react";

import Welcome from "./Welcome";
import Services from "./Services";
import Transactions from "./Transactions";
import Footer from "./Footer";

function Transfer() {
  return (
    <>
        <div className="gradient-bg-welcome">
          <Welcome />
        </div>
        <Services />
        <Transactions />
        <Footer />
    </>
  );
}

export default Transfer;
