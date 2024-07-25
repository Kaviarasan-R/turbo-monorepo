# Turbo Repo

To install a npm package in workspace, `npm i --workspace=apps/client dotenv`

## Notes:

Make sure to hide /api/v1 routes when try to use in clients browser url, then it should return html page of 404 from backend.
Or try to authenticate and redirect the route to client's route.
