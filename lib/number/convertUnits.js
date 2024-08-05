const lengthSymbol = Symbol('length');
const areaSymbol = Symbol('area');
const volumeSymbol = Symbol('volume');
const timeSymbol = Symbol('time');

const units = {
    length: {
        meter: { factor: 1, symbol: lengthSymbol, aliases: ['m'] },
        kilometer: { factor: 1_000, symbol: lengthSymbol, aliases: ['km'] },
        centimeter: { factor: 0.01, symbol: lengthSymbol, aliases: ['cm'] },
        millimeter: { factor: 0.001, symbol: lengthSymbol, aliases: ['mm'] },
        mile: { factor: 1_609.34, symbol: lengthSymbol, aliases: ['mi'] },
        yard: { factor: 0.9144, symbol: lengthSymbol, aliases: ['yd'] },
        foot: { factor: 0.3048, symbol: lengthSymbol, aliases: ['ft'] },
        inch: { factor: 0.0254, symbol: lengthSymbol, aliases: ['in'] }
    },
    area: {
        squareMeter: { factor: 1, symbol: areaSymbol, aliases: ['m²', 'm2'] },
        squareKilometer: { factor: 1e6, symbol: areaSymbol, aliases: ['km²', 'km2'] },
        squareCentimeter: { factor: 0.0001, symbol: areaSymbol, aliases: ['cm²', 'cm2'] },
        squareMillimeter: { factor: 1e-6, symbol: areaSymbol, aliases: ['mm²', 'mm2'] },
        squareMile: { factor: 2.59e6, symbol: areaSymbol, aliases: ['mi²', 'mi2'] },
        squareYard: { factor: 0.836127, symbol: areaSymbol, aliases: ['yd²', 'yd2'] },
        squareFoot: { factor: 0.092903, symbol: areaSymbol, aliases: ['ft²', 'ft2'] },
        squareInch: { factor: 0.00064516, symbol: areaSymbol, aliases: ['in²', 'in2'] }
    },
    volume: {
        cubicMeter: { factor: 1, symbol: volumeSymbol, aliases: ['m³', 'm3'] },
        cubicKilometer: { factor: 1e9, symbol: volumeSymbol, aliases: ['km³', 'km3'] },
        cubicCentimeter: { factor: 1e-6, symbol: volumeSymbol, aliases: ['cm³', 'cm3'] },
        cubicMillimeter: { factor: 1e-9, symbol: volumeSymbol, aliases: ['mm³', 'mm3'] },
        liter: { factor: 0.001, symbol: volumeSymbol, aliases: ['L'] },
        milliliter: { factor: 1e-6, symbol: volumeSymbol, aliases: ['ml'] },
        gallon: { factor: 0.003_785_41, symbol: volumeSymbol, aliases: [] },
        quart: { factor: 0.000_946_353, symbol: volumeSymbol, aliases: [] },
        pint: { factor: 0.000_473_176, symbol: volumeSymbol, aliases: [] },
        cup: { factor: 0.000_24, symbol: volumeSymbol, aliases: [] },
        fluidOunce: { factor: 2.9574e-5, symbol: volumeSymbol, aliases: ['fl oz'] }
    },
    time: {
        second: { factor: 1, symbol: timeSymbol, aliases: ['s'] },
        minute: { factor: 60, symbol: timeSymbol, aliases: ['min'] },
        hour: { factor: 3_600, symbol: timeSymbol, aliases: ['h'] },
        day: { factor: 86_400, symbol: timeSymbol, aliases: ['d'] },
        week: { factor: 604_800, symbol: timeSymbol, aliases: ['wk'] },
        month: { factor: 2.629_74e6, symbol: timeSymbol, aliases: [] }, // average month (30.44 days)
        year: { factor: 3.155_69e7, symbol: timeSymbol, aliases: ['yr'] } // average year (365.24 days)
    }
};

const findUnit = (unitName, customUnits) => {
    const allUnits = { ...units, ...customUnits };
    for (const category in allUnits) {
        for (const unitKey in allUnits[category]) {
            const unit = allUnits[category][unitKey];
            if (unitKey.toLocaleLowerCase() === unitName.toLocaleLowerCase() || unit.aliases.includes(unitName.toLocaleLowerCase())) {
                return unit;
            }
        }
    }
    throw new Error(`Unit ${unitName} not found`);
};

/**
 * 转换单位
 * @author Marshall <https://github.com/Xy2002>
 * @category number
 * @alias yd_number_convertUnits
 * @param {number} value 待转换的值
 * @param {string} fromUnitName 需要转换的单位
 * @param {string} toUnitName 转换后的单位
 * @param {Object} [customUnits={}] 自定义单位
 * @returns {number} 转换后的值
 * @example
    const lengthResult = convertUnits(100, 'meter', 'km'); // 0.1
    const areaResult = convertUnits(1000, 'squareMeter', 'km²'); // 0.001
 * @example
    // 自定义单位的示例用法
    const customUnits = {
        another: {
            unit1: { factor: 3, symbol: lengthSymbol, aliases: [] }, // symbol这里可以随意定义，或者可以用Symbol()来定义
            unit2: { factor: 4, symbol: lengthSymbol, aliases: [] },
        }
    };
    const customResult = convertUnits(100, 'unit1', 'unit2', customUnits); // 75
 */
export default (value, fromUnitName, toUnitName, customUnits = {}) => {
    const fromUnit = findUnit(fromUnitName, customUnits);
    const toUnit = findUnit(toUnitName, customUnits);

    if (fromUnit.symbol !== toUnit.symbol) {
        throw new Error('Units must be of the same category for conversion');
    }

    return (value * fromUnit.factor) / toUnit.factor;
};
