import React, { useEffect, useState } from "react";
import Item from "../../component/Item/Item";
import { DownloadOutlined, CloseOutlined, QrcodeOutlined, ShoppingCartOutlined, MenuOutlined } from "@ant-design/icons";
import QRCode from "qrcode";
import { useDispatch, useSelector } from "react-redux";
import { fetchDishList } from "../../redux/DishList/dishListAction";
import Cart from "../../component/Cart/Cart";
import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const ListMenu = () => {
  const [showQRCode, setShowQRCode] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [currentMenu, setCurrentMenu] = useState("menu");
  const [cartItems, setCartItems] = useState([]);
  const [QrcodeImage, setQrcodeImage] = useState("");
  const [showMenuBar, setShowMenuBar] = useState(false);
  const dispatch = useDispatch();
  const tenNhaHang = useSelector((state) => state.auth.currentUser.tenNhaHang);
  const getDishList = useSelector((state) => state.dishList.dishList);
  const uniqueTypes = [...new Set(getDishList.map((item) => item.loai))];
  const [cartItemCount, setCartItemCount] = useState(0);
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    dispatch(fetchDishList());
  }, []);

  const url = window.location.href;

  const generateQR = () => {
    return QRCode.toDataURL(url, { width: 300 }, (error, url) => {
      if (error) {
        throw error;
      }
      setQrcodeImage(url);
    });
  };
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const handleOnClick = () => {
    navigate('/mainpage');
  };
  const handleAddToCart = (id) => {
    const existingItem = getDishList.find((item) => item._id === id);
    const existingItemIndex = cartItems.findIndex((cartItem) => cartItem._id === id);

    if (existingItemIndex === -1) {
      const addQuantityToItem = { ...existingItem, quantity: 1 };
      const updateCartItems = [...cartItems, addQuantityToItem];
      setCartItems(updateCartItems);
    } else {
      cartItems[existingItemIndex] = {
        ...cartItems[existingItemIndex],
        quantity: cartItems[existingItemIndex].quantity + 1,
      };
    }

    setCartItemCount(cartItemCount + 1);
  };

  const onShowMenuBar = () => {
    setShowMenuBar(!showMenuBar);
  };

  const handleMenuClick = (menu) => {
    setCurrentMenu(menu);
  };

  const renderMenuItems = () => {
    let menuData = [];

    if (currentMenu === "menu") {
      menuData = getDishList;
    } else {
      menuData = getDishList.filter((item) => item.loai === currentMenu);
    }

    return menuData.map((item) => <Item key={item._id} {...item} onAddToCart={handleAddToCart} />);
  };

  const handleShowQRCode = () => {
    generateQR();
    setShowQRCode(!showQRCode);
  };

  const handleShowCart = () => {
    setShowCart(!showCart);
  };

  return (
    <div className="bg-white flex items-center justify-center relative">
      <div className="bg-white min-h-screen flex-1 flex flex-col space-y-5 lg:space-y-0 lg:flex-row lg:space-x-10 max-w-6xl sm:p-6 sm:my-2 sm:mx-4 sm:rounded-2xl">
        <div className="bg- px-2 lg:px-4 py-2 lg:py-10 sm:rounded-xl flex lg:flex-col justify-between">
        <div className="bg-white fixed left-24  h-full flex flex-col justify-start items-start">
  <nav className="flex flex-col space-y-2 lg:space-y-0 lg:flex-row lg:space-x-2 lg:justify-start lg:pt-4 ">
   
    <div className="flex flex-col"> {/* Container mới */}
    <button className="bg-white hover:border-yellow-700 focus:bg-yellow-500 text-black p-4 flex items-center gap-2 rounded-md" onClick={() => handleMenuClick("menu")}>
      <MenuOutlined />
      Menu
    </button>
      {uniqueTypes.map((type) => (
        <button key={type} className="bg-white hover:border-yellow-700 focus:bg-yellow-500 text-black p-4 rounded-md " onClick={() => handleMenuClick(type)}>
          {type}
        </button>
      ))}
    </div>
  </nav>
</div>



          {/* <div className="sm:hidden w-full relative">
            <MenuOutlined className="text-2xl text-white" onClick={onShowMenuBar} />
            {showMenuBar && (
              <div className="absolute top-8  px-1  bg-opacity-50 flex items-start flex-col">
                <div className="text-yellow-700 w-full border-b-2 border-gray-200 p-2 flex justify-start items-center gap-2 hover:text-gray-500" onClick={() => handleMenuClick("menu")}>
                  Menu
                </div>

                {uniqueTypes.map((type) => (
                  <div key={type} className="text-yellow-700 w-full border-b-2 p-2 border-gray-200 inline-flex justify-start hover:text-gray-500" onClick={() => handleMenuClick(type)}>
                    {type}
                  </div>
                ))}
              </div>
            )}

          </div> */}
        </div>
        <div className="flex-1 px-2 sm:px-0">
          <div className="flex justify-between items-center">
            <h3
              className={`text-3xl font-extralight text-yellow-700 ${isHovered ? 'hover:text-yellow-500' : ''}`}
              onClick={handleOnClick}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {tenNhaHang}
            </h3>
            <div className="flex items-center justify-center gap-5">
              <div className="bg-white w-[50px] h-[50px] text-center text-2xl text-gray-600  rounded-md hover:text-gray-900 smooth-hover" onClick={handleShowQRCode}>
                <QrcodeOutlined className="mx-[25%] my-[25%]" />
              </div>
              <div className="bg-white w-[50px] h-[50px] text-center text-2xl text-gray-600  rounded-md hover:text-gray-900 smooth-hover" onClick={handleShowCart}>
                <div className="relative">
                  <ShoppingCartOutlined className="mx-[25%] my-[25%]" />
                  {cartItemCount > 0 && (
                    <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-gray-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                      {cartItemCount}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="mb-10 sm:mb-0 mt-10 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">{renderMenuItems()}</div>
        </div>
      </div>
      {showQRCode && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-80">
          <img className="w-[300px] h[300px]" src={QrcodeImage} alt="qrcode" />
          <div className="absolute top-8 right-8 gap-4 flex items-center justify-center text-blue-300 text-2xl">
            <a className="no-underline text-inherit hover:text-blue-700" href={QrcodeImage} download="menu-qrcode">
              <DownloadOutlined />
            </a>
            <div className="hover:text-blue-700" onClick={handleShowQRCode}>
              <CloseOutlined />
            </div>
          </div>
        </div>
      )}
      {showCart && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-opacity-80">
          <Cart cartItems={cartItems} setShowCart={setShowCart} showCart={showCart} setCartItems={setCartItems} setCartItemCount={setCartItemCount} />
        </div>
      )}
    </div>
  );
};

export default ListMenu;
