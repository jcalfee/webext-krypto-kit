
# Regular expressions here should be safe to run multiple times


# Re-reference chrome API to local implementation (see webext/chrome-overrides.js)
ls src/*.js|xargs sed -i 's/[^_]chrome\./_chrome./g'

# bitcoinaverage will seend a permanent forward response to same path but ending with a /
ls src/*.js|xargs sed -i 's#url: "https://api.bitcoinaverage.com/ticker/" + currency,#url: "https://api.bitcoinaverage.com/ticker/" + currency + "/",#g'
