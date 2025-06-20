# Prof Carlos Website

This repository hosts a Django backend and a React frontend for the website.

## Backend Setup

1. **Create a Python virtual environment**

   ```bash
   python3 -m venv venv
   source venv/bin/activate
   ```

2. **Install Python dependencies**

   ```bash
   pip install -r backend/requirements.txt
   ```

3. **Configure the database**

   Update the settings in `backend/core/settings.py` under the `DATABASES` section
   to match your PostgreSQL credentials. The default configuration expects a local
   PostgreSQL server with the following values:

   - NAME: `carlos-website`
   - USER: `carlos`
   - PASSWORD: `website`
   - HOST: `localhost`
   - PORT: `5432`

4. **Apply migrations**

   ```bash
   python backend/manage.py migrate
   ```

5. **Run the development server**

   ```bash
   python backend/manage.py runserver
   ```

## Frontend Setup (optional)

The `frontend` directory contains a Vite + React project. To start it:

```bash
cd frontend
npm install
npm run dev
```
