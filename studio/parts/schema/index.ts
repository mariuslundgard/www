import schemaTypes from 'all:part:@sanity/base/schema-type'
import createSchema from 'part:@sanity/base/schema-creator'
import {configType} from './config'
import {figureType} from './objects/figure'
import {postBodyType} from './objects/postBody'
import {postType} from './post'

export default createSchema({
  name: 'mariuslundgard',
  types: schemaTypes.concat([configType, figureType, postBodyType, postType]),
})
