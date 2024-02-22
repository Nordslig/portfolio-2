const Footer = () => {
  return (
    <footer className="text-center border-t-4 border-primary">
      <p className="m-2">&#169; Bartosz Pindel 2024</p>
      <p className="flex justify-evenly mt-2 mb-3">
        <a
          href="http://facebook.com"
          target="_blank"
          className="hover:border-b border-black px-2"
        >
          Facebook
        </a>
        <a
          href="http://github.com"
          target="_blank"
          className="hover:border-b border-black px-2"
        >
          Github
        </a>
        <a
          href="http://linkedin.com"
          target="_blank"
          className="hover:border-b border-black px-2"
        >
          LinkedIn
        </a>
      </p>
    </footer>
  );
};

export default Footer;
