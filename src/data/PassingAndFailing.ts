import { Colours } from "../../src/Utils";

export const passingData = [
    {
        title: 'Magic',
        colour: Colours.blue,
        roles: [
            {

                roleKey: 'magicMT',
                name: 'Magic Minion Tank',
                fields: [
                    {
                        name: '`Damage Requirement:` 5000k',
                        value: ' '
                    },
                    {
                        name: '__Mechanic Expectations__',
                        value: `⬥ Less than 2 <:cruor:1025085871772409937> mislured (without fixing)\n\u200B⬥ Less than 3 <:deto:535533833358016512> missed\n\u200B⬥ Less than 3 <:omni:535533809664262179> releases on dummy\u200B`
                    },
                ]
            },
            {
                roleKey: 'magicBase',
                name: 'Magic Base',
                fields: [
                    {
                        name: '`Damage Requirement:` 3400k',
                        value: ' '
                    },
                    {
                        name: '__Mechanic Expectations__',
                        value: `⬥ Less than 3 <:kalgpouch:921410226484301925> misses\n\u200B⬥ Less than 4 <:Vuln:537349530551582720> misses\n\u200B⬥ Less than 3 shadows given while luring\n\u200B⬥ Less than 2 <:swh:641670143197446182> <:eofspec:746403211908481184> misses\u200B`
                    },
                ]
            },
        ]
    },
    {
        title: 'Ranged',
        colour: Colours.green,
        roles: [
            {
                roleKey: 'rangedMT',
                name: 'Ranged Minion Tank',
                fields: [
                    {
                        name: '`Damage Requirement:` 4500k',
                        value: ' '
                    },
                    {
                        name: '__Mechanic Expectations__',
                        value: `⬥ Less than 2 <:cruor:1025085871772409937> mislured (without fixing)\n\u200B___If Decimation rotation___\n\u200B⬥ Less than 2 times offtick (ahead)\n\u200B⬥ Less than 3 times offtick (behind)\u200B`
                    },
                ]
            },
            {
                roleKey: 'chinner',
                name: 'Chinner',
                fields: [
                    {
                        name: '`Damage Requirement:` 4200k',
                        value: ' '
                    },
                    {
                        name: '__Mechanic Expectations__',
                        value: `⬥ Less than 2 <:swh:641670143197446182> <:eofspec:746403211908481184> misses\n\u200B⬥ Must Chincend before minions die\n\u200B\n\u200B___If Decimation rotation___\n\u200B⬥ Less than 2 times offtick (ahead)\n\u200B⬥ Less than 3 times offtick (behind)\u200B`
                    },
                ]
            },
        ]
    },
    {
        title: 'Magic/Ranged Hybrid',
        colour: Colours.aqua,
        roles: [
            {
                roleKey: 'mrBase',
                name: 'Magic/Ranged Base',
                fields: [
                    {
                        name: '`Damage Requirement:` 5200k',
                        value: ' '
                    },
                    {
                        name: '__Mechanic Expectations__',
                        value: `⬥ Less than 3 <:kalgpouch:921410226484301925> misses\n\u200B⬥ Less than 4 <:Vuln:537349530551582720> misses\n\u200B⬥ Less than 3 shadows given while luring\n\u200B⬥ Less than 2 <:swh:641670143197446182> <:eofspec:746403211908481184> misses\n\u200B⬥ Less than 2 times offtick (ahead)\n\u200B⬥ Less than 3 times offtick (behind)\u200B`
                    },
                ]
            },
            {
                roleKey: 'mrHammer',
                name: 'Magic/Ranged Hammer',
                fields: [
                    {
                        name: '`Damage Requirement:` 6000k',
                        value: ' '
                    },
                    {
                        name: '__Mechanic Expectations__',
                        value: `⬥ Less than 2 <:swh:641670143197446182> <:eofspec:746403211908481184> misses\n\u200B⬥ Less than 2 times offtick (ahead)\n\u200B⬥ Less than 3 times offtick (behind)\u200B`
                    },
                ]
            },
            {
                roleKey: 'mrMT',
                name: 'Magic/Ranged Minion Tank',
                fields: [
                    {
                        name: '`Damage Requirement:` 6300k',
                        value: ' '
                    },
                    {
                        name: '__Mechanic Expectations__',
                        value: `⬥ Less than 2 <:cruor:1025085871772409937> mislured (without fixing)\n\u200B⬥ Less than 2 times offtick (ahead)\n\u200B⬥ Less than 3 times offtick (behind)\u200B`
                    },
                ]
            },
        ]
    },
    {
        title: 'Vulner',
        colour: Colours.lightpink,
        roles: [
            {
                roleKey: 'vulner',
                name: 'Vulner',
                fields: [
                    {
                        name: '__Mechanic Expectations__',
                        value: `⬥ Role expectations as listed above\n\u200B⬥ Less than 3 entirely missed <:vulnbomb:655341074235129858>\n\u200B⬥ Less than 5 late <:vulnbomb:655341074235129858> (<50k pillar hp)\u200B`
                    },
                ]
            }
        ]
    }
]