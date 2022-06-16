import React from "react";
import Navbar from "../organisms/Navbar";
import SignInCard from '../molecules/SignInCard'

const Home = () => {
  return (
    <>
      <Navbar text="Already have an account?" buttontext="Sign in" link='login'/>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <SignInCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
