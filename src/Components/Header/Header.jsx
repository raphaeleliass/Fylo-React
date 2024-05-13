function Header() {
  return (
    <header className="py-6">
      <div className="mx-auto flex w-full max-w-xs flex-row items-center justify-between md:max-w-2xl lg:max-w-5xl">
        <a href="#">
          <img className="w-24 md:w-32" src="./logo.svg" alt="logo fylo" />
        </a>
        <nav className="flex items-center">
          <ul className="flex gap-2">
            <li>
              <a
                className="hover:text-primaryBlue transition-all md:p-2"
                href="#"
              >
                Features
              </a>
            </li>
            <li>
              <a
                className="hover:text-primaryBlue transition-all md:p-2"
                href="#"
              >
                Team
              </a>
            </li>
            <li>
              <a
                className="hover:text-primaryBlue transition-all md:p-2"
                href="#"
              >
                Sign in
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
