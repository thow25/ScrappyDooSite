var imageInt = -1;
var people = 
  {
	0	:
	{
	  id: 0,
	  name: "east4th",
	  imgUrl: "/public/img/East4th.png"
	},
	1	: 
	{
	  id: 1,
	  name: "theJakeWS",
	  imgUrl: "/public/img/TheJakeWorldSeries.png"
	},
	2	:
	{
	  id: 2,
	  name: "theQArena",
	  imgUrl: "/public/img/TheQOutsideBannerNight.png"
	},
	3	:
	{
	  id: 3,
	  name: "theQBannerNight",
	  imgUrl	: "/public/img/TheQBannerNight.png"
	},
	4	:
	{
	  id: 4,
	  name: "wsWatchParty",
	  imgUrl: "/public/img/WorldSeriesWatchParty.png"
	},
	5	:
	{
	  id: 5,
	  name: "cavsTitleTShirt",
	  imgUrl: "/public/img/CavsTitleTShirt.png"
	},
	6 :
	{
	  id: 6,
	  name: "brownspats",
	  imgUrl: "/public/img/BrownsPats.jpg"
	},
	7 :
	{
	  id: 7,
	  name:"fourbyone",
	  imgUrl: "/public/img/FourByOne.jpg"
	},
	8 :
	{
	  id: 8,
	  name: "gradgang",
	  imgUrl: "/public/img/GradGangPic.jpg"
	},
	9 :
	{
	  id: 9,
	  name: "nationwide",
	  imgUrl: "/public/img/Nationwide.jpg"
	},
	10 :
	{
	  id: 10,
	  name: "bernlohr",
	  imgUrl: "/public/img/BernlohrStadium.jpg"
	},
	11 :
	{
	  id: 11,
	  name: "cavscountdown",
	  imgUrl: "/public/img/CavsCountdown.jpg"
	},
	12 :
	{
	  id: 12,
	  name: "clevelandskylinetattoo",
	  imgUrl: "/public/img/ClevelandSkylineTattoo.jpg"
	},
	13 :
	{
	  id: 13,
	  name: "firstenergystadium",
	  imgUrl: "/public/img/FirstEnergyStadium.jpg"
	},
	14 :
	{
	  id: 14,
	  name: "horseshoe",
	  imgUrl: "/public/img/Horseshoe.jpg"
	},
	15 :
	{
	  id: 15,
	  name: "lakeerie",
	  imgUrl: "/public/img/LakeErie.jpg"
	},
	16 :
	{
	  id: 16,
	  name: "newalbany",
	  imgUrl: "/public/img/NewAlbany.jpg"
	}
  }
  

function generateNextImage()
{
	imageInt++;
	if (imageInt > 17)
	{
		imageInt = 0;
	}
	document.getElementById("imageId").src = people[imageInt].imgUrl;
}

function generatePreviousImage()
{
	imageInt--;
	if (imageInt < 0)
	{
		imageInt = 17;
	}
	document.getElementById("imageId").src = people[imageInt].imgUrl;
}