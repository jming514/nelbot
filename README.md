# Discord bot

All commands must have the prefix `!`

## Setup

Create a .env with the following information
```
BOT_TOKEN=token from discord developer portal
PREFIX=character at the beginning of messsage to trigger bot commands
```
## Planned 

- timer

   Include a reply when timer to created to show the command worked

- countdown

   Choose duration of the countdown in seconds/minutes/hours. The bot will tag whoever used the tag AND everyone tagged in that message when countdown reaches 0.  
   example: !countdown 5m league @bob @sam
   - [ ] only allow specific time format (1s, 5h). Currently allows stuff like 1ss, 1-s, etc.

- batch update emotes?

   This is for updating emotes with the halloween/christmas/seasonal versions.

- prune
  
  Convert old prune command from javascript to typescript


## Commands

| Name   | Description                                         | Arguments                       |
| ------ | --------------------------------------------------- | ------------------------------- |
| server | Information about the current server.               |                                 |
| poll   | React to a message with 2 emotes. Meant for polling | \<message>                      |
| timer  | Set a timer for a ping to yourself with message     | \<duration: integer> \<message> |
|        |                                                     |                                 |
|        |                                                     |                                 |
|        |                                                     |                                 |
|        |                                                     |                                 |
