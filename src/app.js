import './config.js'
import Express from 'express'
import Cors from 'cors'
import Central from './utils/central.js'
import BodyParser from 'body-parser'
import { exec } from 'child_process'

const App = Express();

App.use(BodyParser.urlencoded({ extended: false }))
App.use(BodyParser.json())
App.use(Cors());
App.use(Express.static(Config.pth('frontend/')))
App.use(Express.static(Config.pth('public/')))
App.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', '*')
  res.setHeader('Access-Control-Allow-Headers', '*')
  next()
});
Central(App)

App.listen(Config.PORT, () => { exec(`npx tailwindcss -i ./public/main.css -o ./frontend/output.css --watch`); log.info(`Server telah ready on port ${Config.PORT}`); });