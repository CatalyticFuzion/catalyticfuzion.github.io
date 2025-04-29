#!/bin/bash

# Tilføj alle ændringer (både ændrede og nye filer)
echo "Tilføjer alle ændringer..."
git add -A

# Lav et commit
echo "Committer ændringer..."
git commit -m "Force push for at overskrive repository"

# Force push til GitHub
echo "Force pusher til GitHub..."
git push origin main --force

echo "Færdig! Main branch er nu opdateret og force pushed til GitHub."
