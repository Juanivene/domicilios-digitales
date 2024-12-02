const ModalContent = () => {
  return (
    <div className="modal-box">
      <h3 className="text-lg font-bold">Filtrar resultados</h3>
      <p className="py-4">
        Aquí puede filtrar según uno o varios de los siguientes campos:
      </p>

      <form className="space-y-4">
        <div>
          <label htmlFor="apellido" className="block text-sm font-medium">
            Apellido
          </label>
          <input
            id="apellido"
            type="text"
            className="input input-bordered w-full"
          />
        </div>

        <div>
          <label htmlFor="nombre" className="block text-sm font-medium">
            Nombre
          </label>
          <input
            id="nombre"
            type="text"
            className="input input-bordered w-full"
          />
        </div>

        <div>
          <label htmlFor="perfil" className="block text-sm font-medium">
            Perfil
          </label>
          <select id="perfil" className="select select-bordered w-full">
            <option value="">Seleccionar perfil</option>
            <option value="Admin">Admin</option>
            <option value="Usuario">Usuario</option>
            <option value="Visitante">Visitante</option>
          </select>
        </div>

        <div className="flex justify-between items-center mt-4">
          <button type="button" className="btn btn-ghost">
            Limpiar
          </button>
          <div className="flex space-x-2">
            <label htmlFor="my_modal_6" className="btn btn-ghost  text-red-700">
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
