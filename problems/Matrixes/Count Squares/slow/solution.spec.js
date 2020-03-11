import test from 'ava';

import cases from '../test-cases';
import solution from './solution';

const problem = solution.name;

function testCase(t, inputs, expected) {
    t.deepEqual(solution(inputs), expected);
}

cases.forEach((tCase, i) => {
    const { input, output } = tCase;
    test(`${problem} - case ${i + 1}`, testCase, input, output);
});
