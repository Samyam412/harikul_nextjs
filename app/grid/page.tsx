const GridPage = () => {
  return (
    <div
      className="w-screen h-screen bg-red-500
    grid grid-cols-3 md:grid-cols-4 gap-4 auto-rows-auto  md:grid-rows-3
    "
    >
      <div
        className="size-full border  bg-white col-span-3
      md:col-span-1 md:row-span-2"
      >
        One
      </div>
      <div className="size-full border  bg-white col-span-2 md:col-span-1">Two</div>
      <div className="size-full border  bg-white col-span-2">Three</div>
      <div className="size-full border  bg-white col-span-2">Four</div>
      <div className="size-full border  bg-white">Five</div>
      <div className="size-full border  bg-white col-span-4">Six</div>
    </div>
  );
};

export default GridPage;
