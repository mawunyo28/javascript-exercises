const findTheOldest = function (people) {

  people.forEach((person) => {
    if ('yearOfDeath' in person) {
      person['age'] = person['yearOfDeath'] - person['yearOfBirth'];
    }
    else {
      let yearOfDeath = new Date().getFullYear();
      person['age'] = yearOfDeath - person['yearOfBirth'];
    }
  });

  return people.reduce((oldest, current) => {
    if (current['age'] > oldest['age']) {
      oldest = current;
    }

    return oldest
  }, people[0]);
};

// Do not edit below this line
module.exports = findTheOldest;
