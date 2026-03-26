# Official YC Lobbying Website

A full-stack application for lobbying management with Django backend and React/Vite frontend.

## Project Structure

- **backend/**: Django REST API
  - `config/`: Django configuration
  - `contacts/`: Contacts management app
  - `core/`: Core functionality

- **frontend/**: React application
  - Built with Vite
  - Vue/React components in `src/`

## Getting Started

### Backend Setup

```bash
cd backend
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

## License

MIT
