import test from 'ava';
import solution from './solution';
import cases from './test-cases';

const problem = solution.name;

function testCase(t, inputs, expected) {
    t.is(solution(...inputs), expected);
}

cases.forEach((tCase, i) => {
    const { inputs, output } = tCase;
    test(`${problem} - case ${i + 1}`, testCase, inputs, output);
});
