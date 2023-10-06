import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";
import { Helmet } from "react-helmet-async";

const Journal = () => {
  const location = useLocation();
  const [prevLocation, setPrevLocation] = useState("");
  useEffect(() => {
    setPrevLocation(location.state.data);
  }, [location]);
  return (
    <div className="max-w-container mx-auto px-4">
      <Helmet>
        <title>SincereShop BD | Journal</title>
      </Helmet>
      <Breadcrumbs title="Journals" prevLocation={prevLocation} />
      <div className="pb-10">
        <h1 className="max-w-[600px] text-base text-lightText mb-2">
          <span className="text-primeColor font-semibold text-lg">
            SincereShop BD <br />
          </span>{" "}
          The purpose of our journal is to provide a dynamic platform for our
          online shop, where we aim to engage and inform our audience. Through a
          diverse range of content, including product spotlights, customer
          stories, industry insights, and company updates, we seek to achieve
          the following goals:
          <ol type="A">
            <li>
              <span className="font-bold">Product Promotion:</span> We use the
              journal to showcase our products, highlighting their features,
              benefits, and real-life applications, encouraging potential
              customers to explore our offerings.{" "}
            </li>
            <li>
              <span className="font-bold">Customer Connection:</span> By sharing
              customer stories, testimonials, and user-generated content, we aim
              to build a sense of community and trust among our audience,
              emphasizing the positive experiences of our valued customers.
            </li>
            <li>
              <span className="font-bold">Company Transparency:</span> Our
              journal serves as a window into our company, offering updates on
              product launches, events, and achievements. We strive to foster
              transparency and keep our audience informed about our progress.
            </li>
            <li>
              <span className="font-bold">Educational Resource:</span> We
              provide how-to guides and industry insights, offering valuable
              information, tips, and trends related to our products and the
              broader industry. This positions our brand as a knowledgeable
              authority in our field.
            </li>
            <li>
              <span className="font-bold">SEO and Discoverability:</span> The
              journal also plays a role in improving our search engine
              visibility by optimizing content with relevant keywords and meta
              tags, making it easier for potential customers to find us online.
            </li>
            <li>
              <span className="font-bold">Engagement and Feedback:</span> We
              encourage user interaction through comments and provide the option
              for readers to subscribe to journal updates. Feedback from our
              audience is invaluable for continuous improvement. In summary, our
              journal serves as a multifaceted tool to enhance the user
              experience, promote our products, and establish a stronger
              connection with our audience. It reflects our commitment to
              delivering valuable content and maintaining an open line of
              communication with our customers."
            </li>
          </ol>
        </h1>
        <Link to="/shop">
          <button className="w-52 h-10 bg-primeColor text-white hover:bg-black duration-300">
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Journal;
