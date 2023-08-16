import React from 'react'
import styled from 'styled-components'
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';

const Header = styled(Typography)`
  padding-top: 1.5em;
  padding-bottom: 1.5em;
  text-align: center;
`

const Flexbox = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`

const AppCard = styled(Card)`
  width: 30em;
  margin-top: 0.5em;
  margin-bottom: 0.5em;
  padding-top: 0.5em;
  padding-bottom: 0.5em;
`

const sites = [
  {
    title: 'coordinates api',
    description: 'generate random coordinates inside a given country',
    url: 'https://coordinates.usingthe.computer',
    github: 'https://github.com/jonh-a/coordinates-api'
  },
  {
    title: 'chords',
    description: 'chord voicing visualizer + synthesizer',
    url: 'https://chords.usingthe.computer',
    github: 'https://github.com/jonh-a/chords'
  },
  {
    title: 'age-gender-nationality-ify',
    description: 'get demographic stats for any first name',
    url: 'https://agn.usingthe.computer',
    github: 'https://github.com/jonh-a/age-gender-nationality-ify'
  },
  {
    title: 'color guesser',
    description: 'a little color matching game',
    url: 'https://color-guesser.usingthe.computer',
    github: 'https://github.com/jonh-a/color-guesser'
  },
  {
    title: 'speedreader',
    description: 'cli speedreading tool written in go',
    github: 'https://github.com/jonh-a/speedreader'
  },
  {
    title: 'infra',
    description: 'tools for bootstrapping and maintaining this website',
    github: 'https://github.com/jonh-a/infra'
  }
]

const AppItem = ({ app }) => (
  <Flexbox sx={{ width: '100%' }}>
    <AppCard>
      <CardContent>
        <Typography variant='h5' component='div'>
          {app.title}
        </Typography>

        <Typography varaint='body2'>
          {app.description}
        </Typography>
      </CardContent>

      <CardActions>
        {app?.url && (
          <Link
            href={app?.url}
            underline='none'
            rel="noopener"
            target="_blank"
          >
            <Button size="small">
              View Site
            </Button>
          </Link>
        )}

        {app?.github && (
          <Link
            href={app?.github}
            underline='none'
            rel="noopener"
            target="_blank"
          >
            <Button size="small">View Github</Button>
          </Link>
        )}
      </CardActions>
    </AppCard>
  </Flexbox>
)

const App = () => (
  <Box>
    <Header variant='h4'>There isn't much here.</Header>

    <Divider />

    <Flexbox>
      <Flexbox sx={{ width: '100%', padding: '1em' }}>
        <Typography variant='h6'>
          Try one of these instead:
        </Typography>
      </Flexbox>

      <Flexbox sx={{ width: '100%' }}>
        {sites.map(i => (
          <AppItem app={i} />
        ))}
      </Flexbox>
    </Flexbox>
  </Box>
)

export default App