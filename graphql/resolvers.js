import DynamoDB from 'aws-sdk/clients/dynamodb'

const docClient = new DynamoDB.DocumentClient({
  region: 'ap-southeast-2',
})
const POSTS_TABLE = 'Posts'

export default {
  Query: {
    posts(root, args, ctx) {
      return new Promise((resolve, reject) => {
        const { id } = args
        const params = {
          TableName: POSTS_TABLE,
        }
        if (typeof id !== 'undefined') {
          //to let id=0 through
          params.KeyConditionExpression = '#id = :id'
          params.ExpressionAttributeNames = { '#id': 'id' }
          params.ExpressionAttributeValues = { ':id': id }
          docClient.query(params, function(err, data) {
            if (err) {
              return reject(err)
            }

            if (data.Items.length === 0) {
              return reject('No item found')
            }

            return resolve(data.Items)
          })
        } else {
          docClient.scan(params, function(err, data) {
            if (err) {
              return reject(err)
            }

            if (data.Items.length === 0) {
              return reject('No items found')
            }

            return resolve(data.Items)
          })
        }
      })
    },
  },

  JSON: {
    parse: str => JSON.parse(str),
  },
}
