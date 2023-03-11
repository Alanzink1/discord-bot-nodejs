const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

// inside a command, event listener, etc.
const exampleEmbed = new EmbedBuilder()

  .setColor("Orange")
  .setTitle("Comandos Dave")
  .setURL("https://www.youtube.com/watch?v=C3K6QX-xp8Q")
  .setDescription("Dave, seu melhor amigo de todas as calls e conversas!")
  .setThumbnail(
    "https://s2.glbimg.com/NrMU35-3lxQbfTs0zmA9sLxOBjM=/0x0:571x561/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2019/B/8/HpPF3PRmC8r1MlL9wN1g/manoelgomes.jpg"
  )
  .addFields(
    { name: "\u200B", value: "\u200B" },
    { name: "/ping", value: 'Responde "Pong!"', inline: true },
    { name: "/help", value: "Relembrar Comandos do Dave", inline: true }
  )
  .setImage(
    "https://static.wixstatic.com/media/368834_fe09ceaea3ac4992b8d81bfed572de23~mv2.png/v1/fit/w_768%2Ch_768%2Cal_c%2Cq_80,enc_auto/file.jpg"
  )
  .setTimestamp()
  .setFooter({
    text: "WarTech Bots",
    iconURL:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHGbCzMNLEN99K7woqj02BN5K8g3wVI0XWYw&usqp=CAU",
  });

module.exports = {
  data: new SlashCommandBuilder()
    .setName("help")
    .setDescription("Relembrar Comandos do Dave'"),

  async execute(interaction) {
    await interaction.reply({ embeds: [exampleEmbed] });
  },
};
