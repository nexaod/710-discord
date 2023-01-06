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
    },
    {
        title: "Trials",
        description: `Trials are hosted using a single command, and users can be manually added or removed from each trial card. The channel that the card is output to (i.e. NA/EU Mock/Real trials) are fully detected by the bot.`,
        commands: [
            {
                title: "Start Trial",
                description: `Creates a Trial card and posts to the correct channel depending on **Region** and **Trial Type**.`,
                sections: [
                    {
                        title: "Permissions",
                        value: `${Roles.trialeeTeacher}+`
                    },
                    {
                        title: "Region and Trial Types",
                        value: "Region will convert automatically to the world, i.e. EU -> **German**. Trial types are either **Mock** or **Real**."
                    },
                    {
                        title: "Time",
                        value: "If a gametime is provided, the local time to each members computer is also shown. If not provided, time defaults to current UTC date **20:00** for EU, and the next day **01:00** for NA. Must be in `YYYY-MM-DD HH:MM` format."
                    },
                    {
                        title: "Usage",
                        value: `\`/start-trial\` \`[user]\` \`[role]\` \`[region]\` \`[trialtype]\` \`[date](optional)\``
                    }
                ],
                image: "https://media.discordapp.net/attachments/1027186342620299315/1060793613598077008/image.png"
            },
            {
                title: "Set Trial Member",
                description: "Overrides and sets a member at a specific role for the trial card. Must be used in same channel as the trial card.",
                sections: [
                    {
                        title: "Permissions",
                        value: `${Roles.trialeeTeacher}+`
                    },
                    {
                        title: "Filler Types",
                        value: "This will set a suffix after a persons name to indicate: `Tryout`, `Trialee`, `Fillers`. `Remove` will also remove a member off the card from their role."
                    },
                    {
                        title: "Usage",
                        value: `\`/set-trial-member\` \`[message_id]\` \`[user]\` \`[role]\` \`[filler_type]\``
                    }
                ],
                image: "https://media.discordapp.net/attachments/1027186342620299315/1060795326308560896/image.png"
            },
            {
                title: "Trial Leaderboard",
                description: "Shows a leaderboard of currently recorded trials.",
                sections: [
                    {
                        title: "Permissions",
                        value: `${Roles.trialTeam}+`
                    },
                    {
                        title: "Usage",
                        value: `\`/trial-leaderboard\``
                    }
                ],
                image: "https://media.discordapp.net/attachments/1027186342620299315/1060795070057562153/image.png"
            }
        ]
    },
    {
        title: "Starting and Disbanding Trials",
        description: `When a trial is started, a \`Moderation\` area will appear, and times will be recorded.`,
        sections: [
            {
                title: "Permissions",
                value: `${Roles.trialeeTeacher}+`
            },
            {
                title: "Usage",
                value: `Clicking the either button will record when the action has occurred, and start/stop the card.`
            }
        ],
        image: "https://media.discordapp.net/attachments/1027186342620299315/1060800457485848637/image.png"
    },
    {
        title: "Passing and Failing Trials",
        description: `When passing and failing a trialee, a form will appear and prompt the host for the **Gem** and **Notes**. On submission, a summary is posted into the corresponding \`results\` channel.`,
        sections: [
            {
                title: "Permissions",
                value: `${Roles.trialeeTeacher}+`
            },
            {
                title: "Usage",
                value: `Clicking the **Pass** or **Fail** buttons will open the form interface.`
            }
        ],
        image: "https://media.discordapp.net/attachments/1027186342620299315/1060801512068091944/image.png"
    },
]