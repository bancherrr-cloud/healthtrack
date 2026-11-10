# HealthTrack

HealthTrack is a personal fitness and wellness tracking website built with React for the CSCI426 Advanced Web Programming course (Project Phase 1). It helps users log their meals, exercises, and daily activities in one place.

**Live demo:** https://healthtrack-vqe3.vercel.app

## Features

- 7 pages: Home, About, Services, Contact, Log Meals, Log Exercises, Log Daily Activities
- Works on desktop and mobile
- Dark mode toggle
- Dynamic meal log: add and delete meals, with a daily calorie goal progress bar
- Meals are saved in the browser with localStorage
- Contact form, exercise form, and daily activity form

## Technologies Used

- React (Create React App)
- React Router
- Bootstrap 5
- Material UI icons
- Git and GitHub
- Deployed on Vercel

## Setup Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/bancherrr-cloud/healthtrack.git
   ```
2. Go into the project folder:
   ```bash
   cd frontend
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the app:
   ```bash
   npm start
   ```
5. Open http://localhost:3000 in your browser.

## Screenshots

### Home
![Home](Screenshots\Home.png)

### Services

![Services](Services.png)

### Log Meals
![Log Meals](Screenshots\LogMeals.png)

### Dark Mode
![Dark Mode](Screenshots\DarkMode.png)

### Mobile View
![Mobile View](Screenshots\Mobile.png)

## Project Structure

```
src/
  Components/   NavBar, Footer
  Pages/        Home, About, Services, Contact,
                LogMeals, LogExercises, LogDailyActivities
  App.js        Routes and dark mode state
```

## Author

Zein Baroud, Lebanese International University