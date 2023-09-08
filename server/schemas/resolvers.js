const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        user: async (parent, { userId, username }) => {
            return await User.findOne({ _id: userId, username })
        },

        me: async (parent, args, context) => {
            if (context.user) {
                const data = await User.findOne({ _id: context.user._id})
                return data
            }
            throw new AuthenticationError("Please log in!")
        }
    }
}