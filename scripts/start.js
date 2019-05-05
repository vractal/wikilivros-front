const readline = require('readline-promise').default
const replace = require('replace-in-file')
const fs = require('fs')
const path = require('path')

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

const defaultName = 'Seasoned Project'
const defaultAPI = 'https://brazil-lab-staging.herokuapp.com/'
const defaultProj = path.dirname(__dirname, '..').split(path.sep).pop()

const start = async () => {
  const project = (await rl.questionAsync(`What is app name in kebab case (${defaultProj})? `)) || defaultProj
  const name = (await rl.questionAsync(`What is your website title (${defaultName})? `)) || defaultName
  const api = await rl.questionAsync(`What is your API URL (${defaultAPI})? `) || defaultAPI
  await replaceInFile({
    files: './package.json',
    from: /\"name\": \"new-react-app\"/g,
    to: `"name": "${project}"`,
  })
  await replaceInFile({
    files: './README.md',
    from: /new-react-app/g,
    to: project,
  })
  await replaceInFile({
    files: './README.md',
    from: /New_React_App/g,
    to: name,
  })
  await replaceInFile({
    files: './README.md',
    from: /(?<=\-\-)((.|\n)*)(?=\-\-\-)/gim,
    to: '',
  })
  await replaceInFile({
    files: './README.md',
    from: /\W(\$){2}((.|\n)*)(\$){2}/g,
    to: '',
  })
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
Don't forget to CHANGE YOUR FAVICON and do the tasks on the README checklist!

All good! Happy dev 🤓
  `)
  rl.close()
}

start()
