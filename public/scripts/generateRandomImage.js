function generateRandomImage()
{
  var people = 
  {
    0 :
    {
      id: 0,
      name: "brownspats",
      imgUrl: "/public/img/BrownsPats.jpg"
    },
    1 :
    {
      id: 1,
      name:"fourbyone",
      imgUrl: "FourByOne.jpg"
    },
    2 :
    {
      id: 2,
      name: "gradgang",
      imgUrl: "GradGangPic.jpg"
    },
    3 :
    {
      id: 3,
      name: "nationwide",
      imgUrl: "/public/img/Nationwide.jpg"
    }
  }
  
  // Random Int from 0-3
  var randomInt = Math.floor((Math.random() * 4));
  document.getElementById("imageId").src = people[randomInt].imgUrl;
}
