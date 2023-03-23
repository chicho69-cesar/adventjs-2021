function countPackages(carriers: any[], carrierID: string): number {
  const [ _, packages, team ] = carriers
    .find(([ name ]) => name === carrierID);
  
  return (
    packages +
    team.reduce((total: number, member: string) => 
      total + countPackages(carriers, member)
    , 0)
  );
}