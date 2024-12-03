import ContentTable from "./ContentTable";

import { useRef, useState } from "react";
import Grid from "../../Grid/Grid";
import SearchIcon from "@mui/icons-material/Search";
import ModalContent from "../Modal/ModalContent";
import { useQuery } from "@tanstack/react-query";
import { Filters, getAddressesFn } from "../../../api/addresses";

const Table = () => {
  const [itemsPerPage, setItemsPerPage] = useState<number>(15);
  const [filters, setFilters] = useState<Filters>();
  const modalRef = useRef<HTMLInputElement>(null);

  const { isLoading, isError } = useQuery({
    queryKey: ["addresses", itemsPerPage],
    queryFn: (context) => {
      const queryKey = context.queryKey as [string, number];
      return getAddressesFn(queryKey);
    },
  });
  if (isLoading) return <div>cargando..</div>;
  if (isError) return <div>error</div>;
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value: string = event.target.value;
    setItemsPerPage(Number(value));
  };

  return (
    <>
      <Grid container alignItems="center" spacing={2} className="mt-5">
        <Grid item xs={12} md={4} lg={4} className="text-center md:text-left">
          <h2 className="text-2xl font-bold">Listado</h2>
        </Grid>

        <Grid
          item
          xs={12}
          md={8}
          lg={8}
          className="flex flex-wrap items-center justify-center md:justify-end"
        >
          <label className="mx-1 text-lg">Mostrar</label>
          <select
            value={itemsPerPage}
            onChange={handleSelectChange}
            className="select w-20 h-14"
          >
            <option value={15} className="font-bold">
              15
            </option>
            <option value={25} className="font-bold">
              25
            </option>
            <option value={50} className="font-bold">
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
              itemsPerPage={itemsPerPage}
              setFilters={setFilters}
              filters={filters}
              modalRef={modalRef}
            />
            <label className="modal-backdrop" htmlFor="my_modal_6"></label>
          </div>
        </Grid>
      </Grid>
      <ContentTable itemsPerPage={itemsPerPage} filters={filters} />
    </>
  );
};

export default Table;
