import React from 'react';
import Logo from './Logo';

function RegisterForm({ toggleForm }) {
  
  return (
    <div className="flex flex-col ml-5 w-[35%] max-md:ml-0 max-md:w-full">
      <form className="flex flex-col items-center pb-10 mx-auto w-full text-xs font-medium bg-white rounded-xl border border-black border-solid max-md:mt-10">
        <div className="flex self-stretch text-xl font-extrabold">
          <div className="flex flex-col flex-1 text-black rounded-xl border border-black border-solid">
            <button type="button" className="px-14 py-3 bg-white rounded-xl border-t border-l border-black max-md:px-5">
              Đăng ký
            </button>
          </div>
          <div className="flex flex-col flex-1 text-white rounded-xl border border-black border-solid">
            <button type="button" onClick={toggleForm} className="px-10 py-3 bg-emerald-500 rounded-none border-t border-r border-black max-md:px-5">
              Đăng nhập
            </button>
          </div>
        </div>
        <input type="text" placeholder="Họ tên" className="px-1.5 py-2.5 mt-5 max-w-full bg-white rounded border border-solid border-black border-opacity-20 shadow-[0px_4px_4px_rgba(0,0,0,0.1)] text-stone-300 w-[309px] max-md:pr-5" aria-label="Họ tên" />
        <input type="tel" placeholder="Số điện thoại" className="px-1.5 py-2.5 mt-5 max-w-full bg-white rounded border border-solid border-black border-opacity-20 shadow-[0px_4px_4px_rgba(0,0,0,0.1)] text-stone-300 w-[309px] max-md:pr-5" aria-label="Số điện thoại" />
        <input type="email" placeholder="Email" className="px-1.5 py-2.5 mt-5 max-w-full tracking-widest whitespace-nowrap bg-white rounded border border-solid border-black border-opacity-20 shadow-[0px_4px_4px_rgba(0,0,0,0.1)] text-stone-300 w-[309px] max-md:pr-5" aria-label="Email" />
        <input type="password" placeholder="Mật khẩu" className="px-1.5 py-2.5 mt-5 max-w-full tracking-widest bg-white rounded border border-solid border-black border-opacity-20 shadow-[0px_4px_4px_rgba(0,0,0,0.1)] text-stone-300 w-[309px] max-md:pr-5" aria-label="Mật khẩu" />
        <input type="password" placeholder="Nhập lại mật khẩu" className="px-1.5 py-2.5 mt-5 max-w-full tracking-widest bg-white rounded border border-solid border-black border-opacity-20 shadow-[0px_4px_4px_rgba(0,0,0,0.1)] text-stone-300 w-[309px] max-md:pr-5" aria-label="Nhập lại mật khẩu" />
        <button type="submit" onClick={toggleForm} className="px-8 py-3 mt-14 max-w-full text-xl font-extrabold text-white bg-emerald-500 rounded-[76px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] w-[191px] max-md:px-5 max-md:mt-10">
          Hoàn thành
        </button>
      </form>
    </div>
  );
}

export default RegisterForm;