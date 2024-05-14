import { ImLocation, ImMail2, ImMail3, ImMail4 } from "react-icons/im";
import { ImPhone } from "react-icons/im";
import { ImMail } from "react-icons/im";
import { ImTwitter } from "react-icons/im";
import { ImInstagram } from "react-icons/im";
import { ImFacebook } from "react-icons/im";
import Button from "../Button/Button";

function Footer() {
  return (
    <footer className="flex items-center justify-center bg-neutralDarkBlue3">
      <section className="absolute left-0 right-0 mx-auto -mt-[950px] flex max-w-xs flex-col items-center justify-center gap-6 rounded-xl bg-neutralDarkBlue4 py-12 text-center shadow-xl md:-mt-[570px] md:max-w-2xl lg:-mt-[420px] lg:max-w-2xl">
        <h2 className="text-3xl font-semibold">Get early access today</h2>
        <p className="px-8 text-center text-sm md:max-w-lg md:px-0">
          It only takes a minute to sign up and our free starter tier is
          extremely generous. If you have any questions, our support team would
          be happy to help you.
        </p>
        <div className=" flex flex-col items-center justify-center gap-4 shadow-xl md:flex-row ">
          <input
            type="text"
            required
            placeholder="example@email.com"
            className="rounded-full px-10 py-2 text-black"
          />
          <Button text="Get Started For Free" />
        </div>
      </section>

      <div className=" mx-auto mb-12 mt-80 flex max-w-xs flex-col gap-12 md:mt-56 md:max-w-3xl md:flex-row lg:max-w-5xl">
        <section className="flex flex-col gap-6">
          <a href="#">
            <img className="w-24 md:w-32" src="./logo.svg" alt="Logo Fylo" />
          </a>
          <div className="flex flex-row gap-4">
            <ImLocation className="size-6 md:size-44 lg:size-8" />
            <p className="max-w-64">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor
              libero perspiciatis velit nam a corporis dicta, quaerat iste in
              cum, amet nobis magnam dolorum eos nulla veritatis itaque.
            </p>
          </div>
        </section>

        <section className="flex flex-col justify-center">
          <div className=" flex flex-row gap-2 md:items-center">
            <ImPhone />
            <p>+55 9 9212-3456</p>
          </div>
          <div className="flex flex-row gap-2 md:items-center">
            <ImMail />
            <p>example@fylo.com</p>
          </div>
        </section>

        <section className="flex flex-col justify-center gap-8 md:flex-row md:items-center">
          <ul>
            <li>
              <a href="#" className="transition-all hover:text-primaryCyan">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="transition-all hover:text-primaryCyan">
                Jobs
              </a>
            </li>
            <li>
              <a href="#" className="transition-all hover:text-primaryCyan">
                Press
              </a>
            </li>
            <li>
              <a href="#" className="transition-all hover:text-primaryCyan">
                Blog
              </a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#" className="transition-all hover:text-primaryCyan">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="transition-all hover:text-primaryCyan">
                Terms
              </a>
            </li>
            <li>
              <a href="#" className="transition-all hover:text-primaryCyan">
                Privacy
              </a>
            </li>
          </ul>
        </section>

        <section className="flex flex-col justify-center gap-4 md:flex-row md:items-center">
          <a href="#" className="transition-all hover:text-primaryCyan">
            <ImFacebook />
          </a>
          <a href="#" className="transition-all hover:text-primaryCyan">
            <ImInstagram />
          </a>
          <a href="#" className="transition-all hover:text-primaryCyan">
            <ImTwitter />
          </a>
        </section>
      </div>
    </footer>
  );
}

export default Footer;
