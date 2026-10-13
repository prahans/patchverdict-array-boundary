# patchverdict-array-boundary

A small intentionally buggy JavaScript repository used to test PatchVerdict's real repository verification flow.

## Run

```bash
npm install
npm test
```

## Bug description

Copy this into PatchVerdict:

```text
The lastItem utility returns undefined for non-empty arrays because it reads past the final valid index. It should return the final element of a non-empty array and continue returning undefined for an empty array.
```
