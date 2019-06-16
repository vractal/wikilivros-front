import React from 'react'
import { useFormState } from 'react-use-form-state'
import { useCroods } from 'croods'
import Uploods from 'react-uploods'

import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'
import Header from 'core/Header'

export default () => {
  const [, { save }] = useCroods({ name: 'books' })
  const [formState, { text }] = useFormState()
  return (
    <>
      <Header />
      <Paper
        elevation={1}
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          maxWidth: '400px',
          margin: '0 auto',
          padding: '50px',
        }}
      >
        <Typography
          variant="h4"
          color="primary"
          align="center"
          style={{ marginBottom: '20px' }}
        >
          Compartilhar Um Livro
        </Typography>
        <TextField
          style={{ marginBottom: '20px' }}
          label="Titulo"
          {...text('title')}
        />
        <TextField
          style={{ marginBottom: '20px' }}
          label="Autor"
          {...text('author')}
        />
        <TextField
          style={{ marginBottom: '20px' }}
          label="Descrição"
          variant="outlined"
          {...text('description')}
        />

        <Uploods
          containerStyle={{ padding: '16px' }}
          text="Arraste aqui uma imagem de capa"
          onChange={values => formState.setField('cover', values[0])}
        />

        <Uploods
          containerStyle={{ padding: '16px' }}
          text="Arraste aqui o arquivo de seu livro"
          onChange={values => formState.setField('file', values[0])}
        />
        <Button
          style={{ padding: '25px', fontSize: '20px' }}
          color="primary"
          onClick={() => save()(formState.values)}
        >
          Enviar livro
        </Button>
      </Paper>
    </>
  )
}
