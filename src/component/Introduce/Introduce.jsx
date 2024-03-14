import React from "react";

const Introduce = () => {
  return (
    <div className="flex flex-col gap-10 items-center justify-center ">
      <div className="w-4/5 p-8  rounded-lg shadow-xl flex bg-green-50">
        <div className="w-1/2">
          <img
            src="https://cdn-kvweb.kiotviet.vn/kiotviet-website/wp-content/uploads/2023/10/08110919/Image-3.png"
            alt="Hình ảnh"
            className="w-full rounded-lg"
          />
        </div>
        <div className="w-1/2 pl-8">
          <h2 className="text-3xl font-bold mb-4 text-gray-700">
            Đồng bộ với các sàn thương mại điện tử
          </h2>
          <p className="text-gray-700">
            MayMe đem đến giải pháp quản lý bán hàng dễ dàng & hiệu quả trên các
            sàn TMĐT phổ biến nhất hiện nay như Tiki, Shopee, Lazada, TikTok
            Shop, Sendo... Quản lý tập trung nhiều gian hàng trên một giao diện,
            tự động đồng bộ tồn kho - giá bán, tiết kiệm thời gian, đơn đi bạt
            ngàn.{" "}
          </p>
          <button className="bg-green-200 hover:bg-white hover:border-transparent text-green-900 font-bold py-2 px-4 rounded-full mt-4">
            Xem chi tiết
          </button>{" "}
        </div>
      </div>
      <div className="w-4/5 p-8 bg-blue-50 rounded-lg shadow-xl flex">
        <div className="w-1/2 pl-8">
          <h2 className="text-3xl font-bold mb-4 text-gray-700">
            Có ngay một website cho riêng cửa hàng của bạn chỉ với 1 lần chạm
          </h2>
          <p className="text-gray-700">
            Bạn có thể tạo ra một website cho riêng cửa hàng của bạn với giao
            diện đa dạng và phù hợp với nhiều ngành hàng. KiotViet giúp cửa hàng
            của bạn có thể bán hàng online thật dễ dàng, đơn giản và không chịu
            chi phí hoa hồng.
          </p>
          <button className="bg-blue-400 hover:bg-white hover:border-transparent text-blue-900 font-bold py-2 px-4 rounded-full mt-4">
            Xem chi tiết
          </button>
        </div>
        <div className="w-1/2">
          <img
            src="https://cdn-kvweb.kiotviet.vn/kiotviet-website/wp-content/uploads/2023/10/08110928/Image-4.png"
            alt="Hình ảnh"
            className="w-full rounded-lg"
          />
        </div>
      </div>

      <div className="w-4/5 p-8 bg-pink-50 rounded-lg shadow-xl flex">
        <div className="w-1/2">
          <img
            src="https://cdn-kvweb.kiotviet.vn/kiotviet-website/wp-content/uploads/2023/10/08110935/Image-5.png"
            alt="Hình ảnh"
            className="w-full rounded-lg"
          />
        </div>
        <div className="w-1/2 pl-8">
          <h2 className="text-3xl font-bold mb-4 text-gray-700">
            Liên kết quản lý bán hàng trên Facebook
          </h2>
          <p className="text-gray-700">
            MayMe cung cấp giải pháp quản lý & bán hàng trên Fanpage Facebook
            tiện lợi và nhanh chóng, đáp ứng đầy đủ nhu cầu của hàng triệu chủ
            shop kinh doanh online thuộc tất cả mọi ngành hàng.{" "}
          </p>
          <button className="bg-pink-400 hover:bg-white hover:border-transparent text-pink-900 font-bold py-2 px-4 rounded-full mt-4">
            Xem chi tiết
          </button>
        </div>
      </div>
      <div className="w-4/5 p-8 bg-yellow-50 rounded-lg shadow-xl flex">
        <div className="w-1/2 pl-8">
          <h2 className="text-3xl font-bold mb-4 text-gray-700">
            Giải pháp giao hàng dễ dàng
          </h2>
          <p className="text-gray-700">
            Tích hợp vận chuyển với hầu hết các hãng vận chuyển trên thị trường
            như Giaohangnhanh, ViettelPost, VNPT Post, J&T …KiotViet mang lại
            cho khách hàng một dịch vụ thuận tiện và chi phí vô cùng tiết kiệm
            với nhiều chính sách ưu đãi của các hãng vận chuyển.{" "}
          </p>
          <button className="bg-yellow-200 hover:bg-white hover:border-transparent text-yellow-900 font-bold py-2 px-4 rounded-full mt-4">
            Xem chi tiết
          </button>
        </div>
        <div className="w-1/2">
          <img
            src="https://cdn-kvweb.kiotviet.vn/kiotviet-website/wp-content/uploads/2023/10/08110943/Image-6.png"
            alt="Hình ảnh"
            className="w-full rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Introduce;
