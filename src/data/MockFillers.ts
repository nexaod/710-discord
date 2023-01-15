import { Roles, Emojis, Colours } from "../../src/Utils";
import { MockTrialData } from "src/types";

export const mockFillerData: MockTrialData[] = [
    {
        title: 'Magic',
        colour: Colours.blue,
        roles: [
            {
                name: 'magicMT',
                entry: '7000k',
                expected: '6400k',
                description: `
                ⬥ Stall ${Emojis.omni} prefight.
                ⬥ Help phase P2 and lure minions correctly.
                ⬥ ${Emojis.vulnBomb} the minion if ${Emojis.umbra} or ${Emojis.glacies}.
                ⬥ If ${Roles.vulner}, ${Emojis.vulnBomb} the first 3 pillars.
                `
            },
            {
                name: 'magicFree',
                entry: '7000k',
                expected: '6400k',
                description: `
                ⬥ Stall ${Emojis.omni} prefight.
                ⬥ Help ${Emojis.amalg} with ${Emojis.detonate} ${Emojis.nami} ${Emojis.dbreath}.
                ⬥ Help ${Emojis.fumus} after P2 phase.
                ⬥ Tank a minion if a minion tank dies.
                ⬥ Take the boss if both the Base and Hammer die.
                `
            },
            {
                name: 'magicBase',
                entry: '5400k',
                expected: '5000k',
                description: `
                ⬥ Pre ${Emojis.greaterSun} and start at the proper time depending on the team.
                ⬥ Help kill ${Emojis.iceamalg} and ${Emojis.bloodamalg} after P2 phase.
                ⬥ ${Emojis.vulnBomb} at 1800k, 600k and the last pillar.
                ⬥ ${Emojis.smokecloud} at the start, and reapply if it splashes.
                ⬥ Good smoke placement, no shadows, and good boss lures during pillars.
                ⬥ ${Emojis.hammer} at 600k before the team gets to last pillar.
                `
            },
        ],
        image: 'https://i.imgur.com/pxUotNE.png'
    },
    {
        title: 'Ranged',
        colour: Colours.green,
        roles: [
            {
                name: 'rangeMT',
                entry: '7000k',
                expected: '6800k',
                description: `
                ⬥ Must ${Emojis.nati} and ${Emojis.greaterDeathSwiftness} start.
                ⬥ Help phase P2 with good abilities.
                ⬥ Must use ${Emojis.decimation} rotation.
                ⬥ ${Emojis.ecb}, ${Emojis.sgbEof} ${Emojis.eof} and ${Emojis.grico} required.
                `
            },
            {
                name: 'chinner',
                entry: '6700k',
                expected: '6400k',
                description: `
                ⬥ Must host instance and start ${Emojis.dummy} unless discussed prior to hour.
                ⬥ Must ${Emojis.hammer} Phase 1.
                ⬥ Must help pre-phase Nex during P2 with good abilities.
                ⬥ Must lure the boss if the base dies.
                ⬥ Must use ${Emojis.decimation} rotation.
                ⬥ ${Emojis.ecb}, ${Emojis.sgbEof} ${Emojis.eof} and ${Emojis.grico} required.
                `
            },
        ],
        image: 'https://i.imgur.com/wvyFUc8.png'
    },
    {
        title: 'Magic/Ranged Hybrid',
        colour: Colours.aqua,
        roles: [
            {
                name: 'mrMT',
                entry: '7600k',
                expected: '7200k',
                description: `
                ⬥ Must ${Emojis.greaterSun} on designated minion ${Emojis.detonate} spot.
                ⬥ Must stall ${Emojis.omni} pre-fight.
                ⬥ Must help phase P2 and lure minion correctly.
                ⬥ ${Emojis.vulnBomb} the minion if ${Emojis.umbra} or ${Emojis.glacies}.
                ⬥ If ${Roles.vulner}, ${Emojis.vulnBomb} the first 3 pillars.
                ⬥ Must be on tick for all of P1-P3.
                `
            },
            {
                name: 'Free Magic/Ranged',
                entry: '7600k',
                expected: '7200k',
                description: `
                ⬥ Must ${Emojis.greaterSun} on designated minion ${Emojis.detonate} spot.
                ⬥ Must stall ${Emojis.omni} pre-fight.
                ⬥ Must place a ${Emojis.dummy} under the boss before P3.
                ⬥ Must lure a minion if a minion tank dies.
                ⬥ Must release ${Emojis.nami} behind ${Emojis.amalg}.
                ⬥ Must be on tick for all of P1-P3.
                `
            },
            {
                name: 'mrHammer',
                entry: '7400k',
                expected: '7000k',
                description: `
                ⬥ Must host instance and start ${Emojis.dummy} unless discussed prior to hour.
                ⬥ Must ${Emojis.greaterSun} on ${Emojis.umbra} ${Emojis.detonate} spot.
                ⬥ Must stall ${Emojis.hammer} pre-fight.
                ⬥ Must release ${Emojis.nami} behind ${Emojis.amalg}.
                ⬥ Must be on tick for all of P1-P3.
                `
            },
            {
                name: 'mrBase',
                entry: '6500k',
                expected: '6100k',
                description: `
                ⬥ Pre ${Emojis.nati} build and start at the proper time depending on the team.
                ⬥ Help kill ${Emojis.iceamalg} and ${Emojis.bloodamalg} after P2 phase.
                ⬥ ${Emojis.vulnBomb} at 1800k, 600k and the last pillar.
                ⬥ ${Emojis.smokecloud} at the start, and reapply if it splashes.
                ⬥ Good smoke placement, no shadows, and good boss lures during pillars.
                ⬥ ${Emojis.hammer} at 600k before the team gets to last pillar.
                ⬥ Must be on tick for all of P1-P3.
                `
            },
        ],
        image: 'https://i.imgur.com/jR9vfjY.png'
    },
]