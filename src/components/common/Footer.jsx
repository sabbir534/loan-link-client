import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaChartLine,
  FaHandshake,
  FaShieldAlt,
  FaClock,
} from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { MdOutlineCurrencyExchange } from "react-icons/md";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-linear-to-br from-base-200 to-base-300 text-base-content mt-auto">
      <div className="mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center justify-center gap-2">
              <Link to="/" className="flex items-center gap-2">
                <MdOutlineCurrencyExchange className="text-3xl text-primary" />
                <span className="text-2xl font-bold">
                  <span className="text-primary">Loan</span>
                  <span className="text-base-content">Link</span>
                </span>
              </Link>
            </div>
            <p className="text-sm text-base-content/70 leading-relaxed text-center">
              Your trusted partner for microloan solutions. We connect borrowers
              with lenders through our streamlined request and approval tracking
              system, making financial assistance accessible to everyone.
            </p>
            <div className="flex gap-3 pt-2 justify-center">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300"
              >
                <FaFacebookF className="text-sm" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300"
              >
                <BsTwitterX className="text-sm" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300"
              >
                <FaLinkedinIn className="text-sm" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300"
              >
                <FaInstagram className="text-sm" />
              </a>
            </div>
          </div>

          <div className="space-y-4 pl-0 md:pl-35">
            <h3 className="text-lg font-semibold text-primary mb-4 text-center  flex items-center">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="flex items-center gap-2 text-sm hover:text-primary transition-colors duration-200"
                >
                  <span className="w-1 h-1 bg-primary rounded-full"></span>
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/all-loans"
                  className="flex items-center gap-2 text-sm hover:text-primary transition-colors duration-200"
                >
                  <span className="w-1 h-1 bg-primary rounded-full"></span>
                  All Loans
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="flex items-center gap-2 text-sm hover:text-primary transition-colors duration-200"
                >
                  <span className="w-1 h-1 bg-primary rounded-full"></span>
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="flex items-center gap-2 text-sm hover:text-primary transition-colors duration-200"
                >
                  <span className="w-1 h-1 bg-primary rounded-full"></span>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary mb-4 text-center  flex items-center">
              Our Services
            </h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-sm">
                <FaHandshake className="text-primary/60 text-xs" />
                <span>Microloan Applications</span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <FaShieldAlt className="text-primary/60 text-xs" />
                <span>Secure Approval Process</span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <FaClock className="text-primary/60 text-xs" />
                <span>Quick Loan Processing</span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <FaChartLine className="text-primary/60 text-xs" />
                <span>EMI Management</span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <FaShieldAlt className="text-primary/60 text-xs" />
                <span>Data Protection</span>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary mb-4 text-center flex items-center">
              Contact Info
            </h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-primary mt-1" />
                <div className="text-sm">
                  <p>123 Financial Street</p>
                  <p>Business Avenue, Dhaka</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <FaPhone className="text-primary" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-primary" />
                <span className="text-sm">support@loanlink.com</span>
              </div>
            </div>

            <div className="pt-4">
              <h4 className="text-sm font-semibold mb-2 text-center  flex items-center">
                Subscribe to Newsletter
              </h4>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="input input-bordered input-sm flex-1 bg-base-100"
                />
                <button className="btn btn-primary btn-sm">Subscribe</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-base-300/50 border-t border-base-content/10">
        <div className=" mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-center md:text-left">
              <p>&copy; {currentYear} LoanLink. All rights reserved.</p>
            </div>
            <div className="flex gap-4 text-sm">
              <Link to="#" className="hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link to="#" className="hover:text-primary transition-colors">
                Terms of Service
              </Link>
              <Link to="#" className="hover:text-primary transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
