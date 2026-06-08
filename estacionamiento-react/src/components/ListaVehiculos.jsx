import CardVehiculo from './CardVehiculo'

function ListaVehiculos({ vehiculos, eliminarVehiculo }) {
  return (
    <div className="lista">
      {vehiculos.length === 0 && <p>No hay vehículos registrados.</p>}

      {vehiculos.map((vehiculo) => (
        <CardVehiculo
          key={vehiculo.patente}
          vehiculo={vehiculo}
          eliminarVehiculo={eliminarVehiculo}
        />
      ))}
    </div>
  )
}

export default ListaVehiculos