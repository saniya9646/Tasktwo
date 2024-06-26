const form = document.getElementById('myForm');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const url = document.getElementById('url').value;
  const message = document.getElementById('message').value;

  let errorMessage = "";

  if (name === "") {
    errorMessage += "Name is required\n";
  }

  if (email === "" || !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    errorMessage += "Invalid email address\n";
  }

  if (url === "" || !/^(http|https):\/\/[^ "]+\.[^ "]+$/.test(url)) {
    errorMessage += "Invalid URL\n";
  }

  if (message === "") {
    errorMessage += "Message is required";
  }

  if (errorMessage !== "") {
    alert(errorMessage);
    return false;
  }

  form.submit();
});
