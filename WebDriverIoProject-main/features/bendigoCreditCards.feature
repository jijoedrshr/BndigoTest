@Regression
Feature: Apply for Bendigo Bright Credit Card
    @Regression @Sanity @Smoke @CreditCard
    Scenario: Applying for Bendigo Bright Credit Card
        Given User navigates to the Bendigo Bank website
        When User clicks on "banking" option at header
        Then User should able to see the following links
            | Bank accounts                     |
            | Credit cards                      |
            | Personal loans                    |
            | Travel and international payments |
        When User selects "Credit cards" from Banking menu options,verifies page title and screen displayes as "Compare all cards"
        And User scrolls down and selects "Apply now for a bendigo bright credit card"
        Then User validates "Check my eligibility" screen
        Then User clicks on "Contine Apply", validates correct screen and validates "Getting Started" section are displayed
        When User enters preferred Credit Limit as "10000" and selects purpose as "General purpose use" in credit card details page
        And User clicks on "Continue" button and verifies "Application Details" section in credit card details
        When User selects "Single" option from the relationship status drop down
        And User selects "No" for "Are you currently a Bendigo Bank customer?" in credit card details page
        And User selects "No" for "Do you have a promo code?" in credit card details page
        And User clicks on "Continue" button and verifies "Time & Eligibility" section in credit card details