import React, { useState } from "react";
import SpecialOffers from "../../components/home/SpecialOffers/SpecialOffers";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";
import { Helmet } from "react-helmet-async";

const Offer = () => {
  const [prevLocation] = useState("");

  return (
    <div className="max-w-container mx-auto">
      <Helmet>
        <title>SincereShop BD | Offer</title>
      </Helmet>
      <Breadcrumbs title="Offer" prevLocation={prevLocation} />
      <div className="pb-10">
        <SpecialOffers />
      </div>
    </div>
  );
};

export default Offer;
