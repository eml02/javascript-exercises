const getAge = function(birth, death) {
  if (!death) {
    death = new Date().getFullYear();
  }
  return death - birth;
}

const findTheOldest = function(people) {
  const oldestPerson = people.reduce((oldest, current) => {
    let oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
    let currentAge = getAge(current.yearOfBirth, current.yearOfDeath);
    if (currentAge > oldestAge) {
      oldest = current;
    }
    return oldest;
  })
  return oldestPerson;

};

// Do not edit below this line
module.exports = findTheOldest;
