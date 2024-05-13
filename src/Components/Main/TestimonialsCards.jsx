function TestimonialsCards(props) {
  return (
    <div className="bg-neutralDarkBlue4 shadow-neutralDarkBlue3 my-20 flex flex-col gap-8 rounded-md p-12 text-center shadow-lg md:gap-12">
      <p className="text-md text-neutral-300">{props.text}</p>
      <div className="flex flex-row justify-start gap-3">
        <img className="size-10 rounded-full" src={props.img} alt={props.alt} />
        <div className="flex flex-col text-left">
          <h2 className="">{props.clientName}</h2>
          <p className="text-sm text-neutral-400">{props.clientOccupation}</p>
        </div>
      </div>
    </div>
  );
}

export default TestimonialsCards;
