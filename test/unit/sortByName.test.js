const sorting = require("../../app");

describe("Books names test suit", () => {
  it("Books names should be sorted in ascending order", () => {
    expect(
      sorting.sortByName([
        "Гарри Поттер",
        "Властелин Колец",
        "Волшебник изумрудного города",
      ])
    ).toEqual([
      "Властелин Колец",
      "Волшебник изумрудного города",
      "Гарри Поттер",
    ]);
  });

  it("Same books names should not be sorted in ascending order", () => {
    expect(
      sorting.sortByName([
        "Унесенные ветром",
        "Унесенные ветром",
        "Властелиц колец",
      ])
    ).toEqual(["Унесенные ветром", "Унесенные ветром", "Властелиц колец"]);
  });
});
