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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_08_10_12_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMTYwLFxuICAgICAgICA4NSxcbiAgICAgICAgNyxcbiAgICAgICAgNjgsXG4gICAgICAgIDc1LFxuICAgICAgICAxNzksXG4gICAgICAgIDEwMCxcbiAgICAgICAgNzMsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNTksXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTE4LFxuICAgICAgICAyLFxuICAgICAgICAxNDYsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNTcsXG4gICAgICAgIDg5LFxuICAgICAgICAxMjYsXG4gICAgICAgIDgwLFxuICAgICAgICAyNDksXG4gICAgICAgIDE5MixcbiAgICAgICAgMzMsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTA0LFxuICAgICAgICA3MixcbiAgICAgICAgMTAyLFxuICAgICAgICAxODQsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjM2LFxuICAgICAgICAxNzYsXG4gICAgICAgIDkyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMixcbiAgICAgICAgMjM1LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE5LFxuICAgICAgICAyMTMsXG4gICAgICAgIDYzLFxuICAgICAgICAyMyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNDAsXG4gICAgICAgIDExMixcbiAgICAgICAgMjE2LFxuICAgICAgICA0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDcwLFxuICAgICAgICAxMDAsXG4gICAgICAgIDgyLFxuICAgICAgICAzNyxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDc3LFxuICAgICAgICAyNixcbiAgICAgICAgMTQxLFxuICAgICAgICAxMDMsXG4gICAgICAgIDIyLFxuICAgICAgICAxNjAsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjM5LFxuICAgICAgICA5MSxcbiAgICAgICAgMjM4LFxuICAgICAgICA0LFxuICAgICAgICAxNzcsXG4gICAgICAgIDY0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NixcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNTgsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTczLFxuICAgICAgICAyNDEsXG4gICAgICAgIDQ4LFxuICAgICAgICA2OSxcbiAgICAgICAgMyxcbiAgICAgICAgMjQsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjM2LFxuICAgICAgICA5NCxcbiAgICAgICAgMTIsXG4gICAgICAgIDI2LFxuICAgICAgICAyNDAsXG4gICAgICAgIDk3LFxuICAgICAgICAxODEsXG4gICAgICAgIDExMixcbiAgICAgICAgNDAsXG4gICAgICAgIDYxLFxuICAgICAgICAxNDUsXG4gICAgICAgIDIxMyxcbiAgICAgICAgOTYsXG4gICAgICAgIDIsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTEwLFxuICAgICAgICAyNixcbiAgICAgICAgMjMxLFxuICAgICAgICAyNDMsXG4gICAgICAgIDEzMixcbiAgICAgICAgOTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjAsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTYsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTI4LFxuICAgICAgICA5OSxcbiAgICAgICAgMTYxLFxuICAgICAgICAzMSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxLFxuICAgICAgICAyMDEsXG4gICAgICAgIDIzMCxcbiAgICAgICAgOTUsXG4gICAgICAgIDIxNyxcbiAgICAgICAgODQsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNDIsXG4gICAgICAgIDQyLFxuICAgICAgICAxNDksXG4gICAgICAgIDc4LFxuICAgICAgICA1LFxuICAgICAgICAxNzYsXG4gICAgICAgIDM4LFxuICAgICAgICA0OSxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMixcbiAgICAgICAgMjM1LFxuICAgICAgICAyMjgsXG4gICAgICAgIDcwLFxuICAgICAgICA4NyxcbiAgICAgICAgMTMyLFxuICAgICAgICA3NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjEwLFxuICAgICAgICAxNjgsXG4gICAgICAgIDc5LFxuICAgICAgICAxNTYsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjEwLFxuICAgICAgICA3MyxcbiAgICAgICAgMjIyLFxuICAgICAgICA4MCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNzMsXG4gICAgICAgIDc3LFxuICAgICAgICAxMjksXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNDgsXG4gICAgICAgIDIwLFxuICAgICAgICAxNzUsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTExLFxuICAgICAgICAzOCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMyxcbiAgICAgICAgNDEsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMzYsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTAwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMTksXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMDMsXG4gICAgICAgIDIwLFxuICAgICAgICAyMzAsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNTYsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTczLFxuICAgICAgICAxNTAsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTY1LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE4LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNzEsXG4gICAgICAgIDg0LFxuICAgICAgICAxMzQsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxOTUsXG4gICAgICAgIDI0OSxcbiAgICAgICAgOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDkxXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDEwMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU4LFxuICAgICAgICA5LFxuICAgICAgICAxMTAsXG4gICAgICAgIDc4LFxuICAgICAgICAyMDksXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTY0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDQ1LFxuICAgICAgICAxOTIsXG4gICAgICAgIDMzLFxuICAgICAgICA2NCxcbiAgICAgICAgNixcbiAgICAgICAgMTA0LFxuICAgICAgICAyMTAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTgyLFxuICAgICAgICA1OCxcbiAgICAgICAgMTAwLFxuICAgICAgICAyOCxcbiAgICAgICAgMTYxLFxuICAgICAgICA3MixcbiAgICAgICAgNTIsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMjUsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTU5LFxuICAgICAgICA5NyxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMjUsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNTQsXG4gICAgICAgIDIxNCxcbiAgICAgICAgODYsXG4gICAgICAgIDU0LFxuICAgICAgICAxOTksXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNjgsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTAxLFxuICAgICAgICAxMTMsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxODQsXG4gICAgICAgIDE5NyxcbiAgICAgICAgODQsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTMsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjEsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNjAsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNDAsXG4gICAgICAgIDIxNSxcbiAgICAgICAgODMsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTk4LFxuICAgICAgICAxMzAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNDksXG4gICAgICAgIDEwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMzEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiUmdVZ2VZTHFaU0NPL095bjgwcGt3S21nYUVzYlU5eHRZQWd0d3Z2QW9pTT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiTWpVMDFKU2JTTVdtSFk3NS01dG0yUVwiLFxuICBcInBob25lSWRcIjogXCI1NTUwYzVmZS02NWMyLTRlYjAtYTZjMi1lZmI3MWI0OTU5Y2ZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjUxLFxuICAgICAgMjE5LFxuICAgICAgMjUwLFxuICAgICAgMjAzLFxuICAgICAgMjIzLFxuICAgICAgMjI2LFxuICAgICAgMTA5LFxuICAgICAgMTA3LFxuICAgICAgMTc2LFxuICAgICAgOCxcbiAgICAgIDExOSxcbiAgICAgIDUzLFxuICAgICAgMyxcbiAgICAgIDcxLFxuICAgICAgMjUyLFxuICAgICAgMTg4LFxuICAgICAgMTA2LFxuICAgICAgMzYsXG4gICAgICAxMjIsXG4gICAgICAxMDRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNyxcbiAgICAgIDIzNCxcbiAgICAgIDI0NixcbiAgICAgIDg5LFxuICAgICAgMjM0LFxuICAgICAgNTIsXG4gICAgICAxNzksXG4gICAgICAxNzgsXG4gICAgICAxNjAsXG4gICAgICAyNDYsXG4gICAgICA3MixcbiAgICAgIDE5NixcbiAgICAgIDIzMixcbiAgICAgIDE0LFxuICAgICAgMjQ4LFxuICAgICAgMTQ4LFxuICAgICAgMTMzLFxuICAgICAgMjAwLFxuICAgICAgNzYsXG4gICAgICAyN1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCIxSEZGUzI0RVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjUyNjgyMTQzNzUzOjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLwnZed8J2XovCdl6LwnZel8J2Xl/Cdl5TwnZeh8J2XovCdl6rwnZeq8J2XqvCdl6rwnZeq8J2XqlwiLFxuICAgIFwibGlkXCI6IFwiMjAzMTMxMDMxOTI0OTE3OjNAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTXkrdjdnQkVPSGl5cm9HR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJadG41clI5bllDcGtKekk1aW5KOHl3YWllcUR0VUlwVlNML2hmcVlGS2lzPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkd0MTIyQzJQTFRzVDZ1dmZjRFY0aUEvZDlveEs1RU5GQ3dJVEEvc3IvZXpjRmtWWm9NZGY4Y2VyV2VzZGdUc1J6UWJ5VHpxcTIzMncxRldzb1VDaEJRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInF4clJJL2RwT0xpWUMzUlJWbTNRQzlRRnVvZ0lIenVnakl3dDd6WmRIMVhvWGJJUnpFa3l0SllEeExlZFcxcjZkcGltcUpTS1NEMWhuSVBHd1oyWkN3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1MjY4MjE0Mzc1MzozQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICA5NixcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgNSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICA0M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMzNDcyNjE0XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


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
