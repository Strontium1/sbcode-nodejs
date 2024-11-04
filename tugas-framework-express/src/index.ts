const express = require('express')

const PORT = 3000;

function init() {
  const app = express();

  app.use(express.static('public'))

  app.get("/", (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
    // res.redirect("/hello");
  });

  app.get("/hello", (req, res) => {
    res.status(200).json({
      message: "Success fetch message",
      data: "Hello World!",
    });
  });

  app.get("/user", (req, res) => {
    res.status(200).json({
      message: "Success fetch user",
      data: {
        "id": 1,
        "name": "Budi",
        "username": "budidu",
        "email": "budidu@mail.com"
      }
    });
  });

  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
};

init();
