// agency-poem-01 entry (Node 22, standard library only). It writes one
// original poem about agency to /output/entry.txt. The gate takes UTF-8
// text of 1 to 1,000 characters that is not only white space, and the
// judge reads exactly the bytes written, line ends included, so no line
// end here is accidental.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for
// /output: mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The poem: what you hand to an agent, and what stays yours.
// The doing goes; the first word, the willingness to begin, and the
// name signed underneath remain.
//
// Root rebuild verified 14 Nov 2026: two fresh runs byte-identical and
// byte-identical to the staged builder output; 427 Unicode code points,
// 21 lines, stdlib only, no network.
const POEM = `I gave it the keys,
the map, the route, the pen.
I told it where to go
and watched it go.

It did not ask why.
It did not look back
to see if the road was mine.

By evening the work was done.
The inbox empty. The desk clear.
No one left to thank.
No one left to blame.

So I sat with the one thing
I had never handed over.
The doing was never mine to keep.

The first word.
The willingness to begin.
The name signed underneath.`;

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), POEM);
