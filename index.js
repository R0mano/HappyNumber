
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html")
});

app.post("/", function(req, res) {

  let userNumber = req.body.userNumber;
  console.log(req.body.userNumber);
  let n = userNumber;
  var sumArray = [];

    function squareAndSum() {
      var nArray = Array.from(String(n), Number)
      var sum = 0;
      console.log("nArray= [" + nArray + "]");
      for (var i = 0; i < nArray.length; i++) {
        nArray[i] = Math.pow(nArray[i], 2);
        sum += nArray[i];
      };

      if (sum === 1) {
        console.log(true);
        res.send("<h2>" + userNumber + " <span style='color:green'>is</span> a Happy Number!</h2><br><p>Here is the series of number it went through: " + sumArray + ".</p>")
      } else if (sumArray.includes(sum)) {
        console.log(false);
        res.send("<h2>" + userNumber + " <span style='color:red'>is not</span> a Happy Number!</h2><br><p>Here is the series of number it went through: " + sumArray + ".<br>The next number should be " + sum + " which would loop endlessly in a circle.</p>")
      } else {
        sumArray.push(sum);
        console.log("sumArray= [" + sumArray + "]");
        n = sum;
        console.log("sum=" + sum);
        console.log("New n= " + n);
        squareAndSum();
      }
    }
  squareAndSum();


});





app.listen(process.env.PORT || 3000, function() {
  console.log("Server is running on PORT 3000....")
});
