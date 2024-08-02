import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <main className="p-8 bg-[#fee440] text-[#9b5de5]">
        <section className="bg-[#9b5de5] text-white p-8 rounded mb-8">
          <h2 className="text-3xl font-bold mb-4">Job Board</h2>
          <p>Find the best job opportunities in the construction industry.</p>
        </section>
        <section className="bg-[#00bbf9] text-white p-8 rounded mb-8">
          <h2 className="text-3xl font-bold mb-4">Contractors</h2>
          <p>Discover recommended contractors for your projects.</p>
        </section>
        <section className="bg-[#f15bb5] text-white p-8 rounded mb-8">
          <h2 className="text-3xl font-bold mb-4">Workers</h2>
          <p>Highlighting skilled workers ready for hire.</p>
        </section>
        <section className="bg-[#fee440] text-[#9b5de5] p-8 rounded mb-8">
          <h2 className="text-3xl font-bold mb-4">About Us</h2>
          <p>Learn more about our company, mission, and values.</p>
        </section>
        <section className="bg-[#00bbf9] text-white p-8 rounded mb-8">
          <h2 className="text-3xl font-bold mb-4">Contact</h2>
          <p>Get in touch with us for any inquiries or support.</p>
        </section>
        <section className="bg-[#f15bb5] text-white p-8 rounded mb-8">
          <h2 className="text-3xl font-bold mb-4">Blog/News</h2>
          <p>Stay updated with the latest industry news and tips.</p>
        </section>
        <section className="bg-[#fee440] text-[#9b5de5] p-8 rounded mb-8">
          <h2 className="text-3xl font-bold mb-4">Resources</h2>
          <p>Access helpful tools, templates, and guides.</p>
        </section>
        <section className="bg-[#00bbf9] text-white p-8 rounded mb-8">
          <h2 className="text-3xl font-bold mb-4">Pricing</h2>
          <p>Explore our subscription plans and premium features.</p>
        </section>
      </main>
    </div>
  );
}

export default App;

