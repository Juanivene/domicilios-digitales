import Grid from "../Grid/Grid";

const Footer = () => {
  return (
    <Grid container>
      <Grid item xs={12} className="text-center">
        © 2024 - Poder Judicial de Tucumán - Dirección de Sistemas
      </Grid>
      <Grid item xs={12} className="text-center">
        v2.0.1
      </Grid>
    </Grid>
  );
};

export default Footer;
