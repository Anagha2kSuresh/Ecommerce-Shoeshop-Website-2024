import React from 'react'
import Layout from '../components/Layout/Layout';

const About = () => {
  return (
    <Layout title={"About us-Shoe world"}>
        <div className="row contactus">
        <div className='col-md-6'>
        <img
            src="/images/aboutus.jpg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className='col-md-4'>
          <p className='text-justify mt-2'>
          The Shoe Design Studio designs shoes and accessories to bring not only joy and feeling of uniqueness, but also comfort and understanding of the natural structure of the foot. Therefore, everything we create comes into being with the knowledge that it is first and foremost a shoe with its basic functions and uses. A shoe protects, a shoe helps, a shoe graces.
          </p>
        </div>
        </div>

    </Layout>
  );
};

export default About;