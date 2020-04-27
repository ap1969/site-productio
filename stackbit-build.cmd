npx @stackbit/stackbit-pull --stackbit-pull-api-url=https://api.stackbit.com/pull/5e9e033eb9df0c001aa8cf72
echo "was  gatsby build"
npm run build
wait
firebase deploy --only hosting:sitedevenvnotifiumcom
echo "Stackbit-build.sh finished build"
