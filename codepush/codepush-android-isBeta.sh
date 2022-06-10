

#Change isDevelopment to true for app center Production
#Change isStage to false for app center Production
#Change isProduction to false for app center Production
# sed -i '' 's/isDevelopment: true,/isDevelopment: false,/' source/webservice/URL.js
# sed -i '' 's/isStage: true,/isStage: false,/' source/webservice/URL.js
# sed -i '' 's/isProduction: false,/isProduction: true,/' source/webservice/URL.js

#Change URL's to point Production server for app center Production
# sed -i '' 's/\/\/ \/\*\*Production\*\//\/\*\*Production\*\//' source/webservice/URL.js
# sed -i '' 's/\/\*\*Development\*\//\/\/ \/\*\*Development\*\//' source/webservice/URL.js
# sed -i '' 's/\/\*\*Stage\*\//\/\/ \/\*\*Stage\*\//' source/webservice/URL.js

#Release an update using the "release-react" command: -- codepush for app center Android Is_Beta_Testing
appcenter codepush release-react -a Innova-Zones/InnovaZones-Android-IZ-Main -d Is_Beta_Testing
