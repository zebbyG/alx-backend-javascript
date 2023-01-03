export default function getStudentIdsSum(students) {
    return students.reduce(function(accumulator, currentValue) {
        return accumulator + currentValue.id}, 0);
  }
  