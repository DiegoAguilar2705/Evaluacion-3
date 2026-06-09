import { useState } from 'react'
import CardVehiculo from './CardVehiculo'

function ListaVehiculos({ vehiculos, eliminarVehiculo }) {
  const [filtro, setFiltro] = useState('Todos')

  const filtrarVehiculos = () => {
    if (filtro === 'Todos') {
      return vehiculos
    }

    if (filtro === 'Permanentes') {
      return vehiculos.filter((vehiculo) => vehiculo.permanente)
    }

    if (filtro === 'Temporales') {
      return vehiculos.filter((vehiculo) => !vehiculo.permanente)
    }

    return vehiculos.filter((vehiculo) => vehiculo.tipo === filtro)
  }

  const vehiculosFiltrados = filtrarVehiculos()

  return (
    <div>
      {vehiculos.length > 0 && (
        <div className="filtro">
          <label htmlFor="filtro">Filtrar:</label>

          <select
            id="filtro"
            value={filtro}
            onChange={(e) => setFiltro(e.target.value)}
          >
            <option value="Todos">Todos</option>
            <option value="Auto">Auto</option>
            <option value="Moto">Moto</option>
            <option value="Camioneta">Camioneta</option>
            <option value="Furgón">Furgón</option>
            <option value="Permanentes">Permanentes</option>
            <option value="Temporales">Temporales</option>
          </select>
        </div>
      )}

      {vehiculos.length === 0 && (
        <p className="mensaje-vacio">No hay vehículos registrados.</p>
      )}

      {vehiculos.length > 0 && vehiculosFiltrados.length === 0 && (
        <p className="mensaje-vacio">No hay vehículos con ese filtro.</p>
      )}

      <div className="lista">
        {vehiculosFiltrados.map((vehiculo) => (
          <CardVehiculo
            key={vehiculo.patente}
            vehiculo={vehiculo}
            eliminarVehiculo={eliminarVehiculo}
          />
        ))}
      </div>
    </div>
  )
}

export default ListaVehiculos