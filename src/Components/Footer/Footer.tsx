import { Filters } from "../../api/addresses";
import PageTable from "../Body/Table/PageTable";
import Grid from "../Grid/Grid";
type Props = {
  setIndex: React.Dispatch<React.SetStateAction<number>>;
  index: number;
  itemsPerPage: number;
  filters: Filters;
  error: boolean;
};
const Footer = (props: Props) => {
  const { index, setIndex, itemsPerPage, filters, error } = props;
  return (
    <Grid container>
      <Grid item xs={12} className="pb-5">
        <PageTable
          index={index}
          setIndex={setIndex}
          itemsPerPage={itemsPerPage}
          filters={filters}
          error={error}
        />
      </Grid>
      <Grid item xs={12} className="text-center dark:text-white">
        © 2024 - Poder Judicial de Tucumán - Dirección de Sistemas
      </Grid>
      <Grid item xs={12} className="text-center dark:text-white">
        v2.0.1
      </Grid>
    </Grid>
  );
};

export default Footer;
