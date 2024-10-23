import React from 'react';
import "./index.css";


const Home = () => {
  return (
    <div>
      <h1 className="header">CRYPTOGRAPHIC FARMING</h1>
      <p className='p-homes'>Farmers (who lack the means to purchase property), landowners, and activists make up
our initiative.By voting in DAOs, farmers give activists authority. We employ an algorithm in which
farmers' votes are used to grant activists authority and tokens. Activists conduct surveys,
care after the land, and conduct thorough study on farmers and their dependability.
Farmers are then loaned and identified by landowners in an analytical manner with the
help of activists. Additionally, we help the farmers by giving them loans and insurance,
which protects them. By analysing crop wealth, farmer labour force, harvested resource
use, and farm product usage, we are able to generate profits. As a more dependable and
secure exchange token in this situation, we employ CUSD.</p>

<h4 className="h4-home">"The Ultimate goal of Farming is growing of crops,but also the cultivation and perfection of human beings"</h4>

      <a href="/signinActivist" class="hero-btn">Sign In As Activist</a>
      <a href="/signinfarmer" class="hero-btn">Sign In As Farmer</a>
      <a href="/signinowner" class="hero-btn">Sign In Owner</a>
      <a href="/login" class="hero-btn">Login</a>
      


      
      
    </div>
  );
};
  
export default Home;