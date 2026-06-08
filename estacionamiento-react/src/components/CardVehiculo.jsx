function CardVehiculo({ vehiculo, eliminarVehiculo }) {
  return (
    <article className={vehiculo.permanente ? 'card permanente' : 'card'}>
      <h3>{vehiculo.patente}</h3>

      <p>Conductor: {vehiculo.conductor}</p>
      <p>Tipo: {vehiculo.tipo}</p>

      {vehiculo.permanente && <p>Cliente permanente</p>}

      <button onClick={() => eliminarVehiculo(vehiculo.patente)}>
        Eliminar
      </button>
    </article>
  )
}

export default CardVehiculo