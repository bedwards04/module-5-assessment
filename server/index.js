const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  
});

app.get('/api/fortune', (req, res) => {
  let fortune = ["A faithful friend is a strong defense.",
   "A soft voice may be awfully persuasive.",
    "A pleasant surprise is waiting for you.",
     "A smile is your personal welcome mat.",
      "Allow compassion to guide your decisions."]

      // choose random fortune
      let randomFortuneIndex = Math.floor(Math.random() * fortune.length);
      let randomFortune = fortune[randomFortuneIndex];

      res.status(200).send(randomFortune);
      
      // Where does the new fortune come in from, and how do I choose what the new fortune will be? 
      app.put('/api/inspiration/:message', (req, res) => {    
        let existingFortune = req.params.message
        let newFortune = req.body.message
        for (let i = 0; i < fortune.lenght; i++) {
          if (fortune[i].message === existingFortune) {
            fortune[i].message === newFortune
            res.status(200).send(newFortune)
            return;
          }
        }
        res.status(400).send('Fortune not found');
      })
      
  });

app.post('/api/inspiration/', (req, res) => {
  let inspiration = "Just Do It!"
  res.status(200).send(inspiration);
});

app.listen(4000, () => console.log("Server running on 4000"));