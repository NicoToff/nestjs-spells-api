import { CreateSpellDto } from "../entities/create-spell.dto";

export const SPELL_DATA: CreateSpellDto[] = [
  {
    name: "Acid Splash",
    level: 0,
    school: "conjuration",
    castingTime: "Action",
    range: "60 feet",
    area: "5-foot-radius sphere",
    duration: "Instantaneous",
    components: ["v", "s"],
    flavor:
      "A bubble of acid materializes around your foe and bursts in a spray.",
    description: ["On a hit, a creature takes 1d8 acid damage."],
    damageTypes: ["acid"],
    cantripUpgrade:
      "This spell's damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8).",
    savingThrow: "dex",
    sources: ["arcane"],
    group: "Elemental Rudiment",
    tags: ["area"],
  },
  {
    name: "Bang",
    level: 0,
    school: "evocation",
    castingTime: "Action",
    range: "120 feet",
    duration: "Instantaneous",
    components: ["v", "m"],
    material: "a tiny drum",
    flavor: "A loud sound bursts your opponent's ears.",
    description: [
      "On a hit, a creature takes 1d8 thunder damage and is Deafened until the start of your next turn.",
    ],
    damageTypes: ["thunder"],
    cantripUpgrade:
      "This spell's damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8).",
    savingThrow: "con",
    sources: ["arcane"],
    group: "Elemental Rudiment",
    tags: ["ranged"],
  },
  {
    name: "Blade Ward",
    level: 0,
    school: "abjuration",
    castingTime: "Reaction, taken when an enemy attacks you in Melee",
    range: "Self",
    duration: "Instantaneous",
    components: ["v", "s"],
    flavor: "You snap your fingers, then trace a sigil of warding in the air.",
    description: ["A Melee Attack against you becomes Hard."],
    sources: ["arcane"],
    tags: ["debuff"],
  },
  {
    name: "Censure",
    level: 0,
    school: "evocation",
    castingTime: "Action",
    range: "60 feet",
    duration: "Until the start of your next turn",
    components: ["v", "s"],
    flavor: "You warn a creature of dire consequence if it dares to move.",
    description: [
      "On a hit, if the creature willingly moves, it takes 2d8 radiant damage.",
      "The creature is aware of this effect.",
    ],
    damageTypes: ["radiant"],
    cantripUpgrade:
      "This spell's damage increases by 2d8 when you reach 5th level (4d8), 11th level (6d8), and 17th level (8d8).",
    savingThrow: "wis",
    tags: ["ranged", "control"],
    group: "Blessed Radiance",
    sources: ["divine"],
  },
  {
    name: "Chill Touch",
    level: 0,
    school: "necromancy",
    castingTime: "Action",
    range: "120 feet",
    duration: "1 round",
    components: ["v"],
    flavor:
      "You create a ghostly, skeletal hand to strangle your opponent with the chill of the grave.",
    description: [
      "On a hit, the creature takes 1d10 necrotic damage, and it can't regain hit points until the start of your next turn.",
      "If you hit an undead creature, it also has disadvantage on Attack Rolls against you until then.",
    ],
    damageTypes: ["necrotic"],
    cantripUpgrade:
      "This spell's damage increases by 1d10 when you reach 5th level (2d10), 11th level (3d10), and 17th level (4d10).",
    sources: ["arcane"],
    tags: ["ranged", "debuff"],
  },
  {
    name: "Mending",
    level: 0,
    school: "transmutation",
    castingTime: "1 minute",
    range: "Touch",
    duration: "Instantaneous",
    components: ["v", "s", "m"],
    material: "two lodestones",
    flavor:
      "As chips of wood appear out of thin air, the shallow dent in your cart repairs before everyone's eyes.",
    description: [
      "Repair a break or tear in a nonmagical nonliving object on a surface of up to 1 foot in width and height.",
    ],
    cantripUpgrade:
      "The width and height of the surface increases to 2 feet when you reach 5th level, 5 feet at 11th level, and 20 feet at 17th level.",
    sources: ["arcane"],
  },
  {
    name: "Druidcraft",
    level: 0,
    school: "divination",
    castingTime: "Action",
    range: "Self",
    duration: "Instantaneous",
    components: ["v", "s"],
    flavor: "Smell the air, feel the wind, and read the clouds...",
    description: [
      "Choose one of the following effect:",
      "- You get a vision of the weather within a 1-mile radius for the next 24 hours.",
      "- You instantly make a flower blossom, a seed pod open, or a leaf bud bloom.",
    ],
    cantripUpgrade:
      "The location of the weather forecast increases to a 5-mile radius when you reach 5th level, 10-mile radius at 11th level, and 100-mile radius at 17th level. The number of plant you can affect increases to two at 5th level, ten at 11th level, and twenty-five at 17th level.",
    sources: ["primal"],
    group: "Nature Craft",
  },
  {
    name: "Light",
    level: 0,
    school: "conjuration",
    castingTime: "Action",
    range: "Touch",
    duration: "1 hour",
    components: ["v", "m"],
    material: "a firefly or phosphorescent moss",
    flavor: "You conjure a source of light on any surface.",
    description: [
      "The surface emits bright light in a 20-foot radius and dim light for an additional 20 feet.",
    ],
    cantripUpgrade:
      "Both radius increase to 40 feet when you reach 5th level, 60 feet at 11th level, and 120 feet at 17th level.",
    sources: ["arcane", "divine", "primal"],
  },
  {
    name: "Prestidigitation",
    level: 0,
    school: "transmutation",
    castingTime: "Action",
    range: "30 feet",
    duration: "See description",
    components: ["v", "s"],
    flavor: "Magic can be powerful, but it can also amuse.",
    description: [
      "You create one of the following magical effects within range:",
      "- You instantly clean or soil an object no larger than 1 cubic foot.",
      "- You instantly light or snuff out a candle, a torch, or a small campfire.",
      "- You create a nonmagical trinket or an illusory image that can fit in your hand and that lasts until the start of your next turn.",
      "- Until the start of your next turn, you create an harmless sensory effect, such as a shower of sparks, a puff of wind, faint musical notes, an odd odor, falling leaves, or similar phenomenon.",
      "- You chill or warm, a 5-foot cube area for 1 hour.",
      "- You flavor up 1 cubic foot of nonliving material for 1 hour.",
      "- You make a small mark appear on an object or surface for 1 hour.",
      "If you cast this spell multiple times, you can have up to five of its non-instantaneous effects active at a time. You can dismiss any effect as an action.",
    ],
    cantripUpgrade:
      "The maximum amount of effects you can have active at a time increases to 10 when you reach 5th level, 30 at 11th level, and there is no limit starting at 17th level.",
    sources: ["arcane", "primal"],
    group: "Nature Craft",
  },
  {
    name: "Fire Bolt",
    level: 0,
    school: "evocation",
    castingTime: "Action",
    range: "120 feet",
    duration: "Instantaneous",
    components: ["v", "s"],
    flavor: "You hurl a searing mote of magical fire at your foe.",
    description: [
      "On a hit, the creature takes 1d12 fire damage.",
      "A flammable object hit by this spell ignites if it isn't being worn or carried.",
    ],
    damageTypes: ["fire"],
    tags: ["ranged"],
    cantripUpgrade:
      "This spell's damage increases by 1d12 when you reach 5th level (2d12), 11th level (3d12), and 17th level (4d12).",
    sources: ["arcane"],
    group: "Elemental Rudiment",
  },
  {
    name: "Poison Spray",
    level: 0,
    school: "necromancy",
    castingTime: "Action",
    range: "15 feet",
    duration: "Instantaneous",
    components: ["v", "s"],
    flavor: "You spray a mist of toxic energy on your enemy.",
    description: [
      "A creature doesn't benefit from half-cover against this spell.",
      "On a hit, the creature takes 2d8 poison damage.",
    ],
    damageTypes: ["poison"],
    cantripUpgrade:
      "This spell's damage increases by 2d8 when you reach 5th level (4d8), 11th level (6d8), and 17th level (8d8).",
    tags: ["ranged"],
    sources: ["arcane", "primal"],
  },
  {
    name: "Ray of Frost",
    level: 0,
    school: "evocation",
    castingTime: "Action",
    range: "60 feet",
    duration: "Instantaneous",
    components: ["v", "s"],
    flavor: "A frigid beam of blue-white light streaks toward your enemy.",
    description: [
      "On a hit, the creature takes 1d10 cold damage, and its speed is reduced by 10 feet until the start of your next turn.",
    ],
    damageTypes: ["cold"],
    cantripUpgrade:
      "This spell's damage increases by 1d10 when you reach 5th level (2d10), 11th level (3d10), and 17th level (4d10).",
    tags: ["ranged", "debuff"],
    sources: ["arcane"],
    group: "Elemental Rudiment",
  },
  {
    name: "Sacred Flame",
    level: 0,
    school: "evocation",
    castingTime: "Action",
    range: "60 feet",
    duration: "Instantaneous",
    components: ["v"],
    flavor: "Bright flames are called from the heavens to engulf your foe.",
    description: [
      "A creature doesn't benefit from half-cover against this spell.",
      "On a hit, the creature takes 1d10 radiant damage.",
    ],
    cantripUpgrade:
      "This spell's damage increases by 1d10 when you reach 5th level (2d10), 11th level (3d10), and 17th level (4d10).",
    damageTypes: ["radiant"],
    tags: ["ranged"],
    savingThrow: "dex",
    group: "Blessed Radiance",
    sources: ["divine"],
  },
  {
    name: "Shillelagh",
    level: 0,
    school: "transmutation",
    castingTime: "Bonus Action",
    range: "Touch",
    duration: "1 minute",
    components: ["v", "s", "m"],
    material: "mistletoe, a shamrock leaf, and a club or quarterstaff",
    flavor: "You imbue a wooden weapon with the power of nature.",
    description: [
      "You can use your Spellcasting Ability instead of Strength for the Attack Rolls and damage rolls of Melee Attacks using the weapon.",
      "The weapon's damage die becomes a d10 and you can choose to replace its damage type with radiant damage when you cast the spell.",
      "The spell ends if you cast it again or if you let go of the weapon.",
    ],
    cantripUpgrade:
      "The damage die changes when you reach certain druid levels: 1d12 at 5th level, 2d8 at 11th level, and 2d10 at 17th level.",
    damageTypes: ["radiant"],
    tags: ["melee", "buff"],
    sources: ["druid"],
  },
  {
    name: "Shocking Grasp",
    level: 0,
    school: "evocation",
    castingTime: "Action",
    range: "Touch",
    duration: "Instantaneous",
    components: ["s"],
    flavor:
      "Lightning springs from your hand to deliver a shock to a creature.",
    description: [
      "Your Spellcasting Attempt is Easy if the creature is made of metal, or wearing metal armor.",
      "On a hit, the creature takes 1d10 lightning damage, and it can't take reactions until the start of its next turn.",
    ],
    damageTypes: ["lightning"],
    cantripUpgrade:
      "This spell's damage increases by 1d10 when you reach 5th level (2d10), 11th level (3d10), and 17th level (4d10).",
    tags: ["melee", "debuff"],
    sources: ["arcane"],
    group: "Elemental Rudiment",
  },
  {
    name: "Spare the Dying",
    level: 0,
    school: "necromancy",
    castingTime: "Action",
    range: "Touch",
    duration: "Instantaneous",
    components: ["s"],
    flavor:
      "You channel positive energy in your hands to stabilize a dying creature.",
    description: [
      "The creature becomes stable. It can spend a Hit Die and roll it to regain an amount of Hit Points equal to the roll + its Constitution modifier (minimum of 1).",
    ],
    tags: ["heal"],
    sources: ["divine"],
  },
  {
    name: "True Strike",
    level: 0,
    school: "divination",
    castingTime: "Action",
    range: "Self",
    duration: "Instantaneous",
    components: ["s", "m"],
    material: "the weapon you use for the Attack Roll",
    flavor: "A flash of magical insight guides your strike.",
    description: [
      "You make an Attack Roll instead of a Spellcasting Attempt to cast this spell. The Attack Roll and damage roll is made using your Spellcasting Ability Modifier.",
      "On a hit, you deal damage normally, but you can choose to replace the weapon's damage type with force damage.",
    ],
    sources: ["arcane"],
    cantripUpgrade:
      "The damage of the Attack provided by this spell increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6).",
    tags: ["melee", "ranged", "buff"],
    damageTypes: ["force"],
  },
  {
    name: "Veil",
    level: 0,
    school: "abjuration",
    castingTime: "Action",
    range: "60 feet",
    duration: "1 minute, or until hit",
    components: ["v", "s"],
    flavor: "You wreathe a creature with a protective veil of radiant energy.",
    description: [
      "The creature glows, shedding bright light in a 5-foot radius and dim light for an additional 5 feet.",
      "While glowing, if the creature is hit by a Melee Attack or Spell, the attacker takes 1d12 radiant damage and this spell ends.",
      "An unwilling creature can try to resist this spell.",
    ],
    damageTypes: ["radiant"],
    cantripUpgrade:
      "This spell's damage increases by 1d12 when you reach 5th level (2d12), 11th level (3d12), and 17th level (4d12).",
    savingThrow: "wis",
    tags: ["buff"],
    group: "Blessed Radiance",
    sources: ["divine"],
  },
  {
    name: "Vicious Mockery",
    level: 0,
    school: "enchantment",
    castingTime: "Action",
    range: "60 feet",
    duration: "Instantaneous",
    components: ["v"],
    flavor: "You unleash a string of insults laced with subtle enchantments.",
    description: [
      "On a hit, the creature takes 1d6 psychic damage, and it has disadvantage on the next d20 Test it makes as an Action or Bonus Action before the end of its next turn.",
    ],
    damageTypes: ["psychic"],
    cantripUpgrade:
      "This spell's damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6).",
    savingThrow: "wis",
    sources: ["bard"],
    tags: ["ranged", "debuff"],
  },
  {
    name: "Wind Whisper",
    level: 0,
    school: "divination",
    castingTime: "1 minute",
    range: "Self",
    area: "Up to 4-mile radius",
    concentration: true,
    duration: "Until dispelled",
    components: ["v", "s", "m"],
    material: "enchanted herbs",
    flavor:
      "You enter a trance and listen to primal energy transmitted through the wind.",
    description: [
      "You are uncounscious for the duration, except you can take an action to end the spell.",
      "While in the trance, you can receive and broadcast emotions to and from creatures using this spell or similar magic. Nature itself sends primal energy that you can perceive with this spell.",
      "This spell doesn't allow you to know the location of the creatures you communicate with.",
      "The communication isn't instantaneous. It takes a round for an emotion to travel 1 mile (i.e. it takes a minute to travel 10 miles).",
    ],
    sources: ["primal"],
    cantripUpgrade:
      "This spell's maximum radius increases to 15 miles when you reach 5th level, 100 miles at 11th level, and 1,000 miles at 17th level. Starting at 10th level, the communication can be as articulate as normal speech.",
  },
  {
    name: "Cure Wounds",
    level: 1,
    school: "evocation",
    castingTime: "Action",
    range: "Touch",
    duration: "Instantaneous",
    components: ["v", "s"],
    flavor: "You channel positive energy to heal a creature's wounds.",
    description: [
      "The creature regains a number of Hit Points equal to 1d12 + your Spellcasting Ability Modifier.",
    ],
    atHigherLevels:
      "When you cast this spell using a spell slot of 2nd level or higher, the healing increases by 1d12 for each slot level above 1st.",
    tags: ["heal"],
    sources: ["divine", "primal"],
  },
  {
    name: "Detect Magic",
    level: 1,
    school: "divination",
    castingTime: "Action",
    range: "Self",
    area: "30-foot radius sphere",
    concentration: true,
    ritual: true,
    duration: "10 minutes",
    components: ["v", "s"],
    flavor: "Your senses awaken to the mystical tapestry that surrounds you.",
    description: [
      "You see a faint aura around any visible creature or object that bears magic.",
      "As an action, you can learn the school of magic of an aura, if it has one.",
    ],
    atHigherLevels:
      "For each spell slot above 1st level, the radius of the sphere increases by 15 feet.",
    group: "Sense the Unseen",
    sources: ["arcane", "divine", "primal"],
  },
  {
    name: "Detect Metal and Mineral",
    level: 1,
    school: "divination",
    castingTime: "Action",
    range: "Self",
    area: "10-foot radius sphere",
    concentration: true,
    ritual: true,
    duration: "10 minutes",
    components: ["v", "s"],
    flavor:
      "Throuh the toughest material, you sense the presence of metals and minerals.",
    description: [
      "You perceive metals and minerals and can recognize them instantaneously if you are familiar with them.",
    ],
    atHigherLevels:
      "For each spell slot above 1st level, the radius of the sphere increases by 5 feet.",
    group: "Sense the Unseen",
    sources: ["arcane", "primal"],
  },
  {
    name: "Detect Life",
    level: 1,
    school: "divination",
    castingTime: "Action",
    range: "Self",
    area: "60-foot radius sphere",
    ritual: true,
    duration: "Instantaneous",
    components: ["v", "s"],
    flavor:
      "In a flash, you sense the presence of living creatures around you.",
    description: [
      "You perceive living creatures and can recognize their Creature Type if you are familiar with it.",
    ],
    atHigherLevels:
      "For each spell slot above 1st level, the radius of the sphere increases by 30 feet.",
    group: "Sense the Unseen",
    sources: ["primal"],
  },
  {
    name: "Detect Poison and Disease",
    level: 1,
    school: "divination",
    castingTime: "Action",
    range: "Self",
    area: "30-foot radius sphere",
    concentration: true,
    ritual: true,
    duration: "10 minutes",
    components: ["v", "s", "m"],
    material: "a yew leaf",
    flavor: "The presence of illness becomes obvious in a timely manner.",
    description: [
      "You perceive poisons, poisonous creatures, or diseases and can recognize them instantaneously if you are familiar with them.",
    ],
    atHigherLevels:
      "For each spell slot above 1st level, the radius of the sphere increases by 15 feet.",
    group: "Sense the Unseen",
    sources: ["divine", "primal"],
  },
  {
    name: "Shield",
    level: 1,
    school: "abjuration",
    castingTime: "Reaction, taken right before you take damage",
    range: "Self",
    duration: "Until the start of your next turn",
    components: ["v", "s"],
    flavor: "You raise a magical barrier to protect yourself.",
    description: [
      "You have +2 bonus to AC.",
      "In addition, you take no damage from spells in the Magic Missile group.",
    ],
    atHigherLevels:
      "For each spell slot above 1st level, the bonus to AC increases by 1.",
    sources: ["arcane"],
    group: "Barrier",
    tags: ["buff"],
  },
  {
    name: "Absorb Elements",
    level: 1,
    school: "abjuration",
    castingTime: "Reaction, taken right before you take damage",
    range: "Self",
    duration: "Until the start of your next turn",
    components: ["s"],
    flavor: "Your skin briefly becomes one with the elements.",
    description: [
      "You are Resistant against the elemental type of your choice: acid, cold, fire, lightning, or thunder.",
    ],
    atHigherLevels:
      "For each spell slot above 1st level, you can make an extra creature within 5 feet of you Resistant against the chosen elemental type.",
    sources: ["arcane", "primal"],
    group: "Barrier",
    tags: ["buff"],
  },
  {
    name: "Goo",
    level: 1,
    school: "abjuration",
    castingTime: "Reaction, taken right before you take damage",
    range: "Self",
    duration: "Until the start of your next turn",
    components: ["v", "s"],
    flavor:
      "The air around you becomes thick and absorbs the impact of any attack.",
    description: ["You have Absorb all damage 2."],
    atHigherLevels:
      "For each spell slot above 1st level, the Absorb all damage increases by 1.",
    sources: ["arcane"],
    group: "Barrier",
    tags: ["buff"],
  },
  {
    name: "Darts",
    level: 1,
    school: "evocation",
    castingTime: "Action",
    range: "120 feet",
    components: ["v", "s"],
    duration: "Instantaneous",
    flavor: "Darts of energy erupt from your palms and shoot without warning.",
    description: [
      "This spell always hits (don't roll against the Target).",
      "You create three darts that deal 1d4+1 force damage each.",
      "The darts hit simultaneously and you can direct them to hit one creature or several.",
    ],
    damageTypes: ["force"],
    atHigherLevels:
      "For each spell slot above 1st level, you create an additional dart.",
    sources: ["arcane"],
    group: "Magic Missile",
    tags: ["ranged"],
  },
  {
    name: "Arrow",
    level: 1,
    school: "evocation",
    castingTime: "Action",
    range: "300 feet",
    components: ["v", "s"],
    duration: "Instantaneous",
    flavor:
      "You create an immense arrow of pure energy and shoot it with high precision.",
    description: [
      "This spell always hits (don't roll against the Target).",
      "You create an arrow that deals 3d6+3 force damage.",
    ],
    damageTypes: ["force"],
    atHigherLevels:
      "For each spell slot above 1st level, the damage increases by 1d6+1.",
    sources: ["arcane"],
    group: "Magic Missile",
    tags: ["ranged"],
  },
  {
    name: "Fireball",
    level: 3,
    school: "evocation",
    castingTime: "Action",
    range: "150 feet",
    area: "15-foot-radius sphere",
    duration: "Instantaneous",
    components: ["v", "s", "m"],
    material: "a tiny ball of bat guano and sulfur",
    flavor:
      "A bright streak flashes from your pointing finger into the distance and then blossoms with a low roar into an explosion of flame.",
    description: [
      "On a hit, a creature takes 8d6 fire damage. On a miss, it takes half as much damage.",
    ],
    damageTypes: ["fire"],
    atHigherLevels:
      "For each spell slot above 3rd level, the damage increases by 1d6 and the radius of the sphere increases by 5 feet (to a maximum of 30 feet at 6th level).",
    savingThrow: "dex",
    sources: ["arcane"],
    group: "Elemental Torrent",
    tags: ["area"],
  },
  {
    name: "Lightning Bolt",
    level: 3,
    school: "evocation",
    castingTime: "Action",
    range: "Self",
    area: "120-foot long, 5-foot wide line",
    duration: "Instantaneous",
    components: ["v", "s", "m"],
    material: "a bit of fur and a rod of amber, crystal, or glass",
    flavor: "A stroke of lightning blasts straight out of you.",
    description: [
      "On a hit, a creature takes 5d12 lightning damage. On a miss, it takes half as much damage.",
    ],
    damageTypes: ["lightning"],
    atHigherLevels:
      "For each spell slot above 3rd, you can evoke an additional line for each slot level above 3rd (to a maximum of four at 6th level) to increase the area of effect of this spell. The damage also increases to 6d12 for a 4th-level slot and 7d12 for a 6th-level slot.",
    savingThrow: "dex",
    sources: ["arcane"],
    group: "Elemental Torrent",
    tags: ["area"],
  },
  {
    name: "Friends",
    level: 0,
    school: "enchantment",
    castingTime: "Action",
    range: "Self",
    duration: "Concentration, up to 10 minute",
    components: ["s", "m"],
    material: "some makeup",
    flavor: "You attempt to befriend a creature.",
    description: [
      "Choose a creature that isn't hostile towards you. You have Advantage on your next Influence Check against the creature. If your Influence Check fails, the creature realizes that you used magic to influence its mood and can become hostile towards you.",
      "The spell ends early if the target takes damage or if you make a hostile d20 Tests, deal damage, or force anyone to make a Saving Throw.",
    ],
    sources: ["arcane"],
    tags: ["buff"],
  },
  {
    name: "Frozen Cube",
    level: 3,
    school: "evocation",
    castingTime: "Action",
    range: "150 feet",
    area: "25-foot cube",
    duration: "Instantaneous",
    components: ["v", "s", "m"],
    material: "a drop of water",
    flavor: "You create a cube of ice that explodes outward in a frigid blast.",
    description: [
      "On a hit, a creature takes 12d4 cold damage and has its speed halved until the start of your next turn.",
      "On a miss, a creature takes half as much damage and its speed isn't reduced.",
    ],
    damageTypes: ["cold"],
    atHigherLevels:
      "For each spell slot above 3rd level, the damage increases by 2d4 and the width of the cube increases by 5 feet (to a maximum of 40 feet at 6th level).",
    savingThrow: "con",
    sources: ["arcane"],
    group: "Elemental Torrent",
    tags: ["area"],
  },
  {
    name: "Deadly Feast",
    level: 5,
    school: "necromancy",
    castingTime: "Action",
    range: "Self",
    area: "600-foot-radius sphere",
    duration: "24 hours",
    components: ["v", "s", "m"],
    material: "a flask of poison, that the spell consumes",
    flavor: "You bring death the fools that dare to eat spoiled meat.",
    description: [
      "All food and drinks become poisonous. A creature that ingests any of this poison must make a Constitution Saving Throw or take 10d10 poison damage, or half as much damage on a successful save.",
    ],
    atHigherLevels:
      "For each spell slot above 5th level, the area of effect increases by 600 feet.",
    savingThrow: "con",
    sources: ["arcane"],
    group: "Blighted Harvest",
    tags: ["area"],
    damageTypes: ["poison"],
    ritual: true,
  },
];

// For reference, actual sphere size are: https://i.imgur.com/7RXyGqi.png
