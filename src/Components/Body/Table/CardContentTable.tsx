type Props = {
  address: {
    id: number;
    name: string;
    lastName: string;
    profile: {
      id: number;
      name: string;
    };
  };
};
const CardContentTable = (props: Props) => {
  const { address } = props;
  if (!address) {
    return <div>cargando cards..</div>;
  }
  return (
    <div className="block lg:hidden m-2">
      <div className="max-w-full rounded-lg dark:bg-gray-700  bg-white transition-all duration-300 ease-in-out shadow-md hover:shadow-lg hover:bg-gray-100">
        <div className="bg-customBlue h-2 rounded-t-lg dark:bg-gray-800"></div>
        <div className="p-3">
          <div className="flex justify-between items-start">
            <div>
              <div className="flex flex-col gap-2 ">
                <h6 className="font-bold text-gray-700 dark:text-white">{address.lastName},</h6>
                <p className="text-sm text-gray-600 dark:text-white">{address.name}</p>
              </div>
            </div>
          </div>
          <div className="divider"></div>
          <p className="text-base font-medium text-gray-600 dark:text-white text-right">
            {address.profile.name}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardContentTable;
