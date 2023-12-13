#!/usr/local/bin/node

console.log(require('./package.json').name)
const path = require('path')
const fs = require('fs')

const [, app_path = 'app'] = process.argv
fs.mkdirSync(path.resolve(__dirname, app_path))

const project_path = path.resolve('.', 'project')
fs.readdirSync()
  .map((name) => {
    const project_file = path.resolve(project_path, name)
    const app_file = path.resolve(app_path, name)

    const project_stream = fs.createReadStream(project_file) 
    const app_stream = fs.createWriteStream(app_file) 
    project_stream.pipe(app_stream)
  })
