const SectionTitle = ({ heading, subheading }) => {
  return (
    <div className="flex flex-col bg-black md:flex-row justify-center items-center gap-4 pt-8 pb-5">
      <h1 className="text-2xl text-white font-medium md:text-4xl">{heading}</h1>
      <h1 className="text-2xl text-[#65B741] font-medium md:text-4xl">
        {subheading}
      </h1>
    </div>
  );
};

export default SectionTitle;
