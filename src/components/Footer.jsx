import React from "react";
import { Link } from "react-router-dom";
import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from "../assets/data";

const Footer = () => {
  return (
    <footer className="mb-4">
      <div className="pt-12 pb-8 rounded-tr-3xl rounded-tl-3xl xl:pt-20">
        <h3 className="h3">Discover flavors that awaken your taste buds.</h3>
        <p>
        Experience a variety of dishes made with the freshest ingredients and bold, authentic flavors. Enjoy a delicious journey.
        </p>
        <hr className="my-8 bg-slate-900/30 h-[2px]" />
        {/* container */}
        <div
          className="flex flex-wrap justify-between gap-2 "
        >
          <div className="max-w-sm">
            {/* logo */}
            <Link to={"/"} className="flex flex-1 bold-24 ">
              <span className="inline-flex">
                <span className="inline-flex items-center justify-center p-2 h-8 w-8 bg-secondary text-white -rotate-[31deg] rounded-full">
                  F
                </span>
                ood
              </span>
              essa
            </Link>
            <p className="py-4">
            Looking for something delicious? Explore a variety of mouthwatering meals, crafted to satisfy your cravings and bring joy to every occasion
            </p>
            <div className="flexBetween pl-3 h-[3rem] bg-deep w-full max-w-[333px] rounded-full ring-1 ring-slate-500/15 mb-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-transparent border-none outline-none"
              />
              <button className="relative btn-secondary right-4">
                Subscribe
              </button>
            </div>
          </div>
          <div className="flex flex-wrap justify-between gap-8">
            {FOOTER_LINKS.map((col) => (
              <FooterColumn key={col.title} title={col.title}>
                <ul className="flex flex-col gap-4 regular-14 text-gray-20">
                  {col.links.map((link) => (
                    <Link to="/" key={link}>
                      {link}
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
            ))}
            <div className="flex flex-col gap-5">
              <FooterColumn title={FOOTER_CONTACT_INFO.title}>
                {FOOTER_CONTACT_INFO.links.map((link) => (
                  <Link
                    to="/"
                    key={link.label}
                    className="flex gap-4 md:flex-col lg:flex-row"
                  >
                    <p>{link.label}:</p>
                    <p className="bold-15">{link.value}</p>
                  </Link>
                ))}
              </FooterColumn>
            </div>
            <div className="flex ">
              <FooterColumn title={SOCIALS.title}>
                <ul className="flex gap-4">
                  {SOCIALS.links.map((link) => (
                    <Link to="/" key={link.id} className="text-xl">
                      {link.icon}
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
            </div>
          </div>
        </div>
      </div>
      {/* copyrights */}
      {/* <p className="px-8 py-2 text-white rounded bg-secondary medium-14 flexBetween ">
        <span>2025 Foodessa</span>
        <span>All rights reserved</span>
      </p> */}
       <p className="inline-block px-6 py-2 bg-gradient-to-r from-secondary to-[#F97316] text-white font-semibold rounded-full shadow-lg tracking-wide">
            © 2025 Foodessa — All Rights Reserved
          </p>
    </footer>
  );
};

export default Footer;

const FooterColumn = ({ title, children }) => {
  return (
    <div className="flex flex-col gap-5">
      <h4 className="bold-18 whitespace-nowrap">{title}</h4>
      {children}
    </div>
  );
};
