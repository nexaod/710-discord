import { Client, EmbedBuilder, TextChannel } from "discord.js";
import { Channels, purgeChannel, Roles, Colours } from "./Utils";
import { generalInfoData } from "./data/Trials/GeneralInfo";

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
    const channel = await client.channels.fetch(Channels.generalInfo) as TextChannel;
    await purgeChannel(channel);
    const tocEmbed = new EmbedBuilder()
        .setTitle('Table of Contents')
        .setColor(Colours.lightblue)
        .setFooter({ text: 'Last Updated' })
        .setTimestamp();
    const fields: any = [];
    for await (const item of generalInfoData) {
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
            .setDescription(item.description)
        await channel.send({ embeds: [styleEmbed] })
    }
    tocEmbed.setFields(fields);
    await channel.send({ embeds: [tocEmbed] });
    await process.exit(0)
    console.log(`${client.user.username} is online`);
});