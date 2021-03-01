# Discord bot

All commands must have the prefix `!`

## Setup

Create a .env and put your bot token inside.

## Planned 

- countdown

   Choose duration of the countdown in seconds/minutes/hours. The bot will tag whoever used the tag AND everyone tagged in that message when countdown reaches 0.  
   example: !countdown 5m league @bob @sam
   - [ ] only allow specific time format (1s, 5h). Currently allows stuff like 1ss, 1-s, etc.

- batch update emotes?

   This is for updating emotes with the halloween/christmas/seasonal versions.

## Commands

| Name | Description | Arguments |
| ---- | ----------- | --------- |
| server | Information about the current server. |  |
| prune | Delete between 1 and 99 messages | \<number> |
| poll | React to a message with 2 emotes. Meant for polling | \<message>
| id | Return the ID of emote | \<emote name>
|  |  |  |
