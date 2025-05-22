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

let studentMarksAbove35 = students.filter((student) => student.marks > 35);

let container = document.getElementById("container");

studentMarksAbove35.forEach((student) => {
  let box = document.createElement("div");
  box.setAttribute("class", "box");

  let boxImg = document.createElement("div");
  boxImg.setAttribute("class", "boxImg");

  let image = document.createElement("img");
  image.setAttribute("src", student.image);

  let boxData = document.createElement("div");
  boxData.setAttribute("class", "boxData");

  let studentName = document.createElement("h1");
  studentName.innerText = "Name : " + student.name;

  let studentMarks = document.createElement("h2");
  studentMarks.innerText = "Marks : " + student.marks;

  let studentCity = document.createElement("h2");
  studentCity.innerText = "City : " + student.city;

  let aboutStudent = document.createElement("h2");
  aboutStudent.innerText = "About : " + student.about;

  box.appendChild(boxImg);
  box.appendChild(boxData);

  boxData.appendChild(studentName)
  boxData.appendChild(studentMarks)
  boxData.appendChild(studentCity)
  boxData.appendChild(aboutStudent)

  boxImg.appendChild(image);

  container.appendChild(box); // make box as a child of container
});
