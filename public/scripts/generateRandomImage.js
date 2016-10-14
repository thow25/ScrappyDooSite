function generateRandomImage()
{
  var people = 
  {
    0 :
    {
      id: 0,
      name: "pikachu",
      imgUrl: "http://i1.kym-cdn.com/entries/icons/original/000/019/677/5Pikachu.png"
    },
    1 :
    {
      id: 1,
      name: "venusaur",
      imgUrl: "http://img15.deviantart.net/822b/i/2013/286/c/4/venusaur_by_prinzeburnzo-d5z12ig.png"
    },
    2 :
    {
      id: 2,
      name: "charizard",
      imgUrl: "http://static.api6.studiobebop.net/pokemon_data/pokemon_images/Charizard.png"
    },
    3 :
    {
      id: 3,
      name: "blastoise",
      imgUrl: "http://vignette2.wikia.nocookie.net/pkmncollectors/images/0/02/009Blastoise.png/revision/latest?cb=20100612002433"
    },
    4 :
    {
      id: 4,
      name: "pidgeot",
      imgUrl: "http://img14.deviantart.net/a5eb/i/2012/072/6/b/_018_tauboss___pidgeot_by_mrsjasminhardy-d4smgtl.png"
    },
	5 :
	{
		id: 5,
		name: "butterfree",
		imgUrl: "https://s-media-cache-ak0.pinimg.com/originals/c8/72/55/c87255e7f1980e4cd255e3fb45ba3dbb.jpg"
	}
  }
  
  // Random Int from 0-5
  var randomInt = Math.floor((Math.random() * 6));
  document.getElementById("imageId").src = people[randomInt].imgUrl;
}
