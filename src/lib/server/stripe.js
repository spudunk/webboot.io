import { STRIPEENDPOINTSECRET, STRIPEAPIKEY } from "$env/static/private";
import Stripe from 'stripe';

export const webCrypto = Stripe.createSubtleCryptoProvider();

export const endpointSecret = STRIPEENDPOINTSECRET;

export const stripe = new Stripe(
	STRIPEAPIKEY,
	{
		apiVersion: '2023-08-16',
		httpClient: Stripe.createFetchHttpClient(), // ensure we use a Fetch client, and not Node's `http`

	}
);