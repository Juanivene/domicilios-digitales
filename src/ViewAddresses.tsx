import { useState } from "react";
import Table from "./Components/Body/Table/Table";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import { Filters } from "./api/addresses";

const ViewAddresses = () => {
  const [itemsPerPage, setItemsPerPage] = useState<number>(15);
  const [filters, setFilters] = useState<Filters>({
    name: "",
    lastName: "",
    profile: "",
  });
  const [index, setIndex] = useState<number>(0);
  const [error, setError] = useState<boolean>(false);
  const [dark, setDark] = useState(false);
  const handleChangeTheme = () => {
    const newTheme = !dark;
    setDark(newTheme);
  };

  return (
    <div
      className={
        dark
          ? "min-h-screen flex flex-col bg-bgDark dark"
          : "min-h-screen flex flex-col bg-bgGray"
      }
    >
      <div className="px-6 py-3 sm:px-20 sm:py-5 flex-grow">
        <Header />
        <Table
          itemsPerPage={itemsPerPage}
          setItemsPerPage={setItemsPerPage}
          filters={filters}
          setFilters={setFilters}
          index={index}
          setIndex={setIndex}
          error={error}
          setError={setError}
        />
      </div>
      <Footer
        filters={filters}
        setIndex={setIndex}
        index={index}
        itemsPerPage={itemsPerPage}
        error={error}
      />

      <label className="swap swap-rotate fixed bottom-5 right-5 p-2 bg-customBlue/60 text-white rounded-full shadow-lg ue focus:outline-none">
        <input type="checkbox" onClick={handleChangeTheme} />
        <svg
          className="swap-on h-10 w-10 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
        </svg>
        <svg
          className="swap-off h-10 w-10 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
        </svg>
      </label>
    </div>
  );
};

export default ViewAddresses;
