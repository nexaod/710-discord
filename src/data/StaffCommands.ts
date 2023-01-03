import { StaffCommandData } from "src/types";
import { Channels, Roles } from "../../src/Utils";

export const staffCommandData: StaffCommandData[] = [
    {
        title: "Role Assignment",
        description: `Role Assignment occurs through a variety of commands.\n\nAll commands will create a post in <#${Channels.achievementsAndLogs}> and assign the corresponding role to the user.\n\n> All commands can be used in any channel. The bot response is only visible to you.`,
        commands: [
            {
                title: "Trialee",
                description: `Assigns the ${Roles.trialee} role to a user approved from sign-up.`,
                sections: [
                    {
                        title: "Permissions",
                        value: `${Roles.applicationTeam}+`
                    },
                    {
                        title: "Usage",
                        value: `\`/approve-trialee\` \`[user]\``
                    }
                ],
                image: "https://media.discordapp.net/attachments/1027186342620299315/1059837376744148992/image.png"
            },
            {
                title: "Cosmetic",
                description: "Assigns a Cosmetic role to a user.",
                sections: [
                    {
                        title: "Permissions",
                        value: `${Roles.trialHost}+`
                    },
                    {
                        title: "Supported Roles",
                        value: "Kill Count and Collection Logs"
                    },
                    {
                        title: "Usage",
                        value: `\`/assign-cosmetic\` \`[user]\` \`[role]\``
                    }
                ],
                image: "https://media.discordapp.net/attachments/1027186342620299315/1059750220159782952/image.png"
            },
            {
                title: "Trialed",
                description: "Assigns a Trial role to a user.",
                sections: [
                    {
                        title: "Permissions",
                        value: `${Roles.trialHost}+`
                    },
                    {
                        title: "Supported Roles",
                        value: `All trialable roles outlined in <#${Channels.trialInformation}>`
                    },
                    {
                        title: "Usage",
                        value: `\`/assign-trialed\` \`[user]\` \`[role]\``
                    }
                ],
                image: "https://media.discordapp.net/attachments/1027186342620299315/1059750319870971955/image.png"
            }
        ]
    },
    {
        title: "Role Rejection",
        description: `Whenever a role is assigned using any command or trial card, a logging item is created in <#${Channels.botRoleLog}> with information about the assignment.`,
        sections: [
            {
                title: "Permissions",
                value: `${Roles.organizer}+`
            },
            {
                title: "Usage",
                value: `Clicking the Reject Role button will delete the message in <#${Channels.achievementsAndLogs}> and remove the assigned role from the user.`
            }
        ],
        image: "https://media.discordapp.net/attachments/1027186342620299315/1059747162780602414/image.png"
    }
]