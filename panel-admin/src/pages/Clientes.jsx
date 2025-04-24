import React from 'react'

const Clientes = () => {
  const clientes = [
    { id: 1, nombre: 'Ana Gómez', correo: 'ana@gmail.com', telefono: '3101234567', ciudad: 'Bogotá' },
    { id: 2, nombre: 'Luis Herrera', correo: 'luis@gmail.com', telefono: '3112345678', ciudad: 'Medellín' },
    { id: 3, nombre: 'María Torres', correo: 'maria@gmail.com', telefono: '3009876543', ciudad: 'Cali' },
  ]

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Lista de Clientes</h1>
      <table className="table table-striped table-bordered">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Teléfono</th>
            <th>Ciudad</th>
          </tr>
        </thead>
        <tbody>
          {clientes.map((cliente) => (
            <tr key={cliente.id}>
              <td>{cliente.id}</td>
              <td>{cliente.nombre}</td>
              <td>{cliente.correo}</td>
              <td>{cliente.telefono}</td>
              <td>{cliente.ciudad}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Clientes
