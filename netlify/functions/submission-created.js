const { CONVERTKIT_API_KEY } = process.env;

import fetch from 'node-fetch';

exports.handler = async (event, context) => {
    const email = JSON.parse(event.body).payload.email
    console.log(`Received a submission: ${email}`)

    const response = await fetch( 'https://api.buttondown.email/v1/subscribers', {
		  method: 'POST',
		  headers: {
			  Authorization: `Token ${EMAIL_TOKEN}`,
			  'Content-Type': 'application/json',
		  },
		  body: JSON.stringify({ email }),
	    }
    );

    let responseText = await response.text();
    console.log('response:', responseText);
    return {
        statusCode: 301,
        headers: {
            'Location': '/confirmation-page/',
        },
    }
}