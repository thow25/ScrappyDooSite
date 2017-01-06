var imageInt = 24;
var people = 
{
	0 :
	{
	  id: 0,
	  name: "newalbany",
	  imgUrl: "/public/img/NewAlbany.jpg"
	},
	
	1 :
	{
	  id: 1,
	  name: "lakeerie",
	  imgUrl: "/public/img/LakeErie.jpg"
	},
	2 :
	{
	  id: 2,
	  name: "horseshoe",
	  imgUrl: "/public/img/Horseshoe.jpg"
	},
	3 :
	{
	  id: 3,
	  name: "firstenergystadium",
	  imgUrl: "/public/img/FirstEnergyStadium.jpg"
	},
	4 :
	{
	  id: 4,
	  name: "clevelandskylinetattoo",
	  imgUrl: "/public/img/ClevelandSkylineTattoo.jpg"
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
	  name: "bernlohr",
	  imgUrl: "/public/img/BernlohrStadium.jpg"
	},
	7 :
	{
	  id: 7,
	  name: "nationwide",
	  imgUrl: "/public/img/Nationwide.jpg"
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
	  name:"fourbyone",
	  imgUrl: "/public/img/FourByOne.jpg"
	},
	10 :
	{
	  id: 10,
	  name: "brownspats",
	  imgUrl: "/public/img/BrownsPats.jpg"
	},
	11	:
	{
	  id: 11,
	  name: "cavsTitleTShirt",
	  imgUrl: "/public/img/CavsTitleTShirt.png"
	},
	12	:
	{
	  id: 12,
	  name: "wsWatchParty",
	  imgUrl: "/public/img/WorldSeriesWatchParty.png"
	},
	13	:
	{
	  id: 13,
	  name: "theQBannerNight",
	  imgUrl	: "/public/img/TheQBannerNight.png"
	},
	14	:
	{
	  id: 14,
	  name: "theQArena",
	  imgUrl: "/public/img/TheQOutsideBannerNight.png"
	},
	15	: 
	{
	  id: 15,
	  name: "theJakeWS",
	  imgUrl: "/public/img/TheJakeWorldSeries.png"
	},
	16	:
	{
	  id: 16,
	  name: "east4th",
	  imgUrl: "/public/img/East4th.png"
	}
	17	:
	{
	  id: 17,
	  name: "CLESkylineTattooFinal",
	  imgUrl: "/public/img/CLESkylineTattooFinal.jpg"
	}
	18	:
	{
	  id: 18,
	  name: "OSUMichTailgate",
	  imgUrl: "/public/img/OhioStateMichiganTailgate.png"
	}
	19	:
	{
	  id: 19,
	  name: "OSUMich",
	  imgUrl: "/public/img/OhioStateMichigan.jpg"
	}
	20	:
	{
	  id: 20,
	  name: "OSUMichTailgate",
	  imgUrl: "/public/img/OhioStateMichiganTailgate.png"
	}
	21	:
	{
	  id: 21,
	  name: "StackCity",
	  imgUrl: "/public/img/StackCity.jpg"
	}
	22	:
	{
		id: 22, 
		name: "Edwin",
		imgUrl: "/public/img/EdwinEncarnacion.jpg"
	}
	23	:
	{
		id: 23,
		name: "SnapchatGawd",
		imgUrl: "/public/img/SNAPCHATGAWD.jpg"
	}
} 

function generateNextImage()
{
	imageInt--;
	if (imageInt < 0)
	{
		imageInt = 23;
	}
	document.getElementById("imageId").src = people[imageInt].imgUrl;
}

function generatePreviousImage()
{
	imageInt++;
	if (imageInt > 23)
	{
		imageInt = 0;
	}
	document.getElementById("imageId").src = people[imageInt].imgUrl;
}