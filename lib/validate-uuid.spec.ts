import { validateUUID } from "./validate-uuid";

describe("validateUUID", () => {
  const uuids = [
    "550e8400-e29b-41d4-a716-446655440000",
    "f47ac10b-58cc-4372-a567-0e02b2c3d479",
    "6ba7b810-9dad-11d1-80b4-00c04fd430c8",
    "7f2c0d7a-6489-46e6-95f3-3f5e195ee0c9",
    "4f6d8dd0-5eb3-4c97-914d-bd7508ee7829",
    "a0e4dc6f-6e59-4c26-b13a-7e7c88568fb9",
    "3cc56b2d-4e58-4bf4-ae51-5e2db018f9b0",
    "98b0a1e1-2b04-48f0-99e4-8bece1f2b7e0",
    "08576b21-e4bc-49f3-8b53-99e44a7d0e4a",
    "d66c6b2a-05ac-4848-9d48-dc7849d22438",
    "25a3f9db-96ee-473a-8fe2-1df68cc064b0",
    "781a7b3c-ae03-4ac6-a0a1-9f8317fde95e",
    "3644d53d-cc71-4c56-9b0b-0e15614777c5",
    "e1183c84-3a01-47d5-a102-8aa2dbf1c3a3",
    "b3f5635b-92af-40f0-b3c1-7b9af52b3686",
    "9b75c7c1-06d5-44d2-9d75-d38a17a2cb02",
    "5e0d01d2-1c9c-483a-aa29-0dd9d688f58a",
    "68855f4c-9e67-40f0-830f-60159c0633a7",
    "45745c60-7b5e-4006-8919-99cc61c4d9dd",
    "edb8c242-29d7-4fc3-8412-09fa251941d0",
  ];

  const nonUuids = [
    {},
    "Hello World",
    8,
    666n,
    [],
    true,
    false,
    null,
    undefined,
    NaN,
    () => {},
  ];

  it("should return true for any valid UUIDs", () => {
    uuids.forEach((uuid) => {
      expect(validateUUID(uuid)).toBe(true);
    });
  });

  it("should return false for any non-UUIDs", () => {
    nonUuids.forEach((nonUuid) => {
      expect(validateUUID(nonUuid as any)).toBe(false);
    });
  });
});
