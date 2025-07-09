const fs = require('fs');
const path = require('path');
const config = require('../settings')
const {LELOUCH , commands} = require('../lite')


//auto recording
LELOUCH({
  on: "body"
},    
async (conn, mek, m, { from, body, isOwner }) => {       
 if (config.AUTO_RECORDING === 'true') {
                await conn.sendPresenceUpdate('recording', from);
            }
         } 
   );
