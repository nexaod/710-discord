import { Client, EmbedBuilder, TextChannel } from "discord.js";
import { Channels, purgeChannel, Roles, Colours } from "./Utils";
import { passingData } from "./data/PassingAndFailing";

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
    const channel = await client.channels.fetch(Channels.passingAndFailing) as TextChannel;
    await purgeChannel(channel);
    const tocEmbed = new EmbedBuilder()
        .setTitle('Table of Contents')
        .setColor(Colours.lightblue)
        .setFooter({ text: 'Last Updated' })
        .setTimestamp();
    const fields: any = [];
    for await (const item of passingData) {
        const tocField: any = {
            name: item.title,
            value: ``,
            inline: true
        };
        await channel.send(`> __**${item.title}**__`);
        for await (const role of item.roles) {
            const styleEmbed = new EmbedBuilder()
                .setColor(item.colour)
                .setTitle(`__${role.name}__`)
            styleEmbed.setFields(role.fields);
            const message = await channel.send({ embeds: [styleEmbed] })
            tocField.value += `⬥ [${role.name}](${message.url})\n\u200B`;
        }
        fields.push(tocField);
    }
    tocEmbed.setFields(fields);
    await channel.send({ embeds: [tocEmbed] });
    await process.exit(0)
    console.log(`${client.user.username} is online`);
});