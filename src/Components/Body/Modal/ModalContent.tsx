import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { Filters } from "../../../api/addresses";
type Props = {
  setFilters: React.Dispatch<React.SetStateAction<Filters>>;
  modalRef: React.RefObject<HTMLInputElement>;
  filters: Filters;
  setIndex: React.Dispatch<React.SetStateAction<number>>;
};

const ModalContent = (props: Props) => {
  const { setFilters, filters, modalRef, setIndex } = props;

  const {
    register,
    reset,
    setValue,
    handleSubmit: handleSubmitRHF,
  } = useForm<Filters>();

  if (filters) {
    setValue("name", filters.name);
    setValue("lastName", filters.lastName);
    setValue("profile", filters.profile);
  }
  const handleSubmit = (data: Filters) => {
    if (!data.lastName && !data.name && !data.profile) {
      Swal.mixin({
        title: "Complete al menos un campo para realizar la busqueda",
        icon: "error",
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        },
      }).fire();

      return;
    }
    setFilters(data);
    setIndex(0);
    if (modalRef.current) {
      console.log("hola");
      modalRef.current.checked = false;
    }
  };
  const handleReset = () => {
    reset();
    setFilters({ lastName: null, name: null, profile: null });
    setIndex(0);
  };
  return (
    <div className="modal-box bg-white dark:bg-bgDark">
      <h3 className="text-lg font-bold dark:text-white">Filtrar resultados</h3>
      <p className="py-4 dark:text-white">
        Aquí puede filtrar según uno o varios de los siguientes campos:
      </p>

      <form onSubmit={handleSubmitRHF(handleSubmit)} className="space-y-4">
        <div>
          <label
            htmlFor="apellido"
            className="block text-sm font-medium text-black dark:text-white"
          >
            Apellido
          </label>
          <input
            maxLength={20}
            className="input input-bordered w-full bg-transparent dark:border-gray-400 text-black dark:text-white "
            {...register("lastName", {})}
          />
        </div>

        <div>
          <label
            htmlFor="nombre"
            className="block text-sm font-medium text-black dark:text-white "
          >
            Nombre
          </label>
          <input
            maxLength={20}
            className="input input-bordered w-full bg-transparent dark:border-gray-400 text-black dark:text-white  "
            {...register("name", {})}
          />
        </div>

        <div>
          <label
            htmlFor="perfil"
            className="block text-sm font-medium text-black dark:text-white"
          >
            Perfil
          </label>
          <select
            className="select select-bordered w-full bg-transparent dark:border-gray-400 text-black dark:text-white "
            {...register("profile", {})}
          >
            <option className="dark:bg-bgDark" value="">
              Seleccionar perfil
            </option>
            <option className="dark:bg-bgDark" value="ABOGADO/PROCURADOR">
              ABOGADO/PROCURADOR
            </option>
            <option className="dark:bg-bgDark" value="ENTIDAD">
              ENTIDAD
            </option>
            <option className="dark:bg-bgDark" value="PERITO/OTRO">
              PERITO/OTRO
            </option>
          </select>
        </div>

        <div className="flex justify-between items-center mt-4">
          <button
            onClick={handleReset}
            type="button"
            className="btn btn-ghost text-black dark:text-white"
          >
            Limpiar
          </button>
          <div className="flex space-x-2">
            <label
              htmlFor="my_modal_6"
              className="btn btn-ghost dark:text-red-500  text-red-700"
            >
              Cancelar
            </label>
            <button
              type="submit"
              className="btn bg-customBlue text-white hover:bg-blue-800"
            >
              Buscar
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ModalContent;
