import React from 'react';

function About() {
  return (
    <div className='about-container'>
      <div className="h-auto bg-cover bg-center flex flex-col justify-center items-center p-8"
        style={{ backgroundImage: "url(https://i.pinimg.com/736x/a4/a2/81/a4a2817b484770e3572125f3fd0f51e0.jpg)" }}>
        <div className="bg-white bg-opacity-50 p-11  rounded-lg shadow-lg text-center max-w-2xl">
          <h1 className="text-5xl font-bold text-black mb-4">Know More About Us</h1>
          <p className="text-lg text-black mb-4">
            Welcome to Eatery Express, your go-to destination for seamless online delivery! We are dedicated to bringing your favorite products straight to your doorstep with convenience and speed. Whether it's delicious meals, groceries, or essential goods, we ensure a hassle-free shopping experience with just a few clicks. Our mission is to provide top-quality service, ensuring timely deliveries and customer satisfaction. With a user-friendly platform and a reliable network, we make online ordering simple and efficient. Thank you for choosing us—your convenience is our priority!
          </p>
        </div>
        <div className="bg-white bg-opacity-25 p-8 rounded-lg shadow-lg text-center max-w-xl mt-8">
          <h2 className="text-3xl font-semibold text-black mb-2">Our Mission</h2>
          <p className="text-md text-black">
            Our mission is to provide fast, reliable, and hassle-free online delivery, bringing your favorite products right to your doorstep. We are committed to quality service, convenience, and customer satisfaction with every order.
          </p>
        </div>
        <div className="bg-white bg-opacity-50 p-8 rounded-lg shadow-lg text-center max-w-xl mt-8">
          <h2 className="text-3xl font-semibold text-black mb-2">Our Team</h2>
          <p className="text-md text-black">
            Our team is a group of dedicated professionals passionate about providing the best online delivery experience. From customer support to delivery experts, we work together to ensure fast, reliable, and hassle-free service. Your satisfaction is our top priority!
          </p>
        </div>
      </div>
      <footer className="bg-gray-800 py-8">
        <div className="container mx-auto text-center text-white">
          <p>&copy; "At Eatery Express, great service starts with a great team—dedicated, reliable, and always ready to deliver happiness." 🚀</p>
          <p>Contact us: <a href="https://www.instagram.com/__pragyann/" className="text-blue-400">Instagram</a></p>
          <p>Number: 981235678</p>
        </div>
      </footer>
    </div>
  );
}

export default About;