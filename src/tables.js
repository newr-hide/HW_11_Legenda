export default function orderByProps(obj, sortOrder) {
    const result = [];

    for (let i = 0; i < sortOrder.length; i++) {
        const key = sortOrder[i];
        if(key in obj) {
            result.push([key, obj[key]]);
        };
    }

    const usedKeys = new Set(sortOrder);
    const otherKeys =[];
    for (let key in obj) {
        if(!usedKeys.has(key)) {
            otherKeys.push([key, obj[key]]);
        }
    }
    otherKeys.sort((a, b) => a[0].localeCompare(b[0]));
    result.push(...otherKeys);

    return result;
}

// const swordman = {name: 'мечник', health: 10, level: 2, attack: 80, defence: 40};

// console.log(orderByProps(swordman,['name', 'level']));