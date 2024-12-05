const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_21_36_12_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDE0LFxuICAgICAgICAxMjcsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMzYsXG4gICAgICAgIDExNSxcbiAgICAgICAgOTcsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNTEsXG4gICAgICAgIDEwNCxcbiAgICAgICAgOTgsXG4gICAgICAgIDcxLFxuICAgICAgICAxLFxuICAgICAgICA4MixcbiAgICAgICAgMTYwLFxuICAgICAgICAxOTMsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMDksXG4gICAgICAgIDE1NixcbiAgICAgICAgMixcbiAgICAgICAgMTUsXG4gICAgICAgIDU3LFxuICAgICAgICAzLFxuICAgICAgICA0MixcbiAgICAgICAgMTU5LFxuICAgICAgICAzOCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNTUsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNjRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjEzLFxuICAgICAgICAyMzcsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTAzLFxuICAgICAgICA4NixcbiAgICAgICAgODcsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMDQsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjAwLFxuICAgICAgICAzOSxcbiAgICAgICAgNDYsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNTYsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjQwLFxuICAgICAgICAzOSxcbiAgICAgICAgMzcsXG4gICAgICAgIDQzLFxuICAgICAgICAyNDAsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNTMsXG4gICAgICAgIDU2LFxuICAgICAgICAyNTEsXG4gICAgICAgIDYsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNzIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAxNzgsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTEsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNjUsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxOTEsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNjksXG4gICAgICAgIDE2OSxcbiAgICAgICAgOCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNzIsXG4gICAgICAgIDIwLFxuICAgICAgICAxMjgsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTM1LFxuICAgICAgICA3MSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxODksXG4gICAgICAgIDE2OCxcbiAgICAgICAgODgsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjksXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTksXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDg1LFxuICAgICAgICA2NyxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNzMsXG4gICAgICAgIDIwMixcbiAgICAgICAgNTQsXG4gICAgICAgIDEwMSxcbiAgICAgICAgODQsXG4gICAgICAgIDU4LFxuICAgICAgICAxNTYsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjQxLFxuICAgICAgICAyNixcbiAgICAgICAgMTAxLFxuICAgICAgICAyNTUsXG4gICAgICAgIDUwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDk1LFxuICAgICAgICA5NixcbiAgICAgICAgMTMwLFxuICAgICAgICAxMjQsXG4gICAgICAgIDIxLFxuICAgICAgICA0NCxcbiAgICAgICAgNTksXG4gICAgICAgIDgwLFxuICAgICAgICAxNjAsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNjEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNDdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU2LFxuICAgICAgICA2MCxcbiAgICAgICAgODMsXG4gICAgICAgIDE5LFxuICAgICAgICAxMzcsXG4gICAgICAgIDMyLFxuICAgICAgICAxNjMsXG4gICAgICAgIDEyLFxuICAgICAgICAxMDMsXG4gICAgICAgIDQyLFxuICAgICAgICA1NSxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMjYsXG4gICAgICAgIDIsXG4gICAgICAgIDE4LFxuICAgICAgICAxMzksXG4gICAgICAgIDEyMixcbiAgICAgICAgMjUzLFxuICAgICAgICAyMixcbiAgICAgICAgMjU0LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNjAsXG4gICAgICAgIDYxLFxuICAgICAgICAxNTgsXG4gICAgICAgIDIxMixcbiAgICAgICAgMCxcbiAgICAgICAgMjMwLFxuICAgICAgICA1MixcbiAgICAgICAgMjI4LFxuICAgICAgICA5NCxcbiAgICAgICAgNzZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxODgsXG4gICAgICAgIDI1MyxcbiAgICAgICAgOTAsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMyxcbiAgICAgICAgMjE3LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTUsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTc5LFxuICAgICAgICAyMDAsXG4gICAgICAgIDEwLFxuICAgICAgICAxMCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxODgsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNjksXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMjUsXG4gICAgICAgIDExNyxcbiAgICAgICAgMzFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxMDBcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwMyxcbiAgICAgICAgNzIsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMixcbiAgICAgICAgMTYxLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNTEsXG4gICAgICAgIDQxLFxuICAgICAgICAyNTMsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTM4LFxuICAgICAgICAyNDAsXG4gICAgICAgIDM1LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNzYsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTgzLFxuICAgICAgICA4MixcbiAgICAgICAgOTUsXG4gICAgICAgIDE5LFxuICAgICAgICAyNTQsXG4gICAgICAgIDExOSxcbiAgICAgICAgNTcsXG4gICAgICAgIDExNCxcbiAgICAgICAgNjUsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNDcsXG4gICAgICAgIDkwLFxuICAgICAgICAyNTUsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNzEsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMjEsXG4gICAgICAgIDUyLFxuICAgICAgICA4OCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNjUsXG4gICAgICAgIDM1LFxuICAgICAgICAxMDgsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTUyLFxuICAgICAgICA4LFxuICAgICAgICAyNTEsXG4gICAgICAgIDIxLFxuICAgICAgICAyMjEsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMTMsXG4gICAgICAgIDU1LFxuICAgICAgICAxODIsXG4gICAgICAgIDY2LFxuICAgICAgICAyNDYsXG4gICAgICAgIDM0LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMzAsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMzlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEyNixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJtSFNGcGIwSEJQbFpXQ1RVMDF4VkRWTkZzOUZyYWE5cHBGMFlxY3pZRVZnPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJWaThSUzdGNlNEU1lkQU9nekxwSVNRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjdjNjEwOTIxLWRjN2ItNDZkYS1iZDJiLThhYzMxNzExMTI4NFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA0OCxcbiAgICAgIDEwOSxcbiAgICAgIDIyOCxcbiAgICAgIDIzNCxcbiAgICAgIDIzNSxcbiAgICAgIDMyLFxuICAgICAgMTEyLFxuICAgICAgMjUzLFxuICAgICAgMjAsXG4gICAgICA2MSxcbiAgICAgIDE5OCxcbiAgICAgIDIyLFxuICAgICAgMjUyLFxuICAgICAgNzYsXG4gICAgICAyMzQsXG4gICAgICA2MyxcbiAgICAgIDExMCxcbiAgICAgIDU2LFxuICAgICAgNixcbiAgICAgIDEwOVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNTMsXG4gICAgICAyNDgsXG4gICAgICAxMixcbiAgICAgIDE5MCxcbiAgICAgIDE2MixcbiAgICAgIDI0MCxcbiAgICAgIDU2LFxuICAgICAgMTUsXG4gICAgICAyMjQsXG4gICAgICAxNzQsXG4gICAgICAxMSxcbiAgICAgIDI0MCxcbiAgICAgIDEyMixcbiAgICAgIDQ2LFxuICAgICAgNDIsXG4gICAgICAxNyxcbiAgICAgIDE2NixcbiAgICAgIDE2MixcbiAgICAgIDIxOSxcbiAgICAgIDIxNVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJUWlM5TVM3TlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjUyNjg2NTA2ODY5OjU1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNTIwODk2NTc3NTQ2Njo1NUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJM1gwOW9GRU5PNXlMb0dHQ2dnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInlqYjZTRE1VdWxaOXJ1Sm1oWXNBb0dLNUs0TVRZb2lsSWh2U2lIZzlQQm89XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiNlpyS2FDOEQ3S2htTlQvRDhaREp1ay84Z2xjK3NPMG1SWWhVYjlCRktEVFpQMUUxeHlTMTBTWkVMV2dlTFp3MzMrM1VkWDNDWGJDREhyQ3F2dUNZQ0E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwieHVaUHc1RVJLNVdncXJhS295OFVWS0VpaSs4OFFxenVTNlVVZ0JBb0RwRFNodVdYbXNmWFFpTGQrNFNPSG03cjdvc0JzbGgzRlorMGorR2ZlclQ2anc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjUyNjg2NTA2ODY5OjU1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDI2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzM0MzQ1ODIsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFHV1ZcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUdXVi5qc29uIjogIntcImtleURhdGFcIjpcIk11KzVpazVtQ3ZjM3grSENXdmpRbzdvd3A3TVBkSTAxa1lNOWZPcU84UlU9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTUzMjI5MTk4MSxcImN1cnJlbnRJbmRleFwiOjM0LFwiZGV2aWNlSW5kZXhlc1wiOlszMiwwLDM0XX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
