// Implement Group by using reduce

const people = [
  {name: 'a', age: 26},
  {name: 'b', age: 24},
  {name: 'c', age: 26},
  {name: 'd', age: 25},
  {name: 'e', age: 25},
]

const reduced = people.reduce((grouped, item) => {
  const currentAge = item.age;
  if (!grouped[currentAge]) {
    grouped[currentAge] = []
  }

  grouped[currentAge].push(item.name);

  return grouped;
}, {});

console.log(reduced);