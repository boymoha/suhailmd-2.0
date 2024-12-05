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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_22_31_12_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAxNjUsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNjMsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTI4LFxuICAgICAgICA0LFxuICAgICAgICAyNDYsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjAsXG4gICAgICAgIDIyLFxuICAgICAgICA4MixcbiAgICAgICAgMjA2LFxuICAgICAgICAxMzgsXG4gICAgICAgIDk4LFxuICAgICAgICAyMzAsXG4gICAgICAgIDMxLFxuICAgICAgICAyMzQsXG4gICAgICAgIDE2OSxcbiAgICAgICAgODgsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTUsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTU2LFxuICAgICAgICAxNTQsXG4gICAgICAgIDI3LFxuICAgICAgICAyMzUsXG4gICAgICAgIDksXG4gICAgICAgIDEyMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzIsXG4gICAgICAgIDEzMixcbiAgICAgICAgNDcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTM3LFxuICAgICAgICA5NyxcbiAgICAgICAgMjExLFxuICAgICAgICA0NCxcbiAgICAgICAgMTksXG4gICAgICAgIDc1LFxuICAgICAgICAxMjksXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjMwLFxuICAgICAgICA2NixcbiAgICAgICAgMTM4LFxuICAgICAgICAxODUsXG4gICAgICAgIDYyLFxuICAgICAgICAxMjUsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMDUsXG4gICAgICAgIDYwLFxuICAgICAgICA2OCxcbiAgICAgICAgMzIsXG4gICAgICAgIDc5LFxuICAgICAgICAyMzIsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMDQsXG4gICAgICAgIDcwLFxuICAgICAgICAxNzgsXG4gICAgICAgIDg5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODQsXG4gICAgICAgIDYsXG4gICAgICAgIDE5LFxuICAgICAgICAyMDUsXG4gICAgICAgIDcxLFxuICAgICAgICAxMixcbiAgICAgICAgMTE5LFxuICAgICAgICAxMSxcbiAgICAgICAgOTQsXG4gICAgICAgIDY4LFxuICAgICAgICAxMjIsXG4gICAgICAgIDMzLFxuICAgICAgICAxMixcbiAgICAgICAgMTg5LFxuICAgICAgICAzOSxcbiAgICAgICAgMjM3LFxuICAgICAgICA3NixcbiAgICAgICAgMjA1LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTUxLFxuICAgICAgICAyNDgsXG4gICAgICAgIDI0MixcbiAgICAgICAgNDcsXG4gICAgICAgIDI5LFxuICAgICAgICAxMzYsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTQsXG4gICAgICAgIDc5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzMixcbiAgICAgICAgMTU1LFxuICAgICAgICAyMjIsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNzcsXG4gICAgICAgIDc5LFxuICAgICAgICA1MSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxODAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNyxcbiAgICAgICAgNTQsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMjYsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjMsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNDYsXG4gICAgICAgIDI5LFxuICAgICAgICA4NSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxODIsXG4gICAgICAgIDc1LFxuICAgICAgICA0NixcbiAgICAgICAgMTYsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMjcsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTY2LFxuICAgICAgICA0OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjI2LFxuICAgICAgICA4MixcbiAgICAgICAgMTI0LFxuICAgICAgICAyNDksXG4gICAgICAgIDE0MixcbiAgICAgICAgNTcsXG4gICAgICAgIDIsXG4gICAgICAgIDg5LFxuICAgICAgICAxMTksXG4gICAgICAgIDMzLFxuICAgICAgICAxMDAsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNDEsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTI4LFxuICAgICAgICA4OCxcbiAgICAgICAgNzksXG4gICAgICAgIDY0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDExMixcbiAgICAgICAgMTk2LFxuICAgICAgICAxNTMsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDI2LFxuICAgICAgICAxMTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQzLFxuICAgICAgICAzMSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMzEsXG4gICAgICAgIDUzLFxuICAgICAgICAxMzYsXG4gICAgICAgIDE2LFxuICAgICAgICAyNDgsXG4gICAgICAgIDU2LFxuICAgICAgICA3OCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNjUsXG4gICAgICAgIDM5LFxuICAgICAgICA4MSxcbiAgICAgICAgMTM2LFxuICAgICAgICAyNyxcbiAgICAgICAgMjI3LFxuICAgICAgICAzNixcbiAgICAgICAgMjI2LFxuICAgICAgICAxMDksXG4gICAgICAgIDE0NSxcbiAgICAgICAgNTIsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE2NyxcbiAgICAgICAgODgsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMzQsXG4gICAgICAgIDM0LFxuICAgICAgICAxOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgNyxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDgxXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICA0LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgNzBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzQsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNjMsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMTYsXG4gICAgICAgIDk1LFxuICAgICAgICAyNDgsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMzksXG4gICAgICAgIDU5LFxuICAgICAgICAwLFxuICAgICAgICAyMTIsXG4gICAgICAgIDExLFxuICAgICAgICAxNDgsXG4gICAgICAgIDI0LFxuICAgICAgICA4OSxcbiAgICAgICAgMjMxLFxuICAgICAgICA3NSxcbiAgICAgICAgMzMsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNjQsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTA2LFxuICAgICAgICAxODcsXG4gICAgICAgIDk2LFxuICAgICAgICA4MCxcbiAgICAgICAgODAsXG4gICAgICAgIDI5LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTM2LFxuICAgICAgICAxODAsXG4gICAgICAgIDIwLFxuICAgICAgICAyMTksXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNDUsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTA4LFxuICAgICAgICA5NyxcbiAgICAgICAgMjE4LFxuICAgICAgICAyNDYsXG4gICAgICAgIDI0LFxuICAgICAgICAyNTIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTk2LFxuICAgICAgICAyNDYsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMDIsXG4gICAgICAgIDc4LFxuICAgICAgICA0MyxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNDUsXG4gICAgICAgIDM0LFxuICAgICAgICA5NixcbiAgICAgICAgMjE3LFxuICAgICAgICAzMCxcbiAgICAgICAgOTksXG4gICAgICAgIDlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE4MSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJtRGJHZXhjQkpDRVRocnRoVWlXYkpiQzljcU5Fcks2L0t2QUFWcTlDVkR3PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI1Mjc3MDM2NTE1NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMDY2QjkyQ0VDMTcxMTlEQTJDNkU4RkZEMjAzQzdGNUNcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzMzNDM3ODY5XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjUyNzcwMzY1MTU1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJCNkFCQTc5REQ5QkNDQjBBQ0E0OTBFMTk3RTcyMjhBRVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzM0Mzc4NjlcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiTTlaQnE3LUpTZ2FwVVNBUHBORTNJUVwiLFxuICBcInBob25lSWRcIjogXCJlOTc3MTg3Yi1jMDkwLTQ1ODAtODViNy0yNGY2MjljM2NiNjlcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTY3LFxuICAgICAgMjM0LFxuICAgICAgNTcsXG4gICAgICAyNDcsXG4gICAgICAyMjAsXG4gICAgICAyNTQsXG4gICAgICAxMTQsXG4gICAgICA4NyxcbiAgICAgIDE0NixcbiAgICAgIDIxOSxcbiAgICAgIDE5MSxcbiAgICAgIDUzLFxuICAgICAgMTIsXG4gICAgICA3MCxcbiAgICAgIDE2LFxuICAgICAgMTM5LFxuICAgICAgMTY1LFxuICAgICAgMTM0LFxuICAgICAgMjE3LFxuICAgICAgMjMzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE3NSxcbiAgICAgIDEyNCxcbiAgICAgIDIwMyxcbiAgICAgIDk5LFxuICAgICAgMTgwLFxuICAgICAgODEsXG4gICAgICAyMzgsXG4gICAgICAyNTIsXG4gICAgICAyMzksXG4gICAgICAyMzgsXG4gICAgICAyMjgsXG4gICAgICAxMzMsXG4gICAgICAxNjEsXG4gICAgICAxMjgsXG4gICAgICAyNDEsXG4gICAgICAxMjYsXG4gICAgICAyNTAsXG4gICAgICAyMCxcbiAgICAgIDIyMixcbiAgICAgIDIwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlBRU0ZaNFdOXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTI3NzAzNjUxNTU6MTVAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjM2NzAwOTgyMTAwMDkwOjE1QGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIuKLhuKDnfCdl6nwnZec8J2XlvCdl6fwnZei8J2XpSDZrfCdmrjwnZqv8J2asCDZrc2c8J+kpPCfkLrimqFcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNT3V3WjRGRUtiVHlMb0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInRabGh4UWNoVFZoLzVOODA0aitrSTh4YjR2U3pIWVNhTUtEZ1dPYi9mWEk9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwibi9odW9wMzE5ZW8rRkRxME1BMlB5ekp1bU5rZEZWMXJSTlRmckNLZG1kRnZNU1l4L3liVll0Mzl0NmFqZ1YrNStueVJ3TDZZenBCYjBkNUNqWWk4Q1E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwibjZoSlpzMXdwWS81UlRQSkhNL1A1RUlERkNZblFQdEhha050ZTZGKzJlSi9ibTgvVEdHbDBYbUtFMm0wYWxZQ21JZTdWV1BXYzYrOFJxZFk3N3hxQ3c9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjUyNzcwMzY1MTU1OjE1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTE0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzM0Mzc4NjYsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFJa1BcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUlrUC5qc29uIjogIntcImtleURhdGFcIjpcIi9vZDlrUUtubm9HQTRpQk5xTENZdWk0VGcyUXZtYWZMeEw1aTJTNm80NzQ9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTQwNjE2Mjc1NSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzMzNDM3ODY5NDQxXCJ9Igp9"  // PUT your SESSION_ID 


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
