import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import {
  FaWhatsapp,
  FaTelegram,
  FaFacebook,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

const ContactUs = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState("");

  // ✅ Function to send email using EmailJS
  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);
    setStatus("");

    emailjs
      .sendForm(
        "service_2izvhy9", // ✅ Your Service ID
        "template_gnlmn3i", // ✅ Your Template ID
        form.current,
        "S4yGIlJuhOmPKgE9i" // ✅ Your Public Key
      )
      .then(
        () => {
          setStatus("✅ Message sent successfully!");
          e.target.reset();
        },
        (error) => {
          console.error("Error sending message:", error);
          setStatus("❌ Failed to send message. Try again later.");
        }
      )
      .finally(() => setIsSending(false));
  };

  return (
    <section
      id="contact"
      className="flex flex-col pt-10 lg:pt-20 dark:bg-dark-gradient dark:text-white md:flex-row justify-center items-stretch min-h-screen  bg-white font-sans"
    >
      {/* Left Box */}
      <div className=" border-[3px] lg:py-[63px]   border-teal w-full md:w-1/2 ">
        <div className=" flex flex-col ms-auto justify-center relative">
          {/* CONTACT US Header */}
          <div className="relative ms-auto w-[75%]  inline-block">
            <div className="border-[10px] border-teal shadow_card translate-x-1 ps-[83px] pt-[48px] pb-[28px] ">
              <div className="bg-teal-400 bg-teal shadow_card translate-x-4">
                <h1 className="font-advanium text-black ps-[60px] p-4  font-bold text-3xl ">
                  CONTACT US
                </h1>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="text-start pt-16 w-[60%] ms-auto">
            <p className="  leading-relaxed mb-6">
              Your vision, our expertise. Connect with us and let’s create
              something amazing together.
            </p>

            {/* Contact Info */}
            <div className="space-y-2 mb-6 ">
              <p>
                <span className="font-semibold">Phone:</span>{" "}
                <a href="tel:+923121861921" className=" hover:text-teal-600">
                  +923121861921
                </a>
              </p>
              <p>
                <span className="font-semibold">Email:</span>{" "}
                <a
                  href="mailto:info@pixeltechnosol.com"
                  className=" hover:text-teal-600"
                >
                  info@pixeltechnosol.com
                </a>
              </p>
              <p>
                <span className="font-semibold">Address:</span> House# 445,
                Street# 20
                <br />
                Ghouri Town Phase-1, Islamabad, Pakistan
              </p>
            </div>

            {/* Social Media */}
            <div>
              <p className="font-semibold mb-3">FIND WITH ME</p>
              <div className="flex space-x-4 text-2xl">
                <a
                  href="https://wa.me/923121861921"
                  className="text-green-500 hover:scale-110 transition"
                >
                  <FaWhatsapp />
                </a>
                <a
                  href="https://t.me/yourusername"
                  className="text-sky-400 hover:scale-110 transition"
                >
                  <FaTelegram />
                </a>
                <a
                  href="https://facebook.com/yourpage"
                  className="text-blue-600 hover:scale-110 transition"
                >
                  <FaFacebook />
                </a>
                <a
                  href="https://linkedin.com/in/yourprofile"
                  className="text-blue-700 hover:scale-110 transition"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://instagram.com/yourpage"
                  className="text-pink-500 hover:scale-110 transition"
                >
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side (Form) */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center px-8 md:px-16 py-10">
        <form
          ref={form}
          onSubmit={sendEmail}
          className="w-full max-w-md space-y-6"
        >
          <input
            type="text"
            name="user_name"
            placeholder="Full Name"
            className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-teal-400"
            required
          />
          <input
            type="email"
            name="user_email"
            placeholder="Email Address"
            className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-teal-400"
            required
          />
          <input
            type="tel"
            name="user_phone"
            placeholder="Phone Number"
            className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-teal-400"
          />

          {/* Services Dropdown */}
          <select
            name="user_service"
            className="w-full border rounded-lg p-3 text-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-400"
          >
            <option>Services</option>
            <option>Web Design</option>
            <option>App Development</option>
            <option>Branding</option>
            <option>Digital Marketing</option>
          </select>

          <textarea
            name="message"
            rows="5"
            placeholder="Message"
            className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-teal-400"
            required
          ></textarea>

          <button
            type="submit"
            disabled={isSending}
            className="bg-[#053B44] text-white w-full py-3 rounded-lg hover:bg-[#07575b] transition duration-300 disabled:opacity-60"
          >
            {isSending ? "Sending..." : "Submit"}
          </button>

          {status && (
            <p className="text-center mt-2 text-gray-700 font-medium">
              {status}
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
