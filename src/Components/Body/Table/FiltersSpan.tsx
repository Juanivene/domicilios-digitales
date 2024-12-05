import { Filters } from "../../../api/addresses";

type Prop = {
  filters: Filters;
  setFilters: React.Dispatch<React.SetStateAction<Filters>>;
};
const FiltersSpan = (props: Prop) => {
  const { filters, setFilters } = props;
  const handleDeleteFilter = (filter: string) => {
    switch (filter) {
      case "lastName":
        setFilters({
          name: filters.name,
          lastName: "",
          profile: filters.profile,
        });
        break;
      case "name":
        setFilters({
          name: "",
          lastName: filters.lastName,
          profile: filters.profile,
        });
        break;
      case "profile":
        setFilters({
          name: filters.name,
          lastName: filters.lastName,
          profile: "",
        });
        break;
    }
  };

  return (
    <div className="text-center xxl:text-start mb-2 space-x-1 space-y-1">
      {filters.lastName && (
        <span className="inline-block px-3 py-1 bg-gray-200 text-gray-700 rounded-lg shadow-sm">
          <strong>Apellido:</strong> {filters.lastName}
          <button
            onClick={() => handleDeleteFilter("lastName")}
            className="text-gray-500 hover:text-customBlue focus:outline-none"
            aria-label="Eliminar Apellido"
          >
            ✖
          </button>
        </span>
      )}
      {filters.name && (
        <span className="inline-block px-3 py-1 bg-gray-200 text-gray-700 rounded-lg shadow-sm">
          <strong>Nombre:</strong> {filters.name}
          <button
            onClick={() => handleDeleteFilter("name")}
            className="text-gray-500 hover:text-customBlue focus:outline-none"
            aria-label="Eliminar Apellido"
          >
            ✖
          </button>
        </span>
      )}
      {filters.profile && (
        <span className="inline-block px-3 py-1 bg-gray-200 text-gray-700 rounded-lg shadow-sm">
          <strong>Perfil:</strong> {filters.profile}
          <button
            onClick={() => handleDeleteFilter("profile")}
            className="text-gray-500 hover:text-customBlue focus:outline-none"
            aria-label="Eliminar Apellido"
          >
            ✖
          </button>
        </span>
      )}
    </div>
  );
};

export default FiltersSpan;
