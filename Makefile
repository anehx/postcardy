deploy:
	make -C frontend/ build
	rsync -rv frontend/dist/* sh@codedump.ch:/srv/http/postcard.codedump.ch/htdocs/
	rsync -rv --exclude=node_modules --exclude=config --exclude=uploads backend/* sh@codedump.ch:/srv/http/postcard.codedump.ch/backend/

