/**
 * There are a total of n courses you have to take, labeled from 0 to n-1.
 * Some courses may have prerequisites, for example to take course 0 you have to first take course
 * 1, which is expressed as a pair: [0, 1]
 * Given the total number of courses and a list of prerequisite pairs, is it possible for you to
 * finish all courses?
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
const canFinish = (numCourses, prerequisites) => {
    if (prerequisites.length === 0) {
        return true;
    }

    const pre = [];
    for (let i = 0; i < prerequisites.length; i += 1) {
        // let's assume theres only one adjacency
        const [to, from] = prerequisites[i];
        if (!pre[to]) {
            pre[to] = { [from]: true };
        } else {
            pre[to][from] = true;
        }

        if (!pre[from]) {
            pre[from] = {};
        }
    }

    const sorted = {};
    let found = false;
    while (pre.length > 0) {
        found = false;
        for (let i = 0; i < pre.length; i += 1) {
            if (!pre[i]) continue;

            Object.keys(pre[i]).forEach(key => {
                if (sorted[key]) {
                    delete pre[i][key];
                }
            });

            if (Object.keys(pre[i]).length === 0) {
                found = true;
                sorted[i] = true;
                pre[i] = undefined;
            }
        }
        if (!found) {
            break;
        }
    }

    return pre.filter(Boolean).length === 0;
};

export default canFinish;
