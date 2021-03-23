const SimpleStorage = artifacts.require("SimpleStorage");

contract("SimpleStorage", () => {
  it("...should store the integer 89.", async () => {
    const contractInstance = await SimpleStorage.deployed();
    await contractInstance.set(89);
    const storedInt = await contractInstance.storage();

    assert.equal(storedInt, 89, "The integer 89 was not stored.");
  });
});
