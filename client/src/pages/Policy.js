import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/policy.jpg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p>On the legal side of things, if you want to make your Online Business well protected and increase trust between you and your customer base, having a Privacy Policy is very important. While it should be a legal document, it should also be easy to understand for a customer and/or visitor that interacts with your website.</p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;