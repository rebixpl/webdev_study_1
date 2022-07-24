const showPeople = (people) => {
  const newPeople = people
    .map((person) => {
      // console.log(person); // {name: 'anna', job: 'boss'}
      const { name, job } = person;
      return `<p>${name} <strong>${job}</strong></p>`;
    })
    .join("");
  // .join(separator) - Adds all the elements of an array into a string,
  // separated by the specified separator string.
  //console.log(newPeople); // <p>john <strong>developer</strong></p><p>susan <strong>designer</strong></p><p>anna <strong>boss</strong></p>
  return newPeople;
};

// with default export the names when we import does not have to match
export default showPeople;

// another way of default export
// export default (people) => {
//     const newPeople = people
//       .map((person) => {
//         // console.log(person); // {name: 'anna', job: 'boss'}
//         const { name, job } = person;
//         return `<p>${name} <strong>${job}</strong></p>`;
//       })
//       .join("");
//     // .join(separator) - Adds all the elements of an array into a string,
//     // separated by the specified separator string.
//     //console.log(newPeople); // <p>john <strong>developer</strong></p><p>susan <strong>designer</strong></p><p>anna <strong>boss</strong></p>
//     return newPeople;
//   };
