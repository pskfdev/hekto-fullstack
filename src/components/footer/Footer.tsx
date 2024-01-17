import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="footer p-10 bg-base-200">
      <aside className="lg:mx-auto">
        <h1>Hekto</h1>
        <p>
          ACME Industries Ltd.
          <br />
          Providing reliable tech since 1992
        </p>
      </aside>
      <nav className="lg:mx-auto">
        <h3 className="">Services</h3>
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
      </nav>
      <nav className="lg:mx-auto">
        <h3 className="">Company</h3>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </nav>
      <nav className="lg:mx-auto">
        <h3 className="">Legal</h3>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </nav>
    </footer>
  );
};

export default Footer;
