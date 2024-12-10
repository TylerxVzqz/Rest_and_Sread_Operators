/* Task 1: Track Animal Sightings */
// TODO: Write a function with rest parameters to print sightings of different animals within the sanctuary. This function should accept an arbitrary number of animal names.
function animalSightings(...animals) {
  console.log(`Animal Sightings: ${animals}`);
}
/* Task 2: Merge Habitat Areas */
const forestHabitats = ["Forest A", "Forest B"];
const savannahHabitats = ["Savannah C", "Savannah D"];
// TODO: You are given two arrays of habitat names. Use the spread operator to combine them into a comprehensive list of protected areas within the sanctuary.
const protectedAreas = [...forestHabitats, ...savannahHabitats];
console.log(`Protected Areas: ${protectedAreas}`);

/* Task 3: Update Conservation Status */
const rhinoStatus = {
  population: 500,
  status: "Endangered",
};
// TODO: You are given an object representing an animal's conservation status. Use the spread operator to update this status with new information, such as an increase in population or a change in habitat.
const updateRhinoSatus = {
  ...rhinoStatus,
  population: 600,
  status: "Protected",
};
console.log(`Update Rhino Status: ${updateRhinoSatus}`);

/* Task 4: Catalog Genetic Diversity */
const lionProfile = {
  name: "Leo",
  age: 5,
  species: "Lion",
};
// TODO: Duplicate an animal profile object using a shallow copy. Add genetic diversity information using the `genetics` property to this copy. Observe and explain how changes to nested properties affect both the original and the copied object.
/*
 * Observations: Changing a property in the copied object has no affect on the original object due to the spread operator creating a shallow copy of the object. The original copy is duplicated.
 * TODO: Explain here.
 */ const geneticLionProfile = {
  ...lionProfile,
  genetics: "varied",
};
console.log(`Lion Profile: ${lionProfile}`);
console.log(`Genetic Lion Profile ${geneticLionProfile}`);

/* Task 5: Analyze Ecosystem Health */
const ecosystemHealth = {
  waterQuality: "Good",
  foodSupply: {
    herbivores: "Abundant",
    carnivores: "Sufficient",
  },
};
// TODO: You are given an object with a nested structure detailing the ecosystem's health, including water quality and food supply. Perform a shallow copy and modify a nested property. Observe and explain how changes to nested properties affect both the original and the copied object.
/*
 * Observations: Modifying the nested property in a shallow copy updated the original object as well. This is due to the nested objects being referenced instead of duplicated in memory.
 * TODO: Explain here.
 */
const updatedEcoSystemHealth = {
  ...ecosystemHealth,
  foodSupply: {
    ...ecosystemHealth,
    herbivores: "Sufficent",
    carnivores: "At Risk",
  },
};
console.log("Eco Sytstem Health:", ecosystemHealth);
console.log("Updated Eco System Health:", updatedEcoSystemHealth);
