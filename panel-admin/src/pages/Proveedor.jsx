import React from 'react'

const Proveedor = () => {
  const proveedores = [
    { id: 1, nombre: 'Distribuidora López', contacto: 'Carlos López', telefono: '3214567890', ciudad: 'Bogotá' },
    { id: 2, nombre: 'Tech Supplies S.A.S.', contacto: 'Laura Méndez', telefono: '3107894561', ciudad: 'Medellín' },
    { id: 3, nombre: 'ElectroCom Ltda.', contacto: 'Andrés Torres', telefono: '3001234567', ciudad: 'Cali' },
  ]

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Lista de Proveedores</h1>
      <table className="table table-striped table-bordered">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Contacto</th>
            <th>Teléfono</th>
            <th>Ciudad</th>
          </tr>
        </thead>
        <tbody>
          {proveedores.map((prov) => (
            <tr key={prov.id}>
              <td>{prov.id}</td>
              <td>{prov.nombre}</td>
              <td>{prov.contacto}</td>
              <td>{prov.telefono}</td>
              <td>{prov.ciudad}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Proveedor
