const express = require('express')
const app = express()
const PORT = 8000
const {graphqlHTTP} = require('express-graphql')
const schema = require('./Schemas/index')
const cors=require("cors");

app.use(cors())
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}))

app.listen(PORT, () => console.log('server on'))