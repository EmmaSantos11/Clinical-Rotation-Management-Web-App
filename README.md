# Clinical Rotation Management Web App

A web application to manage student clinical rotations — scheduling, attendance,
performance assessment, and document handling across students, hospital admins,
and university admins.

## Structure

- **`FrontEnd/`** — React app (CRA). Routes: Registration, Login, Hospital dashboard,
  Student dashboard, University dashboard.
- **`Backend/`** — Express + MongoDB (Mongoose) API. Models for Admin, Student,
  HospitalAdmin, Assessment, Attendance, TimeTable, Wards. Email notifications via
  Nodemailer.

## Running locally

**Backend**
```
cd Backend
npm install
cp .env.example .env   # fill in MONGO_URI (required); EMAIL_USER/EMAIL_APP_PASSWORD are optional
npm start
```

Signup emails are optional — if `EMAIL_USER`/`EMAIL_APP_PASSWORD` aren't set, the
app logs what it would have sent instead of emailing.

**Frontend**
```
cd FrontEnd
npm install
npm start
```

## Note

This repo was reorganized from its original state (committed `node_modules/`,
zipped source archives, and two empty unused `create-react-app` scaffolds were
removed; `package.json` was moved to sit beside `FrontEnd/src`). The frontend
build hasn't been re-verified end-to-end after the reorg — if `npm start` fails,
check `FrontEnd/dist/bundle.js` for signs of a webpack setup that predates the
`react-scripts` dependency in `package.json`.

## Security note

Earlier commits had a MongoDB connection string and a Gmail app password
committed in plaintext in `Backend/db/db.js` and `Backend/controller/Controller.js`.
Both have been moved to environment variables (see `Backend/.env.example`) — if
you're reusing those credentials elsewhere, rotate them, since they were exposed
in the public repo history.
