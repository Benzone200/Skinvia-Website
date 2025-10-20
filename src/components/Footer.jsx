import React from 'react';
import phone from "../assets/images/phone.png";
import facebook from "../assets/images/facebook.png";
import insta from "../assets/images/insta.png";
import like from "../assets/images/like.png";
import share from "../assets/images/share.png";

const Footer = () => {
  return (
    <footer className="bg-[#D9D9D9] py-10">
      <section className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between gap-10 px-6">
        
        {/* Left Div */}
        <div>
          <h3 className="font-normal text-[24px] text-[#5f5a56]">Information</h3>
          <p className="text-[16px] text-[#5f5a56]">About Us</p>
          <p className="text-[16px] text-[#5f5a56]">Terms & Condition</p>
          <p className="text-[16px] text-[#5f5a56]">Track your order</p>
          <p className="mt-2 text-[14px] text-[#5f5a56]">Contact Us :</p>
          <div className="flex items-center gap-2 mt-2">
            <img src={phone} className="w-4 h-4 hover:scale-110 transition-transform" alt="Phone" />
            <p className="text-[14px] text-[#5f5a56]">+92 321 3333 333</p>
          </div>
        </div>

        {/* Right Div */}
        <div>
          <h3 className="text-[24px] text-[#5f5a56]">Stay Connected</h3>
          <div className="flex items-center gap-3 mt-3">
            <img src={facebook} className="w-[10px] h-[20px] hover:scale-110 transition-transform" alt="Facebook" />
            <img src={insta} className="w-5 h-5 hover:scale-110 transition-transform" alt="Instagram" />
            <p className="text-[12px] text-[#5f5a56]">LIKE US ON FACEBOOK</p>
          </div>
          <div className="flex gap-2 mt-2">
            <img src={like} className="h-[10px] mt-[2px] hover:scale-110 transition-transform" alt="Like" />
            <img src={share} className="h-[15px] hover:scale-110 transition-transform" alt="Share" />
          </div>

          <h3 className="mt-6 text-[20px] text-[#5f5a56]">SIGN UP FOR OUR NEWSLETTER</h3>
          <div className="flex flex-col sm:flex-row gap-2 mt-3">
            <form className="flex-1">
              <input
                type="text"
                placeholder="enter your email address"
                className="w-full border border-black px-3 py-2 text-[12px] focus:border-orange-500 focus:outline-none transition-colors duration-200"
              />
            </form>
            <button className="bg-[#5f5a56] text-white px-6 py-2">Submit</button>
          </div>
        </div>
      </section>
      <hr className="mt-8 border-gray-400" />
    </footer>
  );
};

export default Footer;