const resolver = {
  Query: {
    tracksForHome: (_, __, { dataSources }) => {
      return dataSources.trackAPI.getTracksForHome();
    },
    track: (_, { id }, { dataSources }) => {
      return dataSources.trackAPI.getTrack(id);
    },
  },
  Track: {
    author: (parent, _, { dataSources }) => {
      const authorId = parent.authorId;
      return dataSources.trackAPI.getAuthor(authorId);
    },
  },
};
module.exports = resolver;
