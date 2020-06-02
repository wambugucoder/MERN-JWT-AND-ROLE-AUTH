/* eslint-disable no-unused-vars */
const chai = (global.chai = require('chai'))
const sinon = (global.sinon = require('sinon'))
const expect = (global.expect = chai.expect)
const should = (global.should = chai.should())
const enzyme = require('enzyme')
const chaiEnzyme = require('chai-enzyme')
const Adapter = require('enzyme-adapter-react-16')
const sinonChai = require('sinon-chai')

enzyme.configure({ adapter: new Adapter() })

chai.use(chaiEnzyme())
chai.use(sinonChai)
