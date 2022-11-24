module.exports = {
  Query: {
    users: async (parent, args, { models }) => {
      return await [
        { id: 123, username: "abc", email: "abc@gmail.com", role: "aa" },
      ];
    },
    user: async (parent, { id }, { models }) => {
      return await [];
    },
    me: async (parent, args, { models, me }) => {
      return await [];
    },
  },

  Mutation: {
    signUp: async (
      parent,
      { username, email, password },
      { models, secret }
    ) => {
      return [];
    },

    signIn: async (parent, { login, password }, { models, secret }) => {
      return [];
    },

    updateUser: async (parent, { username }, { models, me }) => {
      return [];
    },

    deleteUser: async (parent, { id }, { models }) => {
      return [];
    },
  },
};
