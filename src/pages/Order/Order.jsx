import React, { useState } from "react";

const Order = () => {
  const [selectedItem, setSelectedItem] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const menuItems = [
    { name: "Trà sữa", price: 4, color: "#FF7F50", image: "tra-sua.jpg" },
    { name: "Sinh tố", price: 5, color: "#32CD32", image: "sinh-to.jpg" },
    { name: "Cà phê", price: 3, color: "#FFD700", image: "ca-phe.jpg" },
  ];

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const handleColorClick = (color) => {
    setSelectedColor(color);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredMenuItems = menuItems.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col sm:flex-row p-8">
      <div className="w-full sm:w-1/4 mb-4 sm:mb-0">
        <h3 className="text-lg font-bold mb-4">Thực đơn cafe</h3>
        <div className="mb-8 bg-white rounded-lg p-4 shadow-md">
          <h1 className="text-lg font-bold mb-4">Hình Thức Bán Hàng</h1>
          <input
            type="text"
            className="w-full p-2 border rounded mb-4"
            placeholder="Hoá đơn điện tử"
          />
          <h3 className="text-lg font-bold mb-4">Thông tin màu sắc</h3>
          <div className="flex mb-4">
            <div
              className={`cursor-pointer w-8 h-8 rounded-full mr-2 ${
                selectedColor === "#FF7F50" ? "bg-red-500" : "bg-gray-200"
              }`}
              onClick={() => handleColorClick("#FF7F50")}
            ></div>
            <div
              className={`cursor-pointer w-8 h-8 rounded-full mr-2 ${
                selectedColor === "#32CD32" ? "bg-green-500" : "bg-gray-200"
              }`}
              onClick={() => handleColorClick("#32CD32")}
            ></div>
            <div
              className={`cursor-pointer w-8 h-8 rounded-full ${
                selectedColor === "#FFD700" ? "bg-yellow-500" : "bg-gray-200"
              }`}
              onClick={() => handleColorClick("#FFD700")}
            ></div>
          </div>
        </div>
      </div>
      <div className="w-full sm:w-3/4 sm:ml-4">
        <input
          type="text"
          className="w-full p-2 border rounded mb-4"
          placeholder="Bạn đang cần tìm món gì "
          value={searchTerm}
          onChange={handleSearch}
        />
        <div className="flex rounded-full">
          <button className="p-2 mr-2 border border-gray-300 rounded">
            Trà Sữa
          </button>
          <button className="p-2 mr-2 border border-gray-300 rounded">
            Sinh Tố
          </button>
          <button className="p-2 border border-gray-300 rounded">Cafe</button>
        </div>
        <div className="flex flex-col gap-4">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg p-4 shadow-md cursor-pointer transform transition duration-300  flex items-center`}
              onClick={() => handleItemClick(item)}
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 object-cover rounded mr-4"
              />
              <div>
                <h4 className="text-lg font-semibold mb-2">{item.name}</h4>
                <span className="text-orange-500 text-lg font-semibold block mb-2">
                  ${item.price.toFixed(2)}
                </span>
                <button className="bg-green-400 text-white px-4 py-2 rounded-full focus:outline-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-between items-center bg-orange-400 text-white p-2 rounded-md shadow-md">
          <span style={{ fontWeight: "bold" }}>Gọi món:</span>
          <span style={{ marginLeft: "10px" }}>$9.00</span>
        </div>
      </div>
    </div>
  );
};

export default Order;
