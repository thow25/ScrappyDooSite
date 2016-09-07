function generateRandomImage()
{
  var people = 
  {
    0 :
    {
      id: 0,
      name: "torrelle",
      imgUrl: "http://orig04.deviantart.net/5dcd/f/2015/143/f/e/005_charmeleon_by_ridvanozturk-d8ufgxx.png"
    },
    1 :
    {
      id: 1,
      name: "kirstyn",
      imgUrl: "http://vignette4.wikia.nocookie.net/pokemon/images/0/04/055Golduck_Dream.png/revision/latest?cb=20140828004434"
    },
    2 :
    {
      id: 2,
      name: "kessashun",
      imgUrl: "http://cdn.bulbagarden.net/upload/thumb/9/97/064Kadabra.png/250px-064Kadabra.png"
    },
    3 :
    {
      id: 3,
      name: "miguel",
      imgUrl: "http://vignette1.wikia.nocookie.net/pokemon/images/6/67/030Nidorina_AG_anime.png/revision/latest?cb=20140914060620"
    },
    4 :
    {
      id: 4,
      name: "travon",
      imgUrl: "http://vignette2.wikia.nocookie.net/pokemon/images/b/b1/025Pikachu_XY_anime_3.png/revision/latest?cb=20140902050035"
    }
  }
  
  // Random Int from 0-4
  var randomInt = Math.floor((Math.random() * 5));
  document.getElementById("imageId").src = people[randomInt].imgUrl;
}
