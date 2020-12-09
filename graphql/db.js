export const people = [
  {
    id: 0,
    name: "Jeongho",
    age: 18,
    gender: "male"
  },
  {
    id: 1,
    name: "choco",
    age: 18,
    gender: "female"
  },
  {
    id: 2,
    name: "lalal",
    age: 18,
    gender: "male"
  },
  {
    id: 3,
    name: "TEst1",
    age: 18,
    gender: "male"
  },
  {
    id: 4,
    name: "TEst2",
    age: 18,
    gender: "male"
  },
  {
    id: 5,
    name: "TEst3",
    age: 18,
    gender: "male"
  },
  {
    id: 6,
    name: "TEst4",
    age: 18,
    gender: "male"
  }
];

export const getById = (id) => {
  const filteredPeople = people.filter((person) => person.id === id);
  return filteredPeople[0];
};
