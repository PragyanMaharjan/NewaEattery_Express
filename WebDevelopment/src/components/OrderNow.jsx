import React, { useContext } from 'react';
import { OrderContext } from '../context/OrderContext';

export default function OrderNow() {
  const { addOrderItem } = useContext(OrderContext);

  const handleOrderNow = (product) => {
    addOrderItem(product);
  };

  const products = [
    { id: 1, name: 'Yomari', price: 150, image: 'https://www.newar.com.np/wp-content/uploads/2022/01/3-2.jpg' },
    { id: 2, name: 'Choila', price: 300, image: 'https://sanascarte.com/wp-content/uploads/2023/11/Haku-Choila-TN-Extra-2-1536x864.jpg' },
    { id: 3, name: 'Sapumicha (Buffalo Intestines)', price: 400, image: 'https://whatthenepal.com/wp-content/uploads/2024/01/1-2.jpg' },
    { id: 4, name: 'Chatamari (Nepalese rice crepe)', price: 100, image: 'https://www.shutterstock.com/image-photo/traditional-newari-dish-laa-chatamari-260nw-733748833.jpg' },
    { id: 5, name: 'Samaybaji(Newari food platter)', price: 300, image: 'https://cdn.tasteatlas.com/images/dishes/856738bc40274f5694e144c242195a0c.jpg?m=facebook' },
    { id: 6, name: 'Raw Minced Meat', price: 350, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUYE-qMhL6KZY8fa4D5lrTRaxv5LBDBF11Cw&s' },
    { id: 7, name: 'Takha', price: 400, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkkrUvYGORx6M0wSdjr33RuRZ3KeXNy9hVTA&s' },
    { id: 8, name: 'Nhyapu Tisyu(Buff Brains)', price: 450, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP0zandWWbXPV115yOzpVnGrr-cjVWeAhYWQ&s' },
    { id: 9, name: 'Aila(Local Rakshi)', price: 500, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoy2w8SoGUVpHtuoKHi9aHbm_1-zIG4VP3HQ&s' },
    { id: 10, name: 'Thow(Local Xyang)', price: 550, image: 'https://i.pinimg.com/474x/fe/5e/a0/fe5ea0de78d12ec31c1911cbc8b456c7.jpg' },
  ];

  return (
    <div className="relative min-h-screen w-full flex flex-col items-center p-8 bg-center bg-fixed no-repeat">
      {/* Remove the backgroundImage style */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 mt-24"> {/* Adjusted margin-top to push content lower */}
        <h1 className="text-3xl font-bold text-center mb-6 text-white">Order Now</h1>
        <div className="flex flex-wrap justify-around w-full max-w-4xl mb-8">
          {products.map((product) => (
            <div key={product.id} className="flex flex-col items-center m-4">
              <img src={product.image} alt={product.name} className="w-36 h-36 object-cover mb-4 rounded-xl" />
              <h1 className="text-white">{product.name}</h1>
              <button
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300 cursor-pointer"
                onClick={() => handleOrderNow(product)}
              >
                Order Now - Rs: {product.price}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
