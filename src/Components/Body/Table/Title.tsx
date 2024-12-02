import Grid from "../../Grid/Grid";
import SearchIcon from "@mui/icons-material/Search";

const Title = () => {
  return (
    <Grid container alignItems="center">
      <Grid item xs={4}>
        <h2 className="text-xl">Listado</h2>
      </Grid>
      <Grid item xs={8}>
        <form className="flex items-center justify-end">
          <label className="mx-1 text-lg">Mostrar</label>
          <select className="select w-28 h-16">
            <option className="font-bold w-28">15</option>
            <option className="font-bold w-28">25</option>
            <option className="font-bold w-28">50</option>
          </select>

          <button
            type="submit"
            className="btn w-50 h-16 tex bg-customBlue text-white hover:bg-blue-900 rounded-xl  ml-2"
          >
            <SearchIcon className="w-5 h-5" />
            Buscar
          </button>
        </form>
      </Grid>
    </Grid>
  );
};

export default Title;
