import { STRIPEENDPOINTSECRET, STRIPEAPIKEY } from "$env/static/private";
import Stripe from 'stripe';

export const endpointSecret = STRIPEENDPOINTSECRET;

export const stripe = new Stripe(
	STRIPEAPIKEY,
	{
		apiVersion: '2023-08-16'
	}
);