const { gql } = require('apollo-server-express');
const typeDefs = gql`
    type Movie {
        _id: ID!
        title: String!
        desc: String!
        img: String!
        imgTitle: String!
        imgSm: String!
        trailer: String!
        video: String!
        year: String!
        limit: Int!
        genre: String!
        isSeries: Boolean!
    }

    type Query {
        getMovies: [Movie]
        getMovie(id: ID!): Movie
    }
`;

module.exports = typeDefs;
