const studentDetails = (
  sid: number | string,
  student: { name: string; age: number }
  // Not clean code
) => {
  console.log(`Student id is ${sid} and student name is ${student.name}`);
};

const hello = (student: { name: string; age: number }) => {
  // Redundant student variable
  console.log(`Student name is ${student.name}`);
};

// Define types separately
type numOrString = number | string;
type studentType = { name: string; age: number };

const studentDetails2 = (sid: numOrString, student: studentType) => {
  console.log(`Student id is ${sid} and student name is ${student.name}`);
};

const hello2 = (student: studentType) => {
  console.log(`Student name is ${student.name}`);
};
