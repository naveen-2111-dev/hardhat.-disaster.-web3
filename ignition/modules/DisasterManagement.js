const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("DisasterModule", (m) => {
  const Disaster = m.contract("DisasterManagements", [], {
  });

  return { Disaster };
});
