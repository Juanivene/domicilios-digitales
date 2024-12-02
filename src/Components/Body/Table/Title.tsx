import Grid from "../../Grid/Grid";
import SearchIcon from "@mui/icons-material/Search";

const Title = () => {
  return (
    <Grid container alignItems="center" spacing={2} className="mt-5">
      <Grid item xs={12} md={4} lg={4} className="text-center md:text-left">
        <h2 className="text-xl font-bold">Listado</h2>
      </Grid>

      <Grid item xs={12} md={8} lg={8}>
        <form className="flex flex-wrap items-center justify-center md:justify-end">
          <label className="mx-1 text-lg">Mostrar</label>
          <select className="select w-20 h-14">
            <option className="font-bold">15</option>
            <option className="font-bold">25</option>
            <option className="font-bold">50</option>
          </select>
          <button
            type="submit"
            className="btn flex items-center w-30 h-14 text-sm bg-customBlue text-white hover:bg-blue-900 rounded-xl ml-2"
          >
            <SearchIcon className="w-4 h-4 sm:w-5 sm:h-5 mr-1" />
            Buscar
          </button>
        </form>
      </Grid>
    </Grid>
  );
};

export default Title;
