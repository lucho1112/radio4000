import Ember from 'ember';
import {validator, buildValidations} from 'ember-cp-validations';

const {Component, get} = Ember;

const Validations = buildValidations({
	email: [
		validator('presence', true),
		validator('format', {type: 'email'})
	],
	password: [
		validator('presence', true),
		validator('length', {min: 6})
	],
	passwordConfirmation: [
		validator('presence', true),
		validator('confirmation', {
			on: 'password',
			message: '{description} do not match',
			description: 'Password'
		})
	]
});

export default Component.extend(Validations, {
	// email,
	// password
	// passwordConfirmation
	actions: {
		submit(providerId, email, password) {
			get(this, 'onSignup')(providerId, email, password);
		}
	}
});
