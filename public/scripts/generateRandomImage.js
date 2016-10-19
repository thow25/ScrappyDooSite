function generateRandomImage()
{
  var people = 
  {
    0 :
    {
      id: 0,
      name: "browns-pats",
      imgUrl: "\public\img\BrownsPats.jpg"
    },
    1 :
    {
      id: 1,
      name:"four-by-one",
      imgUrl: "\public\img\FourByOne.jpg"
    },
    2 :
    {
      id: 2,
      name: "grad-gang",
      imgUrl: "\public\img\GradGangPic.jpg"
    },
    3 :
    {
      id: 3,
      name: "nationwide",
      imgUrl: "\public\img\Nationwide.jpg"
    }
  }
  
  // Random Int from 0-3
  var randomInt = Math.floor((Math.random() * 4));
  document.getElementById("imageId").src = people[randomInt].imgUrl;
}
