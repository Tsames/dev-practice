


function calculateSplit(total, raiders, hosts = 2, hostCut = 5, tanks = 2, tankCut = 1) {

  const cuts = (hosts * hostCut) + (tanks * tankCut);
  const cutsPercentage = cuts / 100;
  const adjustedTotal = total - (total * cutsPercentage)

  const split = adjustedTotal / raiders;
  
  console.log("$!$!$!$ GDKP Results $!$!$!$")
  console.log("")
  console.log(`The pot ended at ${total.toLocaleString("en-US")}g. After taking out host and tank cuts the pot is at ${adjustedTotal.toLocaleString("en-US") }g.`);
  console.log(` The payout for hosts is ${Math.floor(split + (total * (hostCut / 100))).toLocaleString("en-Us")}g, The host cut is ${Math.floor(total * (hostCut / 100)).toLocaleString("en-US")}g.`);
  console.log(` The payout for tanks is ${Math.ceil(split + (total * (tankCut / 100))).toLocaleString("en-Us")}g, The tank cut is ${Math.ceil(total * (tankCut / 100)).toLocaleString("en-US")}g.`);
  console.log(` The payout for all qualifying raiders is ${Math.ceil(split).toLocaleString("en-US") }g.`);
  console.log("")
  console.log("$!$!$!$!$!$!$!$!$!$!$!$!$!$!$");
  console.log("")
  console.log("The host cut is rounded down.");
  console.log(" Tank and raider cuts are rounded up to the nearest gold.");
  console.log(" If splits after rounding exceeds total pot size the difference will be covered by the hosts.")
  console.log(` Before Rounding / After Rounding ::: ${total.toLocaleString("en-US")} / ${((Math.floor(split + (total * (hostCut / 100))) * hosts) + (Math.ceil(split + (total * (tankCut / 100))) * tanks) + Math.ceil(split * (raiders - (tanks + hosts)))).toLocaleString("en-US") }`);
  console.log("")
  console.log("$!$!$!$!$!$!$!$!$!$!$!$!$!$!$")

}

calculateSplit(86000, 25);