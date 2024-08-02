import React from 'react';

const Hero = () => {
  return (
    <section
      className="bg-cover bg-center h-screen text-white flex items-center"
      style={{ backgroundImage: 'url("https://t4.ftcdn.net/jpg/00/68/63/23/360_F_68632352_kmHLwFc2rQLmnKqn6gM0bhOPqxRTx8sY.jpg")'}}
    >
      <div className="container mx-auto p-8">
        <h1 className="text-5xl font-bold mb-4">Welcome to ConstructionConnect</h1>
        <p className="text-xl mb-8">
          Bridging the gap between construction workers and companies.
        </p>
        <button className="bg-[#00bbf9] hover:bg-[#00f5d4] text-white font-bold py-2 px-4 rounded">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default Hero;
