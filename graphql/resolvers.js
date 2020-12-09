const jeongho = {
  name: "Jeongho",
  age: 11,
  gender: "male"
};

const resolvers = {
  Query: {
    person: () => jeongho
  }
};

export default resolvers;
