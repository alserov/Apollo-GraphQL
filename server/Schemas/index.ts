import {GraphQLInt, GraphQLList, GraphQLObjectType, GraphQLSchema, GraphQLString} from "graphql/type";
const UserType = require('./TypeDefs/UserType')
let usersData : User[] = require('../MOCK_DATA.json')

interface User {
    id: number,
    firstName: string,
    lastName: string,
    email: string,
    password: string
}

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        getAllUsers: {
            type: new GraphQLList(UserType),
            args: {id: {type: GraphQLInt}},
            resolve(parent, args) {
                return usersData /*Запрос в бд*/
            }
        },
        getHundredUsers: {
            type: new GraphQLList(UserType),
            resolve(parent,args) {
                return usersData.filter((user,index) => index < 100)
            }
        }
    }
})
const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        createUser: {
            type: UserType,
            args: {
                firstName: {type: GraphQLString},
                lastName: {type: GraphQLString},
                email: {type: GraphQLString},
                password: {type: GraphQLString},
            },
            resolve(parent, args) {
                usersData.push({
                    id: usersData.length + 1,
                    firstName: args.firstName,
                    lastName: args.lastName,
                    email: args.email,
                    password: args.password
                }) /*Добавить данные в БД*/
                return args
            }
        },
        deleteUser: {
            type: UserType,
            args: {
                id: {type: GraphQLInt}
            },
            resolve(parent,args) {
                usersData = usersData.filter(user => user.id !== args.id)
                return args
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
})
