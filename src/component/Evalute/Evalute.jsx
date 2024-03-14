import React from 'react'

const Evalute = () => {
  return (
    <div className="flex justify-between gap-10 mt-20">
    <div className="w-1/3 ml-10">
      <figure className="md:flex bg-slate-100 rounded-xl p-8 dark:bg-white text-black">
        <img className="w-24 h-24 rounded-full mx-auto" src="https://www.kiotviet.vn/images/appstore1.png" alt="" width="384" height="512"/>
        <div className="pt-6 text-center space-y-4">
          <blockquote>
            <p className="text-lg font-medium text-gray-600">
              Thật tuyệt khi không còn phải lo lắng đến thất thoát dữ liệu
            </p>
          </blockquote>
          <figcaption className="font-medium">
            <div className="text-black">
              Chivavo thời trang 
            </div>
            <div className="text-slate-700 dark:text-slate-500">
            <img className="  mx-auto" src="https://www.kiotviet.vn/images/star-ratings.png" alt="" />
  
            </div>
          </figcaption>
        </div>
      </figure>
    </div>
    
    <div className="w-1/3">
      <figure className="md:flex bg-slate-100 rounded-xl p-8 dark:bg-white text-black">
        <img className="w-24 h-24 rounded-full mx-auto" src="https://kiotviet.vn/images/appstore2.png" alt="" width="384" height="512"/>
        <div className="pt-6 text-center space-y-4">
          <blockquote>
            <p className="text-lg font-medium text-gray-600">
            Không ngờ app lại đơn giản và phù hợp với mình đến vậy.
            </p>
          </blockquote>
          <figcaption className="font-medium">
            <div className="text-black">
            Việt Pet Garden-688
            </div>
            <div className="text-slate-700 dark:text-slate-500">
            <img className="  mx-auto" src="https://www.kiotviet.vn/images/star-ratings.png" alt="" />
            </div>
          </figcaption>
        </div>
      </figure>
    </div>
    
    <div className="w-1/3 mr-10">
      <figure className="md:flex bg-slate-100 rounded-xl p-8 dark:bg-white text-black">
        <img className="w-24 h-24 rounded-full mx-auto" src="https://www.kiotviet.vn/images/appstore3.png" alt="" width="384" height="512"/>
        <div className="pt-6 text-center space-y-4">
          <blockquote>
            <p className="text-lg font-medium text-gray-600">
            Dễ sử dụng quá, thực sự thuận tiện mọi người ạ.
            </p>
          </blockquote>
          <figcaption className="font-medium">
            <div className="text-black-200">
            Cafe Vitamin Hà Nội
            </div>
            <div className="text-slate-700 dark:text-slate-500">
            <img className="  mx-auto" src="https://www.kiotviet.vn/images/star-ratings.png" alt="" />
            </div>
          </figcaption>
        </div>
      </figure>
    </div>
  </div>
  )
}

export default Evalute
