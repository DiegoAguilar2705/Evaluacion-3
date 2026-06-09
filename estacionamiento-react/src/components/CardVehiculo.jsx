function CardVehiculo({ vehiculo, eliminarVehiculo }) {
  return (
    <article className={vehiculo.permanente ? 'card permanente' : 'card temporal'}>
      <h3>{vehiculo.patente}</h3>

      <p>
        <strong>Conductor:</strong> {vehiculo.conductor}
      </p>

      <p>
        <strong>Tipo:</strong> {vehiculo.tipo}
      </p>

      <p>
        <strong>Ingreso:</strong> {vehiculo.fechaIngreso}
      </p>

      <p>
        <strong>Estado:</strong>{' '}
        {vehiculo.permanente ? 'Permanente' : 'Temporal'}
      </p>

      <button className="btn-eliminar" onClick={() => eliminarVehiculo(vehiculo.patente)}>
        Retirar
      </button>
    </article>
  )
}

export default CardVehiculo