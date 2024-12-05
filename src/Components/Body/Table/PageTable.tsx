import { useQuery } from "@tanstack/react-query";
import { Filters, getAddressesFn } from "../../../api/addresses";

type Props = {
  setIndex: React.Dispatch<React.SetStateAction<number>>;
  index: number;
  itemsPerPage: number;
  filters: Filters;
};

const PageTable = (props: Props) => {
  const { setIndex, index, itemsPerPage, filters } = props;

  const { data: addresses, isLoading } = useQuery({
    queryKey: ["addresses", itemsPerPage, filters, index],
    queryFn: (context) => {
      const queryKey = context.queryKey as [string, number, Filters, number];
      return getAddressesFn(queryKey);
    },
  });

  const totalPages = addresses?.pagination.totalPages || 0;

  const handleBack = (firstElement?: boolean) => {
    setIndex(firstElement ? 0 : Math.max(0, index - 1));
  };

  const handleNext = (lastElement?: boolean) => {
    if (lastElement) {
      setIndex(totalPages - 1);
    } else {
      setIndex(Math.min(index + 1, totalPages - 1));
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center mt-6 font-semibold">
        Cargando paginado...
      </div>
    );
  }
  if (addresses?.content.length === 0) return null;
  return (
    <div>
      <div className="flex justify-center items-center mt-6 join space-x-2 sm:space-x-1 overflow-x-auto">
        <button
          onClick={() => handleBack(true)}
          disabled={index === 0}
          className={`join-item btn w-12 sm:w-20 ${
            index === 0
              ? "opacity-50 cursor-default bg-gray-300 dark:bg-gray-700 dark:text-gray-400"
              : "bg-customBlue border-gray-400 text-white hover:border-gray-500 hover:bg-customBlue transition"
          }`}
        >
          <span>⏮</span> 00
        </button>
        <button
          onClick={() => handleBack()}
          disabled={index === 0}
          className={`join-item btn w-12 sm:w-20 ${
            index === 0
              ? "opacity-50 cursor-default bg-gray-300 dark:bg-gray-700 dark:text-gray-400"
              : "bg-transparent dark:text-white border border-gray-400 text-gray-500 hover:bg-customBlue hover:text-white transition"
          }`}
        >
          <span>◀</span> {index}
        </button>
        <button className="join-item btn w-12 sm:w-20 bg-transparent dark:text-white border border-gray-400 text-gray-500 cursor-default transition">
          ({index + 1})
        </button>
        <button
          onClick={() => handleNext()}
          disabled={index === totalPages - 1}
          className={`join-item btn w-12 sm:w-20 ${
            index === totalPages - 1
              ? "opacity-50 cursor-default bg-gray-300 dark:bg-gray-700 dark:text-gray-400"
              : "bg-transparent dark:text-white border border-gray-400 text-gray-500 hover:bg-customBlue hover:text-white transition"
          }`}
        >
          <span className="block sm:hidden">▶</span> {index + 2}
          <span className="hidden sm:block">▶</span>
        </button>
        <button
          onClick={() => handleNext(true)}
          disabled={index === totalPages - 1}
          className={`join-item btn w-12 sm:w-20 ${
            index === totalPages - 1
              ? "opacity-50 cursor-default bg-gray-300 dark:bg-gray-700 dark:text-gray-400"
              : "bg-customBlue border-gray-400 text-white hover:border-gray-500 hover:bg-customBlue transition"
          }`}
        >
          <span className="block sm:hidden">⏭</span> {totalPages}
          <span className="hidden sm:block">⏭</span>
        </button>
      </div>
      <div className="flex justify-center pt-1">
        <span className="font-semibold dark:text-white">
          página {index + 1} de {totalPages}
        </span>
      </div>
    </div>
  );
};

export default PageTable;
