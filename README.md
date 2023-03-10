# Phase-2-Project

VacationEase 
## **The vacation planner that  does it for you. Start your vacation before your vacation.**

Home → Input Name/Email/TravelDates {get started}

{get started} → shows categories 

ClickCategory → shows destinations 

ClickDestination → shows Stays 

ClickStay → shows flights 

ClickFlight → shows MyTrips

- When you submit the Name and TravelDates form, the Name and TravelDates are added to “My Trips”.
- When you click on each category, destination, stay, and flight, it automatically gets saved to your “My Trips” AND it also has to take you to the next page, so they have a double function. And this will persist in your trip page.
- In the “My Trips” page, you can delete a trip and have it persist.
- In the “My Trips” page, you can hit the AddNewTrip button and it will take you back to the category position to begin again
- The My Trips page—by default it will say “You currently have no trips planned” with a begin trip button. Once someone inputs their name and dates, the My Trips page will turn into their personal Trips Page.
- when the page refreshes, all the trips are still there for one specific person. What about if someone else wants to add their trip info?
- The My Trips Page — you will be able to search for your trips by location

**My Trips: (page outline)**

- Name 
- TravelDates 
- Destination
- Destination image (1)
- Stay
- Stay Images + price (6)


Functions: 

- Submit your name, email, and vacation start and end date
    - Render and post that information to the “My Trips” page
    - Switch the page to the Vacation-Style Buttons page
- Click on a vacation-style button:
    - Renders only the destination and image that has that category on a new page
    - Saves your vacation-style to “My Trips”
- Click on a destination image:
    - Renders only the stays and their images with that destination
    - Saves their destination and image to “My Trips”
- Click on a stay image:
    - Saves the stay image to “My Trips”