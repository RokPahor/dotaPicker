const express = require('express');
const router = express.Router();
const Hero = require('../models/hero');

//-----------------------------------------------------GET calls
router.get('/', async (req,res)=> { 
  //GetAllHeroes
    try {
        const heroes = await Hero.find();
        if(heroes){
          res.json(heroes)
        }
        else{
          res.status(404);
        }
    }
    catch(err){
        res.status(500).json({ message : err.message});
    }

});

router.get('/:id', async (req,res)=> {
   //getHeroById
    try {
        const foundHero = await Hero.findOne({heroId: req.params.id});
        if(foundHero){
            res.json(foundHero);
        }
        else{
            res.status(404);
        }
    }
    catch(err){
        res.status(500);
    }

})
//----------------------------------------------------PUT calls
router.patch('/:id', async (req,res)=> {
  try {
  //find hero
  const hero = await Hero.updateOne({heroId: req.params.id}, {
    $set: {
      goodWith: req.body.goodWith,
      badAgainst: req.body.badAgainst
    }
  });
  res.json(hero);
  }
  catch(err){
    res.status(500);
  }
})
//----------------------------------------------------POST calls
router.post('/init', async (req,res) => {
    try {
      await heroes.forEach(heroData => {
      new Hero({
        heroId : heroData.heroId,
        heroName : heroData.heroName,
        primary_attr: heroData.primary_attr,
        goodWith: heroData.goodWith,
        badAgainst: heroData.badAgainst
    }).save()
 })
 res.status(201);
}
catch(err){
    res.status(500)
}
})


let heroes = 
[
  
    {
      "heroId": "2",
      "heroName": "Earthshaker",
      "goodWith": [
        "59",
        "51"
      ],
      "badAgainst": [
        "72",
        "62"
      ],
      "primary_attr": "S"
    },
    {
      "heroId": "3",
      "heroName": "BeastMaster",
      "goodWith": [
        "90",
        "95",
        "54"
      ],
      "badAgainst": [
        "58",
        "40"
      ],
      "primary_attr": "S"
    },
    {
      "heroId": "4",
      "heroName": "Dragon_Knight",
      "goodWith": [
        "12",
        "7"
      ],
      "badAgainst": [
        "89",
        "87",
        "72"
      ],
      "primary_attr": "S"
    },
    {
      "heroId": "5",
      "heroName": "Huskar",
      "goodWith": [
        "109",
        "43"
      ],
      "badAgainst": [
        "35",
        "24",
        "28",
        "85"
      ],
      "primary_attr": "S"
    },
    {
      "heroId": "6",
      "heroName": "Alchemist",
      "goodWith": [
        "99",
        "39"
      ],
      "badAgainst": [
        "39",
        "111"
      ],
      "primary_attr": "S"
    },
    {
      "heroId": "7",
      "heroName": "Io",
      "goodWith": [
        "22",
        "35",
        "60",
        "74"
      ],
      "badAgainst": [
        "95",
        "24",
        "106"
      ],
      "primary_attr": "S"
    },
    {
      "heroId": "8",
      "heroName": "Centaur_Warrunner",
      "goodWith": [
        "55",
        "45",
        "39",
        "101"
      ],
      "badAgainst": [
        "85",
        "72",
        "88"
      ],
      "primary_attr": "S"
    },
    {
      "heroId": "9",
      "heroName": "Tusk",
      "goodWith": [
        "25",
        "24"
      ],
      "badAgainst": [
        "74",
        "29"
      ],
      "primary_attr": "S"
    },
    {
      "heroId": "10",
      "heroName": "Elder_Titan",
      "goodWith": [
        "51",
        "68"
      ],
      "badAgainst": [
        "77",
        "72"
      ],
      "primary_attr": "S"
    },
    {
      "heroId": "11",
      "heroName": "Undying",
      "goodWith": [
        "24",
        "28"
      ],
      "badAgainst": [
        "43",
        "99"
      ],
      "primary_attr": "S"
    },
    {
      "heroId": "12",
      "heroName": "Magnus",
      "goodWith": [
        "1",
        "21"
      ],
      "badAgainst": [
        "75",
        "67"
      ],
      "primary_attr": "S"
    },
    {
      "heroId": "13",
      "heroName": "Spirit_Breaker",
      "goodWith": [
        "72",
        "52"
      ],
      "badAgainst": [
        "84",
        "76"
      ],
      "primary_attr": "S"
    },
    {
      "heroId": "14",
      "heroName": "Doom",
      "goodWith": [
        "82",
        "91",
        "50",
        "102",
        "112"
      ],
      "badAgainst": [
        "32",
        "28",
        "55"
      ],
      "primary_attr": "S"
    },
    {
      "heroId": "15",
      "heroName": "Tidehunter",
      "goodWith": [
        "89",
        "24",
        "107"
      ],
      "badAgainst": [
        "89",
        "87"
      ],
      "primary_attr": "S"
    },
    {
      "heroId": "16",
      "heroName": "Wraith_King",
      "goodWith": [
        "24",
        "62"
      ],
      "badAgainst": [
        "21",
        "88",
        "89"
      ],
      "primary_attr": "S"
    },
    {
      "heroId": "17",
      "heroName": "Pudge",
      "goodWith": [
        "12",
        "7"
      ],
      "badAgainst": [
        "89",
        "87",
        "72"
      ],
      "primary_attr": "S"
    },
    {
      "heroId": "18",
      "heroName": "Axe",
      "goodWith": [
        "70",
        "99",
        "41"
      ],
      "badAgainst": [
        "43",
        "79",
        "88"
      ],
      "primary_attr": "S"
    },
    {
      "heroId": "19",
      "heroName": "Phoenix",
      "goodWith": [
        "93",
        "34",
        "17"
      ],
      "badAgainst": [
        "26",
        "28",
        "24"
      ],
      "primary_attr": "S"
    },
    {
      "heroId": "20",
      "heroName": "Drow_Ranger",
      "goodWith": [
        "93",
        "30",
        "113"
      ],
      "badAgainst": [
        "31",
        "74",
        "34"
      ],
      "primary_attr": "A"
    },
    {
      "heroId": "21",
      "heroName": "Anti-Mage",
      "goodWith": [
        "12",
        "51",
        "50"
      ],
      "badAgainst": [
        "37",
        "94",
        "28"
      ],
      "primary_attr": "A"
    },
    {
      "heroId": "22",
      "heroName": "Morphling",
      "goodWith": [
        "48",
        "39"
      ],
      "badAgainst": [
        "14",
        "53",
        "52"
      ],
      "primary_attr": "A"
    },
    {
      "heroId": "23",
      "heroName": "Phantom_Lancer",
      "goodWith": [
        "51",
        "59",
        "49"
      ],
      "badAgainst": [
        "29",
        "94",
        "34"
      ],
      "primary_attr": "A"
    },
    {
      "heroId": "24",
      "heroName": "Sniper",
      "goodWith": [
        "15",
        "34",
        "107",
        "68"
      ],
      "badAgainst": [
        "91",
        "31",
        "34",
        "62",
        "60"
      ],
      "primary_attr": "A"
    },
    {
      "heroId": "25",
      "heroName": "Templar_Assassin",
      "goodWith": [
        "71",
        "13",
        "109",
        "79"
      ],
      "badAgainst": [
        "88",
        "61",
        "76",
        "23"
      ],
      "primary_attr": "A"
    },
    {
      "heroId": "26",
      "heroName": "Ursa",
      "goodWith": [
        "25",
        "13",
        "54",
        "109",
        "82"
      ],
      "badAgainst": [
        "88",
        "89",
        "93",
        "74"
      ],
      "primary_attr": "A"
    },
    {
      "heroId": "27",
      "heroName": "Gyrocopter",
      "goodWith": [
        "51",
        "17",
        "55"
      ],
      "badAgainst": [
        "76",
        "62",
        "75",
        "18"
      ],
      "primary_attr": "A"
    },
    {
      "heroId": "28",
      "heroName": "Troll_Warlord",
      "goodWith": [
        "24",
        "25",
        "12",
        "71"
      ],
      "badAgainst": [
        "74",
        "76",
        "34",
        "84"
      ],
      "primary_attr": "A"
    },
    {
      "heroId": "29",
      "heroName": "Ember_Spirit",
      "goodWith": [
        "99",
        "79",
        "51",
        "100"
      ],
      "badAgainst": [
        "40",
        "90",
        "63",
        "26"
      ],
      "primary_attr": "A"
    },
    {
      "heroId": "30",
      "heroName": "Nyx_Assassin",
      "goodWith": [
        "13",
        "82",
        "54",
        "91"
      ],
      "badAgainst": [
        "60",
        "72",
        "75"
      ],
      "primary_attr": "A"
    },
    {
      "heroId": "31",
      "heroName": "Slark",
      "goodWith": [
        "105",
        "99",
        "57"
      ],
      "badAgainst": [
        "74",
        "34",
        "40",
        "50"
      ],
      "primary_attr": "A"
    },
    {
      "heroId": "32",
      "heroName": "Weaver",
      "goodWith": [
        "51",
        "25",
        "20"
      ],
      "badAgainst": [
        "34",
        "37",
        "91",
        "112"
      ],
      "primary_attr": "A"
    },
    {
      "heroId": "33",
      "heroName": "Broodmother",
      "goodWith": [
        "82",
        "57",
        "109"
      ],
      "badAgainst": [
        "2",
        "92",
        "76",
        "68"
      ],
      "primary_attr": "A"
    },
    {
      "heroId": "34",
      "heroName": "Faceless_Void",
      "goodWith": [
        "112",
        "99",
        "107",
        "24"
      ],
      "badAgainst": [
        "92",
        "84",
        "4"
      ],
      "primary_attr": "A"
    },
    {
      "heroId": "35",
      "heroName": "Phantom_Assassin",
      "goodWith": [
        "25",
        "13",
        "50",
        "109"
      ],
      "badAgainst": [
        "91",
        "93",
        "94"
      ],
      "primary_attr": "A"
    },
    {
      "heroId": "36",
      "heroName": "Shadow_Fiend",
      "goodWith": [
        "62",
        "9",
        "48"
      ],
      "badAgainst": [
        "25",
        "98",
        "94"
      ],
      "primary_attr": "A"
    },
    {
      "heroId": "37",
      "heroName": "Bloodseeker",
      "goodWith": [
        "93",
        "54",
        "50"
      ],
      "badAgainst": [
        "14",
        "1",
        "75"
      ],
      "primary_attr": "A"
    },
    {
      "heroId": "38",
      "heroName": "Arc_Warden",
      "goodWith": [
        "51",
        "9",
        "109",
        "57"
      ],
      "badAgainst": [
        "91",
        "24",
        "78"
      ],
      "primary_attr": "A"
    },
    {
      "heroId": "39",
      "heroName": "Shadow_Demon",
      "goodWith": [
        "78",
        "110",
        "99",
        "52"
      ],
      "badAgainst": [
        "108",
        "34",
        "23"
      ],
      "primary_attr": "I"
    },
    {
      "heroId": "40",
      "heroName": "Outworld_Devourer",
      "goodWith": [
        "78",
        "61",
        "18",
        "99"
      ],
      "badAgainst": [
        "24",
        "43",
        "55",
        "18"
      ],
      "primary_attr": "I"
    },
    {
      "heroId": "41",
      "heroName": "Dark_Seer",
      "goodWith": [
        "1",
        "80",
        "73",
        "51"
      ],
      "badAgainst": [
        "101",
        "14",
        "31",
        "63"
      ],
      "primary_attr": "I"
    },
    {
      "heroId": "42",
      "heroName": "Batrider",
      "goodWith": [
        "51",
        "54",
        "99",
        "52",
        "91"
      ],
      "badAgainst": [
        "91",
        "55",
        "45",
        "39",
        "75",
        "79"
      ],
      "primary_attr": "I"
    },
    {
      "heroId": "43",
      "heroName": "Pugna",
      "goodWith": [
        "99",
        "88",
        "111",
        "54"
      ],
      "badAgainst": [
        "30",
        "21",
        "24",
        "34"
      ],
      "primary_attr": "I"
    },
    {
      "heroId": "44",
      "heroName": "Death_Prophet",
      "goodWith": [
        "71",
        "15",
        "109",
        "107",
        "103"
      ],
      "badAgainst": [
        "37",
        "34",
        "24",
        "45"
      ],
      "primary_attr": "I"
    },
    {
      "heroId": "45",
      "heroName": "Enigma",
      "goodWith": [
        "107",
        "108",
        "44",
        "111"
      ],
      "badAgainst": [
        "24",
        "82",
        "80",
        "79"
      ],
      "primary_attr": "I"
    },
    {
      "heroId": "46",
      "heroName": "Necrophos",
      "goodWith": [
        "63",
        "15",
        "43"
      ],
      "badAgainst": [
        "52",
        "54",
        "14",
        "55"
      ],
      "primary_attr": "I"
    },
    {
      "heroId": "47",
      "heroName": "Lich",
      "goodWith": [
        "76",
        "14",
        "41",
        "107"
      ],
      "badAgainst": [
        "29",
        "43",
        "85",
        "91"
      ],
      "primary_attr": "I"
    },
    {
      "heroId": "48",
      "heroName": "Bane",
      "goodWith": [
        "78",
        "87",
        "76",
        "36"
      ],
      "badAgainst": [
        "23",
        "74",
        "82",
        "92"
      ],
      "primary_attr": "I"
    },
    {
      "heroId": "49",
      "heroName": "Dark_Willow",
      "goodWith": [
        "20",
        "1",
        "76",
        "53"
      ],
      "badAgainst": [
        "68",
        "9",
        "91",
        "55"
      ],
      "primary_attr": "I"
    },
    {
      "heroId": "50",
      "heroName": "Puck",
      "goodWith": [
        "20",
        "1",
        "41",
        "28"
      ],
      "badAgainst": [
        "99",
        "76",
        "102"
      ],
      "primary_attr": "I"
    },
    {
      "heroId": "51",
      "heroName": "Crystal_Maiden",
      "goodWith": [
        "23",
        "95",
        "41",
        "111"
      ],
      "badAgainst": [
        "91",
        "90",
        "82",
        "71"
      ],
      "primary_attr": "I"
    },
    {
      "heroId": "52",
      "heroName": "Lina",
      "goodWith": [
        "105",
        "74",
        "1",
        "39"
      ],
      "badAgainst": [
        "91",
        "23",
        "21",
        "31"
      ],
      "primary_attr": "I"
    },
    {
      "heroId": "53",
      "heroName": "Skywrath_Mage",
      "goodWith": [
        "34",
        "99",
        "2",
        "68"
      ],
      "badAgainst": [
        "5",
        "43",
        "91",
        "21"
      ],
      "primary_attr": "I"
    },
    {
      "heroId": "54",
      "heroName": "Zeus",
      "goodWith": [
        "91",
        "82",
        "56",
        "74"
      ],
      "badAgainst": [
        "74",
        "34",
        "35",
        "68"
      ],
      "primary_attr": "I"
    },
    {
      "heroId": "55",
      "heroName": "Silencer",
      "goodWith": [
        "94",
        "1",
        "68",
        "74",
        "35"
      ],
      "badAgainst": [
        "21",
        "74",
        "75"
      ],
      "primary_attr": "I"
    },
    {
      "heroId": "56",
      "heroName": "Natures_Prophet",
      "goodWith": [
        "91",
        "73",
        "112",
        "96"
      ],
      "badAgainst": [
        "62",
        "13",
        "31",
        "92"
      ],
      "primary_attr": "I"
    },
    {
      "heroId": "57",
      "heroName": "Ogre_Magi",
      "goodWith": [
        "77",
        "21",
        "93",
        "85"
      ],
      "badAgainst": [
        "72",
        "29",
        "31",
        "92"
      ],
      "primary_attr": "I"
    },
    {
      "heroId": "58",
      "heroName": "Enchantress",
      "goodWith": [
        "20",
        "99",
        "56",
        "43"
      ],
      "badAgainst": [
        "22",
        "72",
        "32",
        "52",
        "54"
      ],
      "primary_attr": "I"
    },
    {
      "heroId": "59",
      "heroName": "Keeper_of_the_Light",
      "goodWith": [
        "23",
        "2",
        "95",
        "84"
      ],
      "badAgainst": [
        "90",
        "24",
        "35"
      ],
      "primary_attr": "I"
    },
    {
      "heroId": "60",
      "heroName": "Tiny",
      "goodWith": [
        "12",
        "7"
      ],
      "badAgainst": [
        "89",
        "87",
        "72"
      ],
      "primary_attr": "S"
    },
    {
      "heroId": "61",
      "heroName": "Kunkka",
      "goodWith": [
        "40",
        "48"
      ],
      "badAgainst": [
        "1",
        "40",
        "42"
      ],
      "primary_attr": "S"
    },
    {
      "heroId": "62",
      "heroName": "Clockwerk",
      "goodWith": [
        "12",
        "7"
      ],
      "badAgainst": [
        "72",
        "95"
      ],
      "primary_attr": "S"
    },
    {
      "heroId": "63",
      "heroName": "Omniknight",
      "goodWith": [
        "35",
        "34",
        "17"
      ],
      "badAgainst": [
        "53",
        "55",
        "112"
      ],
      "primary_attr": "S"
    },
    {
      "heroId": "64",
      "heroName": "Brewmaster",
      "goodWith": [
        "50",
        "95"
      ],
      "badAgainst": [
        "84",
        "44"
      ],
      "primary_attr": "S"
    },
    {
      "heroId": "65",
      "heroName": "Treant_Protector",
      "goodWith": [
        "99",
        "106",
        "79"
      ],
      "badAgainst": [
        "82",
        "71",
        "72"
      ],
      "primary_attr": "S"
    },
    {
      "heroId": "66",
      "heroName": "Timbersaw",
      "goodWith": [
        "63",
        "50"
      ],
      "badAgainst": [
        "26",
        "37"
      ],
      "primary_attr": "S"
    },
    {
      "heroId": "67",
      "heroName": "Bristleback",
      "goodWith": [
        "75",
        "109"
      ],
      "badAgainst": [
        "36",
        "68"
      ],
      "primary_attr": "S"
    },
    {
      "heroId": "68",
      "heroName": "Legion_Commander",
      "goodWith": [
        "111",
        "99"
      ],
      "badAgainst": [
        "28",
        "26",
        "25"
      ],
      "primary_attr": "S"
    },
    {
      "heroId": "69",
      "heroName": "Earth_Spirit",
      "goodWith": [
        "51",
        "43",
        "9"
      ],
      "badAgainst": [
        "25",
        "83"
      ],
      "primary_attr": "S"
    },
    {
      "heroId": "70",
      "heroName": "Sand_King",
      "goodWith": [
        "12",
        "7"
      ],
      "badAgainst": [
        "89",
        "87",
        "72"
      ],
      "primary_attr": "S"
    },
    {
      "heroId": "71",
      "heroName": "Slardar",
      "goodWith": [
        "79",
        "25",
        "109"
      ],
      "badAgainst": [
        "88",
        "94"
      ],
      "primary_attr": "S"
    },
    {
      "heroId": "72",
      "heroName": "Lifestealer",
      "goodWith": [
        "95",
        "50",
        "62"
      ],
      "badAgainst": [
        "87",
        "88",
        "93"
      ],
      "primary_attr": "S"
    },
    {
      "heroId": "73",
      "heroName": "Lycan",
      "goodWith": [
        "88",
        "43"
      ],
      "badAgainst": [
        "27",
        "15"
      ],
      "primary_attr": "S"
    },
    {
      "heroId": "74",
      "heroName": "Chaos_Knight",
      "goodWith": [
        "24",
        "7",
        "15"
      ],
      "badAgainst": [
        "15",
        "94"
      ],
      "primary_attr": "S"
    },
    {
      "heroId": "75",
      "heroName": "Abaddon_1",
      "goodWith": [
        "95",
        "31"
      ],
      "badAgainst": [
        "31",
        "21",
        "40"
      ],
      "primary_attr": "S"
    },
    {
      "heroId": "76",
      "heroName": "Underlord",
      "goodWith": [
        "99",
        "34"
      ],
      "badAgainst": [
        "40",
        "85"
      ],
      "primary_attr": "S"
    },
    {
      "heroId": "77",
      "heroName": "Juggernaut",
      "goodWith": [
        "12",
        "75"
      ],
      "badAgainst": [
        "1",
        "18",
        "39"
      ],
      "primary_attr": "A"
    },
    {
      "heroId": "78",
      "heroName": "Mirana",
      "goodWith": [
        "40",
        "48",
        "79",
        "39"
      ],
      "badAgainst": [
        "76",
        "28",
        "24",
        "28"
      ],
      "primary_attr": "A"
    },
    {
      "heroId": "79",
      "heroName": "Vengeful_Spirit",
      "goodWith": [
        "25",
        "71",
        "81",
        "109"
      ],
      "badAgainst": [
        "23",
        "94",
        "21"
      ],
      "primary_attr": "A"
    },
    {
      "heroId": "80",
      "heroName": "Riki",
      "goodWith": [
        "72",
        "71",
        "68"
      ],
      "badAgainst": [
        "16",
        "54",
        "76"
      ],
      "primary_attr": "A"
    },
    {
      "heroId": "81",
      "heroName": "Luna",
      "goodWith": [
        "79",
        "39",
        "51",
        "7"
      ],
      "badAgainst": [
        "39",
        "94",
        "23"
      ],
      "primary_attr": "A"
    },
    {
      "heroId": "82",
      "heroName": "Bounty_Hunter",
      "goodWith": [
        "54",
        "25",
        "56",
        "72",
        "98"
      ],
      "badAgainst": [
        "71",
        "74",
        "23"
      ],
      "primary_attr": "A"
    },
    {
      "heroId": "83",
      "heroName": "Lone_druid",
      "goodWith": [
        "112",
        "63",
        "49"
      ],
      "badAgainst": [
        "91",
        "32",
        "87",
        "88"
      ],
      "primary_attr": "A"
    },
    {
      "heroId": "84",
      "heroName": "Naga_siren",
      "goodWith": [
        "76",
        "107",
        "102"
      ],
      "badAgainst": [
        "8",
        "76",
        "15"
      ],
      "primary_attr": "A"
    },
    {
      "heroId": "85",
      "heroName": "Monkey_King",
      "goodWith": [
        "57",
        "51",
        "50"
      ],
      "badAgainst": [
        "43",
        "96",
        "58",
        "74"
      ],
      "primary_attr": "A"
    },
    {
      "heroId": "86",
      "heroName": "Pangolier",
      "goodWith": [
        "102",
        "84",
        "8",
        "107"
      ],
      "badAgainst": [
        "84",
        "88",
        "29"
      ],
      "primary_attr": "A"
    },
    {
      "heroId": "87",
      "heroName": "Razor",
      "goodWith": [
        "15",
        "48"
      ],
      "badAgainst": [
        "74",
        "84",
        "62"
      ],
      "primary_attr": "A"
    },
    {
      "heroId": "88",
      "heroName": "Venomancer",
      "goodWith": [
        "111",
        "107",
        "49"
      ],
      "badAgainst": [
        "84",
        "68",
        "75"
      ],
      "primary_attr": "A"
    },
    {
      "heroId": "89",
      "heroName": "Viper",
      "goodWith": [
        "99",
        "9",
        "34"
      ],
      "badAgainst": [
        "23",
        "74",
        "21"
      ],
      "primary_attr": "A"
    },
    {
      "heroId": "90",
      "heroName": "Clinkz",
      "goodWith": [
        "54",
        "71",
        "13",
        "15"
      ],
      "badAgainst": [
        "74",
        "23",
        "71",
        "52"
      ],
      "primary_attr": "A"
    },
    {
      "heroId": "91",
      "heroName": "Spectre",
      "goodWith": [
        "105",
        "51",
        "99",
        "54",
        "56"
      ],
      "badAgainst": [
        "28",
        "94",
        "47",
        "14"
      ],
      "primary_attr": "A"
    },
    {
      "heroId": "92",
      "heroName": "Meepo",
      "goodWith": [
        "51",
        "55",
        "109",
        "24"
      ],
      "badAgainst": [
        "2",
        "68",
        "3",
        "74",
        "14",
        "15"
      ],
      "primary_attr": "A"
    },
    {
      "heroId": "93",
      "heroName": "Medusa",
      "goodWith": [
        "39",
        "57",
        "79",
        "50"
      ],
      "badAgainst": [
        "21",
        "23",
        "9"
      ],
      "primary_attr": "A"
    },
    {
      "heroId": "94",
      "heroName": "Terrorblade",
      "goodWith": [
        "51",
        "109",
        "57",
        "102"
      ],
      "badAgainst": [
        "54",
        "98",
        "112",
        "114"
      ],
      "primary_attr": "A"
    },
    {
      "heroId": "95",
      "heroName": "Storm_Spirit",
      "goodWith": [
        "72",
        "55",
        "82",
        "61"
      ],
      "badAgainst": [
        "89",
        "23",
        "74",
        "67"
      ],
      "primary_attr": "I"
    },
    {
      "heroId": "96",
      "heroName": "Windranger",
      "goodWith": [
        "56",
        "82",
        "48"
      ],
      "badAgainst": [
        "4",
        "61",
        "67",
        "64"
      ],
      "primary_attr": "I"
    },
    {
      "heroId": "97",
      "heroName": "Shadow_Shaman",
      "goodWith": [
        "81",
        "79",
        "87",
        "73"
      ],
      "badAgainst": [
        "90",
        "60",
        "62",
        "17"
      ],
      "primary_attr": "I"
    },
    {
      "heroId": "98",
      "heroName": "Tinker",
      "goodWith": [
        "82",
        "109",
        "3"
      ],
      "badAgainst": [
        "91",
        "15",
        "30",
        "54",
        "42"
      ],
      "primary_attr": "I"
    },
    {
      "heroId": "99",
      "heroName": "Jakiro",
      "goodWith": [
        "76",
        "43",
        "40",
        "39",
        "34",
        "74"
      ],
      "badAgainst": [
        "72",
        "24",
        "31",
        "62"
      ],
      "primary_attr": "I"
    },
    {
      "heroId": "100",
      "heroName": "Chen",
      "goodWith": [
        "70",
        "58",
        "56"
      ],
      "badAgainst": [
        "72",
        "23",
        "83",
        "42"
      ],
      "primary_attr": "I"
    },
    {
      "heroId": "101",
      "heroName": "Rubick",
      "goodWith": [
        "9",
        "57",
        "26",
        "99"
      ],
      "badAgainst": [
        "26",
        "23",
        "28"
      ],
      "primary_attr": "I"
    },
    {
      "heroId": "102",
      "heroName": "Disruptor",
      "goodWith": [
        "34",
        "88",
        "40",
        "50"
      ],
      "badAgainst": [
        "34",
        "80",
        "24",
        "38"
      ],
      "primary_attr": "I"
    },
    {
      "heroId": "103",
      "heroName": "Oracle",
      "goodWith": [
        "5",
        "44",
        "94",
        "32"
      ],
      "badAgainst": [
        "25",
        "74",
        "39",
        "55"
      ],
      "primary_attr": "I"
    },
    {
      "heroId": "104",
      "heroName": "Techies",
      "goodWith": [
        "47",
        "12",
        "79"
      ],
      "badAgainst": [
        "38",
        "91",
        "43",
        "88"
      ],
      "primary_attr": "I"
    },
    {
      "heroId": "105",
      "heroName": "Lion",
      "goodWith": [
        "87",
        "52",
        "35",
        "97"
      ],
      "badAgainst": [
        "109",
        "90",
        "67",
        "74"
      ],
      "primary_attr": "I"
    },
    {
      "heroId": "106",
      "heroName": "Witch_Doctor",
      "goodWith": [
        "34",
        "52",
        "18",
        "107"
      ],
      "badAgainst": [
        "24",
        "33",
        "23",
        "86"
      ],
      "primary_attr": "I"
    },
    {
      "heroId": "107",
      "heroName": "Warlock",
      "goodWith": [
        "54",
        "91",
        "44"
      ],
      "badAgainst": [
        "31",
        "30",
        "34",
        "39"
      ],
      "primary_attr": "I"
    },
    {
      "heroId": "108",
      "heroName": "Queen_of_Pain",
      "goodWith": [
        "107",
        "20",
        "34",
        "15"
      ],
      "badAgainst": [
        "37",
        "34",
        "23",
        "14"
      ],
      "primary_attr": "I"
    },
    {
      "heroId": "109",
      "heroName": "Dazzle",
      "goodWith": [
        "94",
        "84",
        "67",
        "71",
        "5"
      ],
      "badAgainst": [
        "18",
        "90",
        "55"
      ],
      "primary_attr": "I"
    },
    {
      "heroId": "110",
      "heroName": "Leshrac",
      "goodWith": [
        "39",
        "40",
        "74",
        "1"
      ],
      "badAgainst": [
        "74",
        "34",
        "43",
        "89"
      ],
      "primary_attr": "I"
    },
    {
      "heroId": "111",
      "heroName": "Ancient_Apparition",
      "goodWith": [
        "101",
        "51",
        "97"
      ],
      "badAgainst": [
        "21",
        "90",
        "38",
        "29"
      ],
      "primary_attr": "I"
    },
    {
      "heroId": "112",
      "heroName": "Invoker",
      "goodWith": [
        "9",
        "13",
        "91",
        "21",
        "74"
      ],
      "badAgainst": [
        "25",
        "24",
        "93",
        "50"
      ],
      "primary_attr": "I"
    },
    {
      "heroId": "113",
      "heroName": "Visage",
      "goodWith": [
        "20",
        "56",
        "79",
        "71"
      ],
      "badAgainst": [
        "74",
        "24",
        "50"
      ],
      "primary_attr": "I"
    },
    {
      "heroId": "114",
      "heroName": "Winter_Wyvern",
      "goodWith": [
        "59",
        "39",
        "109",
        "103"
      ],
      "badAgainst": [
        "66",
        "42",
        "111",
        "31"
      ],
      "primary_attr": "I"
    },
    {
      "heroId": "115",
      "heroName": "Night_Stalker",
      "goodWith": [
        ""
      ],
      "badAgainst": [
        ""
      ],
      "primary_attr": "S"
    }
  ]

module.exports = router;