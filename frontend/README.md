# Student CRUD Frontend

Professional React frontend for Student Management REST API built with Vite, React, Tailwind CSS, and Axios.

## Features

✅ **Create** - Add new students with validation
✅ **Read** - View all students in a responsive table
✅ **Update** - Edit existing student records
✅ **Delete** - Remove student records with confirmation
✅ **Responsive Design** - Works on desktop and mobile
✅ **Error Handling** - User-friendly error messages
✅ **Loading States** - Visual feedback during API calls

## Tech Stack

- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Axios** - HTTP client for API calls
- **PostCSS** - CSS processor with Tailwind

## Installation

```bash
cd frontend
npm install
```

## Development

```bash
npm run dev
```

The app will be available at `http://localhost:3000`

## Build for Production

```bash
npm run build
npm run preview
```

## API Integration

The frontend connects to the backend API running on `http://127.0.0.1:5000`

**Required Backend Fields:**
- `name` - Student name
- `branch` - Branch/Department
- `group` - Partition key (group identifier)
- `email` - Optional email
- `rollNumber` - Optional roll number

## Project Structure

```
frontend/
├── src/
│   ├── components/
│   │   ├── StudentForm.jsx      # Form for adding/editing
│   │   └── StudentList.jsx      # Table for displaying students
│   ├── App.jsx                  # Main app component
│   ├── api.js                   # Axios API client
│   ├── main.jsx                 # React entry point
│   └── index.css                # Tailwind styles
├── index.html                   # HTML template
├── vite.config.js              # Vite configuration
├── tailwind.config.js          # Tailwind configuration
├── postcss.config.js           # PostCSS configuration
└── package.json                # Dependencies
```

## Usage

1. **View Students** - Page loads and displays all students
2. **Add Student** - Fill the form on the left and click "Add Student"
3. **Edit Student** - Click "Edit" on any student row to populate the form
4. **Delete Student** - Click "Delete" and confirm removal
5. **Refresh** - Click the refresh button to reload data

## Error Handling

The app handles:
- Network errors
- Missing required fields
- API validation errors
- Missing partition key (group)
- Duplicate entries

## UI Components

### StudentForm
- Handles both create and edit operations
- Field validation
- Loading state during submission
- Error display

### StudentList
- Responsive table layout
- Edit/Delete actions
- Loading indicator
- Empty state message

### Styling
- Professional blue color scheme
- Responsive grid layout
- Hover effects on buttons
- Loading animations

## Deployment

This frontend can be deployed to:
- Vercel
- Netlify
- Azure Static Web Apps
- GitHub Pages
- Any static hosting service

Just run `npm run build` and deploy the `dist` folder.
