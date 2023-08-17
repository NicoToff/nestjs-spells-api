import { SpellDataType } from "src/spells/entities/spell.entity";

export const spellData: SpellDataType[] = [
  {
    name: "Acid Splash",
    level: 0,
    school: "Conjuration",
    castingTime: "1 action",
    range: "60 feet",
    duration: "Instantaneous",
    components: "V, S",
    flavor: "You hurl a bubble of acid.",
    description:
      "Choose one creature within range, or choose two creatures within range that are within 5 feet of each other. A target must succeed on a Dexterity saving throw or take 1d6 acid damage.",
    atHigherLevels:
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
    components: "V, S",
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
    components: "V, S",
    flavor:
      "You create a ghostly, skeletal hand in the space of a creature to assail it with the chill of the grave.",
    description:
      "Make a ranged spell attack against the creature. On a hit, the target takes 1d8 necrotic damage, and it can't regain hit points until the start of your next turn. Until then, the hand clings to the target. If you hit an undead target, it also has disadvantage on attack rolls against you until the end of your next turn.",
    atHigherLevels:
      "This spell's damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8).",
    sources: ["Arcane"],
  },
];
