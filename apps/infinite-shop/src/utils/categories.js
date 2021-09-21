const categories = [
  "All Products",
  "Books",
  "Food",
  "Herbal",
  "Recommendations",
  "Clothes",
  "Electronics",
  "Renting",
  "Transport",
  "Softwares",
  "Searches",
  "Baby",
];
export default categories.sort((a, b) => {
  return a.charAt(0).localeCompare(b.charAt(0));
});
