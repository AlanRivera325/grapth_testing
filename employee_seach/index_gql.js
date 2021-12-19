//index.js
const { graphql } = require('graphql');
const express = require('express') // importar express

const { readFileSync } = require('fs')
const { join } = require('path')
const { makeExecutableSchema } = require('graphql-tools')

const { graphqlHTTP }  = require('express-graphql') // importar middleware express

const cors = require('cors')
const app = express() // crear API express
const PORT = 4000 // puesto para trabajar


const resolvers = require('./bd/resolvers');

// Definiendo schema
const typeDefs = readFileSync(
	join(__dirname, 'bd', 'schema.graphql'),
	'utf-8'
);
const schema = makeExecutableSchema ({typeDefs,resolvers});

app.use(cors())
app.use('/graphql', graphqlHTTP({
	schema: schema,
	rootValue: resolvers,
	graphiql: true
}));

app.listen(PORT, () => {
	console.log(`Server listen on port http://localhost:${PORT}/graphql`)
});

