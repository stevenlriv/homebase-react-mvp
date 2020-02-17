# Front-End Homebase
 - Highly under development
 - Version 0.9 MVP Status
 - Code will need to be refactor in the future from react class to react hooks

## TEST INSTRUCTIONS
 - No need to build
 - Clone then run:
 - npm install
 - npm start

## MVP LAUNCH
 1) Webpage content for:
    - /sign-up {remove google and facebook from login}
    - /recover-password
    - /living-in-homebase
    - /membership
    - /for-owners
    - /about
    - /index {Add number of beds to search form; User Testimonials; If search is not house available they can contact us}
    - FOOTER SOCIAL LINKS {Facebook, Instagram; @renthomebase}
    - Feedback after user log-in on the app

 2) APP Task
    - get init state for citiesReducer.js from firestore database and not locally?
    - /index {Listings}
    - The categories pages {would be managed using firestore database}
    - /find-a-homebase {first ask for cities, then show all results there; If search is not house available they can contact us}
    - CHAT PLATFORM CONNECTED TO Zendesk API {connect hello@renthomebase.com to zendesk}
    - PandaDocs integration
    - house listing infrastructure {check-in, check-out house management}
    - membership infrastructure and description on the user page {charge for Wifi, etc in their billing}
    - Cleaning service request on the app {simple backend for cleaner}
    - -- The user will need to make the payment, before the cleanup can be performed
    - /my-homebase
    - /profile
    - admin page to add new listings; {admin.renthomebase.com}
    - Pictures for al cities Categories

 3) Cleanup Task
    - Body colors and all of fonts need to be changed to #000
    - Better quality logos
    - Refactor "Reducers & Actions"
    - Refactor every single file to eliminate not-needed states and components

 4) Security Task
    - Firebase Database Rules
    - Restric Google API only to renthomebase.com

 5) Extra Task
    - User profile; Password change & email change
    - Improve for Owners Page with a direct process for them to submit their listings

## SEED ROADMAP
 1) Solve react SEO problems
 2) A complete Sign-Up/Log-in System including Facebook and Google support
 3) The Platform for them to be able to make payments (stripe), and see their receipts and actual and old homebase, profile page, referral, etc; For credit cards, users will cover the fees
 4) Admin system in place to be able to monitor users, read the statistics, etc...
 5) Infrastructure to manage all the media assets from the supply side
 6) IOS & Androids Apps
 7) Supply side App support so user can host their houses
    - Create all the payouts infrastructure
    - Create all the feature needed for the users to be able to add their place on their own
 8) Concierge Service
 9) To mitigate risk there can be certain measures in place:
    - Background check
    - Credit check
    - Employer/Income check (when necessary)
    - Eviction history
    - ID / Fraud verification
    - Housing judgment history
 10) A feature for the users that are going to be living in the same house so they can
    - Chat to their future roommates
    - See their profile and their ratings
 11) Brand all firebase emails

## Brandind - Colors
 - Primary (dark orange): #d66d2a
 - Dark Red: #d6412a
 - Light 1: #d6bbaa
 - Light 2: #d6cac3
 - Light 3: #dfdddc
 - Black 1: #000
 - Black 2: #2B2B2B
 - Gray 1: #f1f1f1

# FIRESTORE DATABASE

## listing
 - "addedBy" is the user id whom added the listings
 - "addedOn" date where the listing was added
 - "airConditioning" is "true" or "false" and indicate if the unit has A/C included
 - "availabilityFullHouse" --- This was replaced, now to know if the house is fully available you will match availabilityRoom == numberBedrooms
 - "availabilityRoom" number of rooms available
 - "availabilityDate" lets you know at which date the rental will be Available if is not available now
 - "bookTourLink" is a link used on the MVP phase with calendly so people can book a tour of the houses
 - "checkInDescription" like Airbnb give the user instructions on how to get into the property
 - "checkInFirstImg" first image to add in the check-in Description
 - "checkInLastImg" 2nd image to add in the check-in Description
 - "checkInPinCode" pin code required to check-in to the houses
 - "citiesCategory" will be in what city does that homebase is located
 - "cleaningPrice" aproximated cleaning price for the entire unit
 - "country" in which country is this listing located
 - "depositFullHouse"
 - "depositPerRoom"
 - "electricity" is "true" or "false" if its true is included
 - "furnished" is "true" or "false" if its true is included
 - "imgMain" main listing Image
 - "listingDescription"
 - "listingTitle"
 - "monthlyRentFullHouse"
 - "monthlyRentPerRoom"
 - "numberBathrooms"
 - "numberBedrooms"
 - "numberBeds"
 - "parking" is "true" or "false" if its true is included
 - "pets" is "true" or "false" if its true is allowed
 - "physicalAddress"
 - "postalAddress"
 - "smoking" is "true" or "false" if its true is allowed
 - "squareFeet"
 - "state" in which state is the listing located
 - "unitType" {Apartment, House}
 - "uri" listing SEO Url
 - "videoTour"
 - "water" is "true" or "false" if its true is included
 - "wifi" is "true" or "false" if its true is included
 - "wifiPassword"
 - "wifiSSID"
 - "zipCode"



## users
 - Any change made to the user structure needs to be updated on createUserDocuments.js
 - "currentHomebase" is their listing Id of where they are currently living
 - "homebaseLeaseEnding" is the end of their current homebase lease
 - "type" is the user type, currently we support "basic" and "admin"
