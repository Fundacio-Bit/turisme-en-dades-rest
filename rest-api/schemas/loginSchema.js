module.exports = {
  $schema: 'http://json-schema.org/draft-07/schema#',
  type: 'object',
  required: ['username', 'password'],
  properties: {
    username: { type: 'string' },
    password: { type: 'string', minLength: 6, maxLength: 20 }
  },
  additionalProperties: false
}
