find src -maxdepth 1 -name "*.js"|xargs sed -i 's/chrome\.storage\.local\.get/_chrome_storage_local_get/g'
find src -maxdepth 1 -name "*.js"|xargs sed -i 's/chrome\.storage\.local\.set/_chrome_storage_local_set/g'
