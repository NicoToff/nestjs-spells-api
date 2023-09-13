import { CreateSpellDto } from "../entities/create-spell.dto";

export const SPELL_DATA: CreateSpellDto[] = [
  {
    name: "Wind Whisper",
    level: 0,
    school: "divination",
    castingTime: "1 minute",
    range: "Self",
    area: "Up to 4-mile radius",
    concentration: true,
    duration: "Until dispelled",
    components: ["v", "s"],
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
    name: "Acid Splash",
    level: 0,
    school: "conjuration",
    castingTime: "1 action",
    range: "60 feet",
    duration: "Instantaneous",
    components: ["v"],
    flavor: "You hurl a bubble of acid.",
    description: [
      "You can choose two creatures as target for this spell if they are within 5 feet of each other.",
      "On a hit, a creature takes 1d6 acid damage.",
    ],
    damageTypes: ["acid"],
    cantripUpgrade:
      "This spell's damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6).",
    // defense: "dex",
    sources: ["arcane"],
  },
  {
    name: "Blade Ward",
    level: 0,
    school: "abjuration",
    castingTime: "1 action",
    range: "Self",
    duration: "1 round",
    components: ["v"],
    flavor: "You extend your hand and trace a sigil of warding in the air.",
    description: [
      "You are Resistant against bludgeoning, piercing, and slashing damage dealt by weapon attacks until the end of your next turn.",
    ],
    sources: ["arcane"],
  },
  {
    name: "Chill Touch",
    level: 0,
    school: "necromancy",
    castingTime: "1 action",
    range: "120 feet",
    duration: "1 round",
    components: ["v"],
    flavor:
      "You create a ghostly, skeletal hand to strangle your opponent with the chill of the grave.",
    description: [
      "On a hit, the creature takes 1d8 necrotic damage, and it can't regain hit points until the end of your next turn.",
      "If you hit an undead target, it also has disadvantage on attack rolls against you until then.",
    ],
    damageTypes: ["necrotic"],
    cantripUpgrade:
      "This spell's damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8).",
    // defense: "ac",
    sources: ["arcane"],
  },
  {
    name: "Ray of Frost",
    level: 0,
    school: "evocation",
    castingTime: "1 action",
    range: "60 feet",
    duration: "Instantaneous",
    components: ["v"],
    flavor: "A frigid beam of blue-white light streaks toward your enemy.",
    description: [
      "On a hit, the creature takes 1d8 cold damage, and its speed is reduced by 10 feet until the end of your next turn.",
    ],
    damageTypes: ["cold"],
    cantripUpgrade:
      "This spell's damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8).",
    // defense: "ac",
    sources: ["arcane"],
  },
  {
    name: "Fireball",
    level: 3,
    school: "evocation",
    castingTime: "1 action",
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
      "When you cast this spell using a spell slot of 4th level or higher, the radius of the sphere increases by 5 feet for each slot level above 3rd (to a maximum of 30 feet at 6th level) and the damage increases by 1d6 for each slot level above 3rd (to a maximum of 11d6 at 6th level).",
    // defense: "dex",
    sources: ["arcane"],
    group: "Elemental Torrents",
  },
  {
    name: "Lightning Bolt",
    level: 3,
    school: "evocation",
    castingTime: "1 action",
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
      "When you cast this spell using a spell slot of 4th level or higher, you can evoke an additional line for each slot level above 3rd (to a maximum of four at 6th level) to increase the area of effect of this spell. The damage also increases to 6d12 for a 4th-level slot and 7d12 for a 6th-level slot.",
    // defense: "dex",
    sources: ["arcane"],
    group: "Elemental Torrents",
  },
  {
    name: "Frozen Cube",
    level: 3,
    school: "evocation",
    castingTime: "1 action",
    range: "150 feet",
    area: "25-foot cube",
    duration: "Instantaneous",
    components: ["v", "s", "m"],
    material: "a drop of water",
    flavor: "You create a cube of ice that explodes outward in a frigid blast.",
    description: [
      "On a hit, a creature takes 12d4 cold damage and has its speed halved until the end of your next turn.",
      "On a miss, a target takes half as much damage and its speed isn't reduced.",
    ],
    damageTypes: ["cold"],
    atHigherLevels:
      "When you cast this spell using a spell slot of 4th level or higher, the width of the cube increases by 5 feet for each slot level above 3rd (to a maximum of 40 feet at 6th level) and the damage increases by 2d4 for each slot level above 3rd (to a maximum of 18d4 at 6th level).",
    // defense: "con",
    sources: ["arcane"],
    group: "Elemental Torrents",
  },
];

// For reference, actual sphere size are: https://i.imgur.com/7RXyGqi.png
