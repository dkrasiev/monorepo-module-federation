const concurrently = require('concurrently')
const fs = require('fs')
const path = require('path')

const SERVICES_FOLDER = 'services'
const START_COMMMAND = 'npm start'

const services = fs
  .readdirSync(SERVICES_FOLDER, { withFileTypes: true })
  .filter(
    (dirent) =>
      dirent.isDirectory &&
      fs.existsSync(path.resolve(SERVICES_FOLDER, dirent.name, 'package.json')),
  )
  .map((dirent) => dirent.name)

const commands = services.map((service) => ({
  name: service,
  command: START_COMMMAND,
  cwd: path.resolve(SERVICES_FOLDER, service),
}))

concurrently(commands)
