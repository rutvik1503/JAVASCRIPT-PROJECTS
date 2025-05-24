const students = [
    {
      id: 1,
      name: "Karan",
      marks: 75,
      city: "Surat",
      image: "Assets/boy.jpeg",
      about: "Karan is a strong performer and shows excellent understanding of the subject."
    },
    {
      id: 2,
      name: "Simran",
      marks: 32,
      city: "Ahmedabad",
      image: "Assets/girl.png",
      about: "Simran is trying her best and has the potential to do better with consistent effort."
    },
    {
      id: 3,
      name: "Rahul",
      marks: 88,
      city: "Rajkot",
      image: "Assets/boy.jpeg",
      about: "Rahul is an outstanding student with top-level academic achievement."
    },
    {
      id: 4,
      name: "Anjali",
      marks: 45,
      city: "Vadodara",
      image: "Assets/girl.png",
      about: "Anjali is improving steadily and is developing a good grasp of concepts."
    },
    {
      id: 5,
      name: "Sneha",
      marks: 29,
      city: "Surat",
      image: "Assets/girl.png",
      about: "Sneha is learning the basics and will benefit from extra guidance."
    },
    {
      id: 6,
      name: "Rohan",
      marks: 59,
      city: "Ahmedabad",
      image: "Assets/boy.jpeg",
      about: "Rohan is a sincere student and has shown good progress recently."
    },
  ];  

// Filter students whose marks are greater than 35
let studentMarksAbove35 = students.filter((student) => student.marks > 35);

// Get the container element where student data will be displayed
let container = document.getElementById("container");

// Loop through each student in the filtered array
studentMarksAbove35.forEach((student) => {
  // Create a div element to hold the whole student box
  let box = document.createElement("div");
  box.setAttribute("class", "box"); // Add class 'box' for styling

  // Create a div for holding the student image
  let boxImg = document.createElement("div");
  boxImg.setAttribute("class", "boxImg"); // Add class 'boxImg' for styling

  // Create an img element and set its source to student's image URL
  let image = document.createElement("img");
  image.setAttribute("src", student.image);

  // Create a div for holding student details (name, marks, city, about)
  let boxData = document.createElement("div");
  boxData.setAttribute("class", "boxData"); // Add class 'boxData' for styling

  // Create an h1 element for student's name and set its text content
  let studentName = document.createElement("h1");
  studentName.innerText = "Name : " + student.name;

  // Create an h2 element for student's marks and set its text content
  let studentMarks = document.createElement("h2");
  studentMarks.innerText = "Marks : " + student.marks;

  // Create an h2 element for student's city and set its text content
  let studentCity = document.createElement("h2");
  studentCity.innerText = "City : " + student.city;

  // Create an h2 element for student's about info and set its text content
  let aboutStudent = document.createElement("h2");
  aboutStudent.innerText = "About : " + student.about;

  // Append the image container and data container to the main box
  box.appendChild(boxImg);
  box.appendChild(boxData);

  // Append student details (name, marks, city, about) inside the data container
  boxData.appendChild(studentName);
  boxData.appendChild(studentMarks);
  boxData.appendChild(studentCity);
  boxData.appendChild(aboutStudent);

  // Append the image inside the image container
  boxImg.appendChild(image);

  // Finally, append the complete box to the main container in the DOM
  container.appendChild(box);
});
