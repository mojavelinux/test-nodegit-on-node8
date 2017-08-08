'use strict'

const git = require('nodegit')

!async function () {
  const repo = await git.Repository.open('.')
  console.log(repo.path())
}()
