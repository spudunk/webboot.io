import { STRIPEENDPOINTSECRET, STRIPEAPIKEY } from '$env/static/private';
// import { error } from '@sveltejs/kit';
import Stripe from 'stripe';

export const webCrypto = Stripe.createSubtleCryptoProvider();

export const endpointSecret = STRIPEENDPOINTSECRET;

export const stripe = new Stripe(STRIPEAPIKEY, {
	apiVersion: '2023-08-16',
	httpClient: Stripe.createFetchHttpClient()
});

/**
 * 
 * @param {String} sessionId 
 * @returns {Promise<any>}
 */
export async function listLineItems (sessionId) {

	const r = await fetch(`https://api.stripe.com/v1/checkout/sessions/${sessionId}/line_items`, {
		headers: {
			Authorization: `Bearer ${STRIPEAPIKEY}`
		}
	})

	return r

};
