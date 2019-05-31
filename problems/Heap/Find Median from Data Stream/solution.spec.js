import test from 'ava';
import Solution from './solution';

const problem = Solution.name;

test(`${problem}`, t => {
    const tested = new Solution();
    tested.addNum(1);
    tested.addNum(2);
    t.is(tested.findMedian(), 1.5);
    tested.addNum(3);
    t.is(tested.findMedian(), 2);
    tested.addNum(4);
    t.is(tested.findMedian(), 2.5);
    tested.addNum(5);
    t.is(tested.findMedian(), 3);
    tested.addNum(6);
    t.is(tested.findMedian(), 3.5);
    tested.addNum(7);
    t.is(tested.findMedian(), 4);
    tested.addNum(8);
    t.is(tested.findMedian(), 4.5);
    tested.addNum(9);
    t.is(tested.findMedian(), 5);
    tested.addNum(10);
    t.is(tested.findMedian(), 5.5);
});

test(`${problem} case 2`, t => {
    const tested = new Solution();
    tested.addNum(-1);
    t.is(tested.findMedian(), -1);
    tested.addNum(-2);
    t.is(tested.findMedian(), -1.5);
    tested.addNum(-3);
    t.is(tested.findMedian(), -2);
    tested.addNum(-4);
    t.is(tested.findMedian(), -2.5);
    tested.addNum(-5);
    t.is(tested.findMedian(), -3);
});
