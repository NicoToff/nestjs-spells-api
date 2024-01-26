import type { CreateTalentFeatDto } from "../entities/create-talent-feat.dto";

export const TALENT_DATA: CreateTalentFeatDto[] = [
  {
    type: "talent",
    name: "Actor",
    description: [
      "You gain the following benefits:",
      "- You have Advantage on Charisma (Deception) and Charisma (Performance) Checks when trying to pass yourself off as a different person.",
      "- You can mimic the speech of another person or the sounds made by other creatures. You must have heard the person speaking, or heard the creature make the sound before. A successful Wisdom (Insight) Check contested by your Charisma (Deception) Check allows a listener to determine that the effect is faked.",
    ],
    flavor: "You raised mimicry and dramatics to a professional level.",
  },
  // {
  //   type: "talent",
  //   name: "Alpha Breath Weapon",
  //   description: [
  //     "You gain the following benefits:",
  //     "- Your Breath Weapon deals an extra 1d6 damage.",
  //     "- The area of you Breath Weapon increases by 15 feet if it is a line or by 5 feet if it is a cone.",
  //     "- Starting at 10th level, you can use your Breath Weapon twice between rests.",
  //   ],
  //   prerequisites: ["Dragonborn"],
  //   flavor:
  //     "Your breath is the strongest amongst your clan. People can only watch in awe when you use it, and your enemies can only suffer.",
  // },
  {
    type: "talent",
    name: "Alert",
    description: [
      "Always on the lookout for danger, you gain the following benefits:",
      "- You gain a bonus to Initiative that is equal to your Proficiency Bonus.",
      "- You can't be Surprised while you are conscious.",
      "- Other creatures don't gain Advantage on Attack Rolls against you when they are Invisible to you.",
    ],
  },
  {
    type: "talent",
    name: "Armor Training",
    description: [
      "You gain proficiency with light armor. If you already have proficiency with light armor, you gain proficiency with medium armor. If you already have proficiency with medium armor, you gain proficiency with heavy armor.",
      "You can select this talent multiple times.",
    ],
  },
  {
    type: "talent",
    name: "Athlete",
    description: [
      "You gain the following benefits:",
      "- When you are Prone, standing up uses only 5 feet of your movement.",
      "- Climbing doesn't cost you extra movement.",
      "- You can make a running long jump or a running high jump after moving only 5 feet on foot, rather than 10 feet.",
    ],
    flavor: "You have undergone extensive physical training.",
  },
  {
    type: "talent",
    name: "Ancient Knowledge",
    description: [
      "You gain a +2 bonus on Intelligence (History, Nature and Religion) Checks.",
    ],
    prerequisites: ["At least 60 years old"],
    flavor:
      "You've lived a longer existence than most and have acquired general knowledge about many topics.",
  },
  {
    type: "talent",
    name: "Breaker",
    description: [
      "You gain the following benefits:",
      "- You deal double damage against objects and structures with weapon Attacks.",
      "- You have Advantage on Strength (Smashing) Checks made to break or force objects.",
    ],
    prerequisites: ["Strength 13 or higher"],
    flavor: "Even doors and furniture fear you.",
  },
  // {
  //   type: "talent",
  //   name: "Barbed Hide",
  //   description: [
  //     "You gain the following benefits:",
  //     "- As a Bonus Action, you can deal 1d6 piercing damage to any creature grappling you or grappled by you.",
  //     "- You gain proficiency in the Intimidation skill. If you're already proficient in it, you get Expertise for it.",
  //   ],
  //   prerequisites: ["Tiefling"],
  //   flavor:
  //     "One of your ancestors was most likely a barbed devil or some other spiky fiend. Barbs protrude from your head or your body.",
  // },
  {
    type: "talent",
    name: "Charger",
    description: [
      "When you use your Action to Dash, you can use a Bonus Action to make one Melee weapon Attack or to Shove a creature.",
      "If you moved at least 10 feet in a straight line immediately before taking this Bonus Action, you either gain a +5 bonus to the Attack's damage roll (if you chose to make a Melee Attack and hit) or push the target up to 10 feet away from you (if you chose to Shove and you succeed; you cannot choose to knock your target Prone with this Shove).",
    ],
    prerequisites: ["Strength 13"],
    minLevel: 3,
  },
  // {
  //   type: "talent",
  //   name: "Dragon Fear",
  //   description: [
  //     "Instead of exhaling destructive energy, you can expend a use of your Breath Weapon trait to roar and make enemies Frightened within 30 feet of you. Roll a special d20 Test using your Charisma modifier and your Proficiency Bonus.",
  //     "On a success, all enemies become Frightened of you for 1 minute. If a Frightened enemy takes any damage, it can make a Wisdom Saving Throw against the Target, ending the effect on itself on a success.",
  //     "An enemy that can't hear you isn't affected by this effect.",
  //   ],
  //   prerequisites: ["Dragonborn"],
  //   flavor: "When angered, you radiate menace.",
  // },
  // {
  //   type: "talent",
  //   name: "Dragon Hide",
  //   description: [
  //     "You gain the following benefits:",
  //     "- Your scales harden. While you aren't wearing armor, you can calculate your AC as 13 + your Dexterity modifier. You can use a shield and still gain this benefit.",
  //     "- You grow retractable claws from the tips of your fingers. Extending or retracting the claws requires no Action. The damage of your Unarmed Strike with the claws is equal to 1d4 + your Strength modifier (slashing damage).",
  //   ],
  //   prerequisites: ["Dragonborn"],
  //   flavor:
  //     "You manifest scales and claws reminiscent of your draconic ancestors.",
  // },
  // {
  //   type: "talent",
  //   name: "Drow High Magic",
  //   description: [
  //     "You learn the *detect magic* spell and can cast it at will, without expending a spell slot. You also learn *levitate* and *dispel magic*, each of which you can cast once without expending a spell slot.",
  //     "You regain the ability to cast those two spells in this way when you finish a Long Rest. Charisma is your spellcasting ability for all three spells.",
  //   ],
  //   prerequisites: ["Elf (drow)"],
  //   minLevel: 6,
  //   flavor: "You learn more of the magic typical of dark elves.",
  // },
  {
    type: "talent",
    name: "Dungeon Delver",
    description: [
      "You gain the following benefits:",
      "- You have Advantage on Search Checks made to detect the presence of secret doors or traps.",
      "- You have Advantage on Saving Throws made to avoid or resist traps.",
      "- You are Resistant to the damage dealt by traps.",
      "- Traveling at a fast pace doesn't impose the normal –5 penalty on your passive Wisdom (Perception) Score.",
    ],
    flavor:
      "Alert to the hidden traps and secret doors found in many dungeons.",
  },
  {
    type: "talent",
    name: "Durable",
    description: [
      "When you roll a Hit Die to regain Hit Points, the minimum number of Hit Points you regain from the roll equals twice your Constitution modifier (minimum of 2).",
    ],
  },
  // {
  //   type: "talent",
  //   name: "Dwarven Fortitude",
  //   description: [
  //     "Whenever you take the Dodge Action in combat, you can spend one Hit Die to heal yourself. Roll the die, add your Constitution modifier, and regain a number of Hit Points equal to the total (minimum of 1).",
  //   ],
  //   prerequisites: ["Dwarf"],
  // },
  // {
  //   type: "talent",
  //   name: "Dwarven Weapon Mastery",
  //   description: [
  //     "You have Proficiency with the battleaxe, greataxe, handaxe, light hammer, maul, and warhammer. When using any of them, you gain the following benefits:",
  //     "- Whenever you have Advantage on a Melee Attack Roll you make with the weapon and hit, you can knock the target Prone if the lower of the two d20 rolls would also beat The Target.",
  //     "- Whenever you fail a Melee Attack Roll you make with the weapon, the target takes bludgeoning damage equal to your Strength modifier (minimum of 0).",
  //     "- If you use the Help Action to aid an ally's Melee Attack while you're wielding the weapon, you knock the target's shield aside momentarily. In addition to the ally gaining Advantage on the Attack Roll, the ally gains a +2 bonus to the roll if the target is using a shield.",
  //   ],
  //   prerequisites: ["Dwarf"],
  //   flavor:
  //     "For years, you have practiced combat with the weapons used by your dwarven ancestors and have basically transformed it in a form or art.",
  // },
  {
    type: "talent",
    name: "Elemental Adept",
    description: [
      "When you gain this feat, choose one of the following damage types: acid, cold, fire, lightning, or thunder.",
      "Spells you cast ignore resistance to damage of the chosen type. In addition, when you roll damage for a spell you cast that deals damage of that type, you can reroll any roll of 1 on damage dice. You must use the new result.",
      "You can select this feat multiple times. Each time you do so, you must choose a different damage type.",
    ],
    prerequisites: ["The ability to cast at least one spell"],
  },
  // {
  //   type: "talent",
  //   name: "Fade Away",
  //   description: [
  //     "Immediately after you take damage, you can use a Reaction to magically become Invisible until the end of your next turn or until you Attack, deal damage, or force someone to make a Saving Throw. ",
  //     "Once you use this ability, you can't do so again until you finish a Short or Long Rest.",
  //   ],
  //   prerequisites: ["Gnome"],
  //   flavor:
  //     "Your people are clever, with a knack for illusion magic. You have learned a magical trick for fading away when you suffer harm.",
  // },
  // {
  //   type: "talent",
  //   name: "Fey Teleportation",
  //   description: [
  //     "You gain the following benefits:",
  //     "- You learn to speak, read, and write Sylvan.",
  //     "- You learn the *misty step* spell and can cast it once without expending a spell slot. You regain the ability to cast it in this way when you finish a Short or Long Rest. Intelligence is your spellcasting ability for this spell.",
  //   ],
  //   prerequisites: ["Elf (high)"],
  //   minLevel: 3,
  //   flavor:
  //     "Your study of high elven lore has unlocked fey power that few other elves possess, except your eladrin cousins. Drawing on your fey ancestry, you can momentarily stride through the Feywild to shorten your path from one place to another.",
  // },
  // {
  //   type: "talent",
  //   name: "Fey Trickster",
  //   description: [
  //     "You learn the *mage hand* and *prestidigitation* cantrips. Intelligence is your spellcasting ability for those spell.",
  //   ],
  //   prerequisites: ["Gnome"],
  // },
  // {
  //   type: "talent",
  //   name: "Flames of Phlegethos",
  //   description: [
  //     "You gain the following benefits:",
  //     "- When you roll fire damage for a spell you cast, you can reroll any roll of 1 on the fire damage dice, but you must use the new roll, even if it is another 1.",
  //     "- Whenever you cast a spell that deals fire damage, you can cause flames to wreathe you until the end of your next turn. The flames don't harm you or your possessions, and they shed bright light out to 30 feet and dim light for an additional 30 feet. While the flames are present, any creature within 5 feet of you that hits you with a Melee d20 Tests takes 1d4 fire damage.",
  //   ],
  //   prerequisites: ["Tiefling"],
  //   flavor: "You learn to call on hellfire to serve your commands.",
  // },
  // {
  //   type: "talent",
  //   name: "Human Determination",
  //   description: [
  //     "When you make a d20 Test, you can do so with Advantage.",
  //     "Once you use this ability, you can't use it again until you finish a Long Rest.",
  //   ],
  //   prerequisites: ["Human"],
  //   flavor:
  //     "You are filled with a determination that can draw the unreachable within your reach.",
  // },
  // {
  //   type: "talent",
  //   name: "Knack for Illusions",
  //   description: [
  //     "You gain the following benefits:",
  //     "- Your learn the *minor illusion* cantrip. Intelligence is your spellcasting ability for this spell.",
  //     "- You have a +2 bonus on Intelligence (Investigation) Checks made to discern illusions.",
  //   ],
  //   prerequisites: ["Gnome"],
  //   flavor: "Nobody can fool you. You're the one that fools!",
  // },
  {
    type: "talent",
    name: "Keen Mind",
    description: [
      "You gain the following benefits:",
      "- You always know which way is north.",
      "- Wisdom (Survival) Checks you make to find your way or to navigate are Easy.",
      "- You always know the number of hours left before the next sunrise or sunset.",
      "- You can accurately recall anything you have seen or heard within the past year.",
    ],
    flavor:
      "You have a mind that can track time, direction, and detail with uncanny precision.",
  },
  {
    type: "talent",
    name: "Linguist",
    description: [
      "You gain the following benefits:",
      "- You learn three languages of your choice.",
      "- You can ably create written ciphers. Others can't decipher a code you create unless you teach them, they succeed on an Intelligence Check (The Target for this Check is equal to your Intelligence Score + your Proficiency Bonus), or they use magic to decipher it.",
    ],
    flavor: "You have studied languages and codes.",
  },
  // {
  //   type: "talent",
  //   name: "Magic Companion",
  //   description: [
  //     "You learn the *find familiar* spell and can cast it as a ritual.",
  //   ],
  //   prerequisites: ["proficiency in Arcana"],
  //   flavor: "With your knowledge of magic, you are able to get familiar.",
  // },
  // {
  //   type: "talent",
  //   name: "Martial Adept",
  //   description: [
  //     "You gain the following benefits:",
  //     "- You learn two maneuvers of your choice from among those available to the Battle Master archetype in the fighter class. If a maneuver you use requires you to roll a d20 Test to succeed, it a special Strength or Dexterity (your choice) Test to which you add your Proficiency Bonus.",
  //     "- You gain one superiority die, which is a d6 (this die is added to any superiority dice you have from another source). This die is used to fuel your maneuvers. A superiority die is expended when you use it. You regain your expended superiority dice when you finish a Short or Long Rest.",
  //     "You can take this Talent multiple times. Each time you do so, your superiority dice increase by one die size, to a maximum of d12 (d8, then d10, then d12).",
  //   ],
  //   prerequisites: ["Strength or Dexterity 13 or higher"],
  //   minLevel: 3,
  //   flavor:
  //     "You have martial training that allows you to perform special combat maneuvers.",
  // },
  // {
  //   type: "talent",
  //   name: "Medium Armor Master",
  //   description: [
  //     "You gain the following benefits:",
  //     "- Wearing medium armor doesn't impose Disadvantage on physical Skill Checks.",
  //     "- When wearing medium armor, the maximum Dexterity modifier to AC you can apply increases by 1.",
  //   ],
  //   prerequisites: ["Proficiency with medium armor"],
  //   flavor: "You have practiced moving in medium armor.",
  // },
  // {
  //   type: "talent",
  //   name: "Mounted Combatant",
  //   description: [
  //     "While you are mounted and aren't Incapacitated, you gain the following benefits:",
  //     "- Your mount acts entirely during your turns. You and it can take Actions and move in any order.",
  //     "- You can force an Attack targeted at your mount to target you instead.",
  //     "- If your mount is subjected to an effect that allows it to make a Dexterity Saving Throw to take only half damage, it instead takes no damage if it succeeds on the Saving Throw, and only half damage if it fails.",
  //   ],
  //   flavor: "You are a dangerous foe to face while mounted.",
  // },
  // {
  //   type: "talent",
  //   name: "Mounted Master",
  //   description: [
  //     "You gain the following benefits:",
  //     "- You have Advantage on Melee Attack Rolls against any unmounted creature that is smaller than your mount.",
  //     "- If your mount is about to get knocked Prone, you can use your Reaction to make a Wisdom (Animal Handling) Check. On a success, your mount isn't knocked Prone. On a failed Check, you are dismounted and fall Prone in a space within 5 feet of it.",
  //   ],
  //   prerequisites: ["Mounted Combatant"],
  //   flavor: "You honed your mounted combat skills to a whole new level.",
  // },
  // {
  //   type: "talent",
  //   name: "Orcish Aggression",
  //   description: [
  //     "As a Bonus Action, you can move up to your speed toward an enemy of your choice that you can see. You must end this move closer to the enemy than you started it.",
  //   ],
  //   prerequisites: ["Orc", "Half-orc"],
  // },
  // {
  //   type: "talent",
  //   name: "Orcish Fury",
  //   description: [
  //     "Your fury burns tirelessly. You gain the following benefits:",
  //     "- When you hit with an Attack using a simple or martial weapon, you can roll one of the weapon's damage dice an additional time and add it as extra damage of the weapon's damage type. Once you use this ability, you can't use it again until you finish a Short or Long Rest.",
  //     "- Immediately after you use your Relentless Endurance trait, you can use your Reaction to make one weapon Attack.",
  //   ],
  //   prerequisites: ["Orc", "Half-orc"],
  // },
  // {
  //   type: "talent",
  //   name: "Bountiful Luck",
  //   description: [
  //     "When a creature you can see hits you with an Attack Roll, you can use your Reaction to force that creature to reroll. Starting at 14th level, the creature has Disadvantage on the reroll. ",
  //     "Once you use this ability, you can't use it again until you finish a Short or Long Rest.",
  //   ],
  //   prerequisites: ["Halfling"],
  //   flavor: "Fortune favors you even in the midst of battle.",
  // },
  {
    type: "talent",
    name: "Skilled",
    description: [
      "You gain proficiency in one Skill of your choice.",
      "You can choose this Talent more than once.",
    ],
    flavor: "You've spent time on honing a new talent or hobby of yours.",
  },
  {
    type: "talent",
    name: "Skulker",
    description: [
      "You gain the following benefits:",
      "- You can try to Hide when you are Lightly Obscured from the creature from which you are hiding.",
      "- When you are Invisible to a creature and miss it with a Ranged weapon Attack, making the Attack doesn't reveal your position.",
      "- Dim light doesn't impose Disadvantage on your Wisdom (Perception) Checks relying on sight.",
    ],
    prerequisites: ["Dexterity 13 or higher"],
    minLevel: 3,
    flavor: "You are expert at slinking through shadows.",
  },
  {
    type: "talent",
    name: "Sprinter",
    description: [
      "When you take the Dash Action, all your movement Speeds are tripled instead of doubled.",
    ],
    flavor: "You shine by your extraordinay speed.",
  },
  // {
  //   type: "talent",
  //   name: "Svirfneblin Magic",
  //   description: [
  //     "You learn the *disguise self* spell. At 3rd level, you learn the *blindness/deafness* and *blur* spells. Finally, at 6th level, you learn the *nondetection* spell.",
  //     "You can cast each of these spells once without expending a spell slot. *Nondetection* requires no material components.",
  //     "You regain the ability to cast those three spells in this way when you finish a Long Rest. Intelligence is your spellcasting ability for these spells.",
  //   ],
  //   prerequisites: ["Gnome (deep)"],
  //   flavor:
  //     "You have inherited the innate spellcasting ability of your ancestors.",
  // },
  // {
  //   type: "talent",
  //   name: "Team Player",
  //   description: [
  //     "When you take the Help Action to aid an ally in attacking a creature, you can make one weapon Attack as a Bonus Action against the same creature.",
  //   ],
  //   minLevel: 6,
  //   flavor: "You have extensive experience in fighting alongside others.",
  // },
  {
    type: "talent",
    name: "Tenacious",
    description: [
      "You gain the following benefits:",
      "- You have a +2 bonus to your rolls when Rolling Against Death.",
      "- You become stable on your second successful Roll Against Death (instead of third).",
      "- When you Roll Against Death and roll a 1 on the d20, it counts as only one failure (instead of two).",
    ],
    flavor:
      "You've seen the end of the tunnel more than a few times, so what's one more?",
  },
  {
    type: "talent",
    name: "Tiny Giant",
    description: [
      "You have the following benefits:",
      "- When you try to Grapple or Shove a creature, you are considered one Size larger than you are.",
      "- When you successfully Grapple a creature larger than you, you can use a Bonus Action to make an Unarmed Strike against it.",
    ],
    prerequisites: ["A Small race", "Str 13 or more"],
    flavor:
      "You don't shy in front of big people. Far from it. Many people have regretted getting into fisticuffs with you.",
  },
  {
    type: "talent",
    name: "Unexpected Defenses",
    description: [
      "You gain +1 bonus to Strenth, Intelligence, and Charisma Saving Throws.",
    ],
    flavor:
      "However cunning your opponents are against you, you've come prepared.",
  },
  {
    type: "talent",
    name: "War Cry",
    description: [
      "When you reduce a creature to 0 Hit Points, you can use your Reaction to shout and gain a number of Resilience Points equal to 1d6 + your Constitution modifier. These Resilience Points last 1 minute.",
    ],
    flavor: "Defeating an enemy bolsters your resolve.",
  },
  {
    type: "talent",
    name: "Weapon Adept",
    description: [
      "Choose one the the following options:",
      "- You gain proficiency with three weapons of your choice. Each one must be a simple or a martial weapon.",
      "- You are proficient with Improvised Weapons.",
      "- Your Unarmed Strike uses a d4 for damage.",
      "You can select this talent multiple times.",
    ],
    flavor: "You have practiced extensively with a variety of weapons.",
  },
  {
    type: "talent",
    name: "Well-Prepared",
    description: [
      "Choose one of the following benefits:",
      "- If you can learn spells, you learn one extra spell from your class that is of a level for which you have spell slots.",
      "- If you can prepare spells, the number of spells you can prepare increases by one.",
    ],
    prerequisites: ["The ability to prepare spells"],
    flavor:
      "You expend your knowledge of magic to be prepared for all situations.",
  },
  {
    type: "talent",
    name: "War Caster",
    description: [
      "You gain the following benefits:",
      "- You don't have Disadvantage on Attack Rolls when making a Ranged Spellcasting Attempt while you are within 5 feet of a hostile creature.",
      "- When a hostile creature's movement provokes an Opportunity Attack from you, you can use your Reaction to cast a spell at the creature rather than making an Opportunity Attack. The spell must have a casting time of 1 Action and must target only that creature.",
    ],
    prerequisites: ["The ability to cast at least one spell"],
    flavor: "You have practiced casting spells in the midst of combat.",
  },
  // {
  //   type: "talent",
  //   name: "Wood Elf Magic",
  //   description: [
  //     "You learn one druid cantrip of your choice and the *longstrider* spell. At 3rd level, you also learn the *pass without trace* spell.",
  //     "You can cast those two latest spells once without expending a spell slot. You regain the ability to cast them in this way when you finish a Long Rest. Wisdom is your spellcasting ability for those three spells.",
  //   ],
  //   prerequisites: ["Elf (wood)"],
  //   flavor:
  //     "You learn the magic of the primeval woods, which are revered and protected by your people.",
  // },
];
