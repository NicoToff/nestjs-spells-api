import { CreateSpellDto } from "../entities/create-spell.dto";

export const SPELL_DATA: CreateSpellDto[] = [
  {
    name: "Acid Splash",
    level: 0,
    school: "Conjuration",
    castingTime: "1 action",
    range: "60 feet",
    duration: "Instantaneous",
    components: "V",
    flavor: "You hurl a bubble of acid.",
    description:
      "Choose one creature within range, or choose two creatures within range that are within 5 feet of each other. A target must succeed on a Dexterity saving throw or take 1d6 acid damage.",
    cantripUpgrade:
      "This spell's damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6).",
    sources: ["Arcane"],
  },
  {
    name: "Blade Ward",
    level: 0,
    school: "Abjuration",
    castingTime: "1 action",
    range: "Self",
    duration: "1 round",
    components: "V",
    flavor: "You extend your hand and trace a sigil of warding in the air.",
    description:
      "Until the end of your next turn, you have resistance against bludgeoning, piercing, and slashing damage dealt by weapon attacks.",
    sources: ["Arcane"],
  },
  {
    name: "Chill Touch",
    level: 0,
    school: "Necromancy",
    castingTime: "1 action",
    range: "120 feet",
    duration: "1 round",
    components: "V",
    flavor:
      "You create a ghostly, skeletal hand in the space of a creature to assail it with the chill of the grave.",
    description:
      "Make a ranged spell attack against the creature. On a hit, the target takes 1d8 necrotic damage, and it can't regain hit points until the start of your next turn. Until then, the hand clings to the target. If you hit an undead target, it also has disadvantage on attack rolls against you until the end of your next turn.",
    cantripUpgrade:
      "This spell's damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8).",

    sources: ["Arcane"],
  },
  {
    name: "Ray of Frost",
    level: 0,
    school: "Evocation",
    castingTime: "1 action",
    range: "60 feet",
    duration: "Instantaneous",
    components: "V",
    flavor: "A frigid beam of blue-white light streaks toward your enemy.",
    description:
      "Make a ranged spell attack against the target. On a hit, it takes 1d8 cold damage, and its speed is reduced by 10 feet until the start of your next turn.",
    cantripUpgrade:
      "This spell's damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8).",
    sources: ["Arcane"],
  },
  {
    name: "Fireball",
    level: 3,
    school: "Evocation",
    castingTime: "1 action",
    range: "150 feet",
    area: "15-foot-radius sphere",
    duration: "Instantaneous",
    components: "V, S, M (a tiny ball of bat guano and sulfur)",
    flavor:
      "A bright streak flashes from your pointing finger into the distance and then blossoms with a low roar into an explosion of flame.",
    description:
      "Each creature in the area must make a Dexterity saving throw. A target takes 8d6 fire damage on a failed save, or half as much damage on a successful one.",
    atHigherLevels:
      "When you cast this spell using a spell slot of 4th level or higher, the radius of the sphere increases by 5 feet for each slot level above 3rd (to a maximum of 30 feet at 6th level) and the damage increases by 1d6 for each slot level above 3rd (to a maximum of 11d6 at 6th level).",
    sources: ["Arcane"],
    group: "Elemental Torrents",
  },
  {
    name: "Lightning Bolt",
    level: 3,
    school: "Evocation",
    castingTime: "1 action",
    range: "Self",
    area: "120-foot long, 5-foot wide line",
    duration: "Instantaneous",
    components: "V, S, M (a bit of fur and a rod of amber, crystal, or glass)",
    flavor: "A stroke of lightning blasts straight out of you.",
    description:
      "Each creature in the area must make a Dexterity saving throw. A creature takes 5d12 lightning damage on a failed save, or half as much damage on a successful one.",
    atHigherLevels:
      "When you cast this spell using a spell slot of 4th level or higher, you can evoke an additional line for each slot level above 3rd (to a maximum of four at 6th level) to increase the area of effect of this spell. The damage also increases to 6d12 for a 4th-level slot and 7d12 for a 6th-level slot.",
    sources: ["Arcane"],
    group: "Elemental Torrents",
  },
  {
    name: "Frozen Cube",
    level: 3,
    school: "Evocation",
    castingTime: "1 action",
    range: "150 feet",
    area: "25-foot cube",
    duration: "Instantaneous",
    components: "V, S, M (droplets of water)",
    flavor: "You create a cube of ice that explodes outward in a frigid blast.",
    description:
      "Each creature in the area must make a Constitution saving throw. On a failed save, a target takes 12d4 cold damage and has its speed halved until the start of your next turn. On a successful save, a target takes half as much damage and its speed isn't reduced.",
    atHigherLevels:
      "When you cast this spell using a spell slot of 4th level or higher, the width of the cube increases by 5 feet for each slot level above 3rd (to a maximum of 40 feet at 6th level) and the damage increases by 2d4 for each slot level above 3rd (to a maximum of 18d4 at 6th level).",
    sources: ["Arcane"],
    group: "Elemental Torrents",
  },
];

// For reference, actual sphere size are: https://i.imgur.com/7RXyGqi.png

/* Complete emplate for spell data
  {
    name: null,
    level: null,
    school: null,
    castingTime: null,
    range: null,
    area: null,
    duration: null,
    components: null,
    concentration: null,
    ritual: null,
    flavor: null,
    description: null,      
    cantripUpgrade: null,
    atHigherLevels: null,
    sources: null,
    group: null,
  },
*/
