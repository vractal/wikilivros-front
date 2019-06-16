import React from 'react'
import { Fetch } from 'croods'
import Header from 'core/Header'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'

export default props => {
  const { id } = props
  return (
    <Fetch
      id={id}
      name="books"
      render={info => (
        <>
          <Header />
          <Paper elevation={0}>
            <Grid
              container
              style={{
                display: 'flex',
                justifyContent: 'flex-start',
              }}
            >
              <Grid item xs={5}>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: ' center',
                    alignItems: 'center',
                    padding: '24px',
                  }}
                >
                  <img src={info.cover} />
                </div>
              </Grid>
              <Grid
                item
                container
                justify="flex-end"
                direction="column"
                xs={7}
                style={{
                  display: 'flex',
                  direction: 'column',
                  justifyContent: 'space-between',
                  padding: '26px',
                }}
              >
                <div>
                  <Typography color="primary" variant="h3">
                    {info.title}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    gutterBottom
                    style={{ fontSize: 20 }}
                  >
                    de {info.author}
                  </Typography>
                  <Typography variant="body1">{info.description}</Typography>
                </div>
                <div style={{ marginTop: '30px' }}>
                  <Button href={info.file} variant="contained" color="primary">
                    Baixar
                  </Button>
                  <Button>
                    <a
                      href={info.file}
                      style={{
                        textDecoration: '1none',
                      }}
                    >
                      Doar
                    </a>{' '}
                  </Button>
                </div>
              </Grid>
            </Grid>
          </Paper>
          ={' '}
        </>
      )}
    />
  )
}
