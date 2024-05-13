import Button from "../Button/Button";

function Hero() {
  return (
    <section className="md:bg-hero_Desktop bg-hero_mobile flex flex-col items-center justify-center bg-cover bg-bottom bg-no-repeat md:bg-contain">
      <div className=" mx-auto flex max-w-xs flex-col items-center justify-center gap-6 text-center md:max-w-2xl md:gap-6">
        <img className="" src="./illustration-intro.png" alt="" />
        <h1 className="text-2xl font-bold md:text-4xl">
          All your files in one secure location, accessible anywhere.
        </h1>
        <div className="flex flex-col justify-center items-center gap-6">
         <p className="max-w-64 md:max-w-md md:text-sm">
           Fylo stores all your most important files in one secure location.
           Access them wherever you need, share and collaborate with friends
           family, and co-workers.
         </p>
         <Button text="Get Started" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
