const students = ["asep", "budi", "charlie", "budi", "jeni", "asep"];

const duplicateElement = (students) => {
  const initialValue = {}
  return students.reduce((obj, value) => {
    return {
      ...obj,
      [value]: obj[value] + 1 || 1
    }
  }, initialValue)
}

console.log(duplicateElement(students));