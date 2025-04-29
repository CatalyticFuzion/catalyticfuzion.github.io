#!/bin/bash

# Gem dine nuværende ændringer til en ny branch
echo "Opretter ny branch fra detached HEAD..."
git branch temp-recovery-branch

# Tjek denne branch ud
echo "Skifter til den nye branch..."
git checkout temp-recovery-branch

# Nu har vi en rigtig branch med alle ændringerne
echo "Skifter til main branch..."
git checkout main

# Merge ændringerne fra vores temporary branch
echo "Merger ændringer fra den midlertidige branch..."
git merge temp-recovery-branch --allow-unrelated-histories -X theirs

# Alternativt kan du lave en hård reset til din midlertidige branch
# Dette er mere destruktivt, så vær sikker på at du vil dette
# echo "Hård reset af main til den midlertidige branch..."
# git reset --hard temp-recovery-branch

# Force push til GitHub
echo "Force pusher til GitHub..."
git push origin main --force

# Oprydning - slet den midlertidige branch hvis det ønskes
echo "Rydder op - sletter midlertidig branch..."
git branch -D temp-recovery-branch

echo "Færdig! Main branch er nu opdateret og force pushed til GitHub."
