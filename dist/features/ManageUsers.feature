Feature: Manage Users

	Background:
		Given the Tenant is logged in

	@Full
	Scenario: Add a user to the company user list and make he/she an admin
		Given a User is able to edit the Manage Users page
		When the User adds a new User as an Admin
		Then the new User can edit the Manage Users page as well

	@Full
	Scenario: Remove Users
		Given a User is able to edit the Manage Users page
		When the User removes a User from the Manage Users page
		Then the new User can no longer login to the Company site

	@Incomplete
	Scenario: Send user password reset
		Given a User is able to edit the Manage Users page
		When the User sends a password reset to another User
		Then that other user must change their password upon login
		And that other user receives a password reset email

	@Full
	Scenario: Deactivate User
		Given a User is able to edit the Manage Users page
		When the User deactivates a User from the Manage Users page
		Then the deactivated User can no longer login to the Company site

	@Incomplete
	Scenario: Activate User
		Given a User is able to edit the Manage Users page
		When the User activates a User from the Manage Users page
		Then the deactivated User can login to the Company site
