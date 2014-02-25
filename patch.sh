
# Regular expressions here should be safe to run multiple times


# Re-reference chrome API to local implementation (see webext/chrome-overrides.js)
ls src/*.js|xargs sed -i 's/[^_]chrome\./_chrome./g'

# bitcoinaverage will seend a permanent forward response to same path but ending with a /
# dataType: json added
ls src/*.js|xargs sed -i 's#url: "https://api.bitcoinaverage.com/ticker/" + currency,#url: "https://api.bitcoinaverage.com/ticker/" + currency + "/", dataType: "json",#g'

# enable blockchain's cross-origin resource sharing (cors)
ls src/*.js|xargs sed -i 's|https://blockchain.info/unspent?address=|https://blockchain.info/unspent?cors=true\&address=|g'
ls src/*.js|xargs sed -i "s|https://blockchain.info/pushtx'|https://blockchain.info/pushtx?cors=true'|g"

