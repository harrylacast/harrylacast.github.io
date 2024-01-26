const myHeading = document.querySelector("h1");
myHeading.textContent = "Harry LaCast";

const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/mycat.jpg") {
    myImage.setAttribute("src", "images/2 cat.jpg");
  } else {
    myImage.setAttribute("src", "images/mycat.jpg");
  }
};

let myButton = document.querySelector("button");

// This function changes the title of the page to a greeting.
function titleGreeting() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
      titleGreeting();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = `Nice to meet you, ${myName}! My name is Harry.`;
    }
  }

if (!localStorage.getItem("name")) {
  titleGreeting();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Nice to meet you, ${storedName}! My name is Harry.`;
}

myButton.onclick = () => {
    titleGreeting();
  };