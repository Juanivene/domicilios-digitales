import Body from "./Components/Body/Body";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";

const ViewAddresses = () => {
  return (
    <div className="flex flex-col min-h-screen px-5 py-2 md:px-20 md:py-5">
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

export default ViewAddresses;
