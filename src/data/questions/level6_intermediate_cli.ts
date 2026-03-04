// LEVEL 6 INTERMEDIATE — Networking Basics (100 unique questions)
// Topics: TCP/IP, IP, ports, DNS, ping, curl, wget, ssh, scp, rsync

export const level6Intermediate = [
  (_i: number) => ({
    q: "What does `ping -c 4 host` do?",
    o: ["Sends 4 packets then stops", "4 pings", "Count 4", "Limited ping"],
    c: 0,
    e: "ping -c 4 sends 4 ICMP packets. Exits. Good for scripts.",
    de: "ping -c 4 example.com. No Ctrl+C needed. -c for count. -i for interval."
  }),
  (_i: number) => ({
    q: "What does `ping -i 2 host` set?",
    o: ["2 second interval between packets", "Ping interval", "2 second gap", "Interval 2"],
    c: 0,
    e: "ping -i sets interval. -i 2 = 2 seconds. Root for <0.2 on Linux.",
    de: "ping -i 1 host. Flood: -f (root only). -i 0.2 for fast. Rate limit."
  }),
  (_i: number) => ({
    q: "What does `curl -L URL` do?",
    o: ["Follows redirects", "Follow redirects", "Redirect follow", "Location header"],
    c: 0,
    e: "curl -L follows 3xx redirects. Without -L, returns redirect response.",
    de: "curl -L https://short.url. Gets final destination. -L = --location."
  }),
  (_i: number) => ({
    q: "What does `curl -I URL` do?",
    o: ["Fetches headers only (HEAD request)", "Headers only", "HEAD request", "Info headers"],
    c: 0,
    e: "curl -I sends HEAD, gets headers. No body. For checking without download.",
    de: "curl -I https://example.com. Content-Length, type. -I = --head."
  }),
  (_i: number) => ({
    q: "What does `curl -o file URL` do?",
    o: ["Saves output to named file", "Output to file", "Save to file", "Named output"],
    c: 0,
    e: "curl -o file saves to file. curl -O uses remote filename. -o for custom.",
    de: "curl -o page.html https://example.com. -o - for stdout."
  }),
  (_i: number) => ({
    q: "What does `curl -X POST -d 'data' URL` do?",
    o: ["Sends POST with form data", "POST request", "Post data", "Form POST"],
    c: 0,
    e: "curl -X POST -d sends POST. -d = data. Content-Type application/x-www-form-urlencoded.",
    de: "curl -X POST -d 'user=foo' URL. -d @file for file. -H for headers."
  }),
  (_i: number) => ({
    q: "What does `wget -c URL` do?",
    o: ["Continues partial download", "Continue download", "Resume download", "Partial continue"],
    c: 0,
    e: "wget -c continues interrupted download. Resumes from where it stopped.",
    de: "wget -c https://example.com/large.iso. --continue. For large files."
  }),
  (_i: number) => ({
    q: "What does `wget -r -l 2 URL` do?",
    o: ["Recursive download, 2 levels deep", "Recursive 2 levels", "Mirror 2 levels", "Crawl depth 2"],
    c: 0,
    e: "wget -r recursive, -l 2 depth. -l 1 = same page only. Careful: can get huge.",
    de: "wget -r -l 2 -np. -np no parent. -r recursive. -l depth. Mirror site."
  }),
  (_i: number) => ({
    q: "What does `ssh -i key.pem user@host` do?",
    o: ["Uses specified private key", "Key file", "Identity file", "SSH key"],
    c: 0,
    e: "ssh -i specifies identity (private key). For key-based auth. -i key.pem.",
    de: "ssh -i ~/.ssh/id_rsa user@host. -i for non-default. chmod 600 key."
  }),
  (_i: number) => ({
    q: "What does `ssh -p 2222 user@host` do?",
    o: ["Connects to port 2222", "SSH port", "Custom port", "Port 2222"],
    c: 0,
    e: "ssh -p specifies port. Default 22. -p 2222 for non-standard.",
    de: "ssh -p 2222 user@host. scp -P 2222 (capital P). Port in Host config."
  }),
  (_i: number) => ({
    q: "What does `scp -r dir user@host:path` do?",
    o: ["Copies directory recursively", "Recursive SCP", "Copy directory", "SCP directory"],
    c: 0,
    e: "scp -r copies directory. Recursive. Preserves structure. -r for recursive.",
    de: "scp -r ./mydir user@host:/remote/. -P for port. rsync often better."
  }),
  (_i: number) => ({
    q: "What does `rsync -avz src/ user@host:dest/` do?",
    o: ["Archive, verbose, compress over SSH", "Rsync compress", "Archive compress", "AVZ sync"],
    c: 0,
    e: "rsync -a archive, -v verbose, -z compress. Trailing / matters for dir contents.",
    de: "rsync -avz /src/ user@host:/dest/. -z for gzip. -e ssh default. Efficient."
  }),
  (_i: number) => ({
    q: "What does `rsync --delete src/ dest/` do?",
    o: ["Deletes files in dest not in src", "Mirror delete", "Remove extra", "Sync delete"],
    c: 0,
    e: "rsync --delete removes dest files not in src. Makes dest mirror. Dangerous!",
    de: "rsync -av --delete /src/ /dest/. Test with --dry-run first. Mirror."
  }),
  (_i: number) => ({
    q: "What does `dig +short domain` output?",
    o: ["Just the IP address(es)", "Short output", "IP only", "Brief dig"],
    c: 0,
    e: "dig +short suppresses verbose. Just answer. Good for scripts.",
    de: "dig +short example.com. A record. dig +short -t MX example.com for MX."
  }),
  (_i: number) => ({
    q: "What does `dig @8.8.8.8 domain` do?",
    o: ["Queries specific DNS server", "DNS server", "Query server", "Resolver"],
    c: 0,
    e: "dig @server queries that server. @8.8.8.8 = Google DNS. Bypass local.",
    de: "dig @1.1.1.1 example.com. Test DNS. @resolver for server."
  }),
  (_i: number) => ({
    q: "What does `host -t MX domain` show?",
    o: ["Mail exchange records only", "MX records", "Mail records", "Type MX"],
    c: 0,
    e: "host -t MX shows mail servers. -t A for address. -t NS for nameservers.",
    de: "host -t MX example.com. -t AAAA for IPv6. -t TXT for text."
  }),
  (_i: number) => ({
    q: "What does `ss -tunap` show?",
    o: ["TCP, UDP, numeric, all, processes", "All sockets", "TCP UDP", "Socket list"],
    c: 0,
    e: "ss -t TCP -u UDP -n numeric -a all -p process. Full socket view.",
    de: "ss -tunap. Replaces netstat. -t -u -n -a -p. See connections."
  }),
  (_i: number) => ({
    q: "What does `netstat -r` show?",
    o: ["Routing table", "Routes", "Routing", "Route table"],
    c: 0,
    e: "netstat -r shows routing table. ip route equivalent. Kernel routes.",
    de: "netstat -r. netstat -rn for numeric. ip route show. Default gateway."
  }),
  (_i: number) => ({
    q: "What does `traceroute host` show?",
    o: ["Path of hops to host", "Route path", "Trace route", "Hops to host"],
    c: 0,
    e: "traceroute shows path. Each hop. Uses UDP/ICMP. mtr is interactive alternative.",
    de: "traceroute example.com. -I for ICMP. -T for TCP. -n for no reverse DNS."
  }),
  (_i: number) => ({
    q: "What does `mtr host` do?",
    o: ["Combines ping and traceroute (live)", "MTR trace", "Live trace", "Ping trace"],
    c: 0,
    e: "mtr continuously traces. Updates. Like traceroute + ping. Real-time.",
    de: "mtr example.com. -r for report. -c 10 for 10 cycles. Better than traceroute."
  }),
  (_i: number) => ({
    q: "What does `nc -l -p 1234` do?",
    o: ["Listens on TCP port 1234", "Netcat listen", "Listen port", "NC server"],
    c: 0,
    e: "nc -l -p port listens. Receives connection. -l listen, -p port.",
    de: "nc -l -p 1234. nc host 1234 to connect. Simple TCP server. -u for UDP."
  }),
  (_i: number) => ({
    q: "What does `nc -u host port` do?",
    o: ["UDP mode (not TCP)", "UDP netcat", "UDP connect", "Netcat UDP"],
    c: 0,
    e: "nc -u uses UDP. Default is TCP. nc -u -l -p port for UDP listen.",
    de: "nc -u host 53. UDP. For DNS, etc. -u both sides for UDP."
  }),
  (_i: number) => ({
    q: "What does `telnet host port` test?",
    o: ["TCP connectivity to port", "Port test", "Telnet connect", "TCP test"],
    c: 0,
    e: "telnet host port tests TCP. Unencrypted. Prefer nc. For port check.",
    de: "telnet example.com 80. Sees if port open. nc -zv host port alternative."
  }),
  (_i: number) => ({
    q: "What does `ssh -N -L 8080:localhost:80 user@host` do?",
    o: ["Local port forward (no shell)", "SSH tunnel", "Port forward", "Local forward"],
    c: 0,
    e: "ssh -L local:remote. -N no shell. Forwards local 8080 to host's 80.",
    de: "ssh -N -L 8080:localhost:80 jump. localhost:8080 -> host:80. -N = no command."
  }),
  (_i: number) => ({
    q: "What does `ssh -D 1080 user@host` create?",
    o: ["SOCKS proxy on port 1080", "SOCKS proxy", "Dynamic forward", "Proxy tunnel"],
    c: 0,
    e: "ssh -D creates SOCKS proxy. -D 1080. Browser proxy through SSH.",
    de: "ssh -D 1080 user@host. SOCKS5. Configure browser to 127.0.0.1:1080."
  }),
  (_i: number) => ({
    q: "What does `ssh-copy-id user@host` do?",
    o: ["Copies public key to host's authorized_keys", "Copy SSH key", "Key setup", "Authorized keys"],
    c: 0,
    e: "ssh-copy-id adds ~/.ssh/id_rsa.pub to remote ~/.ssh/authorized_keys.",
    de: "ssh-copy-id user@host. One-time. Then passwordless. -i for specific key."
  }),
  (_i: number) => ({
    q: "What does `~/.ssh/config` allow?",
    o: ["Host aliases and SSH options", "SSH config", "Host shortcuts", "SSH options"],
    c: 0,
    e: "~/.ssh/config: Host, HostName, User, IdentityFile, Port. Shortcuts.",
    de: "Host myserver\n  HostName 192.168.1.1\n  User jane\n  IdentityFile ~/.ssh/key"
  }),
  (_i: number) => ({
    q: "What does `curl -H 'Header: value' URL` do?",
    o: ["Adds custom HTTP header", "Custom header", "HTTP header", "Add header"],
    c: 0,
    e: "curl -H adds header. -H 'Authorization: Bearer token'. -H 'Content-Type: json'.",
    de: "curl -H 'X-Custom: foo' URL. Multiple -H. -H 'Accept: application/json'."
  }),
  (_i: number) => ({
    q: "What does `curl -b cookie.txt URL` do?",
    o: ["Sends cookies from file", "Cookie file", "Load cookies", "Send cookies"],
    c: 0,
    e: "curl -b sends cookies. -b file or -b 'name=value'. -c saves cookies.",
    de: "curl -b cookies.txt URL. -c cookies.txt to save. Session handling."
  }),
  (_i: number) => ({
    q: "What does `curl -u user:pass URL` do?",
    o: ["HTTP Basic authentication", "Basic auth", "User pass", "Authentication"],
    c: 0,
    e: "curl -u user:pass. Basic auth. -u user (prompts pass). For APIs.",
    de: "curl -u admin:secret URL. Base64. -u user for prompt. Avoid in scripts (history)."
  }),
  (_i: number) => ({
    q: "What does `wget --user=u --password=p URL` do?",
    o: ["Authenticates for download", "Wget auth", "User password", "Auth download"],
    c: 0,
    e: "wget --user --password. Basic auth. Prefer .wgetrc or env. Security.",
    de: "wget --user=u --password=p URL. Use --password= for prompt. .wgetrc for store."
  }),
  (_i: number) => ({
    q: "What does `rsync -n -av src/ dest/` do?",
    o: ["Dry run (shows what would happen)", "Rsync dry run", "No change", "Preview sync"],
    c: 0,
    e: "rsync -n dry run. No changes. Shows what would transfer. --dry-run.",
    de: "rsync -nav --delete src/ dest/. Test before --delete. Safe preview."
  }),
  (_i: number) => ({
    q: "What does `rsync -e ssh src/ user@host:dest/` do?",
    o: ["Uses SSH for transport", "SSH transport", "Rsync over SSH", "SSH rsync"],
    c: 0,
    e: "rsync -e ssh. Default when dest has user@. -e 'ssh -p 2222' for port.",
    de: "rsync -av -e ssh /src/ user@host:/dest/. Default. -e for custom."
  }),
  (_i: number) => ({
    q: "What does `rsync --exclude='*.log' src/ dest/` do?",
    o: ["Excludes matching files", "Exclude pattern", "Skip files", "Rsync exclude"],
    c: 0,
    e: "rsync --exclude skips. --exclude='*.log'. --exclude-from=file. Multiple.",
    de: "rsync -av --exclude='.git' --exclude='node_modules' src/ dest/."
  }),
  (_i: number) => ({
    q: "What does `ip route add 192.168.2.0/24 via 192.168.1.1` do?",
    o: ["Adds route for subnet via gateway", "Add route", "Route via gateway", "Static route"],
    c: 0,
    e: "ip route add network via gateway. For specific subnet routing.",
    de: "ip route add 192.168.2.0/24 via 192.168.1.1. ip route del to remove."
  }),
  (_i: number) => ({
    q: "What does `ip link set eth0 down` do?",
    o: ["Brings interface down", "Disable interface", "Link down", "Interface down"],
    c: 0,
    e: "ip link set eth0 down. Disables interface. up to enable. ifconfig eth0 down.",
    de: "ip link set eth0 down. No traffic. ip link set eth0 up. State change."
  }),
  (_i: number) => ({
    q: "What does `arp -a` show?",
    o: ["ARP cache (IP to MAC)", "ARP table", "MAC cache", "ARP entries"],
    c: 0,
    e: "arp -a shows ARP cache. IP to MAC mapping. ip neigh for modern.",
    de: "arp -a. arp -d IP to delete. ip neigh show. Layer 2 resolution."
  }),
  (_i: number) => ({
    q: "What does `ip neigh` show?",
    o: ["Neighbor table (ARP/NDP)", "Neighbor table", "IP neighbors", "ARP NDP"],
    c: 0,
    e: "ip neigh shows neighbor table. ARP for IPv4, NDP for IPv6. ip n.",
    de: "ip neigh show. ip neigh flush. REACHABLE, STALE. ip -4 neigh."
  }),
  (_i: number) => ({
    q: "What does `getent hosts name` do?",
    o: ["Resolves name via system config (NSS)", "Getent hosts", "NSS lookup", "System resolve"],
    c: 0,
    e: "getent hosts uses /etc/nsswitch. hosts: files dns. System resolution.",
    de: "getent hosts example.com. getent passwd user. NSS. Respects nsswitch."
  }),
  (_i: number) => ({
    q: "What does `resolvectl status` show?",
    o: ["systemd-resolved DNS config", "Resolve status", "DNS config", "Resolver status"],
    c: 0,
    e: "resolvectl status. systemd-resolved. DNS servers, domains. Modern Linux.",
    de: "resolvectl status. resolvectl query example.com. Replaces nslookup sometimes."
  }),
  (_i: number) => ({
    q: "What does `curl -k URL` do?",
    o: ["Skips SSL certificate verification", "Insecure SSL", "Skip verify", "No cert check"],
    c: 0,
    e: "curl -k skips cert verification. Insecure. For self-signed, testing only.",
    de: "curl -k https://self-signed. Insecure. --insecure. Dev only."
  }),
  (_i: number) => ({
    q: "What does `curl -v URL` add?",
    o: ["Verbose output", "Verbose", "Debug output", "Detailed output"],
    c: 0,
    e: "curl -v verbose. Shows request/response. -vv more. Debugging.",
    de: "curl -v URL. Headers, progress. -s silent opposite. -v for debug."
  }),
  (_i: number) => ({
    q: "What does `curl -s URL` do?",
    o: ["Silent (no progress/errors to stderr)", "Silent mode", "No output", "Quiet"],
    c: 0,
    e: "curl -s silent. No progress bar. Errors to stdout. For scripts.",
    de: "curl -s URL. Pipe to jq. No progress. -s -S for errors to stderr."
  }),
  (_i: number) => ({
    q: "What does `wget -O - URL` output?",
    o: ["Downloads to stdout", "Output stdout", "Pipe output", "Stdout download"],
    c: 0,
    e: "wget -O - writes to stdout. Pipe to other commands. - for stdout.",
    de: "wget -qO - URL | grep something. -O - for pipe. -q for quiet."
  }),
  (_i: number) => ({
    q: "What does `wget -np -r URL` do with -np?",
    o: ["No parent (don't ascend)", "No parent", "Stay in dir", "No ascend"],
    c: 0,
    e: "wget -np no parent. Won't go up. -r recursive. Prevents crawling whole site.",
    de: "wget -r -np -l 1 URL. -np = --no-parent. Limits scope. Important for mirror."
  }),
  (_i: number) => ({
    q: "What does `ssh -o StrictHostKeyChecking=no host` do?",
    o: ["Skips host key verification", "No host check", "Skip key check", "Insecure connect"],
    c: 0,
    e: "StrictHostKeyChecking=no. Adds unknown hosts without prompt. Insecure.",
    de: "ssh -o StrictHostKeyChecking=no. For scripts. Security risk. Known hosts."
  }),
  (_i: number) => ({
    q: "What does `ssh -t user@host command` do?",
    o: ["Allocates pseudo-TTY for command", "Force TTY", "TTY allocation", "Interactive command"],
    c: 0,
    e: "ssh -t allocates TTY. For sudo, vim. Without -t, no TTY. -tt for force.",
    de: "ssh -t user@host sudo cmd. Needs TTY. ssh -t host vim. Interactive."
  }),
  (_i: number) => ({
    q: "What does `scp -3 host1:file host2:path` do?",
    o: ["Copies via local machine (two hops)", "SCP via local", "Two hop copy", "Transit copy"],
    c: 0,
    e: "scp -3 routes via local. host1->local->host2. When direct not possible.",
    de: "scp -3 user@a:file user@b:path. Transit. rsync might be better."
  }),
  (_i: number) => ({
    q: "What does `rsync --progress src dest` add?",
    o: ["Transfer progress per file", "Progress display", "Progress output", "Show progress"],
    c: 0,
    e: "rsync --progress shows per-file progress. -P = --progress --partial.",
    de: "rsync -avP src/ dest/. -P for progress + partial. Large files."
  }),
  (_i: number) => ({
    q: "What does `rsync --bwlimit=1000 src dest` do?",
    o: ["Limits bandwidth to 1000 KB/s", "Bandwidth limit", "Throttle", "Rate limit"],
    c: 0,
    e: "rsync --bwlimit limits speed. KB/s. For not saturating link.",
    de: "rsync -av --bwlimit=1000. 1000 = 1MB/s. --bwlimit=500. Throttle."
  }),
  (_i: number) => ({
    q: "What does `dig +trace domain` show?",
    o: ["Full resolution path from root", "DNS trace", "Resolution path", "Iterative trace"],
    c: 0,
    e: "dig +trace shows full resolution. Root -> TLD -> auth. Debugging DNS.",
    de: "dig +trace example.com. Each step. Root servers. Slow. For debugging."
  }),
  (_i: number) => ({
    q: "What does `dig -x 8.8.8.8` do?",
    o: ["Reverse DNS lookup (PTR)", "Reverse lookup", "PTR record", "IP to name"],
    c: 0,
    e: "dig -x does reverse. IP to name. PTR record. 8.8.8.8.in-addr.arpa.",
    de: "dig -x 8.8.8.8. Reverse DNS. host 8.8.8.8. PTR record."
  }),
  (_i: number) => ({
    q: "What does `whois domain` show?",
    o: ["Domain registration info", "Whois info", "Registration", "Domain whois"],
    c: 0,
    e: "whois queries registrar. Domain owner, dates, nameservers. Public info.",
    de: "whois example.com. Registrar, expiry. whois 8.8.8.8 for IP."
  }),
  (_i: number) => ({
    q: "What does `nmap -sT host` do?",
    o: ["TCP connect scan", "Nmap TCP scan", "Connect scan", "Port scan"],
    c: 0,
    e: "nmap -sT TCP connect. Full connection. -sS for SYN (root). Port scan.",
    de: "nmap -sT host. nmap -p 80,443 host. Port discovery. -sS stealth."
  }),
  (_i: number) => ({
    q: "What does `nmap -p 80,443 host` do?",
    o: ["Scans only ports 80 and 443", "Port range", "Specific ports", "Port scan"],
    c: 0,
    e: "nmap -p specifies ports. 80,443 or 1-1000. -p- for all.",
    de: "nmap -p 22,80,443 host. Quick check. -p 80-100 range."
  }),
  (_i: number) => ({
    q: "What does `tcpdump -i eth0` do?",
    o: ["Captures packets on interface", "Packet capture", "Tcpdump", "Sniff interface"],
    c: 0,
    e: "tcpdump captures packets. -i interface. -n no resolve. -c count. Root.",
    de: "tcpdump -i eth0 port 80. tcpdump -w file. Wireshark format. -c 10."
  }),
  (_i: number) => ({
    q: "What does `tcpdump port 80` filter?",
    o: ["Only port 80 traffic", "Port filter", "HTTP traffic", "Filter port"],
    c: 0,
    e: "tcpdump port 80. BPF filter. host, net, port. port 80 or port 443.",
    de: "tcpdump -i any port 80. tcpdump host 1.2.3.4. BPF syntax."
  }),
  (_i: number) => ({
    q: "What does `curl --connect-timeout 5 URL` set?",
    o: ["Connection timeout (5 seconds)", "Connect timeout", "5s connect", "Connection limit"],
    c: 0,
    e: "curl --connect-timeout limits connect phase. --max-time for total.",
    de: "curl --connect-timeout 5 URL. Fails fast. -m for total time."
  }),
  (_i: number) => ({
    q: "What does `ping -4 host` force?",
    o: ["IPv4 only", "Force IPv4", "IPv4 ping", "No IPv6"],
    c: 0,
    e: "ping -4 forces IPv4. -6 for IPv6. When both available.",
    de: "ping -4 example.com. ping -6 for IPv6. Prefer one family."
  }),
  (_i: number) => ({
    q: "What does `curl --resolve host:port:ip URL` do?",
    o: ["Overrides DNS for that host", "Override DNS", "Resolve override", "Custom resolution"],
    c: 0,
    e: "curl --resolve host:port:ip. Uses ip for host. Testing, override DNS.",
    de: "curl --resolve example.com:443:1.2.3.4 https://example.com. Bypass DNS."
  }),
  (_i: number) => ({
    q: "What does `ssh -v user@host` add?",
    o: ["Verbose SSH output", "SSH verbose", "Debug SSH", "Verbose connect"],
    c: 0,
    e: "ssh -v verbose. -vv -vvv more. Debug connection. Auth, key exchange.",
    de: "ssh -v user@host. -vv -vvv. Debug. See why connection fails."
  }),
  (_i: number) => ({
    q: "What does `ssh -G host` output?",
    o: ["Resolved config for host", "Config resolve", "SSH config", "Effective config"],
    c: 0,
    e: "ssh -G shows resolved config. From config file. What ssh would use.",
    de: "ssh -G myserver. HostName, User, etc. Debug config. Effective values."
  }),
  (_i: number) => ({
    q: "What does `rsync --info=progress2 src dest` show?",
    o: ["Overall transfer progress", "Overall progress", "Progress2", "Total progress"],
    c: 0,
    e: "rsync --info=progress2. Single line. Overall. Better for large sync.",
    de: "rsync -av --info=progress2. One line. Total. -P for per-file."
  }),
  (_i: number) => ({
    q: "What does `rsync --link-dest=dir src dest` use?",
    o: ["Hard links to unchanged files in dir", "Link dest", "Incremental", "Hard link backup"],
    c: 0,
    e: "rsync --link-dest. Hard links to previous. Incremental backup. Space efficient.",
    de: "rsync -a --link-dest=/backup/prev /src/ /backup/curr. Snapshot style."
  }),
  (_i: number) => ({
    q: "What does `ip addr show dev eth0` limit?",
    o: ["Shows only eth0", "One interface", "Dev filter", "Interface only"],
    c: 0,
    e: "ip addr show dev eth0. Limits to one interface. Shorter output.",
    de: "ip a show eth0. ip addr show dev wlan0. Focus output."
  }),
  (_i: number) => ({
    q: "What does `ss -s` show?",
    o: ["Socket summary statistics", "Socket summary", "SS summary", "Socket stats"],
    c: 0,
    e: "ss -s summary. Total TCP, UDP, etc. Quick overview.",
    de: "ss -s. Counts. TCP established, etc. High level."
  }),
  (_i: number) => ({
    q: "What does `nc -zv host 80` do?",
    o: ["Tests if port 80 is open", "Port check", "Zero I/O verify", "Quick test"],
    c: 0,
    e: "nc -z scan, -v verbose. No data. Just connect test. Port check.",
    de: "nc -zv host 80. nc -zv host 22 80 443. Multiple ports. Quick."
  }),
  (_i: number) => ({
    q: "What does `timeout 5 nc host port` do?",
    o: ["Limits nc to 5 seconds", "NC timeout", "5 second limit", "Timeout nc"],
    c: 0,
    e: "timeout 5 runs nc, kills after 5s. Prevents hang. timeout cmd.",
    de: "timeout 5 nc host 80. Fails if no connect in 5s. Scripts."
  }),
  (_i: number) => ({
    q: "What does `curl --data-urlencode 'key=value' URL` do?",
    o: ["URL-encodes form data", "Encode data", "Form encode", "URL encode"],
    c: 0,
    e: "curl --data-urlencode encodes. Spaces, special chars. POST form.",
    de: "curl --data-urlencode 'q=hello world' URL. Safe. -d doesn't encode."
  }),
  (_i: number) => ({
    q: "What does `curl -F 'file=@local.txt' URL` do?",
    o: ["Uploads file as multipart form", "File upload", "Multipart", "Form file"],
    c: 0,
    e: "curl -F multipart form. -F 'file=@path'. File upload. -F 'field=value'.",
    de: "curl -F 'file=@doc.pdf' -F 'name=doc' URL. Multipart. API upload."
  }),
  (_i: number) => ({
    q: "What does `wget -e robots=off URL` do?",
    o: ["Ignores robots.txt", "No robots", "Ignore robots", "Robots off"],
    c: 0,
    e: "wget -e robots=off. Ignores robots.txt. For mirroring. Use responsibly.",
    de: "wget -r -e robots=off. Bypass. -e for config. Ethical consideration."
  }),
  (_i: number) => ({
    q: "What does `wget --limit-rate=100k URL` do?",
    o: ["Limits download to 100 KB/s", "Rate limit", "Throttle", "Limit speed"],
    c: 0,
    e: "wget --limit-rate throttles. 100k, 1m. Don't saturate. Polite.",
    de: "wget --limit-rate=500k URL. 500 KB/s. --limit-rate=1m."
  }),
  (_i: number) => ({
    q: "What does `ssh -R 8080:localhost:80 user@host` do?",
    o: ["Remote port forward (host:8080 -> local:80)", "Remote forward", "Reverse tunnel", "R port forward"],
    c: 0,
    e: "ssh -R remote:local. Host's 8080 -> your 80. Reverse. Expose local to remote.",
    de: "ssh -R 8080:localhost:80 jump. From host, localhost:8080 -> your machine:80."
  }),
  (_i: number) => ({
    q: "What does `dig +noall +answer domain` show?",
    o: ["Only answer section", "Answer only", "Minimal dig", "Clean answer"],
    c: 0,
    e: "dig +noall +answer. Suppress all but answer. Clean. For parsing.",
    de: "dig +noall +answer example.com. Just records. Script friendly."
  }),
  (_i: number) => ({
    q: "What does `host -a domain` show?",
    o: ["All record types", "All records", "Full lookup", "Verbose host"],
    c: 0,
    e: "host -a shows all. Like dig. Verbose. All record types.",
    de: "host -a example.com. A, AAAA, MX, NS, etc. Full dump."
  }),
  (_i: number) => ({
    q: "What does `ip route get 8.8.8.8` show?",
    o: ["Route kernel would use for that IP", "Route for IP", "Get route", "Kernel route"],
    c: 0,
    e: "ip route get shows path. Which interface, gateway. For debugging.",
    de: "ip route get 8.8.8.8. via 192.168.1.1 dev eth0. Routing decision."
  }),
  (_i: number) => ({
    q: "What does `ethtool eth0` show?",
    o: ["Network driver and hardware info", "Ethtool", "NIC info", "Interface details"],
    c: 0,
    e: "ethtool shows driver, speed, duplex. Link status. Hardware.",
    de: "ethtool eth0. Speed, duplex. ethtool -s for settings. NIC info."
  }),
  (_i: number) => ({
    q: "What does `iwconfig` show (wireless)?",
    o: ["Wireless interface config", "WiFi config", "Wireless", "IW config"],
    c: 0,
    e: "iwconfig wireless. ESSID, frequency. Deprecated; use iw. Some systems.",
    de: "iwconfig wlan0. iw for modern. WiFi specific. Link quality."
  }),
  (_i: number) => ({
    q: "What does `nmcli device status` show?",
    o: ["NetworkManager device status", "NM devices", "Device status", "Network devices"],
    c: 0,
    e: "nmcli device status. NetworkManager. Connected, disconnected. nmcli general.",
    de: "nmcli device status. nmcli connection show. NetworkManager CLI."
  }),
  (_i: number) => ({
    q: "What does `curl --cert client.pem --key key.pem URL` do?",
    o: ["Client certificate authentication", "Client cert", "mTLS", "Certificate auth"],
    c: 0,
    e: "curl --cert --key. Client cert. mTLS. For mutual TLS. -E shorthand.",
    de: "curl -E client.pem --key key.pem https://api. Mutual TLS. Client auth."
  }),
  (_i: number) => ({
    q: "What does `rsync --timeout=10 src dest` set?",
    o: ["I/O timeout in seconds", "Rsync timeout", "10 second timeout", "IO timeout"],
    c: 0,
    e: "rsync --timeout. Seconds. Fails if no data. For flaky connections.",
    de: "rsync -av --timeout=30. --contimeout for connect. Unstable links."
  }),
  (_i: number) => ({
    q: "What does `ping -s 1000 host` set?",
    o: ["Payload size 1000 bytes", "Packet size", "Ping size", "1000 byte payload"],
    c: 0,
    e: "ping -s sets payload. 1000 bytes. Default 56. For MTU testing.",
    de: "ping -s 1472. MTU. 1500 - 28 (IP+ICMP). Fragmentation test."
  }),
  (_i: number) => ({
    q: "What does `tracepath host` do vs traceroute?",
    o: ["Similar but doesn't need root", "No root trace", "Tracepath", "User trace"],
    c: 0,
    e: "tracepath like traceroute. No root. Uses UDP. Simpler. Linux.",
    de: "tracepath example.com. tracepath6 for IPv6. No -I -T options."
  }),
  (_i: number) => ({
    q: "What does `curl --retry 3 URL` do?",
    o: ["Retries up to 3 times on failure", "Retry 3", "Curl retry", "Retry on fail"],
    c: 0,
    e: "curl --retry 3. Retries on failure. Transient errors. --retry-delay.",
    de: "curl --retry 3 --retry-delay 5 URL. Resilient. For scripts."
  }),
  (_i: number) => ({
    q: "What does `ssh -J jump user@host` do?",
    o: ["Uses jump host (proxy)", "Jump host", "Proxy SSH", "Bastion"],
    c: 0,
    e: "ssh -J jump connects via jump. -J user@jump. Bastion host. ProxyJump.",
    de: "ssh -J user@bastion user@internal. Jump host. ProxyCommand equivalent."
  }),
  (_i: number) => ({
    q: "What does `scp -o ProxyJump=jump file user@host:path` do?",
    o: ["Copies via jump host", "SCP via jump", "ProxyJump SCP", "Bastion SCP"],
    c: 0,
    e: "scp -o ProxyJump. Same as ssh -J. Via bastion. For SCP.",
    de: "scp -o ProxyJump=user@jump file user@host:path. Through jump."
  }),
  (_i: number) => ({
    q: "What does `rsync -P` combine?",
    o: ["--progress and --partial", "Progress partial", "P flag", "Resume progress"],
    c: 0,
    e: "rsync -P = --progress --partial. Progress + keep partial. For large.",
    de: "rsync -avP. -P shorthand. Resume. Progress. Big files."
  }),
  (_i: number) => ({
    q: "What does `getent ahosts name` show?",
    o: ["All addresses (IPv4 and IPv6)", "All hosts", "AHosts", "All IPs"],
    c: 0,
    e: "getent ahosts. Addresses from getaddrinfo. Both families. Order.",
    de: "getent ahosts example.com. getaddrinfo order. IPv4, IPv6."
  }),
  (_i: number) => ({
    q: "What does `curl --compressed URL` request?",
    o: ["Accepts compressed response", "Compressed", "Accept encoding", "Gzip response"],
    c: 0,
    e: "curl --compressed. Accept-Encoding: gzip. Server may compress. Saves bandwidth.",
    de: "curl --compressed URL. Automatic decompress. -H 'Accept-Encoding: gzip'."
  }),
  (_i: number) => ({
    q: "What does `wget --no-check-certificate URL` do?",
    o: ["Skips SSL certificate verification", "No cert check", "Insecure", "Skip verify"],
    c: 0,
    e: "wget --no-check-certificate. Like curl -k. Insecure. Self-signed.",
    de: "wget --no-check-certificate. Dev only. Security risk."
  }),
  (_i: number) => ({
    q: "What does `ssh -o ConnectTimeout=5 user@host` set?",
    o: ["Connection timeout 5 seconds", "Connect timeout", "SSH timeout", "5s timeout"],
    c: 0,
    e: "ssh -o ConnectTimeout=5. Seconds to wait. Fails fast. Config option.",
    de: "ssh -o ConnectTimeout=5 host. In config: ConnectTimeout 5."
  }),
  (_i: number) => ({
    q: "What does `rsync --ignore-existing src dest` do?",
    o: ["Skips files that exist in dest", "Ignore existing", "Skip existing", "No overwrite"],
    c: 0,
    e: "rsync --ignore-existing. Don't overwrite. Only new files. Backup style.",
    de: "rsync -av --ignore-existing. Preserve dest. Additive. -u for update."
  }),
  (_i: number) => ({
    q: "What does `rsync -u` or `--update` do?",
    o: ["Skips files newer in dest", "Update only", "Skip newer", "Don't overwrite newer"],
    c: 0,
    e: "rsync -u skips dest files that are newer. Preserve newer. Sync direction.",
    de: "rsync -avu. -u = update. Skip if dest newer. Incremental."
  }),
  (_i: number) => ({
    q: "What does `ip -4 addr` show?",
    o: ["IPv4 addresses only", "IPv4 only", "No IPv6", "V4 only"],
    c: 0,
    e: "ip -4 limits to IPv4. ip -6 for IPv6. Filter output.",
    de: "ip -4 addr show. ip -6 route. Family filter."
  }),
  (_i: number) => ({
    q: "What does `ss -t state established` show?",
    o: ["Established TCP connections only", "Established only", "TCP established", "State filter"],
    c: 0,
    e: "ss -t state established. Filter by state. established, listen, time-wait.",
    de: "ss -t state established. ss -t state listening. State filter."
  }),
  (_i: number) => ({
    q: "What does `nc -l -p 9999` do?",
    o: ["Listens on TCP port 9999", "Listen port", "Netcat listen", "TCP listen"],
    c: 0,
    e: "nc -l -p port. Listens. -u for UDP. For testing, debugging.",
    de: "nc -l -p 9999. Connect with nc host 9999. Simple server."
  }),
  (_i: number) => ({
    q: "What does `ssh -D 1080 user@host` create?",
    o: ["SOCKS proxy on localhost:1080", "SOCKS proxy", "Dynamic forward", "SSH proxy"],
    c: 0,
    e: "ssh -D 1080. SOCKS5 proxy. Browser uses localhost:1080. Tunnel traffic.",
    de: "ssh -D 1080 user@server. Set browser proxy. All traffic via SSH."
  }),
  (_i: number) => ({
    q: "What does `ssh -L 8080:localhost:80 user@host` do?",
    o: ["Forwards local 8080 to remote port 80", "Local forward", "Port forward", "Tunnel local"],
    c: 0,
    e: "ssh -L local:remote. Access remote port via local. -R for reverse.",
    de: "ssh -L 8080:localhost:80. curl localhost:8080 hits remote :80."
  }),
  (_i: number) => ({
    q: "What does `rsync -avz src/ user@host:dst/` add?",
    o: ["Compression during transfer (-z)", "Compress", "Gzip transfer", "Compressed rsync"],
    c: 0,
    e: "rsync -avz. -a archive, -v verbose, -z compress. Over SSH by default.",
    de: "rsync -avz. -z = gzip. Saves bandwidth. -e ssh for SSH."
  }),
  (_i: number) => ({
    q: "What does `rsync --delete` do?",
    o: ["Deletes files in dest not in source", "Mirror delete", "Remove extra", "Sync delete"],
    c: 0,
    e: "rsync --delete. Removes dest files not in source. True mirror. Careful!",
    de: "rsync -av --delete. Mirror. Dest = exact copy. Test with -n first."
  }),
];
