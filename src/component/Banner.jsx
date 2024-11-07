import React from 'react';

function Banner() {
  return (
    <div className="flex flex-col w-[65%] max-md:ml-0 max-md:w-full">
      <section className="flex overflow-hidden flex-col grow px-8 pt-5 pb-80 w-full font-medium text-white bg-emerald-500 rounded-xl min-h-[486px] max-md:px-5 max-md:pb-24 max-md:mt-10 max-md:max-w-full">
        <h2 className="text-base">CASA HEALTHLINE</h2>
        <p className="mt-2.5 text-xl max-md:max-w-full">
          Hệ thống quản lý xếp hàng khám bệnh thông minh, tối ưu quy trình và hỗ trợ hiệu quả cho cả bệnh nhân và bác sĩ.
        </p>
        <button className="flex overflow-hidden flex-col justify-center items-center self-start mt-2.5 text-sm tracking-normal leading-5 text-center text-white bg-neutral-900 min-h-[40px] rounded-[100px]">
          <div className="flex flex-1 gap-2 justify-center items-center p-2.5 h-full">
            <span className="self-stretch my-auto">Learn More</span>
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/1eb9c9b473ab2ef964de7e61519151e6b3178c0c78f7a92c081872ab5334632b?placeholderIfAbsent=true&apiKey=266d67b6aa954ec985a58f1f58d32eb5" alt="" className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square rounded-[1000px]" />
          </div>
        </button>
      </section>
    </div>
  );
}

export default Banner;