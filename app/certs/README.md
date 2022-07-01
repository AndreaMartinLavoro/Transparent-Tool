## For create the certs
        openssl req -new -newkey rsa:4096 -x509 -sha256 -days 365 -nodes -out nginx-certificate.crt -keyout nginx.key

Nell'opzione denominata COMMON_NAME, è necessario immettere l'indirizzo IP o il nome host.

Nel nostro esempio, abbiamo usato l'indirizzo IP 200.200.200.2000.