// describe("Server.ts tests", () => {
//   test("Math test", () => {
//     expect(2 + 2).toBe(4);
//   });
// });

const {getChangedFilesForRoots} = require('jest-changed-files');

// print the set of modified files since last commit in the current repo
getChangedFilesForRoots(['./'], {
  lastCommit: true,
}).then((result: any) => console.log(result.changedFiles));