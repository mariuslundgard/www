import schemaTypes from 'all:part:@sanity/base/schema-type'
import createSchema from 'part:@sanity/base/schema-creator'
import config from './config'
import postBody from './objects/postBody'
import post from './post'

export default createSchema({
  name: 'mariuslundgard',
  types: schemaTypes.concat([config, post, postBody]),
})
