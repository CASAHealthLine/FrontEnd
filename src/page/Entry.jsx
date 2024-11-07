import React, { useState } from 'react';
import Banner from '../component/Banner';
import RegisterForm from '../component/RegisterForm';
import LoginForm from '../component/LoginForm';
import Header from '../component/Header';
import '../index.css';

function Entry() {
  const [isRegistering, setIsRegistering] = useState(true);

  const toggleForm = () => {
    setIsRegistering(!isRegistering);
  };

  return (
    <main className="register flex overflow-hidden flex-col pb-24 bg-white max-md:pb-24">
      <Header />
      <section className="self-center mt-14 w-full max-w-[1165px] max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <Banner />
          {isRegistering ? (
            <RegisterForm toggleForm={toggleForm} />
          ) : (
            <LoginForm toggleForm={toggleForm} />
          )}
        </div>
      </section>
    </main>
  );
}

export default Entry;