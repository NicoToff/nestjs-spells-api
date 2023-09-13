import { safeContentForRegExp } from "./constants";

describe("safeCharForRegExp", () => {
  it("should be a RegExp", () => {
    expect(safeContentForRegExp).toBeInstanceOf(RegExp);
  });

  const tester = safeContentForRegExp.test.bind(safeContentForRegExp);

  it("should return true for alphanumerical values", () => {
    expect(tester("a")).toBe(true);
    expect(tester("A")).toBe(true);
    expect(tester("zz")).toBe(true);
    expect(tester("0")).toBe(true);
    expect(tester("19")).toBe(true);
  });

  it("should return false for an empty string", () => {
    expect(tester("")).toBe(false);
  });

  it("should return true for spaces", () => {
    expect(tester(" ")).toBe(true);
    expect(tester("  ")).toBe(true);
    expect(tester("a a")).toBe(true);
    expect(tester("0    k")).toBe(true);
  });

  it("should return true for single and double quotes", () => {
    expect(tester("'")).toBe(true);
    expect(tester('"')).toBe(true);
    expect(tester("''")).toBe(true);
    expect(tester('""')).toBe(true);
    expect(tester("'a'")).toBe(true);
    expect(tester('"a"')).toBe(true);
  });

  it("should return true for all accented characters", () => {
    expect(tester("ÀÈÌÒÙàèìòùÿ")).toBe(true);
    expect(tester("àèìòùÿ")).toBe(true);
  });

  const manySpecialChars =
    "!#$%&°≠•‘`()*+,-./:;><?=@[\\]^_`{|}~¨¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿";
  manySpecialChars.split("").forEach((char) => {
    it(`should return false for ${char}`, () => {
      expect(tester(char)).toBe(false);
    });
  });

  const manyEmojis =
    "👍👎👌👀👁👂👃👄👅👆👇👈👉👊👋👏👐👑👒👓👔👕👖👗👘👙👚👛👜👝👞👟👠👡👢👣👤👥👦👧👨👩👪👫👬👭👮👯👰👱👲👳👴👵👶👷👸👹👺👻👼👽👾👿💀💁💂💃💄💅💆💇💈💉💊💋💌💍💎💏💐💑💒💓💔💕💖💗💘💙💚💛💜💝💞💟💠💡💢💣💤💥💦💧💨💩💪💫💬💭💮💯💰💱💲💳💴💵💶💷💸💹💺💻💼💽💾💿📀📁📂📃📄📅📆📇📈📉📊📋📌📍📎📏📐📑📒📓📔📕📖📗📘📙📚📛📜📝📞📟📠📡📢📣📤📥📦📧📨📩📪📫📬📭📮📯📰📱📲📳📴📵📶📷📸📹📺📻📼";
  manyEmojis.split("").forEach((char) => {
    it(`should return false for emoji ${char}`, () => {
      expect(tester(char)).toBe(false);
    });
  });
});
