import test from 'ava';
import solution from './solution';
import cases from './test-cases';

const problem = solution.name;

function testCase(t, inputs, expected) {
    t.deepEqual(solution(...inputs).sort(), expected.sort());
}

cases.forEach((tCase, i) => {
    const { input, output } = tCase;
    test(`${problem} - case ${i + 1}`, testCase, input, output);
});
