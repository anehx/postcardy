import Ember from 'ember'
import { describe, it, beforeEach, afterEach } from 'mocha'
import { expect } from 'chai'
import startApp from '../helpers/start-app'
import destroyApp from '../helpers/destroy-app'

const { $ } = Ember


describe('Acceptance | index | default address', function() {
  let application

  beforeEach(function() {
    application = startApp()
  })

  afterEach(function() {
    destroyApp(application)
  })

  it('renders  correctly', async function() {
    let address = await server.create('address')

    await visit('/')

    expect($('.recipient_company').val()).to.equal(address.company)
    expect($('.recipient_firstName').val()).to.equal(address.firstName)
    expect($('.recipient_lastName').val()).to.equal(address.lastName)
    expect($('.recipient_saluation').val()).to.equal(address.saluation)
    expect($('.recipient_street').val()).to.equal(address.street)
    expect($('.recipient_postCode').val()).to.equal(address.postCode)
    expect($('.recipient_place').val()).to.equal(address.place)
  })
})

describe('Acceptance | index | chose image', function() {
  let application

  beforeEach(function() {
    application = startApp()
  })

  afterEach(function() {
    destroyApp(application)
  })

  it('sets a chosen image correctly', async function() {
    let address = await server.create('address')
    let images = await server.createList('image', 3)

    await visit('/')

    $('.buttonbar:first a:first').click()
    expect($('#chosenImage').attr('src')).to.equal(images[0].url)
  })
})

describe('Acceptance | index | delete image', function() {
  let application

  beforeEach(function() {
    application = startApp()
  })

  afterEach(function() {
    destroyApp(application)
  })

  it.skip('removes it from the chosenImage', async function() {
    let address = await server.create('address')
    let images = await server.createList('image', 3)

    await visit('/')

    // let's use one first
    $('.buttonbar:first a:first').click()
    expect($('#chosenImage').attr('src')).to.equal(images[0].url)

    // now delete it
    $('.buttonbar:first a:last').click()
    expect($('#chosenImage').attr('src')).to.equal('')

    expect($('.img-lister img').attr('src')).to.not.equal(images[0].url)
  })

  it('correctly sends the request', async function() {
    let address = await server.create('address')
    let images  = await server.createList('image', 3)

    server.del('/images/:id', (schema, request) => {
      let id = request.params.id

      // TODO: there should be a way to assert
      // that this is happening
      expect(id).to.equal(images[0].id)
    })

    await visit('/')

    $('.buttonbar:first a:last').click()
  })
})
