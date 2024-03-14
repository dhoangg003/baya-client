import React from 'react';
import { motion } from 'framer-motion';

const WhyChoose = () => {
  return (
    <div>
      <div className="container my-24 mx-auto md:px-6">
        {/* Section: Design Block */}
        <section className="mb-32 text-center">
          <h2 className="mb-12 pb-4 text-center text-3xl font-bold">
            MayMe- Giúp bạn quản lý dễ dàng, bán hàng hiệu quả
          </h2>
          <div className="grid gap-6 lg:grid-cols-3 xl:gap-x-12">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="mb-6 lg:mb-0"
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="relative block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700"
              >
                <div className="flex">
                  <div
                    className="relative mx-auto my-auto -mt-4 overflow-hidden rounded-lg bg-cover bg-no-repeat"
                    data-te-ripple-init=""
                    data-te-ripple-color="light"
                  >
                    <img
                      src="https://cdn-kvweb.kiotviet.vn/kiotviet-website/wp-content/uploads/2023/10/08110248/unnamed-7.png"
                      className="w-full"
                    />
                    <a href="#!">
                      <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]"></div>
                    </a>
                  </div>
                </div>
                <div className="p-6">
                  <h5 className="mb-3 text-lg font-bold">Đơn giản & dễ sử dụng</h5>
                  <p className="mb-4 pb-2 text-left">
                    Giao diện đơn giản, thân thiện, thông minh, chỉ mất 15 phút làm quen
                  </p>
                </div>
              </motion.div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="mb-6 lg:mb-0"
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="relative block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700"
              >
                <div className="flex">
                  <div
                    className="relative mx-auto my-auto -mt-4 overflow-hidden rounded-lg bg-cover bg-no-repeat"
                    data-te-ripple-init=""
                    data-te-ripple-color="light"
                  >
                    <img
                      src="https://cdn-kvweb.kiotviet.vn/kiotviet-website/wp-content/uploads/2023/10/08110303/unnamed-5.png"
                      className="w-full"
                    />
                    <a href="#!">
                      <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]"></div>
                    </a>
                  </div>
                </div>
                <div className="p-6">
                  <h5 className="mb-3 text-lg font-bold">Tiết kiệm chi phí</h5>
                  <p className="mb-4 pb-2 text-left">
                    Miễn phí cài đặt,triển khai, nâng cấp và hỗ trợ. Rẻ hơn một ly trà đá
                  </p>
                </div>
              </motion.div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="mb-0"
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="relative block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700"
              >
                <div className="flex">
                  <div
                    className="relative mx-auto my-auto -mt-4 overflow-hidden rounded-lg bg-cover bg-no-repeat"
                    data-te-ripple-init=""
                    data-te-ripple-color="light"
                  >
                    <img
                      src="https://cdn-kvweb.kiotviet.vn/kiotviet-website/wp-content/uploads/2023/10/08110316/unnamed-6.png"
                      className="w-full"
                    />
                    <a href="#!">
                      <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]"></div>
                    </a>
                  </div>
                </div>
                <div className="p-6">
                  <h5 className="mb-3 text-lg font-bold">Phù hợp cho từng ngành hàng</h5>
                  <p className="mb-4 pb-2 text-left">
                    Phần mềm phù hợp cho hơn 20 ngành nghề kinh doanh khác nhau
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>
        {/* Section: Design Block */}
      </div>
    </div>
  );
};

export default WhyChoose; 