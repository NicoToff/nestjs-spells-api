import type { CreateTalentFeatDto } from "../entities/create-talent-feat.dto";

export const FEAT_DATA: CreateTalentFeatDto[] = [
  {
    type: "feat",
    name: "Ability Score Increase",
    description: [
      "Increase one Ability Score of your choice by 2, or increase two Ability Scores of your choice by 1. You can't increase an Ability Score above 20 using this feat.",
      "You can choose this feat multiple times.",
    ],
  },
  {
    type: "feat",
    name: "Crossbow Expert",
    description: [
      "You gain the following benefits:",
      "- You ignore the loading quality of crossbows with which you are proficient.",
      "- Being within 5 feet of a hostile creature doesn't impose Disadvantage on your Ranged Attack Rolls.",
      "- When you use the Attack action and attack with a one-handed weapon, you can use a Bonus Action to attack with a hand crossbow you are holding.",
    ],
    flavor:
      "Thanks to extensive practice with the crossbow, you hit the bull's eye more often than not.",
  },
  {
    type: "feat",
    name: "Defensive Duelist",
    description: [
      "When you are wielding a finesse weapon with which you are proficient and another creature hits you with a Melee Attack, you can use your Reaction to add your proficiency bonus to your AC aginst that Attack, potentially causing it to miss you.",
    ],
    prerequisites: ["Dexterity 13 or higher"],
  },
  {
    type: "feat",
    name: "Devious Striker",
    description: [
      "You gain the following benefits:",
      "- Increase your Dexterity Score by 1, to a maximum of 20.",
      "- Once per turn, you can deal an extra 1d6 damage to one creature you hit with an Attack if you have Advantage on the Attack Roll. The attack must use a finesse or a ranged weapon. You don't need Advantage on the Attack Roll if another enemy of the target is within 5 feet of it, that enemy isn't incapacitated, and you don't have Disadvantage on the Attack Roll. If you are a Rogue, the amount of damage dealt by your Sneak Attack simply increases by 1d6.",
    ],
    prerequisites: ["Dexterity 13 or higher"],
    minLevel: 4,
    flavor: "There's no such thing as a dirty hit.",
  },
  {
    type: "feat",
    name: "Dual Wielder",
    description: [
      "You gain the following benefits:",
      "- You gain a +1 bonus to AC while you are wielding a separate Melee weapon in each hand.",
      "- You can use two-weapon fighting even when the one-handed Melee weapons you are wielding aren't light.",
      "- You can draw or stow two one-handed weapons when you would normally be able to draw or stow only one.",
    ],
    flavor: "You master fighting with two weapons.",
  },
  {
    type: "feat",
    name: "Elven Accuracy",
    description: [
      "You gain the following benefits:",
      "- Increase your Dexterity, Intelligence, Wisdom, or Charisma Score by 1, to a maximum of 20.",
      "- Whenever you have Advantage on an Attack Roll using Dexterity, Intelligence, Wisdom, or Charisma, you can reroll one of the dice once.",
    ],
    prerequisites: ["Elf or half-elf"],
    flavor:
      "The accuracy of elves is legendary, especially that of elf archers and spellcasters. You have uncanny aim with attacks that rely on precision rather than brute force.",
  },
  {
    type: "feat",
    name: "Fighting Expert",
    description: [
      "You gain the following benefits:",
      "- Increase your Strength or Dexterity Score by 1, to a maximum of 20.",
      "- Choose one of the Fighting Style options available to the Fighter. You can't take a Fighting Style option more than once.",
    ],
    flavor: "You specialize your style in combat.",
  },
  {
    type: "feat",
    name: "Grappler",
    description: [
      "You gain the following benefits:",
      "- Increase your Strength Score by 1, to a maximum of 20.",
      "- You have Advantage on Attack Rolls against a creature you are grappling.",
      "- When you hit a creature with an unarmed strike or an improvised weapon on your turn, you can use a Bonus Action to attempt to grapple the target.",
      "- You can use your action to try to pin a creature grappled by you. To do so, make another grapple Check. If you succeed, you and the creature are both restrained until the grapple ends.",
    ],
    flavor:
      "You've developed the skills necessary to hold your own in close-quarters grappling.",
  },
  {
    type: "feat",
    name: "Great Weapon Master",
    description: [
      "You gain the following benefits:",
      "- On your turn, when you Score a critical hit with a Melee weapon or reduce a creature to 0 Hit Points with one, you can make one Melee weapon Attack as a Bonus Action.",
      "- Before you make a Melee Attack with a heavy weapon that you are proficient with, you can choose to take a –5 penalty to the Attack Roll. If the attack hits, you add +10 to the attack's damage.",
    ],
    flavor:
      "You've learned to put the weight of a weapon to your Advantage, letting its momentum empower your strikes.",
  },
  {
    type: "feat",
    name: "Healer",
    description: [
      "You gain the following benefits:",
      "- When you use a healer's kit to stabilize a dying creature, that creature also regains 1 hit point.",
      "- As an action, you can spend one use of a healer's kit to tend to a creature and restore 1d10 Hit Points to it, plus additional Hit Points equal to the creature's maximum number of Hit Dice (i.e. its level if it is a Player Character). The creature can't regain Hit Points from this feat again until it finishes a Short or Long Rest.",
    ],
    flavor:
      "You are an able physician, allowing you to mend wounds quickly and get your allies back in the fight.",
  },
  {
    type: "feat",
    name: "Heavy Armor Master",
    description: [
      "You gain the following benefits:",
      "- Increase your Strength Score by 1, to a maximum of 20.",
      "- While you are wearing heavy armor, you have Absorb bludgeoning, piercing, and slashing 3.",
    ],
    prerequisites: ["Proficiency with heavy armor"],
    flavor: "You can use your armor to deflect strikes that would kill others.",
  },
  {
    type: "feat",
    name: "Infernal Constitution",
    description: [
      "You gain the following benefits:",
      "- Increase your Constitution Score by 1, to a maximum of 20.",
      "- You have resistance to cold and poison damage.",
      "- You have Advantage on Saving Throws against poison damage and being poisoned.",
    ],
    prerequisites: ["Tiefling"],
    flavor:
      "Fiendish blood runs strong in you, unlocking a resilience akin to that possessed by some fiends.",
  },
  {
    type: "feat",
    name: "Inspiring Leader",
    description: [
      "You can spend 10 minutes inspiring your companions, shoring up their resolve to fight. When you do so, choose up to six friendly creatures (which can include yourself) within 30 feet of you who can see or hear you and who can understand you. Each creature can gain Resilience Points equal to your level + your Charisma modifier. A creature can't gain Resilience Points from this feat again until it has finished a Short or Long Rest.",
    ],
    prerequisites: ["Charisma 13 or higher"],
    flavor: "Your ability to bolster your companions is unmatched.",
  },
  {
    type: "feat",
    name: "Ki Composure",
    description: [
      "You gain the following benefits:",
      "- Increase your Dexterity or Wisdom Score by 1, to a maximum of 20.",
      "- While you are wearing no armor and not wielding a shield, your AC equals 10 + your Dexterity modifier + your Wisdom modifier.",
    ],
    flavor:
      "By learning the arts of monks, you are never stressed in battle. Your mind and your agility become more efficient than any armor.",
    prerequisites: ["Dexterity and Wisdom 13 or higher"],
  },
  {
    type: "feat",
    name: "Lucky",
    description: [
      "You have 3 luck points. Whenever you make a d20 Test, you can spend one luck point to roll an additional d20; roll two additional d20 if you have Advantage or Disadvantage. You can choose to spend one of your luck points after you roll the die, but before the outcome is determined. You choose which of the d20s is used for the d20 Test; or you choose the pair of d20s if you have Advantage or Disadvantage.",
      "You regain your expended luck points when you finish a Long Rest.",
    ],
    flavor:
      "You have inexplicable luck that seems to kick in at just the right moment.",
  },
  {
    type: "feat",
    name: "Mage Slayer",
    description: [
      "You gain the following benefits:",
      "- When a creature within 5 feet of you casts a spell, you can use your Reaction to make a Melee weapon Attack against that creature.",
      "- When you damage a creature that is concentrating on a spell, that creature has Disadvantage on the Saving Throw it makes to maintain its concentration.",
      "- You have Advantage on Saving Throws against spells cast by creatures within 5 feet of you.",
    ],
    flavor:
      "You have practiced techniques useful in Melee combat against spellcasters.",
  },
  {
    type: "feat",
    name: "Magic Blood",
    description: [
      "You gain the following benefits:",
      "- Increase your Charisma Score by 1, to a maximum of 20.",
      "- You learn one Metamagic option of your choice from among those available to the Sorcerer.",
      "- You gain 2 sorcery points. These points are used to fuel your Metamagic options. A sorcery point is expended when you use it. You regain all spent sorcery points when you finish a Long Rest. If you're a Sorcerer, the maximum number of sorcery points you can have simply increases by 2.",
    ],
    prerequisites: [
      "The ability to cast spells with 2nd-level spell slots",
      "Charisma 13 or higher",
    ],
    flavor:
      "You manifest extraordinary natural mastery of spells and mostly have your ancestors to thank for that.",
  },
  {
    type: "feat",
    name: "Magic Initiate",
    description: [
      "Increase your Intelligence, Wisdom or Charisma Score by 1, to a maximum of 20.",
      "Choose a spell source from arcane, divine or primal. In addition, choose one 1st-level spell that has that source. You learn the spell and can cast it at its lowest level. Once you cast it, you must finish a Long Rest before you can cast it again using this feat.",
      "Choose your prefered Spellcasting Ability when you take this feat: Intelligence, Wisdom, or Charisma. You use that Ability when you cast the spell.",
      "You can choose this feat multiple times. ",
    ],
  },
  {
    type: "feat",
    name: "Mobile",
    description: [
      "You gain the following benefits:",
      "- Your speed increases by 10 feet.",
      "- When you use the Dash action, difficult terrain doesn't cost you extra movement on that turn.",
      "- When you make a Melee Attack against a creature, you don't provoke opportunity attacks from that creature for the rest of the turn, whether you hit or not.",
    ],
    flavor: "You are exceptionally speedy and agile.",
  },
  {
    type: "feat",
    name: "Monastic Discipline",
    description: [
      "Increase your Dexterity or Wisdom Score by 1, to a maximum of 20.",
      "You gain 2 ki points. You can spend these points to fuel the following ki features:",
      "- ***Flurry of Blows.*** Immediately after you take the Attack Action on your turn, you can spend 1 ki point to make two Unarmed Strikes as a Bonus Action.",
      "- ***Patient Defense.*** You can spend 1 ki point to take the Dodge action as a Bonus Action on your turn.",
      "- ***Step of the Wind.*** You can spend 1 ki point to take the Disengage or Dash action as a Bonus Action on your turn, and your jump distance is doubled for the turn.",
      "When you spend a ki point, it is unavailable until you finish a Short or Long Rest, at the end of which you draw all of your expended ki back into yourself. You must spend at least 30 minutes of the rest meditating to regain your ki points.",
    ],
    prerequisites: ["Dexterity 13 or higher and Wisdom 13 or higher"],
    minLevel: 4,
    flavor: "You've retreated among monks to learn their ways.",
  },
  {
    type: "feat",
    name: "Observant",
    description: [
      "You gain the following benefits:",
      "- Increase your Intelligence or Wisdom Score by 1, to a maximum of 20.",
      "- If you can see a creature's mouth while it is speaking a language you understand, you can interpret what it's saying by reading its lips.",
      "- You have a +2 bonus to Wisdom (Perception) and Intelligence (Investigation) Checks you make. This bonus is +5 instead for your passive Scores in those skills.",
    ],
    flavor: "You are quick to notice details of your environment.",
  },
  {
    type: "feat",
    name: "Polearm Master",
    description: [
      "You gain the following benefits:",
      "- When you take the Attack action and attack with only a glaive, halberd, quarterstaff, or spear, you can use a Bonus Action to make a Melee Attack with the opposite end of the weapon; this attack uses the same ability modifier as the primary attack. The weapon's damage die for this attack is a d4, and the attack deals bludgeoning damage.",
      "- While you are wielding a glaive, halberd, pike, quarterstaff, or spear, when a creature enters your reach, you can use your Reaction to make a Melee weapon Attack against it.",
    ],
    flavor: "You can keep your enemies at bay with reach weapons.",
  },
  {
    type: "feat",
    name: "Primal Body",
    description: [
      "You gain the following benefits:",
      "- Increase your Strength or Constitution Score by 1, to a maximum of 20.",
      "- While you are not wearing any armor, your Armor Class equals 10 + your Dexterity modifier + your Constitution modifier. You can use a shield and still gain this benefit.",
    ],
    prerequisites: ["Strength and Constitution 13 or higher"],
    flavor:
      "You've learned the ways of the barbarians and make the use of armor obsolete.",
  },
  {
    type: "feat",
    name: "Prodigy",
    description: [
      "You gain the following benefits:",
      "- You gain one skill proficiency of your choice, one tool proficiency of your choice, and fluency in one language of your choice.",
      "- Choose one skill in which you have proficiency. You gain Expertise with that skill.",
    ],
    flavor: "You have a knack for learning new things.",
  },
  {
    type: "feat",
    name: "Resilient",
    description: [
      "Choose one Ability Score. You gain the following benefits:",
      "- Increase the chosen Ability Score by 1, to a maximum of 20.",
      "- You gain proficiency in Saving Throws using the chosen ability.",
    ],
  },
  {
    type: "feat",
    name: "Ritual Caster",
    description: [
      "When you choose this feat, you acquire a ritual book holding two 1st-level spells of your choice. Choose one of the following spell source: arcane or divine. You must choose your spells that have that spell source, and the spells you choose must have the ritual tag.",
      "If you come across a spell in written form, such as a magical spell scroll or a wizard's spellbook, you might be able to add it to your ritual book. The spell must have the spell source you chose, the spell's level can be no higher than half your level (rounded up), and it must have the ritual tag. The process of copying the spell into your ritual book takes 2 hours per level of the spell, and costs 50 gp per level. The cost represents material components you expend as you experiment with the spell to master it, as well as the fine inks you need to record it.",
      "Choose your prefered Spellcasting Ability when you take this feat: Intelligence, Wisdom, or Charisma. You use that Ability when you cast rituals granted by this feat.",
    ],
    prerequisites: ["Intelligence or Wisdom 13 or higher"],
    flavor:
      "You have learned a number of spells that you can cast as rituals. These spells are written in a ritual book, which you must have in hand while casting one of them.",
  },
  {
    type: "feat",
    name: "Savage Attacker",
    description: [
      "You gain the following benefits:",
      "- Increase your Strength or Dexterity Score by 1, to a maximum of 20.",
      "- Once per turn when you roll damage for a Melee weapon Attack, you can reroll the weapon's damage dice and use either total.",
    ],
    flavor:
      "When attacking a foe, you do it with the worst intentions every single time.",
  },
  {
    type: "feat",
    name: "Second Chance",
    description: [
      "When a friendly creature you can see within 10 feet of you rolls a 1 on a d20 Test, you can use your Reaction to let the ally reroll the die. The ally must use the new roll.",
      "When you use this ability, you can't use your Lucky racial trait before the end of your next turn.",
    ],
    prerequisites: ["Halfling"],
    flavor:
      "Your people have extraordinary luck, which you have learned to mystically lend to your companions when you see them falter. You're not sure how you do it; you just wish it, and it happens. Surely a sign of fortune's favor!",
  },
  {
    type: "feat",
    name: "Sentinel",
    description: [
      "You gain the following benefits:",
      "- When you hit a creature with an opportunity attack, the creature's speed becomes 0 for the rest of the turn if it's no more than one size larger than you.",
      "- Creatures provoke opportunity attacks from you even if they take the Disengage action before leaving your reach.",
      "- When a creature within 5 feet of you makes an attack against a target other than you (and that target doesn't have this feat), you can use your Reaction to make a Melee weaponattack against the attacking creature.",
    ],
    flavor:
      "You have mastered techniques to take Advantage of every drop in any enemy's guard.",
  },
  {
    type: "feat",
    name: "Sharpshooter",
    description: [
      "You gain the following benefits:",
      "- Attacking at long range doesn't impose Disadvantage on your ranged weapon Attack Rolls.",
      "- Your ranged weapon Attacks ignore cover that isn't Total Cover.",
      "- Before you make an attack with a ranged weapon that you are proficient with, you can choose to take a –5 penalty to the Attack Roll. If the attack hits, you add +10 to the attack's",
      "damage.",
    ],
    flavor:
      "You have mastered ranged weapons and can make shots that others find impossible.",
  },
  {
    type: "feat",
    name: "Shield Master",
    description: [
      "You gain the following benefits while you are wielding a shield:",
      "- If you take the Attack action on your turn, you can use a Bonus Action to try to Shove a creature within 5 feet of you with your shield.",
      "- If you aren't incapacitated, you can add your shield's AC bonus to any Dexterity Saving Throw you make against a spell or other harmful effect that targets only you.",
      "- If you are subjected to an effect that allows you to make a Dexterity Saving Throw to take only half damage, you can use your Reaction to take no damage if you succeed on the Saving Throw, interposing your shield between yourself and the source of the effect.",
    ],
    flavor: "You use shields not just for protection but also for offense.",
  },
  {
    type: "feat",
    name: "Spell Sniper",
    description: [
      "You gain the following benefits:",
      "- When you cast a spell that requires you to make an Attack Roll, the spell's range is doubled.",
      "- Your ranged spell attacks ignore half cover and three-quarters cover.",
      "- You learn one cantrip that requires an Attack Roll. Choose the cantrip from the artificern bard, cleric, druid, sorcerer, warlock, or wizard spell list. Your spellcasting ability for this cantrip depends on the spell list you chose from: Charisma for bard, sorcerer, or warlock; Wisdom for cleric or druid; or Intelligence for artificer or wizard.",
    ],
    prerequisites: ["The ability to cast at least one spell"],
    flavor:
      "You have learned techniques to enhance your attacks with certain kinds of spells.",
  },
  {
    type: "feat",
    name: "Squat Nimbleness",
    description: [
      "You gain the following benefits:",
      "- Increase your Strength or Dexterity Score by 1, to a maximum of 20.",
      "- Increase your walking speed by 5 feet.",
      "- You gain proficiency in the Acrobatics or Athletics skill (your choice).",
      "- You have Advantage on any Strength (Athletics) or Dexterity (Acrobatics) Check you make to escape from being grappled.",
    ],
    prerequisites: ["Dwarf or a Small race"],
    flavor: "You are uncommonly nimble for your race.",
  },
  {
    type: "feat",
    name: "Strong Resolve",
    description: [
      "*When an effect puts you under pressure, you react better than most.**",
      "You gain the following benefits:",
      "- Increase your Constitution, Intelligence, Wisdom or Charisma Score by 1, to a maximum of 20.",
      "- When you roll a Saving Throw at the end of your turn to get rid of an adverse effect, you can choose to do so with Advantage. Once you've used this ability a number of times equal to half your proficiency bonus, you can't use it again until you finish a Long Rest.",
    ],
  },
  {
    type: "feat",
    name: "Talented",
    description: [
      "You gain the following benefits:",
      "- Increase one Ability Score of your choice by 1, to a maximum of 20.",
      "- You gain a Talent of your choise for which you meet the prerequisites.",
    ],
    flavor: "Through intense practice, you become remarkably talented.",
  },
  {
    type: "feat",
    name: "Thrown Weapon Specialist",
    description: [
      "You gain the following benefits:",
      "- Increase your Strength or Dexterity Score by 1, to a maximum of 20.",
      "- After you make an Attack Roll with a thrown weapon, you can immediately draw another weapon with the thrown property.",
      "- When making an attack with a thrown weapon, you use your choice of your Strength or Dexterity modifier for the attack and damage rolls. You must use the same modifier for both rolls.",
      "- All weapons with the thrown property have finesse for you.",
      "- When you make a Ranged Attack with a thrown weapon, your range is doubled.",
    ],
    flavor:
      "You have extensively practiced the use of thrown weapons and made it your main combat technique.",
  },
  {
    type: "feat",
    name: "Tough",
    description: [
      "Your hit point maximum increases by an amount equal to twice your level when you gain this feat. Whenever you gain a level thereafter, your hit point maximum increases by an additional 2 Hit Points.",
    ],
    flavor:
      "Your skin is exceptionally thick and you can take a beating more than most.",
  },
  {
    type: "feat",
    name: "War Caster",
    description: [
      "You gain the following benefits:",
      "- You have Advantage on Constitution Saving Throws that you make to maintain your concentration on a spell when you take damage.",
      "- You can perform the somatic components of spells even when you have weapons or a shield in one or both hands.",
      "- When a hostile creature's movement provokes an opportunity attack from you, you can use your Reaction to cast a spell at the creature, rather than making an opportunity attack. The spell must have a casting time of 1 action and must target only that creature.",
    ],
    prerequisites: ["The ability to cast at least one spell"],
    flavor:
      "You have practiced casting spells in the midst of combat, learning techniques.",
  },
  {
    type: "feat",
    name: "Wrathful Warrior",
    description: [
      "Increase your Strength or Constitution Score by 1, to a maximum of 20.",
      "On your turn, you can enter a rage as a Bonus Action. While raging, you gain the following benefits if you aren't wearing heavy armor:",
      "- You have Advantage on Strength Checks and Strength Saving Throws.",
      "- When you make a Melee weapon Attack using Strength, you gain a +2 bonus to the damage roll.",
      "- You have resistance to bludgeoning, piercing, and slashing damage.",
      "If you are able to cast spells, you can't cast them or concentrate on them while raging. Any spell you were concentrating on immediately ends when your rage starts.",
      "Your rage lasts for 1 minute. It ends early if you are knocked unconscious or if your turn ends and you haven't attacked a hostile creature since your last turn or taken damage since then. You can also end your rage on your turn as a Bonus Action.",
      "Once you have raged, you must finish a Long Rest before you can rage again.",
      "If you're a barbarian, this feat simply grants you the Ability Score increase and an extra use of your rage per Long Rest.",
    ],
    prerequisites: ["Strength and Constitution 13 or higher"],
    minLevel: 4,
    flavor:
      "You've been taught by fierce warriors how to channel your inner rage and use it to its fullest in combat.",
  },
];
