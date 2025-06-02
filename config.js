const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="peterbnew26@gmail.com"
global.location="Nigeria,Lagos"


global.mongodb= process.env.MONGODB_URI || "false"  
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md-3";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website =process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "Made With LOVE!" 


global.devs = "" // Developer Contacts
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
global.userImages= process.env.USER_IMAGES || "" //"https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";

global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_00_47_04_22_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNzUsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMjAsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTM5LFxuICAgICAgICAyMyxcbiAgICAgICAgNSxcbiAgICAgICAgMCxcbiAgICAgICAgNDIsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNzYsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNzcsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMzIsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNDEsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMjAsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjMyLFxuICAgICAgICA2MixcbiAgICAgICAgMjA1LFxuICAgICAgICAxODAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMTAsXG4gICAgICAgIDY5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDczLFxuICAgICAgICAxNjQsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNTIsXG4gICAgICAgIDM0LFxuICAgICAgICA3OSxcbiAgICAgICAgMTU2LFxuICAgICAgICA5NixcbiAgICAgICAgNTgsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTYwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNjMsXG4gICAgICAgIDM3LFxuICAgICAgICAxNjEsXG4gICAgICAgIDQ3LFxuICAgICAgICAxLFxuICAgICAgICAyNDAsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMjMsXG4gICAgICAgIDgwLFxuICAgICAgICAyMjAsXG4gICAgICAgIDIyMixcbiAgICAgICAgMyxcbiAgICAgICAgMTk4LFxuICAgICAgICAyNDEsXG4gICAgICAgIDI2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTIsXG4gICAgICAgIDQyLFxuICAgICAgICAzMCxcbiAgICAgICAgMjAsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjgsXG4gICAgICAgIDM4LFxuICAgICAgICAxOTEsXG4gICAgICAgIDIxLFxuICAgICAgICAxNDYsXG4gICAgICAgIDIzLFxuICAgICAgICAyMTUsXG4gICAgICAgIDUyLFxuICAgICAgICAzLFxuICAgICAgICAxODgsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMDMsXG4gICAgICAgIDUsXG4gICAgICAgIDcxLFxuICAgICAgICAxOTUsXG4gICAgICAgIDcwLFxuICAgICAgICAyNTQsXG4gICAgICAgIDEwLFxuICAgICAgICAxNTAsXG4gICAgICAgIDEsXG4gICAgICAgIDU0LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxOTEsXG4gICAgICAgIDc3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMDEsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMjEsXG4gICAgICAgIDE2MixcbiAgICAgICAgOTEsXG4gICAgICAgIDExLFxuICAgICAgICAyMTQsXG4gICAgICAgIDgxLFxuICAgICAgICAyMTQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxODQsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjM5LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE0LFxuICAgICAgICAyMDgsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTMsXG4gICAgICAgIDExMixcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNDEsXG4gICAgICAgIDQwLFxuICAgICAgICAyMzIsXG4gICAgICAgIDIsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMzksXG4gICAgICAgIDI0NixcbiAgICAgICAgMTA3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjAsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTMzLFxuICAgICAgICAyNDAsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMzUsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjI2LFxuICAgICAgICAxODEsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMTUsXG4gICAgICAgIDg3LFxuICAgICAgICAyNDMsXG4gICAgICAgIDMzLFxuICAgICAgICA3NCxcbiAgICAgICAgMTA2LFxuICAgICAgICAyNTEsXG4gICAgICAgIDQ2LFxuICAgICAgICA3NixcbiAgICAgICAgMTIyLFxuICAgICAgICAxMTQsXG4gICAgICAgIDc0LFxuICAgICAgICAxNzQsXG4gICAgICAgIDYyLFxuICAgICAgICAxODQsXG4gICAgICAgIDI1LFxuICAgICAgICAyMjgsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjI0LFxuICAgICAgICA5NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjgsXG4gICAgICAgIDYwLFxuICAgICAgICAxMixcbiAgICAgICAgMTAsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNDEsXG4gICAgICAgIDI2LFxuICAgICAgICA3MSxcbiAgICAgICAgODYsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjE2LFxuICAgICAgICAzLFxuICAgICAgICAzNixcbiAgICAgICAgMTI4LFxuICAgICAgICA5NSxcbiAgICAgICAgMCxcbiAgICAgICAgNjYsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNDMsXG4gICAgICAgIDczLFxuICAgICAgICAxNTEsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTk5LFxuICAgICAgICAyOSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICA0LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDgwXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTE2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNixcbiAgICAgICAgMjA3LFxuICAgICAgICAxODgsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjI5LFxuICAgICAgICA5NixcbiAgICAgICAgMTA4LFxuICAgICAgICAyMjIsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjUsXG4gICAgICAgIDAsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMjQsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNTYsXG4gICAgICAgIDE0LFxuICAgICAgICAxNzYsXG4gICAgICAgIDIwNixcbiAgICAgICAgNDIsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjQ2LFxuICAgICAgICA5NyxcbiAgICAgICAgODQsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNjksXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTUwLFxuICAgICAgICAzNyxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMjksXG4gICAgICAgIDM0LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMyxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNDIsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTAyLFxuICAgICAgICAyOSxcbiAgICAgICAgMjksXG4gICAgICAgIDc3LFxuICAgICAgICAxMzMsXG4gICAgICAgIDQ3LFxuICAgICAgICA2MixcbiAgICAgICAgMTAwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDIxMyxcbiAgICAgICAgODMsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNTIsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMDMsXG4gICAgICAgIDIzNixcbiAgICAgICAgODAsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMzlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEwMyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCIwNnlKTnd1U2ZXNWRMd1oyMkRUeVJsWjBzaVlDZGhoZzV5VkhFNG5EZUlRPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJnYmxXM2JoMVFMbVVpQUdzNEVwazBnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjFhOGM4ZDYwLTYyMTYtNDEzOS1iM2RjLTVhNTUyMzNjYzhiM1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMjMsXG4gICAgICAzMSxcbiAgICAgIDQyLFxuICAgICAgMTIyLFxuICAgICAgNjAsXG4gICAgICAxMTMsXG4gICAgICAyMDAsXG4gICAgICAxNzEsXG4gICAgICAyMzUsXG4gICAgICAyNDMsXG4gICAgICAzMSxcbiAgICAgIDU1LFxuICAgICAgMjQ0LFxuICAgICAgMjQzLFxuICAgICAgMjI3LFxuICAgICAgNzgsXG4gICAgICAxNjAsXG4gICAgICAyMTMsXG4gICAgICAyMzUsXG4gICAgICA3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE0NCxcbiAgICAgIDE5NCxcbiAgICAgIDY4LFxuICAgICAgNDMsXG4gICAgICAxNDIsXG4gICAgICAxMyxcbiAgICAgIDE1MCxcbiAgICAgIDIzOCxcbiAgICAgIDcsXG4gICAgICAxNzQsXG4gICAgICAyMjEsXG4gICAgICAyNSxcbiAgICAgIDExMyxcbiAgICAgIDIzMixcbiAgICAgIDE3MyxcbiAgICAgIDIzMCxcbiAgICAgIDI0MyxcbiAgICAgIDE2NSxcbiAgICAgIDk2LFxuICAgICAgNDdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiQUFWUUg0VzZcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgxMDMwNjE2OTI6MTdAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjkxMjMwMzA2NzU1OTA6MTdAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiV0hPIElTIE1JTExJQU4/XCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUHo3aTdNQkVQck5tOEFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJRK0k1NjVvczRwcWNPSTI4amF2OXNxb2xkeTJlQjNmQ2Q4MHlzWXpCandZPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImVWMlNvMUM3ZnNnVlpqSVRCMW5SUVJOeE9XUG9ER2ZjV3crYWlwcVAyVFBvYktGeHkyQVl5UVRGdmZvQldLMmpnYm5qcU45UkZIalFQeXJpZFRjQ0JnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjNIUkY0SkFlOGY5a2psQ3kyWTdUSzRMRWF3LytlVlNyYXB2L0ZVTHYyYWJ6ZlVNUUJ6NGZsLzdyS2JqY1BPcHQ5aTl4QXhPcXlHVUxEektSU1IrMmhBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgxMDMwNjE2OTI6MTdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiaXBob25lXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3NDUyODI4MTMsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFDenJcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUN6ci5qc29uIjogIntcImtleURhdGFcIjpcIjZReGRUdDZlZEhnT05mNUNZWlkwQXc5NEwvejdSUFNiVTEwZmNpaFBiNDA9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6Mzc1NTg2MzAwLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMSwwXX0sXCJ0aW1lc3RhbXBcIjpcIjE3NDUyODI4MTY2NzhcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "❤️",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "3.0.1-developement",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Millian-MD",
  ownername:process.env.OWNER_NAME|| "Millian:Shy<3",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
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
