import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useQuery } from "@tanstack/react-query";
import { Filters, getAddressesFn } from "../../../api/addresses";
import CardContentTable from "./CardContentTable";
import Loader from "../../feedback/Loader";
import AlertNoData from "../../feedback/AlertNoData";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: " rgb(63 117 168)",
    color: theme.palette.common.white,
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
type Props = {
  itemsPerPage: number;
  filters: Filters;
  index: number;
  setError: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function ContentTable(props: Props) {
  const { itemsPerPage, filters, index, setError } = props;
  const {
    data: addresses,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["addresses", itemsPerPage, filters, index],
    queryFn: (context) => {
      const queryKey = context.queryKey as [string, number, Filters, number];
      return getAddressesFn(queryKey);
    },
  });
  if (isLoading) return <Loader />;
  if (isError) setError(true);
  if (addresses?.content.length === 0) return <AlertNoData />;
  return (
    <div>
      <TableContainer
        component={Paper}
        sx={{ marginTop: 1, borderRadius: 5 }}
        className="hidden lg:block"
      >
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
              <TableBody
                key={address.id}
                className="hover:bg-gray-100 transition"
              >
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
      {addresses?.content.map((address) => {
        return <CardContentTable address={address} key={address.id} />;
      })}
    </div>
  );
}
