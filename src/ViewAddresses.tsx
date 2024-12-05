import Table from "./Components/Body/Table/Table";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";

const ViewAddresses = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="px-6 py-3 sm:px-20 sm:py-5 flex-grow">
        <Header />
        <Table />
      </div>
      <Footer />
    </div>
  );
};

export default ViewAddresses;
