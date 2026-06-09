import { useEffect, useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Formulario from './components/Formulario'
import ListaVehiculos from './components/ListaVehiculos'
import './App.css'

function App() {
  const TOTAL_CUPOS = 10

  const [vehiculos, setVehiculos] = useState(() => {
    const datos = localStorage.getItem('vehiculos')
    return datos ? JSON.parse(datos) : []
  })

  useEffect(() => {
    localStorage.setItem('vehiculos', JSON.stringify(vehiculos))
  }, [vehiculos])

  const agregarVehiculo = (vehiculoNuevo) => {
    if (vehiculos.length >= TOTAL_CUPOS) {
      alert('No hay cupos disponibles')
      return
    }

    const patenteExiste = vehiculos.some(
      (vehiculo) => vehiculo.patente === vehiculoNuevo.patente
    )

    if (patenteExiste) {
      alert('Esta patente ya fue registrada')
      return
    }

    setVehiculos([...vehiculos, vehiculoNuevo])
  }

  const eliminarVehiculo = (patente) => {
    const nuevaLista = vehiculos.filter(
      (vehiculo) => vehiculo.patente !== patente
    )

    setVehiculos(nuevaLista)
  }

  const limpiarTodo = () => {
    const confirmar = confirm('¿Deseas eliminar todos los registros?')

    if (confirmar) {
      setVehiculos([])
    }
  }

  const cuposDisponibles = TOTAL_CUPOS - vehiculos.length

  return (
    <div className="app">
      <Header />

      <main className="contenido">
        <section className="seccion">
          <h2>Registro de vehículos</h2>

          <div className="info-cupos">
            <p>Total de cupos: {TOTAL_CUPOS}</p>
            <p>Vehículos registrados: {vehiculos.length}</p>
            <p className={cuposDisponibles === 0 ? 'rojo' : 'verde'}>
              Cupos disponibles: {cuposDisponibles}
            </p>
          </div>

          {cuposDisponibles > 0 ? (
            <Formulario agregarVehiculo={agregarVehiculo} />
          ) : (
            <p className="mensaje-error">
              Estacionamiento completo. Debe retirar un vehículo.
            </p>
          )}
        </section>

        <section className="seccion">
          <div className="titulo-lista">
            <h2>Vehículos estacionados</h2>

            {vehiculos.length > 0 && (
              <button className="btn-gris" onClick={limpiarTodo}>
                Limpiar
              </button>
            )}
          </div>

          <ListaVehiculos
            vehiculos={vehiculos}
            eliminarVehiculo={eliminarVehiculo}
          />
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default App