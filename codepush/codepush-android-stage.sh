
#Change isDevelopment to true for app center Staging
#Change isStage to false for app center Staging
#Change isProduction to false for app center Staging
# sed -i '' 's/isDevelopment: true,/isDevelopment: false,/' source/webservice/URL.js
# sed -i '' 's/isStage: false,/isStage: true,/' source/webservice/URL.js
# sed -i '' 's/isProduction: true,/isProduction: false,/' source/webservice/URL.js

#Change URL's to point staging server for app center staging
# sed -i '' 's/\/\/ \/\*\*Stage\*\//\/\*\*Stage\*\//' source/webservice/URL.js
# sed -i '' 's/\/\*\*Development\*\//\/\/ \/\*\*Development\*\//' source/webservice/URL.js
# sed -i '' 's/\/\*\*Production\*\//\/\/ \/\*\*Production\*\//' source/webservice/URL.js

#Release an update using the "release-react" command: -- codepush for app center Android Staging
appcenter codepush release-react -a Innova-Zones/InnovaZones-Android-IZ-Main -d Staging