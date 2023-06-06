const Store_link = ({ href, target, customStyles, url }) => {
  customStyles = customStyles || "";
  const className = `underline text-[0.8rem] font-light text-white ${customStyles}`;
  return (
    <a href={href} target={target} className={className}>
      {url}
    </a>
  );
};

export default Store_link;
