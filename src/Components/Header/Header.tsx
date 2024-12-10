import Grid from "../Grid/Grid";

const Header = () => {
  return (
    <Grid container gap={2}>
      <Grid
        item
        xs={12}
        md={6}
        lg={6}
        className="flex justify-center md:justify-start"
      >
        <img
          className="w-96"
          src="src/images/logo-corte.png"
          alt="logo corte suprema de justicia"
        />
      </Grid>
      <Grid
        item
        xs={12}
        md={6}
        lg={6}
        className="flex justify-center md:justify-end items-center"
      >
        <h1 className="text-2xl font-bold text-black dark:text-white">
          Domicilio digital
        </h1>
      </Grid>
    </Grid>
  );
};

export default Header;
