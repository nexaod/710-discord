import { Roles, Colours } from "../../Utils";

export const generalInfoData = [
    {
        title: 'General Rules',
        colour: Colours.gold,
        description: `⬥ 2K Combat Level Challenge Gem is to be started 15 minutes into the hour.\n\u200B⬥ ${Roles.trialTeam} are expected to join the gem unless a reason is specified.\n\u200B⬥ **Expected** damage is a requirement for each role.\n\u200B⬥ After **expected** damage, gems do not matter.\n\u200B⬥ Trialee experience should be prioritised.\n\u200B⬥ Trial filling priority is:\n\u00a0\u00a0\u00a0\u00a0• Tryout\n\u00a0\u00a0\u00a0\u00a0• ${Roles.trialTeam}\n\u00a0\u00a0\u00a0\u00a0• ${Roles.nexAoDFCMember}\n\u00a0\u00a0\u00a0\u00a0• ${Roles.sevenMan}\n\u00a0\u00a0\u00a0\u00a0• Friends List\n\u200B⬥ ${Roles.trialHost} are responsible for the quality of non ${Roles.trialTeam} fillers.\n\u200B⬥ ${Roles.trialHost} are expected to provide feedback after the hour.\n\u200B⬥ A cooldown should be given if a trialee performs poorly.`
    },
    {
        title: 'Mock Trials',
        colour: Colours.gold,
        description: `⬥ Mock trials are for learning, experiencing faster teams and gaining feedback.\n\u200B⬥ Trialees **DO NOT** receive tag unless performing exceptionally well.\n\u200B⬥ Exceptional performance is judged by the ${Roles.trialHost}\n\u00a0\u00a0\u00a0\u00a0• e.g. A trialee hits ${Roles.trialTeam} expected damage.`
    },
    {
        title: 'Real Trials',
        colour: Colours.gold,
        description: `⬥ Tags are given after an hour if the trialee meets requirements.\n\u200B⬥ ${Roles.trialHost} are able to pass a trialee under requirement, per judgement.`
    },
]