import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useQuery } from "@tanstack/react-query";
import { getAddressesFn } from "../../../api/addresses";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function ContentTable(props) {
  const { itemsPerPage, filters } = props;
  const {
    data: addresses,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["addresses", itemsPerPage, filters],
    queryFn: (context) => {
      const queryKey = context.queryKey as [string, number];
      return getAddressesFn(queryKey);
    },
  });
  if (isLoading) return <div>Cargando..</div>;
  if (isError) return <div>error wacho</div>;

  return (
    <TableContainer component={Paper} sx={{ marginTop: 1, borderRadius: 5 }}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell sx={{ fontWeight: "bold" }}>
              Apellido
            </StyledTableCell>
            <StyledTableCell align="left" sx={{ fontWeight: "bold" }}>
              Nombre
            </StyledTableCell>
            <StyledTableCell align="right" sx={{ fontWeight: "bold" }}>
              Perfil
            </StyledTableCell>
          </TableRow>
        </TableHead>
        {addresses?.content.map((address) => {
          return (
            <TableBody key={address.id}>
              <StyledTableRow>
                <StyledTableCell component="th" scope="row">
                  {address.lastName}
                </StyledTableCell>
                <StyledTableCell align="left">{address.name}</StyledTableCell>
                <StyledTableCell align="right">
                  {address.profile.name}
                </StyledTableCell>
              </StyledTableRow>
            </TableBody>
          );
        })}
      </Table>
    </TableContainer>
  );
}
