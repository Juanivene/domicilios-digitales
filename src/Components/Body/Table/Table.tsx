import ContentTable from "./ContentTable";
import { useRef } from "react";
import Grid from "../../Grid/Grid";
import SearchIcon from "@mui/icons-material/Search";
import ModalContent from "../Modal/ModalContent";
import { useQuery } from "@tanstack/react-query";
import { Filters, getAddressesFn } from "../../../api/addresses";
import FiltersSpan from "./FiltersSpan";
type Props = {
  setIndex: React.Dispatch<React.SetStateAction<number>>;
  index: number;
  itemsPerPage: number;
  setItemsPerPage: React.Dispatch<React.SetStateAction<number>>;
  filters: Filters;
  setFilters: React.Dispatch<React.SetStateAction<Filters>>;
  error: boolean;
  setError: React.Dispatch<React.SetStateAction<boolean>>;
};
const Table = (props: Props) => {
  const {
    itemsPerPage,
    setItemsPerPage,
    filters,
    setFilters,
    index,
    setIndex,
    error,
    setError,
  } = props;

  const modalRef = useRef<HTMLInputElement>(null);

  useQuery({
    queryKey: ["addresses", itemsPerPage],
    queryFn: (context) => {
      const queryKey = context.queryKey as [string, number];
      return getAddressesFn(queryKey);
    },
  });

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value: string = event.target.value;
    setItemsPerPage(Number(value));
    setIndex(0);
  };

  return (
    <>
      <Grid container alignItems="center" spacing={2} className="mt-5">
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={7}
          className="text-center xxl:text-left"
        >
          <h2 className="text-2xl font-bold dark:text-white">Listado</h2>

          {filters.name || filters.lastName || filters.profile ? (
            <div className="hidden xxl:block">
              <FiltersSpan
                error={error}
                filters={filters}
                setFilters={setFilters}
              />
            </div>
          ) : (
            ""
          )}
        </Grid>
        {filters.name || filters.lastName || filters.profile ? (
          <Grid item xs={12} className="block xxl:hidden ">
            <FiltersSpan
              error={error}
              filters={filters}
              setFilters={setFilters}
            />
          </Grid>
        ) : (
          ""
        )}

        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={5}
          className="flex flex-wrap items-center justify-center xxxl:justify-end"
        >
          <label className="mx-1 text-lg dark:text-white">Mostrar</label>
          <select
            value={itemsPerPage}
            onChange={handleSelectChange}
            className="select w-20 h-14 dark:border-white dark:bg-transparent dark:text-white"
          >
            <option value={15} className="font-bold dark:bg-bgDark">
              15
            </option>
            <option value={25} className="font-bold dark:bg-bgDark">
              25
            </option>
            <option value={50} className="font-bold dark:bg-bgDark">
              50
            </option>
          </select>
          <label
            htmlFor="my_modal_6"
            className="btn  flex items-center w-30 h-14 text-sm bg-customBlue text-white hover:bg-blue-900 rounded-xl ml-2"
          >
            <SearchIcon className="w-4 h-4 sm:w-5 sm:h-5 mr-1" />
            Buscar
          </label>

          <input
            type="checkbox"
            id="my_modal_6"
            className="modal-toggle"
            ref={modalRef}
          />
          <div className="modal" role="dialog">
            <ModalContent
              setIndex={setIndex}
              setFilters={setFilters}
              filters={filters}
              modalRef={modalRef}
            />
            <label className="modal-backdrop" htmlFor="my_modal_6"></label>
          </div>
        </Grid>
      </Grid>
      <ContentTable
        setError={setError}
        itemsPerPage={itemsPerPage}
        filters={filters}
        index={index}
      />
    </>
  );
};

export default Table;
