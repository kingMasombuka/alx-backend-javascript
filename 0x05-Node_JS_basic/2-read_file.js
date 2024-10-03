const fs = require('fs'); // Import the 'fs' module for file system operations
const path = require('path'); // Import 'path' for file path handling

function countStudents(filePath) {
  try {
    // Check if the file exists and read the file synchronously
    const data = fs.readFileSync(filePath, { encoding: 'utf-8' }).trim();

    // Split the file content into rows by new line
    const rows = data.split('\n').filter((row) => row !== '');

    if (rows.length <= 1) {
      throw new Error('Cannot load the database');
    }

    // Extract the header (first line) and the remaining rows (students data)
    const header = rows[0];
    const students = rows.slice(1);

    console.log(`Number of students: ${students.length}`);

    // Initialize a Map to store students by field
    const fields = new Map();

    students.forEach((student) => {
      const details = student.split(','); // Split each row by commas
      const firstName = details[0].trim(); // First value is the student's first name
      const field = details[3].trim(); // Fourth value is the student's field

      if (fields.has(field)) {
        fields.get(field).push(firstName);
      } else {
        fields.set(field, [firstName]);
      }
    });

    // Iterate over the fields and log the count and the list of student names for each field
    fields.forEach((names, field) => {
      console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
    });
  } catch (error) {
    // If any error occurs (file doesn't exist or other errors), log the custom error message
    console.error('Cannot load the database');
  }
}

module.exports = countStudents;