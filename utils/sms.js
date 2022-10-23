import React from 'react'

export default function sms() {

    const accountSid = 'ACa242a0adf9fd1f2a9d16b765579af6c0';
    const authToken = '[AuthToken]';
    const client = require('twilio')(accountSid, authToken);

    client.messages
        .create({
            messagingServiceSid: 'MGe2b769fd5a84fc87f07d94f5f8926cb9',
            to: '+639924036040'
        })
        .then(message => console.log(message.sid))
        .done();
        
    return (
        <div>

        </div>
    )
}
