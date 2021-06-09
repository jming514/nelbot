# Discord bot

All commands must have the prefix `!`

## Setup

Create a .env with the following information

```
BOT_TOKEN=token from discord developer portal
PREFIX=character at the beginning of messsage to trigger bot commands
```

## Planned

- batch update emotes?

  This is for updating emotes with the halloween/christmas/seasonal versions.

- help command

- global version of timer command

- move prefix commands to slash commands

## Commands

| Name   | Description                                         | Arguments                       |
| ------ | --------------------------------------------------- | ------------------------------- |
| server | Information about the current server.               |                                 |
| poll   | React to a message with 2 emotes. Meant for polling | \<message>                      |
| timer  | Set a timer for a ping to yourself with message     | \<duration: integer> \<message> |
| prune  | Delete up to 98 messages                            | \<number>                       |
| help   |                                                     |                                 |
| farm   | counter for kc dkmods                               |                                 |
|        |                                                     |                                 |
