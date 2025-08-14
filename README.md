# Garage Check

Automated garage space monitoring system that runs every minute via GitHub Actions.

## Features

- Checks garage availability every minute
- Logs results to GitHub Actions
- Alerts when garage spaces are detected
- Manual trigger capability

## Setup

1. Push this repository to GitHub
2. The GitHub Action will automatically start running every minute
3. Check the "Actions" tab in your GitHub repository to see the results

## Manual Testing

To test locally:

```bash
npm install
npm start
```

## GitHub Actions

The workflow is configured to:

- Run every minute (`* * * * *` cron schedule)
- Check the garage API
- Log results
- Fail the action (triggering notifications) when garage spaces are detected

## Notifications

To get notified when garage spaces are detected:

1. Go to your repository settings
2. Enable email notifications for failed workflows
3. Or set up Slack/Discord webhooks for more advanced notifications

## API

Monitors: `https://fareharbor.com/api/v1/persistence/2e80fe21-d322-4625-a67c-58b121e7d2c9/`

---

## Previous Implementation (Polish)

Zaimplemenmtowane są dwa testy sprawdzające czy pojawia się komunikat o braku miejsc dla miejsc Cargo i P5.
Testy wykonują się automatycznie co 10 minut. W przypadku, gdy test się nie powiedzie (brak komunikatu) zostanie wysłana wiadomość email do autora programu.

Wiadomość tę można przekierować na dowolny adres email. Krok ten wymaga konfguracji po stronie klienta poczty.
