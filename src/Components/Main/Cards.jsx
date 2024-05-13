function Cards(props) {
  return (
    <div className="mx-12 flex flex-col items-center justify-center gap-4 text-center lg:mx-36">
      <img src={props.img} alt={props.alt} />
      <h2 className="text-xl font-bold">{props.title}</h2>
      <p className="font-Raleway text-sm">{props.text}</p>
    </div>
  );
}

export default Cards;
