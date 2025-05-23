# Country Explorer

This project is for students who want to learn about countries and explore their information interactively.

## Features

- Search for countries by name
- Filter countries by region
- Sort or highlight countries by population and area (most populated, least populated, biggest, smallest)
- View detailed information about each country in a modal (capital, region, subregion, population, area, coordinates, borders, timezones, currency, languages)
- Responsive and modern UI
- Back to top button for easy navigation
- Loading indicators and error handling for API requests
- Uses React functional components, hooks, and advanced patterns (HOC, memoization, lazy loading)

## How to Run the Project

1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Go into the project directory:
   ```
   cd country
   ```
3. Install dependencies:
   ```
   npm install
   ```
4. Start the development server:
   ```
   npm run dev
   ```

## API Integration Details

This project uses the Countries API: https://countries-api-abhishek.vercel.app/

### How the API is Used

- **API Setup:**

  - The API base URL is set in `src/requestMethod.js` using Axios.

- **Fetching All Countries:**

  - In `src/components/CountryList.jsx`, the endpoint `/countries` is called to get the list of all countries for listing and filtering.

- **Fetching Details for a Single Country:**
  - In `src/components/CountryDetailModal.jsx`, the endpoint `/countries/{countryName}` is called to get detailed information about a selected country.

| Feature/Component    | API Route Used             | Purpose                                    |
| -------------------- | -------------------------- | ------------------------------------------ |
| Country List         | `/countries`               | Fetch all countries for listing/filtering  |
| Country Detail Modal | `/countries/{countryName}` | Fetch detailed info for a selected country |
