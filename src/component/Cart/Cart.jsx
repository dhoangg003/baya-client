import React, { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useNavigate } from 'react-router-dom';

const Cart = ({ cartItems, setShowCart, showCart, setCartItems, cartItemCount, setCartItemCount }) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(true);

  const closeCart = () => {
    setOpen(!open);
    setShowCart(!showCart);
    setCartItems([]);
    setCartItemCount(0);
  };

  const continueOrder = () => {
    setShowCart(!showCart);
  };

  const removeItem = (id) => {
    const newCartItems = cartItems.filter((item) => item._id !== id);
    setCartItems(newCartItems);
    
    const newCartItemCount = newCartItems.reduce((total, item) => total + item.quantity, 0);
    setCartItemCount(newCartItemCount);
  };

  const increaseQuantity = (id) => {
    const updatedCartItems = cartItems.map((item) =>
      item._id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCartItems(updatedCartItems);
    setCartItemCount(cartItemCount + 1);
  };

  const decreaseQuantity = (id) => {
    const updatedCartItems = cartItems.map((item) =>
      item._id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
    );
    setCartItems(updatedCartItems);
    setCartItemCount(cartItemCount - 1);
  };

  const checkOut = () => {
    if (cartItems.length !== 0) {
      setCartItems([]);
      setShowCart(false);
      setCartItemCount(0);
      navigate("/paymentpage", { state: { cartItems } });    
    } else {
      return;
    }
  };

  const calculateTotal = () => {
    let total = 0;
    cartItems.forEach((item) => {
        // Loại bỏ dấu ",", "₫", và chuyển đổi giá thành số
        const price = parseFloat(item.giaBan.replace(/[\D₫]/g, '').replace(',', '.')); 
        total += price * item.quantity;
    });

    // Format total to have at most 2 decimals, remove trailing zeros if unnecessary, and add dots every 3 digits
    let formattedTotal = total.toFixed(2);
    formattedTotal = formattedTotal.replace(/\.?0*$/, ''); // Remove trailing zeros if unnecessary
    formattedTotal = formattedTotal.replace(/\d(?=(\d{3})+$)/g, '$&.'); // Add dots every 3 digits

    return formattedTotal;
  };

  return (
    <Transition.Root show={showCart} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setShowCart}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                    <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                      <div className="flex items-start justify-between">
                        <Dialog.Title className="text-lg font-medium text-gray-900">
                          Shopping cart
                        </Dialog.Title>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                            onClick={() => closeCart()}
                          >
                            <span className="absolute -inset-0.5" />
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>

                      <div className="mt-8">
                        <div className="flow-root">
                          <ul
                            role="list"
                            className="-my-6 divide-y divide-gray-200"
                          >
                            {cartItems.map((item) => (
                              <li key={item._id} className="flex py-6">
                                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                  <img
                                    src={item.hinhAnh}
                                    alt={item.tenHang}
                                    className="h-full w-full object-cover object-center"
                                  />
                                </div>

                                <div className="ml-4 flex flex-1 flex-col">
                                  <div>
                                    <div className="flex justify-between text-base font-medium text-gray-900">
                                      <h3>
                                        <a>{item.tenHang}</a>
                                      </h3>
                                      <p className="ml-4">{item.giaBan}</p>
                                    </div>
                                  </div>
                                  <div className="flex  items-end justify-between text-sm">
                                    <div className="text-gray-500">
                                      Số lượng: {item.quantity}
                                    </div>

                                    <div className="">
                                      <button
                                        type="button"
                                        onClick={() => increaseQuantity(item._id)}
                                        className="font-medium text-indigo-600 hover:text-indigo-500"
                                      >
                                        +
                                      </button>
                                      <button
                                        type="button"
                                        onClick={() => decreaseQuantity(item._id)}
                                        className="font-medium text-indigo-600 hover:text-indigo-500"
                                      >
                                        -
                                      </button>
                                      <button
                                        type="button"
                                        onClick={() => removeItem(item._id)}
                                        className="font-medium text-indigo-600 hover:text-indigo-500"
                                      >
                                        Remove
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <p>Tạm tính</p>
                        <p>{calculateTotal()}₫</p>
                      </div>
                      <p className="mt-0.5 text-sm text-gray-500">
                        Phí vận chuyển và thuế đã được tính vào.
                      </p>
                      <div className="mt-6">
                        <div
                          onClick={checkOut}
                          className={
                            cartItems.length !== 0
                              ? "flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                              : "flex items-center justify-center rounded-md border border-transparent bg-gray-300 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-gray-400"
                          }
                        >
                          Thanh toán
                        </div>
                      </div>
                      <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                        <p>
                          or
                          <button
                            type="button"
                            className="font-medium text-indigo-600 hover:text-indigo-500"
                            onClick={continueOrder}
                          >
                            Tiếp tục chọn sản phẩm
                            <span aria-hidden="true"> &rarr;</span>
                          </button>
                        </p>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default Cart;
