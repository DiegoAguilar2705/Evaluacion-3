import { useState } from 'react'

function Formulario({ agregarVehiculo }) {
  const [patente, setPatente] = useState('')
  const [conductor, setConductor] = useState('')
  const [tipo, setTipo] = useState('Auto')
  const [permanente, setPermanente] = useState(false)

  const guardarVehiculo = (e) => {
    e.preventDefault()

    if (patente === '' || conductor === '') {
      alert('Debe completar todos los campos')
      return
    }

    const nuevoVehiculo = {
      patente: patente.toUpperCase(),
      conductor: conductor,
      tipo: tipo,
      permanente: permanente
    }

    agregarVehiculo(nuevoVehiculo)

    setPatente('')
    setConductor('')
    setTipo('Auto')
    setPermanente(false)
  }

  return (
    <form className="formulario" onSubmit={guardarVehiculo}>
      <label>Patente</label>
      <input
        type="text"
        value={patente}
        onChange={(e) => setPatente(e.target.value)}
        placeholder="Ej: ABCD12"
      />

      <label>Conductor</label>
      <input
        type="text"
        value={conductor}
        onChange={(e) => setConductor(e.target.value)}
        placeholder="Nombre del conductor"
      />

      <label>Tipo de vehículo</label>
      <select value={tipo} onChange={(e) => setTipo(e.target.value)}>
        <option value="Auto">Auto</option>
        <option value="Moto">Moto</option>
        <option value="Camioneta">Camioneta</option>
      </select>

      <label className="check">
        <input
          type="checkbox"
          checked={permanente}
          onChange={(e) => setPermanente(e.target.checked)}
        />
        Cliente permanente
      </label>

      <button type="submit">Agregar</button>
    </form>
  )
}

export default Formulario