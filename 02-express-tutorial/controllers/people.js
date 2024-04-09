const { people } = require('../data');

const getPeople = (req, res) => {
  try {
    res.status(200).json(people);
  } catch (error) {
    res.status(500).json({ success: false, message: error });
  }
};

const addPerson = (req, res) => {
  const name = req.body.name;
  try {
    if (!name) {
      return res
        .status(404)
        .json({ success: false, msg: 'please provide name value' });
    } else {
      res.status(201).json({ success: true, person: name });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: error });
  }
};

const getPersonById = (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const person = people.find((p) => p.id === id);
    if (person) {
      res.status(201).json(person);
    } else {
      res.status(404).json({ success: false, msg: 'Person not found' });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

const updatePerson = (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const personIndex = people.findIndex((p) => p.id === id);
    if (personIndex !== -1) {
      const updatedPerson = { ...people[personIndex], ...req.body };
      people[personIndex] = updatedPerson;
      res.status(200).json(updatedPerson);
    } else {
      res.status(404).json({ success: false, message: 'Person not found' });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

const deletePerson = (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const newPeople = people.filter((p) => p.id !== id);
    if (newPeople.length !== people.length) {
      people.length = 0; // Clear the array
      people.push(...newPeople); // Push the updated array
      res.json({ success: true, message: 'Person deleted' });
    } else {
      res.status(404).json({ success: false, message: 'Person not found' });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

module.exports = {
  getPeople,
  addPerson,
  getPersonById,
  updatePerson,
  deletePerson,
};
