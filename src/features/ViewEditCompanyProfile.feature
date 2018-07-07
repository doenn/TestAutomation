Feature: View and Edit Company Profile

	Background:
		Given the Tenant is logged in

	@Incomplete
	Scenario: Review your company profile, check logo and information
		Given the User has a completed Company Profile
		When the Tenant visits their Company Profile
		Then the User sees their logo
		And the User sees their Company information

	@Full
	Scenario: Review your company profile with missing logo and information
		Given the User has an incomplete Company Profile
		When the Tenant visits their Company Profile
		Then the User sees a missing logo
		And the User sees missing Company information