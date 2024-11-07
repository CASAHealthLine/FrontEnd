import React from 'react';

function Header() {
  return (
    <header className="flex flex-wrap gap-9 px-14 py-4 w-full bg-white max-md:px-5 max-md:max-w-full">
      <div className="flex overflow-hidden gap-1 justify-between items-center text-xl font-semibold h-[47px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] text-neutral-900">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/761a2d767e78c59d2173146048acd35dba795de88cfcc442cebf9f908d744851?placeholderIfAbsent=true&apiKey=266d67b6aa954ec985a58f1f58d32eb5" alt="" className="object-contain shrink-0 self-stretch my-auto w-10 rounded-3xl aspect-square" />
        <span className="self-stretch my-auto">CASA HealthLine</span>
      </div>
      <h1 className="flex-auto my-auto text-2xl font-extrabold leading-loose text-black tracking-[4.8px] w-[956px] max-md:max-w-full">
        CỔNG THÔNG TIN HÀNG ĐỢI BỆNH NHÂN
      </h1>
    </header>
  );
}

export default Header;