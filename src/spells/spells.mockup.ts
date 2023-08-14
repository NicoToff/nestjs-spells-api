import { Spell } from "./entities/spell.entity";
import { slugify } from "../../lib/slugify";
export const mockup = [
  {
    name: "Acid Splash",
    level: 0,
    description:
      "You hurl a bubble of acid. Choose one creature within range, or choose two creatures within range that are within 5 feet of each other. A target must succeed on a Dexterity saving throw or take 1d6 acid damage. This spell’s damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6).",
  },
  {
    name: "Blade Ward",
    level: 0,
    description:
      "You extend your hand and trace a sigil of warding in the air. Until the end of your next turn, you have resistance against bludgeoning, piercing, and slashing damage dealt by weapon attacks.",
  },
];

export const spells: Spell[] = mockup.map((spell) => {
  const newSpell = new Spell();
  newSpell.slug = slugify(spell.name);
  newSpell.name = spell.name;
  newSpell.level = spell.level;
  newSpell.description = spell.description;
  return newSpell;
});
