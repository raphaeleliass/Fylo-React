function Button(props) {
  return (
    <button className="from-primaryCyan to-primaryBlue flex items-center justify-center rounded-full bg-gradient-to-r px-12 py-2">
      <a href="#" className="text-lg font-semibold">{props.text}</a>
    </button>
  );
}

export default Button;
