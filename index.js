// //https://www.youtube.com/embed/kGjhbyesuEg?si=gsw1dNCebjA2u5De
// //https://www.youtube.com/embed/ZmOKEgjigao?si=sbzpVditfBxBbH0S

document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("blogForm")
    .addEventListener("submit", handleFormSubmit);
});

function handleFormSubmit(event) {
  event.preventDefault();

  // Get the input values

  const imageUrl = document.getElementById("URL").value;
  const title = document.getElementById("title").value;
  const description = document.getElementById("description").value;


  let blog = {
    imageUrl,
    title,
    description,
  };

  axios
    .post(
      "https://crudcrud.com/api/c69cf55e3faf46bda618fa4616747b6d/blog",
      blog
    )
    .then((response) => {
      displayUserOnScreen(response.data);
      
      const data = axios
      .get("https://crudcrud.com/api/c69cf55e3faf46bda618fa4616747b6d/blog")
      .then((response) => {console.log(response.data);

      let value = document.getElementById("total");
      value.innerHTML = parseInt(value.innerHTML) + parseInt(response.data.length);
    })
  })
    .catch((error) => console.log(error));


  function displayUserOnScreen(blog) {
    const blogItem = document.createElement("li");
    blogItem.appendChild(
      document.createTextNode(
        `${blog.imageUrl} - ${blog.title} - ${blog.description}`
      )
    );
  }


  // Create a new list item
  const li = document.createElement("li");

  // Create the content for the list item
  const img = document.createElement("img");
  img.src = imageUrl;
  img.alt = title;
  img.style.width = "200px";
  img.style.height = "auto";

  const blogTitle = document.createElement("h2");
  blogTitle.textContent = title;

  const blogDescription = document.createElement("p");
  blogDescription.textContent = description;

  // Append the content to the list item
  li.appendChild(img);
  li.appendChild(blogTitle);
  li.appendChild(blogDescription);

  // Append the list item to the ul
  document.getElementById("blogList").appendChild(li);

  // Clear the form inputs
  document.getElementById("blogForm").reset();

    }