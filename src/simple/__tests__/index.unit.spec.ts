import * as contract from "../assembly";


describe("Smart Refrigerator", () => {
  it("should be able to place order for groceries upon button press", () => {
    expect(contract.getItem(0)).toStrictEqual(`apples`);
  })
});
  

// describe("Contract", () => {
//   // VIEW method tests

//   it("says hello", () => {
//     expect(contract.helloWorld()).toStrictEqual("hello world")
//   })

//   it("reads data", () => {
//     expect(contract.read("some key")).toStrictEqual("🚫 Key [ some key ] not found in storage. ( storage [ 0 bytes ] )")
//   })

//   // CHANGE method tests

//   it("saves data to contract storage", () => {
//     expect(contract.write("some-key", "some value")).toStrictEqual("✅ Data saved. ( storage [ 18 bytes ] )")
//   })
// })
