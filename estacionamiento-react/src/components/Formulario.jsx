import { useState } from 'react'

function Formulario({ agregarVehiculo }) {
  const [patente, setPatente] = useState('')
  const [conductor, setConductor] = useState('')
  const [tipo, setTipo] = useState('Auto')
  const [permanente, setPermanente] = useState(false)
  const [error, setError] = useState('')

  const validarPatente = (patenteIngresada) => {
    const formato = /^[A-Z]{4}[0-9]{2}$/
    return formato.test(patenteIngresada)
  }

  const guardarVehiculo = (e) => {
    e.preventDefault()

    const patenteFinal = patente.trim().toUpperCase()
    const conductorFinal = conductor.trim()

    if (patenteFinal === '' || conductorFinal === '') {
      setError('Debe completar todos los campos')
      return
    }

    if (!validarPatente(patenteFinal)) {
      setError('La patente debe tener formato ABCD12')
      return
    }

    const nuevoVehiculo = {
      patente: patenteFinal,
      conductor: conductorFinal,
      tipo: tipo,
      permanente: permanente,
      fechaIngreso: new Date().toLocaleString()
    }

    agregarVehiculo(nuevoVehiculo)

    setPatente('')
    setConductor('')
    setTipo('Auto')
    setPermanente(false)
    setError('')
  }

  return (
    <form className="formulario" onSubmit={guardarVehiculo}>
      <label htmlFor="patente">Patente</label>
      <input
        id="patente"
        type="text"
        value={patente}
        onChange={(e) => setPatente(e.target.value)}
        placeholder="Ej: ABCD12"
        maxLength="6"
      />

      <label htmlFor="conductor">Conductor</label>
      <input
        id="conductor"
        type="text"
        value={conductor}
        onChange={(e) => setConductor(e.target.value)}
        placeholder="Nombre del conductor"
      />

      <label htmlFor="tipo">Tipo de vehículo</label>
      <select
        id="tipo"
        value={tipo}
        onChange={(e) => setTipo(e.target.value)}
      >
        <option value="Auto">Auto</option>
        <option value="Moto">Moto</option>
        <option value="Camioneta">Camioneta</option>
        <option value="Furgón">Furgón</option>
      </select>

      <label className="check">
        <input
          type="checkbox"
          checked={permanente}
          onChange={(e) => setPermanente(e.target.checked)}
        />
        Cliente permanente
      </label>

      {error && <p className="mensaje-error">{error}</p>}

      <button type="submit">Registrar vehículo</button>
    </form>
  )
}

export default Formulario