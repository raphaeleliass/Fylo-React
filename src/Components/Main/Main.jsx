import { ImArrowRight2 } from "react-icons/im";
import Cards from "./Cards";
import TestimonialsCards from "./TestimonialsCards";

function Main() {
  return (
    <main className="bg-neutralDarkBlue2 flex flex-col items-center justify-center py-52">
      <section className="grid grid-cols-1 gap-y-24 md:grid-cols-2">
        <Cards
          img="./icon-access-anywhere.svg"
          title="Access your files, anywhere."
          text="The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere."
        />
        <Cards
          img="./icon-security.svg"
          title="Security you can trust"
          text="2-factor authentication and user-controlled encryption are
          just a couple of the security features we allow to help
          secure your files."
        />
        <Cards
          img="./icon-collaboration.svg"
          title="Real-time collaboration"
          text="Securely share files and folders with friends, family and
          colleagues for live collaboration. No email attachments
          required."
        />
        <Cards
          img="./icon-any-file.svg"
          title="Store any type of file"
          text="Whether you're sharing holidays photos or work
          documents, Fylo has you covered allowing for all file
          types to be securely stored and shared."
        />
      </section>

      <section className="flex flex-col items-center justify-center py-32 md:max-w-2xl md:flex-row lg:max-w-5xl max-w-xs">
        <div className="md:w-1/2">
          <img src="./illustration-stay-productive.png" alt="" />
        </div>
        <div className="flex flex-col gap-4 px-0 md:w-1/2 md:px-2 lg:px-12">
          <h2 className="text-xl font-bold md:text-4xl">
            Stay productive, wherever you are
          </h2>
          <p>
            Never let location be an issue when accessing your files. Fylo has
            you covered for all of your file storage needs. Securely share files
            and folders with friends, family and colleagues for live
            collaboration. No email attachments required.
          </p>
          <a
            href="#"
            className="border-b-primaryCyan text-primaryCyan hover:border-b-primaryBlue hover:text-primaryBlue mr-auto flex items-center justify-center gap-2 border-b-2 transition-all"
          >
            See how Fylo works <ImArrowRight2 />
          </a>
        </div>
      </section>

      <section className="">
        <div className="grid max-w-xs grid-cols-1 gap-x-6 md:max-w-2xl lg:max-w-5xl lg:grid-cols-3">
          <div className="absolute mt-16 md:-ml-6 -ml-4">
           <img
           className="md:w-14 w-10"
             src="./bg-quotes.png"
             alt=""
           />
          </div>
          <TestimonialsCards
            img="./profile-1.jpg"
            text="Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine."
            clientName="Patel Satish"
            clientOccupation="Founder & CEO, Huddie"
          />
          <TestimonialsCards
            img="./profile-2.jpg"
            text="Fylo has improved our team productivity by
           an order of magnitude. Since making the
           switch our team has become a well-oiled
           collaboration machine."
            clientName="Bruce McKenzie"
            clientOccupation="Founder & CEO, Huddie"
          />
          <TestimonialsCards
            img="./profile-3.jpg"
            text="Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine."
            clientName="Iva Boyd"
            clientOccupation="Founder & CEO, Huddie"
          />
        </div>
      </section>
    </main>
  );
}

export default Main;
