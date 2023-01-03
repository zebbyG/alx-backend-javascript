export default function getStudentsByLocation(listStudents, city) {
    return listStudents.filter(function(listStudents) {
        return listStudents.location === city
    })
}