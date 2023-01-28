import { Client, EmbedBuilder, TextChannel } from "discord.js";
import { Channels, purgeChannel, Roles, Colours } from "./Utils";
import { mockFillerData } from "./data/MockFillers";

const token = process.env.DISCORD_TOKEN;

console.log("Bot is starting...");

const client = new Client({
    intents: []
});

client.login(token);

client.on("ready", async () => {
    if (!client.user || !client.application) {
        return;
    }
    const channel = await client.channels.fetch(Channels.mockInfo) as TextChannel;
    await purgeChannel(channel);
    const tocEmbed = new EmbedBuilder()
        .setTitle('Table of Contents')
        .setColor(Colours.lightblue)
        .setFooter({ text: 'Last Updated' })
        .setTimestamp();
    const fields: any = [];
    for await (const item of mockFillerData) {
        const tocField: any = {
            name: item.title,
            value: ``,
            inline: true
        };
        await channel.send(`> __**${item.title}**__`).then(message => {
            tocField.value = `[Link](${message.url})`;
        });
        fields.push(tocField);
        const styleEmbed = new EmbedBuilder()
            .setColor(item.colour)
        let description = '';
        for (const role of item.roles) {
            description += `
            ${Roles[role.name] ? Roles[role.name] : `**${role.name}**`}\n
            \`Entry:\` **${role.entry}**
            \`Expected:\` **${role.expected}**
            ${role.description}
            `
        }
        styleEmbed.setDescription(description);
        await channel.send({ embeds: [styleEmbed] })
    }
    tocEmbed.setFields(fields);
    await channel.send({ embeds: [tocEmbed] });
    await process.exit(0)
    console.log(`${client.user.username} is online`);
});