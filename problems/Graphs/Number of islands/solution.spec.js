import test from 'ava';
import solution from './solution';
import cases from './test-cases';

const problem = solution.name;

function testCase(t, input, expected) {
    t.deepEqual(solution(input), expected);
}

cases.forEach((tCase, i) => {
    const { input, output } = tCase;
    test(`${problem} - case ${i + 1}`, testCase, input, output);
});
