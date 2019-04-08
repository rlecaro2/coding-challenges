import test from 'ava';
import solution from './solution';
import cases from './test-cases';

const problem = solution.name;

function testCase(t, input, expected) {
    const result = solution(input);
    result.forEach(e => e.sort());
    result.sort();
    expected.forEach(e => e.sort());
    expected.sort();

    t.deepEqual(result, expected);
}

cases.forEach((tCase, i) => {
    const { input, output } = tCase;
    test(`${problem} - case ${i + 1}`, testCase, input, output);
});
