/**
 * @param {number[][]} slots1
 * @param {number[][]} slots2
 * @param {number} duration
 * @return {number[]}
 */
const minAvailableDuration = function (slots1, slots2, duration) {
    const sortFunction = (slot1, slot2) => slot1[0] === slot2[0]
        ? slot1[1] - slot2[1]
        : slot1[0] - slot2[0];
    slots1.sort(sortFunction);
    slots2.sort(sortFunction);

    let i = 0; // count for slot 1
    let j = 0; // count for slot 2

    while (i < slots1.length && j < slots2.length) {
        const [start1, end1] = slots1[i];
        const [start2, end2] = slots2[j];
        const intersectionStart = Math.max(start1, start2);
        const intersectionEnd = Math.min(end1, end2);

        if (intersectionStart + duration <= intersectionEnd) {
            return [intersectionStart, intersectionStart + duration];
        } else if (end1 < end2) {
            i++;
        } else {
            j++;
        }
    }

    return [];
};