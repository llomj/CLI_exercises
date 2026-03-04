// LEVEL 6: SEAL — Networking Basics (CLI)
// 100 Beginner questions. Intermediate/Expert use placeholders.

const beginner = [
  (_i: number) => ({
    q: "What does `ping host` do?",
    o: ["Sends ICMP echo requests to test connectivity", "Pings host", "Tests connection", "Checks host"],
    c: 0,
    e: "ping sends ICMP packets, measures round-trip time. Ctrl+C to stop.",
    de: "ping example.com. -c 4 for 4 packets. -i 1 for 1s interval. Requires ICMP (may be blocked)."
  }),
  (_i: number) => ({
    q: "What does `curl URL` do?",
    o: ["Transfers data from URL (HTTP, FTP, etc.)", "Curls URL", "Fetches URL", "Downloads URL"],
    c: 0,
    e: "curl fetches URL. curl -O saves with remote filename. curl -o file saves to file.",
    de: "curl https://example.com. -L follow redirects. -I headers only. -v verbose. -X POST for POST."
  }),
  (_i: number) => ({
    q: "What does `wget URL` do?",
    o: ["Downloads file from URL", "Gets web", "Web get", "Downloads web"],
    c: 0,
    e: "wget downloads files. Saves to current dir. wget -O file renames. Recursive with -r.",
    de: "wget https://example.com/file.zip. -c continue. -q quiet. -r recursive. Good for scripts."
  }),
  (_i: number) => ({
    q: "What does `ssh user@host` do?",
    o: ["Connects to remote host via SSH", "Secure shell", "SSH connect", "Remote login"],
    c: 0,
    e: "ssh opens encrypted shell on remote. ssh -i key.pem for key auth. ssh -p 2222 for port.",
    de: "ssh user@192.168.1.1. ~/.ssh/config for shortcuts. ssh-copy-id for key setup."
  }),
  (_i: number) => ({
    q: "What does `scp file user@host:path` do?",
    o: ["Copies file to remote host over SSH", "Secure copy", "SCP copy", "Copies over SSH"],
    c: 0,
    e: "scp copies files over SSH. scp -r for directories. scp user@host:file . for download.",
    de: "scp file user@host:/path. scp -P 2222 for port. rsync often better for large/sync."
  }),
  (_i: number) => ({
    q: "What does `rsync -av src dest` do?",
    o: ["Syncs files (archive, verbose). Efficient for transfers", "Rsync copy", "Syncs src to dest", "Archive sync"],
    c: 0,
    e: "rsync -a archive (preserves permissions), -v verbose. Only transfers changes.",
    de: "rsync -av /src/ user@host:/dest/. Trailing / matters. -z compress. -e ssh for SSH."
  }),
  (_i: number) => ({
    q: "What is a TCP port?",
    o: ["Number (0-65535) identifying service/application", "Physical port", "Network port", "Port number"],
    c: 0,
    e: "Port identifies which service. 80=HTTP, 443=HTTPS, 22=SSH. netstat -tlnp to list.",
    de: "0-1023 well-known. 1024-49151 registered. 49152+ ephemeral. /etc/services maps names."
  }),
  (_i: number) => ({
    q: "What does `nslookup domain` do?",
    o: ["Queries DNS for domain info", "Name lookup", "DNS lookup", "Resolves domain"],
    c: 0,
    e: "nslookup queries DNS. Shows A record (IP), MX, etc. dig is more detailed alternative.",
    de: "nslookup example.com. nslookup -type=MX example.com. Interactive and non-interactive."
  }),
  (_i: number) => ({
    q: "What does `dig domain` do?",
    o: ["DNS lookup with detailed output", "Dig domain", "DNS query", "Domain info"],
    c: 0,
    e: "dig queries DNS. Shows ANSWER, AUTHORITY sections. dig +short for IP only.",
    de: "dig example.com. dig @8.8.8.8 example.com for specific server. +trace for full resolution."
  }),
  (_i: number) => ({
    q: "What does `host domain` do?",
    o: ["Simple DNS lookup", "Host lookup", "Resolves domain", "DNS host"],
    c: 0,
    e: "host performs DNS lookup. Simpler output than dig. host example.com.",
    de: "host example.com. host -t MX example.com for specific type. Good for quick checks."
  }),
  (_i: number) => ({
    q: "What does `ifconfig` show?",
    o: ["Network interface configuration (legacy)", "IP config", "Interface config", "Network config"],
    c: 0,
    e: "ifconfig shows IP, MAC, status. Deprecated; use ip addr. Still on macOS, some Linux.",
    de: "ifconfig eth0. ifconfig eth0 up/down. ip addr show is modern replacement."
  }),
  (_i: number) => ({
    q: "What does `ip addr` show?",
    o: ["IP addresses and interface info", "IP address", "Address list", "Interface addresses"],
    c: 0,
    e: "ip addr or ip a shows interfaces, IPs, state. Modern replacement for ifconfig.",
    de: "ip addr show. ip addr add 192.168.1.10/24 dev eth0. ip link for interface state."
  }),
  (_i: number) => ({
    q: "What does `netstat -tlnp` show?",
    o: ["Listening TCP ports and processes", "Net stat", "Port list", "TCP listeners"],
    c: 0,
    e: "netstat -tlnp: t=TCP, l=listening, n=numeric, p=process. ss -tlnp is faster replacement.",
    de: "netstat -tlnp. -u for UDP. ss -tlnp equivalent. See what's listening on which port."
  }),
  (_i: number) => ({
    q: "What does `ss -tlnp` show?",
    o: ["Socket statistics (listening TCP, processes)", "SS sockets", "Socket list", "TCP sockets"],
    c: 0,
    e: "ss is faster netstat replacement. ss -tlnp for listening TCP. ss -a for all.",
    de: "ss -tlnp. -u UDP. -s summary. From iproute2. Preferred over netstat."
  }),
  (_i: number) => ({
    q: "What does `traceroute host` do?",
    o: ["Shows route (hops) to host", "Traces route", "Route to host", "Path to host"],
    c: 0,
    e: "traceroute shows each hop. Uses UDP/ICMP. traceroute -I for ICMP. mtr is interactive.",
    de: "traceroute example.com. Each line = one hop. * = no response. -n for no DNS."
  }),
  (_i: number) => ({
    q: "What does `nc -l -p 1234` do?",
    o: ["Listens on TCP port 1234 (netcat)", "Netcat listen", "Listens on port", "NC server"],
    c: 0,
    e: "nc -l -p port listens. nc host port connects. Swiss army knife for TCP/UDP.",
    de: "nc -l -p 1234. nc host 1234 to connect. -u for UDP. -v verbose. -e for exec (dangerous)."
  }),
  (_i: number) => ({
    q: "What does `telnet host port` do?",
    o: ["Connects to TCP port (unencrypted)", "Telnet connect", "TCP connect", "Port test"],
    c: 0,
    e: "telnet opens raw TCP connection. Use for port testing. Unencrypted; prefer nc or ssh.",
    de: "telnet example.com 80. Tests if port open. nc host port is alternative. No encryption."
  }),
  (_i: number) => ({
    q: "What does `curl -I URL` do?",
    o: ["Fetches headers only (HEAD request)", "Headers only", "Curl headers", "HTTP headers"],
    c: 0,
    e: "curl -I sends HEAD, gets headers. Quick check without downloading body.",
    de: "curl -I https://example.com. Shows status, content-type, etc. -L for redirects."
  }),
  (_i: number) => ({
    q: "What does `curl -L URL` do?",
    o: ["Follows redirects", "Curl follow", "Redirect follow", "Follow links"],
    c: 0,
    e: "curl -L follows HTTP redirects (301, 302). Without -L, curl stops at redirect.",
    de: "curl -L https://short.url. -L = --location. Essential for short URLs, CDNs."
  }),
  (_i: number) => ({
    q: "What does `curl -o file URL` do?",
    o: ["Saves output to file", "Output to file", "Curl save", "Saves to file"],
    c: 0,
    e: "curl -o file saves to file. curl -O saves with remote filename.",
    de: "curl -o out.html https://example.com. -O uses URL filename. -o - for stdout."
  }),
  (_i: number) => ({
    q: "What does `wget -c URL` do?",
    o: ["Continues interrupted download", "Continue download", "Wget continue", "Resume download"],
    c: 0,
    e: "wget -c resumes partial download. Server must support Range header.",
    de: "wget -c https://example.com/large.iso. Continues from where it left off."
  }),
  (_i: number) => ({
    q: "What does `ssh -i key.pem user@host` do?",
    o: ["Connects using specific private key", "SSH with key", "Key file", "Identity file"],
    c: 0,
    e: "ssh -i specifies private key. For EC2, etc. chmod 600 key.pem for security.",
    de: "ssh -i ~/.ssh/key.pem user@host. Or use ~/.ssh/config IdentityFile."
  }),
  (_i: number) => ({
    q: "What does `ssh-copy-id user@host` do?",
    o: ["Copies your public key to host's authorized_keys", "Copy SSH key", "Setup key auth", "Authorized keys"],
    c: 0,
    e: "ssh-copy-id adds your ~/.ssh/id_rsa.pub to remote ~/.ssh/authorized_keys.",
    de: "ssh-copy-id user@host. One-time setup. Then ssh without password. Requires password first time."
  }),
  (_i: number) => ({
    q: "What does `rsync -avz src/ user@host:dest/` do?",
    o: ["Syncs with archive, verbose, compress over SSH", "Rsync compress", "Sync compress", "Archive sync compress"],
    c: 0,
    e: "rsync -avz: a=archive, v=verbose, z=compress. Trailing / on src = contents, not dir.",
    de: "rsync -avz -e ssh. -z helps on slow links. Trailing slash: src/ = contents; src = dir itself."
  }),
  (_i: number) => ({
    q: "What does `rsync --delete` do?",
    o: ["Deletes files in dest not in src (mirror)", "Rsync delete", "Delete extra", "Mirror sync"],
    c: 0,
    e: "rsync --delete removes dest files not in src. Makes dest mirror of src. Use carefully.",
    de: "rsync -av --delete src/ dest/. Dest becomes exact copy. --dry-run first!"
  }),
  (_i: number) => ({
    q: "What does `ping -c 4 host` do?",
    o: ["Sends 4 ping packets then stops", "Ping 4", "4 pings", "Count 4"],
    c: 0,
    e: "ping -c 4 sends 4 packets. Useful in scripts. Exit 0 if any reply.",
    de: "ping -c 4 example.com. -c count. -i interval. -W timeout. Good for scripts."
  }),
  (_i: number) => ({
    q: "What does `curl -X POST -d 'data' URL` do?",
    o: ["Sends POST request with data", "POST request", "Curl POST", "HTTP POST"],
    c: 0,
    e: "curl -X POST -d sends POST body. -d 'key=value'. -H for headers.",
    de: "curl -X POST -d 'user=foo' https://api.example.com. -H 'Content-Type: application/json' for JSON."
  }),
  (_i: number) => ({
    q: "What does `whois domain` do?",
    o: ["Queries domain registration info", "Whois lookup", "Domain info", "Registration info"],
    c: 0,
    e: "whois queries registrar. Shows owner, nameservers, expiry. whois example.com.",
    de: "whois example.com. Different output per TLD. Privacy may hide details."
  }),
  (_i: number) => ({
    q: "What does `arp -a` show?",
    o: ["ARP table (IP to MAC mapping)", "ARP table", "MAC addresses", "IP-MAC map"],
    c: 0,
    e: "arp -a shows cached IP-MAC mappings. ip neigh is modern equivalent.",
    de: "arp -a. arp -d to delete. ip neigh show. Layer 2 address resolution."
  }),
  (_i: number) => ({
    q: "What does `route -n` show?",
    o: ["Kernel routing table (numeric)", "Route table", "Routing table", "Routes"],
    c: 0,
    e: "route -n shows routing table. ip route is modern. Destination, gateway, interface.",
    de: "route -n. ip route show. 0.0.0.0/0 = default gateway. -n avoids DNS lookup."
  }),
  (_i: number) => ({
    q: "What does `ip route` show?",
    o: ["Routing table (modern)", "IP route", "Routes", "Routing info"],
    c: 0,
    e: "ip route or ip r shows routing table. ip route add for adding. Replaces route.",
    de: "ip route show. default via 192.168.1.1. ip route add default via gw."
  }),
  (_i: number) => ({
    q: "What does `getent hosts name` do?",
    o: ["Resolves name using system DB (hosts, DNS, NIS)", "Get entry", "Resolve name", "Host lookup"],
    c: 0,
    e: "getent hosts uses /etc/nsswitch.conf. getent hosts example.com. Works with hosts, dns.",
    de: "getent hosts example.com. getent passwd user. Unified interface for name services."
  }),
  (_i: number) => ({
    q: "What does `/etc/hosts` contain?",
    o: ["Static IP-hostname mappings", "Hosts file", "Local DNS", "Host mappings"],
    c: 0,
    e: "/etc/hosts: IP hostname. Checked before DNS. 127.0.0.1 localhost.",
    de: "127.0.0.1 localhost. Override DNS. Edit for local dev (e.g. test.local)."
  }),
  (_i: number) => ({
    q: "What does `resolvectl status` show?",
    o: ["DNS resolution config (systemd-resolved)", "Resolve status", "DNS status", "Resolver status"],
    c: 0,
    e: "resolvectl status shows DNS servers, domain. systemd-resolved. resolvectl query for lookup.",
    de: "resolvectl status. resolvectl query example.com. Replaces nslookup for system resolver."
  }),
  (_i: number) => ({
    q: "What does `mtr host` do?",
    o: ["Interactive traceroute with stats", "MTR trace", "My traceroute", "Traceroute stats"],
    c: 0,
    e: "mtr combines ping and traceroute. Updates continuously. q to quit.",
    de: "mtr example.com. -r for report. -c 10 for 10 cycles. Better than traceroute for diagnosis."
  }),
  (_i: number) => ({
    q: "What does `curl -v URL` do?",
    o: ["Verbose output", "Curl verbose", "Shows details", "Verbose curl"],
    c: 0,
    e: "curl -v shows request/response details. -vv or -vvv for more.",
    de: "curl -v https://example.com. Shows headers, TLS info. Debugging HTTP."
  }),
  (_i: number) => ({
    q: "What does `curl -u user:pass URL` do?",
    o: ["HTTP Basic authentication", "Curl auth", "User pass", "Basic auth"],
    c: 0,
    e: "curl -u sends Basic auth. curl -u user:pass. Or -u user (prompts for pass).",
    de: "curl -u admin:secret https://api.example.com. Base64 encoded. Prefer token for APIs."
  }),
  (_i: number) => ({
    q: "What does `scp -r dir user@host:path` do?",
    o: ["Copies directory recursively", "SCP recursive", "Copy directory", "Recursive copy"],
    c: 0,
    e: "scp -r copies directory and contents. scp -r mydir user@host:/remote/.",
    de: "scp -r dir user@host:/path. -P for port. rsync -av often better for dirs."
  }),
  (_i: number) => ({
    q: "What does `sftp user@host` do?",
    o: ["Interactive FTP over SSH", "SFTP connect", "Secure FTP", "FTP over SSH"],
    c: 0,
    e: "sftp opens interactive session. get, put, ls, cd. Like FTP but encrypted.",
    de: "sftp user@host. get file, put file. lcd, lpwd for local. sftp -i key.pem."
  }),
  (_i: number) => ({
    q: "What does `ssh -L 8080:localhost:80 user@host` do?",
    o: ["Local port forward: local 8080 -> remote 80", "SSH tunnel", "Port forward", "Local forward"],
    c: 0,
    e: "ssh -L binds local port to remote. Access remote service via localhost.",
    de: "ssh -L 8080:localhost:80 user@host. Then localhost:8080 hits remote:80. -R for reverse."
  }),
  (_i: number) => ({
    q: "What does `ssh -D 1080 user@host` do?",
    o: ["Creates SOCKS proxy on localhost:1080", "SSH proxy", "SOCKS proxy", "Dynamic forward"],
    c: 0,
    e: "ssh -D creates SOCKS5 proxy. Route browser through SSH tunnel.",
    de: "ssh -D 1080 user@host. Configure browser proxy localhost:1080. Bypass firewalls."
  }),
  (_i: number) => ({
    q: "What does `curl --connect-timeout 5 URL` do?",
    o: ["Aborts if connection takes >5 seconds", "Connection timeout", "Curl timeout", "5 second timeout"],
    c: 0,
    e: "curl --connect-timeout limits connection time. -m for total max time.",
    de: "curl --connect-timeout 5. -m 10 for max total. Prevents hanging on slow/dead hosts."
  }),
  (_i: number) => ({
    q: "What does `wget -r -l 2 URL` do?",
    o: ["Recursive download, max depth 2", "Wget recursive", "Recursive 2 levels", "Mirror limited"],
    c: 0,
    e: "wget -r recursive, -l 2 max depth. -np no parent. Careful: can download whole site.",
    de: "wget -r -l 2 https://example.com. -k convert links. -p page requisites. --no-clobber."
  }),
  (_i: number) => ({
    q: "What does `dig +short domain` do?",
    o: ["DNS lookup, IP only", "Dig short", "Short output", "IP only"],
    c: 0,
    e: "dig +short returns just the answer. Good for scripts. dig +short example.com.",
    de: "dig +short example.com. One IP per line. dig +short -t MX example.com for MX."
  }),
  (_i: number) => ({
    q: "What does `dig @8.8.8.8 domain` do?",
    o: ["Queries specific DNS server (Google)", "Dig specific server", "DNS server query", "Query 8.8.8.8"],
    c: 0,
    e: "dig @server queries that server. Bypass local DNS. 8.8.8.8 = Google DNS.",
    de: "dig @8.8.8.8 example.com. 1.1.1.1 = Cloudflare. Bypass cache, test DNS."
  }),
  (_i: number) => ({
    q: "What does `ip link show` show?",
    o: ["Network interfaces and state", "Link status", "Interfaces", "Network links"],
    c: 0,
    e: "ip link shows interfaces: name, state (UP/DOWN), MAC. ip link set eth0 up.",
    de: "ip link show. ip link set eth0 up/down. ip link set eth0 name wan. Rename, enable."
  }),
  (_i: number) => ({
    q: "What does `ethtool eth0` show?",
    o: ["Ethernet interface details (speed, duplex)", "Eth tool", "Interface details", "NIC info"],
    c: 0,
    e: "ethtool shows link speed, duplex, driver. ethtool -s for settings. Requires root.",
    de: "ethtool eth0. Speed, duplex, link detected. ethtool -i for driver. Diagnostics."
  }),
  (_i: number) => ({
    q: "What does `nmcli` do?",
    o: ["NetworkManager CLI", "Network manager", "NM CLI", "Network config"],
    c: 0,
    e: "nmcli manages NetworkManager. nmcli device, nmcli connection. Replaces nmtui for CLI.",
    de: "nmcli device status. nmcli connection up/down. nmcli general. RHEL, Ubuntu use it."
  }),
  (_i: number) => ({
    q: "What does `iwconfig` show?",
    o: ["Wireless interface config (legacy)", "Wireless config", "WiFi config", "Wireless info"],
    c: 0,
    e: "iwconfig shows wireless: ESSID, frequency, bit rate. iw is modern. Deprecated.",
    de: "iwconfig wlan0. iw dev wlan0 link for modern. iwlist scan for networks."
  }),
  (_i: number) => ({
    q: "What does `iw dev wlan0 scan` do?",
    o: ["Scans for WiFi networks", "IW scan", "WiFi scan", "Scan networks"],
    c: 0,
    e: "iw scan lists nearby networks. ESSID, signal, frequency. iw dev wlan0 link for connected.",
    de: "iw dev wlan0 scan. iw dev wlan0 connect 'SSID'. Modern replacement for iwlist."
  }),
  (_i: number) => ({
    q: "What does `nmap host` do?",
    o: ["Scans host for open ports", "Nmap scan", "Port scan", "Network map"],
    c: 0,
    e: "nmap scans ports. nmap -sT TCP connect. nmap -p 80,443 for specific. May need root.",
    de: "nmap 192.168.1.1. -sV service version. -A aggressive. -sn ping only (no port scan)."
  }),
  (_i: number) => ({
    q: "What does `nmap -sn 192.168.1.0/24` do?",
    o: ["Ping scan (host discovery, no port scan)", "Nmap ping", "Host discovery", "Ping sweep"],
    c: 0,
    e: "nmap -sn discovers hosts. No port scan. Replaces ping sweep. /24 = 256 hosts.",
    de: "nmap -sn 192.168.1.0/24. Finds live hosts. -sn = skip port scan. Fast discovery."
  }),
  (_i: number) => ({
    q: "What does `tcpdump -i eth0` do?",
    o: ["Captures packets on interface", "Tcpdump capture", "Packet capture", "Sniff eth0"],
    c: 0,
    e: "tcpdump captures packets. -i interface. port 80, host x. Requires root. Ctrl+C to stop.",
    de: "tcpdump -i eth0. tcpdump port 80. -w file to save. -r to read. -c 10 for 10 packets."
  }),
  (_i: number) => ({
    q: "What does `curl -k URL` do?",
    o: ["Skips SSL certificate verification (insecure)", "Curl insecure", "Skip SSL", "No verify"],
    c: 0,
    e: "curl -k allows insecure SSL (self-signed, wrong hostname). Use only for testing.",
    de: "curl -k https://self-signed.local. Insecure! Avoid in production. --cacert for custom CA."
  }),
  (_i: number) => ({
    q: "What does `openssl s_client -connect host:443` do?",
    o: ["Tests SSL/TLS connection", "OpenSSL connect", "SSL test", "TLS connect"],
    c: 0,
    e: "openssl s_client connects to TLS service. Shows cert, cipher. -servername for SNI.",
    de: "openssl s_client -connect example.com:443. Check cert expiry. -showcerts for chain."
  }),
  (_i: number) => ({
    q: "What does `curl --resolve host:port:ip URL` do?",
    o: ["Overrides DNS for that host", "Curl resolve", "DNS override", "Force IP"],
    c: 0,
    e: "curl --resolve example.com:443:1.2.3.4 uses that IP for host. Test without DNS.",
    de: "curl --resolve test.local:80:127.0.0.1 http://test.local. Bypass /etc/hosts for testing."
  }),
  (_i: number) => ({
    q: "What does `ssh -o StrictHostKeyChecking=no` do?",
    o: ["Skips host key verification (insecure)", "SSH no verify", "Skip host key", "Insecure SSH"],
    c: 0,
    e: "Disables host key check. Auto-accepts. Insecure; use only for automation with caution.",
    de: "ssh -o StrictHostKeyChecking=no. Or in config. Risk: MITM. Prefer known_hosts."
  }),
  (_i: number) => ({
    q: "What does `~/.ssh/config` do?",
    o: ["SSH client configuration (hosts, keys, options)", "SSH config", "Client config", "SSH hosts"],
    c: 0,
    e: "~/.ssh/config defines Host blocks. Shortcuts, keys, options per host.",
    de: "Host myserver\n  HostName 1.2.3.4\n  User ubuntu\n  IdentityFile ~/.ssh/key.pem. Then: ssh myserver."
  }),
  (_i: number) => ({
    q: "What does `ssh -N -f -L 8080:localhost:80 user@host` do?",
    o: ["Background tunnel, no shell (-N -f)", "SSH background tunnel", "Background forward", "Detached tunnel"],
    c: 0,
    e: "ssh -N no command, -f background. Creates tunnel without interactive session.",
    de: "ssh -Nf -L 8080:localhost:80 user@host. Tunnel runs in background. Kill with pkill -f 'ssh -Nf'."
  }),
  (_i: number) => ({
    q: "What does `rsync -n` or `--dry-run` do?",
    o: ["Shows what would be done without doing it", "Dry run", "No-op", "Preview"],
    c: 0,
    e: "rsync --dry-run shows what would transfer. Safe preview. -v for verbose dry run.",
    de: "rsync -avn src/ dest/. -n = --dry-run. Check before --delete or large sync."
  }),
  (_i: number) => ({
    q: "What does `curl -x proxy:port URL` do?",
    o: ["Uses HTTP proxy", "Curl proxy", "Proxy through", "HTTP proxy"],
    c: 0,
    e: "curl -x proxy:port routes through proxy. curl -x http://proxy:8080 URL.",
    de: "curl -x http://proxy:3128 https://example.com. -U user:pass for proxy auth."
  }),
  (_i: number) => ({
    q: "What does `wget --no-check-certificate URL` do?",
    o: ["Skips SSL cert verification (insecure)", "Wget insecure", "No cert check", "Skip SSL"],
    c: 0,
    e: "wget ignores SSL errors. Like curl -k. Use only for testing.",
    de: "wget --no-check-certificate https://... Insecure. For self-signed in dev only."
  }),
  (_i: number) => ({
    q: "What does `nc -vz host port` do?",
    o: ["Tests if port is open (verbose)", "NC port test", "Port check", "Connect test"],
    c: 0,
    e: "nc -vz tries to connect. -v verbose, -z scan (no data). Quick port check.",
    de: "nc -vz example.com 443. Exit 0 if open. Alternative to telnet. timeout 1 nc -vz."
  }),
  (_i: number) => ({
    q: "What does `timeout 5 cmd` do?",
    o: ["Runs cmd with 5 second limit", "Timeout command", "5 second limit", "Kill after 5"],
    c: 0,
    e: "timeout kills cmd after 5 seconds. timeout 10 ping host. Prevents hanging.",
    de: "timeout 5 curl URL. Sends SIGTERM. timeout -k 2 5 cmd: 2s SIGKILL after SIGTERM."
  }),
  (_i: number) => ({
    q: "What does `curl -H 'Header: value' URL` do?",
    o: ["Adds custom HTTP header", "Curl header", "Custom header", "HTTP header"],
    c: 0,
    e: "curl -H adds header. curl -H 'X-API-Key: secret' -H 'Accept: application/json'.",
    de: "curl -H 'Authorization: Bearer token' URL. Multiple -H for multiple headers."
  }),
  (_i: number) => ({
    q: "What does `curl -d @file URL` do?",
    o: ["Sends file contents as POST body", "Curl data file", "POST from file", "Data from file"],
    c: 0,
    e: "curl -d @file sends file as body. curl -d @data.json -H 'Content-Type: application/json'.",
    de: "curl -X POST -d @payload.json URL. @ reads from file. -d 'string' for inline."
  }),
  (_i: number) => ({
    q: "What does `rsync -e ssh` do?",
    o: ["Uses SSH for transport (default for remote)", "Rsync SSH", "SSH transport", "Rsync over SSH"],
    c: 0,
    e: "rsync -e ssh uses SSH. Default when dest has user@host. -e 'ssh -p 2222' for port.",
    de: "rsync -avz -e ssh src/ user@host:/dest. -e 'ssh -i key.pem' for key."
  }),
  (_i: number) => ({
    q: "What does `dig +trace domain` do?",
    o: ["Shows full DNS resolution path from root", "Dig trace", "DNS trace", "Resolution path"],
    c: 0,
    e: "dig +trace follows resolution from root. Shows each delegation. Debugging DNS.",
    de: "dig +trace example.com. Root -> TLD -> authoritative. See full resolution chain."
  }),
  (_i: number) => ({
    q: "What does `ss -s` show?",
    o: ["Socket statistics summary", "SS summary", "Socket summary", "Connection stats"],
    c: 0,
    e: "ss -s shows counts: TCP, UDP, etc. Quick overview of connections.",
    de: "ss -s. Total, timewait, etc. ss -t state established. Quick connection overview."
  }),
  (_i: number) => ({
    q: "What does `ip neigh` show?",
    o: ["Neighbor table (ARP/NDP)", "IP neighbors", "ARP table", "Neighbor cache"],
    c: 0,
    e: "ip neigh shows IP-MAC cache. ip neigh flush to clear. Replaces arp -a.",
    de: "ip neigh show. REACHABLE, STALE. ip neigh del for manual. Layer 2 resolution."
  }),
  (_i: number) => ({
    q: "What does `curl --cert client.pem --key key.pem URL` do?",
    o: ["Client certificate authentication", "Curl client cert", "mTLS", "Client TLS"],
    c: 0,
    e: "curl --cert and --key for client cert (mTLS). Server verifies client.",
    de: "curl --cert client.pem --key key.pem https://api. Mutual TLS. -E for cert file."
  }),
  (_i: number) => ({
    q: "What does `wget -O - URL | bash` do?",
    o: ["Downloads URL and pipes to bash (risky)", "Wget pipe bash", "Download and run", "Pipe to shell"],
    c: 0,
    e: "Downloads script, runs it. Common for installers. Security risk: verify URL first.",
    de: "wget -O - https://... | bash. -O - outputs to stdout. Never pipe untrusted content."
  }),
  (_i: number) => ({
    q: "What does `curl -s` do?",
    o: ["Silent mode (no progress/errors to stderr)", "Curl silent", "Suppress output", "Quiet curl"],
    c: 0,
    e: "curl -s suppresses progress meter. Good for scripts. -sS to show errors.",
    de: "curl -s URL. No progress bar. curl -sS keeps stderr for errors. Script-friendly."
  }),
  (_i: number) => ({
    q: "What does `ping -6 host` do?",
    o: ["Uses IPv6", "Ping IPv6", "Force IPv6", "IPv6 ping"],
    c: 0,
    e: "ping -6 forces IPv6. ping -4 for IPv4. When host has both.",
    de: "ping -6 example.com. Uses AAAA record. ping -4 for IPv4 only."
  }),
  (_i: number) => ({
    q: "What does `curl -4 URL` do?",
    o: ["Forces IPv4", "Curl IPv4", "Use IPv4", "Force IPv4"],
    c: 0,
    e: "curl -4 forces IPv4. curl -6 for IPv6. Resolve to that family only.",
    de: "curl -4 https://example.com. When v6 broken or testing v4 only."
  }),
  (_i: number) => ({
    q: "What does `ssh -t user@host cmd` do?",
    o: ["Runs cmd with pseudo-TTY", "SSH with TTY", "Force TTY", "Allocate TTY"],
    c: 0,
    e: "ssh -t allocates TTY. Needed for interactive programs (vim, less) over SSH.",
    de: "ssh -t user@host sudo visudo. -t forces TTY. Without -t, interactive programs may fail."
  }),
  (_i: number) => ({
    q: "What does `rsync --exclude '*.log' src/ dest/` do?",
    o: ["Excludes matching files from sync", "Rsync exclude", "Exclude pattern", "Skip files"],
    c: 0,
    e: "rsync --exclude skips files. --exclude-from file for list. Multiple --exclude.",
    de: "rsync -av --exclude '*.log' --exclude tmp/ src/ dest/. Like .gitignore for rsync."
  }),
  (_i: number) => ({
    q: "What does `curl --retry 3 URL` do?",
    o: ["Retries up to 3 times on failure", "Curl retry", "Retry 3 times", "Retry on fail"],
    c: 0,
    e: "curl --retry 3 retries on transient failure. --retry-delay for spacing.",
    de: "curl --retry 3 --retry-delay 2 URL. For flaky connections. Transient errors only."
  }),
  (_i: number) => ({
    q: "What does `wget -q URL` do?",
    o: ["Quiet mode (no output)", "Wget quiet", "Suppress output", "Quiet download"],
    c: 0,
    e: "wget -q suppresses output. Good for scripts. -q or --quiet.",
    de: "wget -q -O file URL. No progress. Exit code for success/fail. Script-friendly."
  }),
  (_i: number) => ({
    q: "What does `nc host port < file` do?",
    o: ["Sends file contents to TCP connection", "NC send file", "Pipe file to port", "Send file"],
    c: 0,
    e: "nc host port < file sends file to connection. nc -l -p port > out receives.",
    de: "nc host 25 < email.txt. Raw TCP. Useful for protocols. Receiving: nc -l -p 1234 > file."
  }),
  (_i: number) => ({
    q: "What does `ip addr add 192.168.1.10/24 dev eth0` do?",
    o: ["Adds IP address to interface", "Add IP", "Assign IP", "Set IP"],
    c: 0,
    e: "ip addr add assigns IP. /24 = netmask. ip addr del to remove. Temporary (until reboot).",
    de: "ip addr add 192.168.1.10/24 dev eth0. For secondary IPs or temporary config."
  }),
  (_i: number) => ({
    q: "What does `hostname -I` show?",
    o: ["All IP addresses of host", "Hostname IPs", "IP addresses", "All IPs"],
    c: 0,
    e: "hostname -I lists IPs. hostname -i for primary. Space-separated.",
    de: "hostname -I. Quick way to get IP. hostname -f for FQDN."
  }),
  (_i: number) => ({
    q: "What does `curl --max-time 10 URL` do?",
    o: ["Aborts after 10 seconds total", "Curl max time", "10 second timeout", "Max time"],
    c: 0,
    e: "curl -m 10 or --max-time limits total time. Includes connect + transfer.",
    de: "curl --max-time 10 URL. -m 10 shorthand. Prevents hanging. Different from --connect-timeout."
  }),
];

import { level6Intermediate } from './level6_intermediate_cli';
import { level6Expert } from './level6_expert_cli';

export const level6Patterns = beginner;
export const level6IntermediateA = level6Intermediate.slice(0, 50);
export const level6IntermediateB = level6Intermediate.slice(50, 100);
export const level6ExpertA = level6Expert.slice(0, 50);
export const level6ExpertB = level6Expert.slice(50, 117);
