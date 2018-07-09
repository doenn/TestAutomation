Feature: View and Edit Company Profile

	Background:
		Given the Tenant is logged in

	@Full
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


	@Full
	Scenario: Change the logo on your Company Profile
		Given the User has a completed Company Profile
		When the User changes their logo and refreshes their Company Profile
		Then the User sees their new logo

	@Full
	Scenario: Change the logo on your Company Profile when blank
		Given the User has an incomplete Company Profile
		When the User changes their logo and refreshes their Company Profile
		Then the User sees their new logo

	@Full
	Scenario: Update Company Name and Description
		Given the User has a completed Company Profile
		When the User changes their Company Name and Description and refreshes
		Then the User sees their new Company Name and Description

	@Full
	Scenario: Update Company Name and Description when missing
		Given the User has an incomplete Company Profile
		When the User specifies a new Company Name and Description and refreshes
		Then the User sees their new Company Name and Description
