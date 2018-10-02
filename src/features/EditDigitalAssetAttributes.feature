Feature: Edit Digital Asset Attributes

	Background:
		Given the Tenant is logged in

	@InProgress
	Scenario: Change Tags
		Given a User has changed Digital Asset tags
		When the User tests Prospect search with the new Asset tags
		Then the searched Digital Assets are shown as results