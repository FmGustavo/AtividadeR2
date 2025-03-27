// Dados extraídos do Excel (substitua pelos seus valores reais)

const X = [1960, 1961, 1962, 1963, 1964, 1965, 1966, 1967, 1968, 1969, 1970, 1971, 1972, 1973,
    1974, 1975, 1976, 1977, 1978, 1979, 1980, 1981, 1982, 1983, 1984, 1985, 1986, 1987,
    1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001,
    2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015,
    2016, 2017, 2018]; // Ano

const Y = [72179226, 74311343, 76514328, 78772657, 81064571, 83373530, 85696505,
    88035814, 90387079, 92746614, 95113265, 97482920, 99859383, 102259497,
    104706198, 107216205, 109790938, 112425392, 115121153, 117878411, 120694009,
    123570327, 126498314, 129448819, 132383568, 135274080, 138108912, 140891602,
    143627503, 146328304, 149003223, 151648011, 154259380, 156849078, 159432716,
    162019896, 164614688, 167209040, 169785250, 172318675, 174790340, 177196054,
    179537520, 181809246, 184006481, 186127103, 188167356, 190130443, 192030362,
    193886508, 195713635, 197514534, 199287296, 201035903, 202763735, 204471769,
    206163058, 207833831, 209469333]; // População

// Cálculo da média de X e Y
const mean = arr => arr.reduce((sum, value) => sum + value, 0) / arr.length;
const meanX = mean(X);
const meanY = mean(Y);

// Cálculo dos coeficientes da reta
let num = 0, den = 0;
for (let i = 0; i < X.length; i++) {
    num += (X[i] - meanX) * (Y[i] - meanY);
    den += (X[i] - meanX) ** 2;
}
const a = num / den;  // Inclinação da reta
const b = meanY - a * meanX;  // Interceptação

// Cálculo do R²
let ssTotal = 0, ssRes = 0;
for (let i = 0; i < X.length; i++) {
    const yPred = a * X[i] + b;
    ssTotal += (Y[i] - meanY) ** 2;
    ssRes += (Y[i] - yPred) ** 2;
}
const r2 = 1 - (ssRes / ssTotal);

console.log(`Equação da reta: População = ${a.toFixed(2)} * Ano + ${b.toFixed(2)}`);
console.log(`Coeficiente de determinação (R²): ${r2.toFixed(4)}`);
