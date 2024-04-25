import  { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Checkout from "../../component/Checkout/Checkout.jsx";
import orderApi from "../../services/orderAPI.js";
import { useSelector } from "react-redux";

const PaymentPage = () => {
  const location = useLocation();
  const { cartItems } = location.state;
  const navigate = useNavigate();
  const currentUser = useSelector((state) => state.auth.currentUser);

  // State lưu trữ thông tin đơn hàng
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [paymentSuccess, setPaymentSuccess] = useState(false); // Thêm state cho paymentSuccess

  // Tính tổng số tiền của các mặt hàng trong giỏ hàng
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

  // Xử lý khi người dùng nhấn nút "Pay Now"
  const handlePayment = async () => {
    try {
      // Tạo đối tượng đơn hàng
      const newOrder = {
        name: name,
        phoneNumber: phoneNumber,
        address: address,
        cartItems: cartItems,
        totalAmount: calculateTotal(),
        shopName: currentUser.tenNhaHang // Pass the shop name here
      };

      // Gọi API để lưu đơn hàng vào cơ sở dữ liệu
      await orderApi.create(newOrder);

      // Đặt trạng thái thanh toán thành công
      setPaymentSuccess(true);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    let timer;
    if (paymentSuccess) {
      timer = setTimeout(() => {
        navigate('/listmenu/`{id}');
      }, 1800); // Chờ 5 giây trước khi chuyển hướng
    }
    return () => clearTimeout(timer);
  }, [paymentSuccess, navigate]);

  return (
    <div className="min-h-screen flex  bg-gray-100">
      <div className="min-w-full bg-white rounded-lg shadow-md overflow-hidden pl-0 ">
        <div className="md:flex ">
          {/* Order Summary */}
          <div className="md:w-1/3 px-4 py-6 md:py-8 mt-28">
            <h2 className="text-2xl font-semibold  text-gray-800 mb-6">Your Orders</h2>
            {/* Hiển thị thông tin sản phẩm trong giỏ hàng */}
            {cartItems.map(item => (
              <div key={item._id} className="flex items-center justify-between mt-6">
                <div className="flex">
                  <img src={item.hinhAnh} alt={item.tenHang} className="w-16 h-16 object-cover rounded-full" />
                  <div className="mx-3">
                    <h3 className="text-sm text-gray-600">{item.tenHang}</h3>
                    <div className="flex items-center mt-2">
                      <span className="text-gray-600">Price: {item.giaBan}</span>
                      <span className="mx-1 text-gray-600">&bull;</span>
                      <span className="text-gray-600">SL: {item.quantity}</span>
                    </div>
                  </div>
                </div>
                <span className="text-gray-600">{(parseFloat(item.giaBan.replace('₫', '')) * item.quantity).toFixed(6)}₫</span>
              </div>
            ))}
            {/* Tính toán và hiển thị thông tin về đơn hàng */}
            <div className="mt-8">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-gray-700">Total:</h3>
                <span className="text-xl font-bold text-gray-800">{calculateTotal()}₫</span>
              </div>
              {/* Thêm phần vận chuyển và các thông tin khác về thanh toán (nếu cần) */}
            </div>
          </div>
          {/* Checkout */}
          <div className="md:w-1/3 px-4 py-6 md:py-8">
            <Checkout /> 
          </div>
          {/* Payment Details */}
          <div className="md:w-1/3 px-4 py-6 md:py-8">
            <div className=" p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-6 mt-20 pt-2">Payment Details</h2>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Name</label>
                <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">Phone Number</label>
                {/* Thêm sự kiện onChange cho trường input */}
                <input type="tel" id="phone" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address">Address</label>
                <textarea id="address" rows="4" value={address} onChange={(e) => setAddress(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></textarea>
              </div>
              <button onClick={handlePayment} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Pay Now</button>
            </div>
          </div>
        </div>
      </div>
      {/* Payment Success Message */}
      {paymentSuccess && (
        <div className="px-4 py-6 md:py-8 fixed top-0 right-0">
          <div className="bg-green-200 p-6 rounded-lg">
            <p className="text-lg text-green-800">Payment successful! We will contact you shortly .</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default PaymentPage;
