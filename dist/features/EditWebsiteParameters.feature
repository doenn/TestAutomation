Feature: View and Edit Company Profile

	Background:
		Given the Tenant is logged in

	@Incomplete
	Scenario: Update access link durations
		Given the User specifies a Link Duration
		When a Prospect accesses a link after the Duration passes
		Then the Link shows a link expired page

	@Incomplete
	Scenario: View access link duration defaults
		Given the User has never specified a Link Duration
		When the User Views the link duration dropdown
		Then the User sees the default link duration value
