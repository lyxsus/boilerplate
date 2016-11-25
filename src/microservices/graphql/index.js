import {graphql, GraphQLSchema, GraphQLObjectType, GraphQLString} from 'graphql';

const schema = new GraphQLSchema ({
	query: new GraphQLObjectType ({
		name: 'Root',
		description: 'Root of the Schema',
		fields: {
			test: {
				name: 'Test',
				type: GraphQLString,
				resolve: () => 'bazinga'
			}
		}
	})
});

export default (event, context, callback) => {
	const query = event.body.query;

	return graphql (schema, query)
		.then ((response) =>
			callback (null, response)
		)
		.catch ((error) =>
			callback (error)
		);
}
