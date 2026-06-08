import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Formulario from './components/Formulario'
import ListaVehiculos from './components/ListaVehiculos'
import './App.css'

function App() {
  const [vehiculos, setVehiculos] = useState([])

  const agregarVehiculo = (vehiculo) => {
    setVehiculos([...vehiculos, vehiculo])
  }

  const eliminarVehiculo = (patente) => {
    const nuevaLista = vehiculos.filter((vehiculo) => vehiculo.patente !== patente)
    setVehiculos(nuevaLista)
  }

  const cuposDisponibles = 10 - vehiculos.length

  return (
    <div className="app">
      <Header />

      <main>
        <section className="caja">
          <h2>Registrar vehículo</h2>
          <p>Cupos disponibles: {cuposDisponibles}</p>

          <Formulario agregarVehiculo={agregarVehiculo} />
        </section>

        <section className="caja">
          <h2>Vehículos registrados</h2>

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