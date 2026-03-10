// All data hardcoded from data.gov.sg extractions (JSON blocks in markdown were corrupted during edits)

const birthsRow = {
  '1976':42783,'1977':42616,'1978':40960,'1979':41768,
  '1980':41217,'1981':42250,'1982':42654,'1983':40585,'1984':41556,'1985':42484,
  '1986':38379,'1987':43616,'1988':52957,'1989':47669,'1990':51142,
  '1991':49114,'1992':49402,'1993':50225,'1994':49554,'1995':48635,
  '1996':48577,'1997':47333,'1998':43664,'1999':43336,'2000':46997,
  '2001':41451,'2002':40760,'2003':37485,'2004':37174,'2005':37492,
  '2006':38317,'2007':39490,'2008':39826,'2009':39570,'2010':37967,
  '2011':39654,'2012':42663,'2013':39720,'2014':42232,'2015':42185,
  '2016':41251,'2017':39615,'2018':39039,'2019':39279,'2020':38590,
  '2021':38672,'2022':35605,'2023':33541,'2024':33703,'2025':30004,
};

// 2022 Median Gross Monthly Income (excl employer CPF) from data.gov.sg
const maleInc = 4875;
const femaleInc = 4333;
const avgInc = Math.round((maleInc + femaleInc) / 2); // 4604

// NS intake estimate: males born 18 years ago
console.log('\n=== ESTIMATED NS INTAKE (males born 18 years prior) ===');
console.log('NS Year | Born Year | Total Births That Year | Est. Male NS Intake');
for (let nsYear = 1998; nsYear <= 2025; nsYear++) {
  const bornYear = String(nsYear - 18);
  const births = birthsRow[bornYear];
  if (births) {
    const maleIntake = Math.round(Number(births) / 2);
    console.log(`${nsYear} | ${bornYear} | ${births} | ${maleIntake}`);
  }
}

// NS cost calculation
console.log('\n=== NS COST ESTIMATES (NSF allowance) ===');
const avgAllowance = 1085; // average of $715 and $1455
console.log(`Using average NSF monthly allowance: $${avgAllowance}`);
console.log('NS Year | Cohort Size | Annual Cost (cohort × $1085 × 12) | 2-Year Cost');
for (let nsYear = 1998; nsYear <= 2025; nsYear++) {
  const bornYear = String(nsYear - 18);
  const births = birthsRow[bornYear];
  if (births) {
    const maleIntake = Math.round(Number(births) / 2);
    const annualCost = maleIntake * avgAllowance * 12;
    const twoYearCost = annualCost * 2;
    console.log(`${nsYear} | ${maleIntake} | $${(annualCost/1e6).toFixed(1)}M | $${(twoYearCost/1e6).toFixed(1)}M`);
  }
}

// Parental leave cost
console.log('\n=== PARENTAL LEAVE COST ESTIMATES ===');
console.log(`2022 Median Income (excl CPF): Male $${maleInc}, Female $${femaleInc}, Avg $${avgInc}`);
console.log(`400 days ≈ 13.3 months`);
console.log(`Cost per parent at median: $${avgInc} × 13.3 = $${Math.round(avgInc * 13.3)}`);

// For homemaker parents at NSF allowance
console.log(`Cost per homemaker parent at NSF rate: $${avgAllowance} × 24 months = $${avgAllowance * 24}`);

const recentYears = ['2020', '2022', '2024', '2025'];
console.log('\nYear | Births | Parental Leave Cost (all at median) | At NSF Rate');
recentYears.forEach(y => {
  const b = birthsRow[y];
  if (b) {
    const births = Number(b);
    const costMedian = births * avgInc * 13.3;
    const costNSF = births * avgAllowance * 24;
    console.log(`${y} | ${b} | $${(costMedian/1e9).toFixed(2)}B | $${(costNSF/1e9).toFixed(2)}B`);
  }
});

// === RESERVIST MAKE-UP PAY ===
// 10 work-years × 40 days = 400 days of reservist per NSman
// Make-up pay is at civilian salary rate
const reservistDays = 400;
const reservistDaysPerYear = 40;
const reservistCycles = 10;
const dailyMaleInc = maleInc / 22; // 22 working days per month
console.log('\n=== RESERVIST MAKE-UP PAY ===');
console.log(`Median male daily income: $${maleInc} / 22 = $${dailyMaleInc.toFixed(2)}/day`);
console.log(`Total reservist cost per NSman: 400 days × $${dailyMaleInc.toFixed(2)} = $${Math.round(reservistDays * dailyMaleInc)}`);

// === TOTAL LIFETIME NS COST PER MALE ===
const nsfLifetimeCost = avgAllowance * 24;
const reservistLifetimeCost = Math.round(reservistDays * dailyMaleInc);
const totalNSLifetimeCost = nsfLifetimeCost + reservistLifetimeCost;
console.log('\n=== TOTAL LIFETIME NS COST PER MALE ===');
console.log(`NSF (2 years): $${avgAllowance} × 24 = $${nsfLifetimeCost}`);
console.log(`Reservist (400 days): 400 × $${dailyMaleInc.toFixed(2)} = $${reservistLifetimeCost}`);
console.log(`TOTAL per male: $${totalNSLifetimeCost}`);

// === ANNUALIZED TOTAL NS COST (NSF + Reservist) ===
// At any given time: 2 NSF cohorts + ~10 reservist cohorts
console.log('\n=== ANNUALIZED TOTAL NS COST (NSF + RESERVIST) ===');

// For peak (2006 NSF intake, born 1988):
// NSF cohorts: 2006 + 2005 intakes
// Reservist cohorts: those who finished NSF in ~1996-2005 (born ~1976-1987)
function getReservistAnnualCost(nsYear) {
  // 10 reservist cohorts: those who finished NSF in years (nsYear-2) back to (nsYear-11)
  // They were born (year - 20) approximately
  let reservistCost = 0;
  let reservistCount = 0;
  for (let i = 2; i <= 11; i++) {
    const finishedYear = nsYear - i;
    const bornYear = String(finishedYear - 18);
    const b = birthsRow[bornYear];
    if (b) {
      const males = Math.round(Number(b) / 2);
      reservistCount += males;
      reservistCost += males * reservistDaysPerYear * dailyMaleInc;
    }
  }
  return { reservistCost, reservistCount };
}

function getNSFAnnualCost(nsYear) {
  // 2 NSF cohorts: current year + previous year intake
  let nsfCost = 0;
  let nsfCount = 0;
  for (let i = 0; i <= 1; i++) {
    const yr = nsYear - i;
    const bornYear = String(yr - 18);
    const b = birthsRow[bornYear];
    if (b) {
      const males = Math.round(Number(b) / 2);
      nsfCount += males;
      nsfCost += males * avgAllowance * 12;
    }
  }
  return { nsfCost, nsfCount };
}

console.log('NS Year | NSF Cost (2 cohorts) | Reservist Cost (10 cohorts) | TOTAL | NSF Count | Res Count');
const keyYears = [2006, 2008, 2013, 2018, 2021, 2025];
const annualData = {};
keyYears.forEach(nsYear => {
  const nsf = getNSFAnnualCost(nsYear);
  const res = getReservistAnnualCost(nsYear);
  const total = nsf.nsfCost + res.reservistCost;
  annualData[nsYear] = { ...nsf, ...res, total };
  console.log(`${nsYear} | $${(nsf.nsfCost/1e6).toFixed(1)}M (${nsf.nsfCount}) | $${(res.reservistCost/1e6).toFixed(1)}M (${res.reservistCount}) | $${(total/1e6).toFixed(1)}M | ${nsf.nsfCount} | ${res.reservistCount}`);
});

// Peak vs current comparison with full costs
console.log('\n=== PEAK vs CURRENT (FULL NS COST) ===');
const peak = annualData[2006];
const current = annualData[2025];
console.log(`Peak (2006) total annual NS cost: $${(peak.total/1e6).toFixed(1)}M`);
console.log(`Current (2025) total annual NS cost: $${(current.total/1e6).toFixed(1)}M`);
console.log(`Annual savings: $${((peak.total - current.total)/1e6).toFixed(1)}M`);
console.log(`Decline: ${((1 - current.total/peak.total)*100).toFixed(1)}%`);

// Compare to parental leave
console.log('\n=== COMPARISON: FULL NS COST vs PARENTAL LEAVE ===');
const plMedian2025 = 30004 * avgInc * 13.3;
const plNSF2025 = 30004 * avgAllowance * 24;
const nsSavings = peak.total - current.total;
console.log(`2025 NS total: $${(current.total/1e9).toFixed(2)}B`);
console.log(`2025 Parental leave (median, 13.3mo): $${(plMedian2025/1e9).toFixed(2)}B`);
console.log(`2025 Parental leave (NSF rate, 24mo): $${(plNSF2025/1e9).toFixed(2)}B`);
console.log(`NS savings (peak vs 2025): $${(nsSavings/1e6).toFixed(1)}M`);
console.log(`Savings covers ${((nsSavings/plMedian2025)*100).toFixed(1)}% of Scenario A`);
console.log(`Savings covers ${((nsSavings/plNSF2025)*100).toFixed(1)}% of Scenario B`);
