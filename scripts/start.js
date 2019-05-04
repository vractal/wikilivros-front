const readline = require('readline-promise').default
const replace = require('replace-in-file')
const fs = require('fs')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

const replaceInFile = async options => {
  try {
    const results = await replace(options)
    return console.log('Replacement results:', results)
  } catch (error) {
    return console.error('Error occurred:', error)
  }
}

const start = async () => {
  const name = await rl.questionAsync('What is your website title? ')
  const api = await rl.questionAsync('What is your API URL? ')
  await replaceInFile({
    files: './public/index.html',
    from: /__SITE__TITLE__/g,
    to: name,
  })
  fs.copyFileSync('.env.sample', '.env.local')
  fs.copyFileSync('.env.sample', '.env')
  await replaceInFile({
    files: '.env.local',
    from: /__API_URL__/g,
    to: api,
  })
  await replaceInFile({
    files: '.env',
    from: /__API_URL__/g,
    to: api,
  })
  console.log(`
Don't forget to do the following:
- [ ] Open .env.local and change the REACT_APP_API_URL variable to your real API url.
- [ ] Change the image on ./public/favicon.png.
- [ ] Start editing the content on the pages under ./src/pages/, and creating new ones by adding new routes on ./src/App.js
- [ ] Edit ./src/core/AuthRoute.js if you want to change the way you handle protected routes.
- [ ] Add your global styles to ./src/index.css. For styling your pages and components, use either "withStyles" from MaterialUI or "emotion-css".


All good! Happy dev 🤓
  `)
  rl.close()
}

start()
