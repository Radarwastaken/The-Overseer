# Self Hosting
<p align="center">
  <a href="##Making a bot and adding it to your server">Basics</a>
  •
  <a href="##Requirements">Requirements</a>
  •
  <a href="##Installing Other Requirements">Other Installations</a>
  •
  <a href="##Last Steps">Finishing Up</a>
  •
  <a href="##How to Get API Keys">Api Keys</a>
  •
  <a href="##Starting the bot!">Start the bot!</a>
</p>

## Making a bot and adding it to your server
`1).` Go to [Discord Develper Portal](https://discord.com/developers "Discord Developer Portal") and sign in
`2).` After you sign in, [Create a New Apllication](https://discord.com/developers/applications "Create a new Application")
`3).` Once you make an application, **Create a bot** in that application and enable both the intents in the bot by clicking those buttons (without enabling them you might face problems self hosting the bot)
`4).` Invite the bot to your server with the **OAuth2 URL Generator**
`5).` Copy the bot's token(the token is meant to be kept secret at all times)

## Requirements
`1).` You will need [Node JS v14.5.1 or higher](https://nodejs.org/dist/v14.15.1/node-v14.15.1-x64.msi "Node JS")
`2).` Optional: [Visual Studio Code](https://code.visualstudio.com/Download "VS Code")
`3).` Optional: [Git](https://git-scm.com/downloads "Git")

## Installing Other Requirements
`1).` For this all you have to do is run
```powershell
npm i
```
in the terminal in the folder in which the repository is located(this will install all the required packages to a node_modules folder)

## Last Steps
`1).` Go to the src folder and create a file named `Config.ts`
`2).` In that file add the following info using this template

```ts
export let token: string = "Your Token Here";

export let prefix: string = "!";//replace with your prefix

export let errorlogid: string = "your_error_log_channel_id_here";

export let ownerIDs: string[] = ["your_discord_user_id_here"];//You can add more ids here too

/**
 * The below stuff will be used later on and is not necessary at the moment
 */
export let bsapi: string = "your_brawl_stars_api_key_here";

export let crapi: string = "your_clash_royale_api_key_here";

export let cocapi: string = "your_clash_of_clans_api_key_here";

export let gitapi: string = "your_github_api_token_here";
```

## How to Get API Keys
`1).` [Brawl Stars](https://developer.brawlstars.com/ "Official Brawl Stars API") (In your keys add 128.128.128.128 as IP Address because i am using the Royale API proxy due to having a dynamic IP address)
`2).` [Clash Royale](https://developer.clashroyale.com/ "Official Clash Royale API") (In your keys add 128.128.128.128 as IP Address because i am using the Royale API proxy due to having a dynamic IP address)
`3).` [Brawl Stars](https://developer.clashofclans.com/ "Official Clash of Clans API") (In your keys add 128.128.128.128 as IP Address because i am using the Royale API proxy due to having a dynamic IP address)
`4).` [GitHub](https://github.com/settings/tokens "Official GitHub API") (Create a Token Here and enable the features you are going to use)

## Starting the bot!
`1).` To Start the bot just run
```powershell
npm run start
```

# And that's it if you followed all the steps correctly, Your bot should be online!

# Note: This Project is Licensed under the MIT License if you use this you need to include the License file also in your surce folder and do not remove my name from there.
Thank You.