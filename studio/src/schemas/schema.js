import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";

// Object types
import postBody from "./objects/postBody";

// Document types
import config from "./config";
import post from "./post";

export default createSchema({
  name: "mariuslundgard",
  types: schemaTypes.concat([config, post, postBody])
});
