import Grid from "../Grid/Grid";

const Header = () => {
  return (
    <>
      <Grid container gap={1}>
        <Grid item xs={6} xl={6}>
          <img
            className="w-96"
            src="https://domiciliosdigitales.justucuman.gov.ar/img/logos/logo-corte.png"
            alt=""
          />
        </Grid>
        <Grid item xs={6} xl={6}>
          <h1 className="text-right text-2xl font-bold">Domicilio digital</h1>
        </Grid>
      </Grid>
    </>
  );
};

export default Header;
