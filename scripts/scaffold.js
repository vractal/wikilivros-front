const readline = require('readline-promise').default
const replace = require('replace-in-file')
const fs = require('fs')
const path = require('path')
const startCase = require('lodash/startCase')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

const replaceInFile = async options => {
  try {
    const results = await replace(options)
    // return console.log('Replacement results:', results)
  } catch (error) {
    return console.error('Error occurred:', error)
  }
}

const defaultAPI = 'https://upme-staging.herokuapp.com/'
const defaultProj = path.dirname(__dirname, '..').split(path.sep).pop()

const start = async () => {
  const project = (await rl.questionAsync(`What is your app name in kebab case (${defaultProj})? `)) || defaultProj
  const defaultName = startCase(project)
  const name = (await rl.questionAsync(`What is your website title (${defaultName})? `)) || defaultName
  const api = await rl.questionAsync(`What is your API URL (${defaultAPI})? `) || defaultAPI
  await replaceInFile({
    files: ['./package.json', './README.md'],
    from: /new-react-app/g,
    to: project,
  })
  await replaceInFile({
    files: ['./README.md', './src/home/index.js', './public/index.html'],
    from: /New_React_App/g,
    to: name,
  })
  await replaceInFile({
    files: './README.md',
    from: /(?<=\-\-)((.|\n)*)(?=\-\-\-)/gim,
    to: checklist,
  })
  await replaceInFile({
    files: './README.md',
    from: /(\[\!)((.|\n)*)(?=\#\# Setup)/gim,
    to: `
<Add Netlify and other badges here>
`,
  })
  await replaceInFile({
    files: './README.md',
    from: /\W(\$){2}((.|\n)*)(\$){2}/g,
    to: '',
  })
  fs.copyFileSync('.env.sample', '.env.local')
  fs.copyFileSync('.env.sample', '.env')
  await replaceInFile({
    files: ['.env.local', '.env'],
    from: /__API_URL__/g,
    to: api,
  })
  console.log(`
Don't forget to CHANGE YOUR FAVICON and do the tasks on the README checklist!

All good! Happy dev 🤓
  `)
  rl.close()
}

const checklist = `--
### Checklist

- [ ] Change the image on \`./public/favicon.png\`.
- [ ] Start editing the content on the folders under \`./src/\`, and creating new ones by adding new routes on \`./src/App.js\`
- [ ] Edit \`./src/core/Routes.js\` if you want to change the way you handle protected routes.
- [ ] Add your global styles to \`./src/index.css\`. For styling your pages and components, use either \`withStyles\` from MaterialUI or emotion-css.
- [ ] Erase this checklist on README and update the Badges.


`

start()
