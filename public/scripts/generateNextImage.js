function pageInit()
{
  var imageInt;
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
	  imgUrl: "/public/img/FourByOne.jpg"
	},
	2 :
	{
	  id: 2,
	  name: "gradgang",
	  imgUrl: "/public/img/GradGangPic.jpg"
	},
	3 :
	{
	  id: 3,
	  name: "nationwide",
	  imgUrl: "/public/img/Nationwide.jpg"
	},
	4 :
	{
	  id: 4,
	  name: "bernlohr",
	  imgUrl: "/public/img/BernlohrStadium.jpg"
	},
	5 :
	{
	  id: 5,
	  name: "cavscountdown",
	  imgUrl: "/public/img/CavsCountdown.jpg"
	},
	6 :
	{
	  id: 6,
	  name: "clevelandskylinetattoo",
	  imgUrl: "/public/img/ClevelandSkylineTattoo.jpg"
	},
	7 :
	{
	  id: 7,
	  name: "firstenergystadium",
	  imgUrl: "/public/img/FirstEnergyStadium.jpg"
	},
	8 :
	{
	  id: 8,
	  name: "fourbyone",
	  imgUrl: "/public/img/FourByOne.jpg"
	},
	9 :
	{
	  id: 9,
	  name: "horseshoe",
	  imgUrl: "/public/img/Horseshoe.jpg"
	},
	10 :
	{
	  id: 10,
	  name: "lakeerie",
	  imgUrl: "/public/img/LakeErie.jpg"
	},
	11 :
	{
	  id: 11,
	  name: "newalbany",
	  imgUrl: "/public/img/NewAlbany.jpg"
	},
  }
  imageInt = 0;
}
  

function generateNextImage()
{
	document.getElementById("imageId").src = people[imageInt].imgUrl;
	imageInt++;
	if (imageInt > 11)
	{
		imageInt = 0;
	}
}
