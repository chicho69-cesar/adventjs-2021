function countPackages(carriers, carrierID) {
  const [ _, packages, team ] = carriers
    .find(([ name ]) => name === carrierID);
  
  return (
    packages +
    team.reduce((total, member) => 
      total + countPackages(carriers, member)
    , 0)
  )
}

function countPackagesAlt(carriers, carrierId) {
  const found = carriers.find(carrier => carrier[0] === carrierId)
  if (!found) return 0

  const [, packages, subordinatesIds] = found
  return subordinatesIds.reduce(
    (acc, subordinateId) => acc + countPackages(carriers, subordinateId),
    packages
  )
}

module.exports = countPackages