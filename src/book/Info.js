import React from 'react'
import { Fetch } from 'croods'

export default props => {
  const { id } = props
  return (
    <Fetch
      id={id}
      name="books"
      render={info => (
        <div>
          <h1>Titulo: {info.title}</h1>
          <p>Autor: {info.author}</p>
          <p>Description: {info.description}</p>
          <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
            <img src={info.cover} style={{ width: 400, height: 400 }} />
            <a href={info.file}>Baixar</a>
            <button style={{ width: 300, height: 50 }}>Doar</button>
          </div>
        </div>
      )}
    />
  )
}
