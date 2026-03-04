// LEVEL 6 EXPERT — Networking Basics (117 unique questions)
// Topics: TCP/IP, IP, ports, DNS, ping, curl, wget, ssh, scp, rsync

export const level6Expert = [
  (_i: number) => ({
    q: "What does `curl --cert-type PEM --key-type PEM` specify?",
    o: ["Certificate and key format", "Cert format", "PEM type", "Key format"],
    c: 0,
    e: "curl --cert-type --key-type. PEM, DER. For client cert. Usually auto-detected.",
    de: "curl -E cert.pem --cert-type PEM. --key-type PEM. Format specification."
  }),
  (_i: number) => ({
    q: "What does `curl --proxy-insecure` do?",
    o: ["Skips proxy's SSL verification", "Proxy insecure", "Proxy cert skip", "Insecure proxy"],
    c: 0,
    e: "curl --proxy-insecure. For HTTPS proxy. Skips proxy cert verify. -k for target.",
    de: "curl -x https://proxy --proxy-insecure. Proxy TLS. Separate from -k."
  }),
  (_i: number) => ({
    q: "What does `curl --resolve` with multiple entries do?",
    o: ["Overrides multiple host resolutions", "Multiple resolve", "Batch resolve", "Resolve list"],
    c: 0,
    e: "curl --resolve h1:443:ip1 --resolve h2:443:ip2. Multiple overrides. Testing.",
    de: "Multiple --resolve. Virtual hosts. Override several. For test env."
  }),
  (_i: number) => ({
    q: "What does `curl --unix-socket /path URL` do?",
    o: ["Uses Unix socket instead of TCP", "Unix socket", "Socket curl", "Local socket"],
    c: 0,
    e: "curl --unix-socket. Connects to Unix socket. Docker, local services.",
    de: "curl --unix-socket /var/run/docker.sock http://localhost/containers/json."
  }),
  (_i: number) => ({
    q: "What does `curl --next` separate?",
    o: ["Multiple requests (reset options)", "Next request", "Request separator", "Curl next"],
    c: 0,
    e: "curl --next resets options. Multiple requests. Different URLs, options.",
    de: "curl url1 --next -d post url2. Separate requests. Option reset."
  }),
  (_i: number) => ({
    q: "What does `wget --no-clobber` do?",
    o: ["Skips existing files", "No overwrite", "Skip existing", "No clobber"],
    c: 0,
    e: "wget -nc no clobber. Don't overwrite. Resume-friendly. -c continue.",
    de: "wget -nc URL. Keeps existing. -N timestamp. For mirroring."
  }),
  (_i: number) => ({
    q: "What does `wget --timestamping` do?",
    o: ["Re-downloads only if newer", "Timestamp check", "If-modified", "Conditional get"],
    c: 0,
    e: "wget -N timestamping. If-Modified-Since. Only if server newer. Efficient.",
    de: "wget -N URL. Conditional. Saves bandwidth. Like HTTP cache."
  }),
  (_i: number) => ({
    q: "What does `ssh -o ServerAliveInterval=60` set?",
    o: ["Keepalive every 60 seconds", "Keepalive", "Alive interval", "Prevent timeout"],
    c: 0,
    e: "ServerAliveInterval sends keepalive. Prevents timeout. NAT, firewalls.",
    de: "ssh -o ServerAliveInterval=60 -o ServerAliveCountMax=3. Config: ServerAliveInterval 60."
  }),
  (_i: number) => ({
    q: "What does `ssh -o ExitOnForwardFailure=yes` do?",
    o: ["Exits if port forward fails", "Forward failure exit", "Fail on forward", "Forward must work"],
    c: 0,
    e: "ExitOnForwardFailure. If -L/-R fails, exit. Don't continue with broken tunnel.",
    de: "ssh -L 80:localhost:80 -o ExitOnForwardFailure=yes. Port in use = exit."
  }),
  (_i: number) => ({
    q: "What does `ssh -o ControlMaster=auto -o ControlPath=...` enable?",
    o: ["Connection multiplexing", "Multiplexing", "Shared connection", "Control master"],
    c: 0,
    e: "ControlMaster multiplexes. One connection, many sessions. ControlPath = socket.",
    de: "ControlMaster=auto ControlPath=~/.ssh/cm-%r@%h:%p. Faster. Connection sharing."
  }),
  (_i: number) => ({
    q: "What does `rsync --checksum` or `-c` do?",
    o: ["Uses checksum instead of size/time", "Checksum compare", "Checksum sync", "Verify content"],
    c: 0,
    e: "rsync -c checksum. Ignores mtime/size. Content-based. Slower, accurate.",
    de: "rsync -avc. When time/size wrong. Checksum. --checksum. Verify."
  }),
  (_i: number) => ({
    q: "What does `rsync --sparse` do?",
    o: ["Handles sparse files efficiently", "Sparse files", "Sparse mode", "Hole preservation"],
    c: 0,
    e: "rsync --sparse. Preserves holes. VM disks, sparse. -S shorthand.",
    de: "rsync -avS. Sparse. Don't fill holes. Efficient for VMs."
  }),
  (_i: number) => ({
    q: "What does `rsync --inplace` do?",
    o: ["Updates file in place (no temp)", "In place", "Direct write", "No temp file"],
    c: 0,
    e: "rsync --inplace writes directly. No .tmp + rename. For large, DBs. Partial on interrupt.",
    de: "rsync -av --inplace. Database files. Can leave partial. --append for append."
  }),
  (_i: number) => ({
    q: "What does `rsync --append` do?",
    o: ["Appends to existing file (resume)", "Append mode", "Resume append", "Continue file"],
    c: 0,
    e: "rsync --append. Assumes dest has start. Resumes. For growing files.",
    de: "rsync -av --append. Log files. --append-verify for checksum. Growing."
  }),
  (_i: number) => ({
    q: "What does `dig +tcp @server domain` do?",
    o: ["Uses TCP instead of UDP", "TCP DNS", "Dig TCP", "TCP query"],
    c: 0,
    e: "dig +tcp. TCP for DNS. When UDP truncated. Large responses.",
    de: "dig +tcp @8.8.8.8 example.com. TCP 53. Truncation. Reliable."
  }),
  (_i: number) => ({
    q: "What does `dig +dnssec domain` request?",
    o: ["DNSSEC validation data", "DNSSEC", "DNS security", "Signed records"],
    c: 0,
    e: "dig +dnssec. Requests RRSIG, etc. DNSSEC. Validation. +cd to disable.",
    de: "dig +dnssec example.com. RRSIG in response. DNSSEC chain."
  }),
  (_i: number) => ({
    q: "What does `delv` do vs dig?",
    o: ["DNS lookup with DNSSEC validation", "Delv validate", "DNSSEC validator", "Validated lookup"],
    c: 0,
    e: "delv validates DNSSEC. Like dig + validation. Unbound utils.",
    de: "delv example.com. Validates chain. Secure. Replaces dig for validation."
  }),
  (_i: number) => ({
    q: "What does `drill` provide vs dig?",
    o: ["Alternative DNS tool (ldns)", "Drill DNS", "LDNS tool", "Dig alternative"],
    c: 0,
    e: "drill from ldns. Like dig. Different output. DNSSEC. Some prefer.",
    de: "drill example.com. drill -T for trace. ldns. Alternative."
  }),
  (_i: number) => ({
    q: "What does `nmap -sS host` require?",
    o: ["Root (raw socket for SYN scan)", "Root for SYN", "SYN scan root", "Privileged"],
    c: 0,
    e: "nmap -sS SYN scan. Raw socket. Root. Stealth. -sT no root.",
    de: "nmap -sS. Half-open. Root. Stealthier. -sT for unprivileged."
  }),
  (_i: number) => ({
    q: "What does `nmap -O host` attempt?",
    o: ["OS detection", "OS fingerprint", "Detect OS", "OS guess"],
    c: 0,
    e: "nmap -O OS detection. Fingerprinting. Probing. Requires root.",
    de: "nmap -O host. TCP/IP fingerprint. Linux, Windows. -O for OS."
  }),
  (_i: number) => ({
    q: "What does `nmap -sV host` do?",
    o: ["Service/version detection", "Version detection", "Service probe", "Banner grab"],
    c: 0,
    e: "nmap -sV probes services. Version. Banner. Slower. More info.",
    de: "nmap -sV -p 80,443. Apache 2.4. nginx 1.18. Service version."
  }),
  (_i: number) => ({
    q: "What does `tcpdump -w file` do?",
    o: ["Writes packets to file (pcap)", "Write capture", "Save pcap", "Capture file"],
    c: 0,
    e: "tcpdump -w saves. pcap format. tcpdump -r reads. Wireshark compatible.",
    de: "tcpdump -w capture.pcap -i eth0. tcpdump -r capture.pcap. Offline."
  }),
  (_i: number) => ({
    q: "What does `tcpdump -r file` do?",
    o: ["Reads packets from file", "Read pcap", "Read capture", "Offline read"],
    c: 0,
    e: "tcpdump -r reads pcap. Offline analysis. With filter. No -i.",
    de: "tcpdump -r cap.pcap port 80. Read and filter. tcpdump -r cap.pcap -w filtered.pcap."
  }),
  (_i: number) => ({
    q: "What does `tshark` provide vs tcpdump?",
    o: ["Wireshark CLI (decode protocols)", "Tshark decode", "Protocol decode", "Wireshark CLI"],
    c: 0,
    e: "tshark = Wireshark CLI. Decodes. HTTP, DNS. Richer than tcpdump.",
    de: "tshark -i eth0 -Y 'http'. tshark -r file. Protocol decode. Wireshark."
  }),
  (_i: number) => ({
    q: "What does `ss -K` or `ss -k` do?",
    o: ["Shows socket memory/cgroup info", "Socket memory", "Kernel info", "SS kernel"],
    c: 0,
    e: "ss -k kernel info. Memory, cgroup. -K for more. Linux specific.",
    de: "ss -tk. mem, cgroup. Debug. -K for socket cookie. Kernel details."
  }),
  (_i: number) => ({
    q: "What does `ip rule` show?",
    o: ["Policy routing rules", "Routing rules", "Policy rules", "Rule table"],
    c: 0,
    e: "ip rule. Policy routing. Order, from, to, lookup. Multiple tables.",
    de: "ip rule show. ip rule add. Policy routing. Beyond default table."
  }),
  (_i: number) => ({
    q: "What does `ip route show table 200` show?",
    o: ["Routes in table 200", "Table 200", "Custom table", "Routing table"],
    c: 0,
    e: "ip route show table N. Custom table. 200, 201. Policy routing.",
    de: "ip route show table 200. /etc/iproute2/rt_tables. Multiple tables."
  }),
  (_i: number) => ({
    q: "What does `conntrack -L` show?",
    o: ["Connection tracking table", "Conntrack", "NAT table", "Connection state"],
    c: 0,
    e: "conntrack -L. Netfilter conntrack. Active connections. NAT. Requires root.",
    de: "conntrack -L. conntrack -D to delete. iptables related. Stateful."
  }),
  (_i: number) => ({
    q: "What does `curl --proto '=https' --tlsv1.2 URL` force?",
    o: ["TLS 1.2 only", "TLS version", "Force TLS 1.2", "Protocol version"],
    c: 0,
    e: "curl --tlsv1.2. Minimum TLS. --tlsv1.3. --tls-max. Security.",
    de: "curl --tlsv1.2 URL. Disable 1.0, 1.1. --tls-max 1.2."
  }),
  (_i: number) => ({
    q: "What does `openssl s_client -connect host:443` do?",
    o: ["Tests TLS/SSL connection", "SSL connect", "TLS test", "Certificate check"],
    c: 0,
    e: "openssl s_client. Connects. Shows cert. TLS debug. -servername for SNI.",
    de: "openssl s_client -connect example.com:443 -servername example.com. Cert chain."
  }),
  (_i: number) => ({
    q: "What does `ssh -o PermitLocalCommand=yes` allow?",
    o: ["LocalCommand in config", "Local command", "Config command", "Post connect"],
    c: 0,
    e: "PermitLocalCommand. Runs LocalCommand from config. After connect. Rare.",
    de: "LocalCommand in config. PermitLocalCommand yes. Per-connection script."
  }),
  (_i: number) => ({
    q: "What does `ssh -W host:port jump` do?",
    o: ["ProxyCommand: connect to host:port via jump", "ProxyCommand", "Stdio forward", "W proxy"],
    c: 0,
    e: "ssh -W host:port jump. ProxyCommand. stdio. Equivalent to nc via jump.",
    de: "ssh -W %h:%p jump. In config ProxyCommand. Connect through jump."
  }),
  (_i: number) => ({
    q: "What does `rsync --rsync-path='sudo rsync'` do?",
    o: ["Runs rsync with sudo on remote", "Remote rsync path", "Sudo rsync", "Remote command"],
    c: 0,
    e: "rsync --rsync-path. Command on remote. sudo rsync. For permissions.",
    de: "rsync -av --rsync-path='sudo rsync' src/ user@host:/root/dest/."
  }),
  (_i: number) => ({
    q: "What does `rsync --chown=user:group` do?",
    o: ["Sets ownership on remote (needs rsync-path sudo)", "Chown remote", "Remote chown", "Ownership"],
    c: 0,
    e: "rsync --chown. Remote ownership. Needs --rsync-path sudo. Preserve doesn't always work.",
    de: "rsync -av --chown=www-data:www-data --rsync-path='sudo rsync' src/ host:/var/www/."
  }),
  (_i: number) => ({
    q: "What does `rsync --fake-super` do?",
    o: ["Stores permissions in xattrs (non-root)", "Fake super", "Xattr preserve", "Non-root preserve"],
    c: 0,
    e: "rsync --fake-super. Stores uid/gid in xattrs. Restore with --super. Non-root.",
    de: "rsync -aX --fake-super. Preserves without root. --super to restore."
  }),
  (_i: number) => ({
    q: "What does `rsync --delay-updates` do?",
    o: ["Moves files at end (atomic rename)", "Delay updates", "Atomic rename", "Defer move"],
    c: 0,
    e: "rsync --delay-updates. Temp then rename. Atomic. Less partial. Better for sync.",
    de: "rsync -av --delay-updates. .tmp then rename. Atomic. Safer."
  }),
  (_i: number) => ({
    q: "What does `mtr -r -c 10 host` produce?",
    o: ["Report mode, 10 cycles", "MTR report", "Report output", "10 cycle report"],
    c: 0,
    e: "mtr -r report. -c 10 cycles. Non-interactive. For scripts.",
    de: "mtr -r -c 10 host. Report. No TUI. Piping. Stats."
  }),
  (_i: number) => ({
    q: "What does `iperf3 -c host` do?",
    o: ["Client for bandwidth test", "Iperf client", "Bandwidth test", "Client mode"],
    c: 0,
    e: "iperf3 -c connects to server. -s on server. Measures bandwidth.",
    de: "iperf3 -s on server. iperf3 -c host. TCP/UDP. Throughput. -u for UDP."
  }),
  (_i: number) => ({
    q: "What does `nc -e /bin/sh -l -p 1234` do (dangerous)?",
    o: ["Reverse shell listener (executes shell)", "Reverse shell", "NC exec", "Shell listener"],
    c: 0,
    e: "nc -e -l. Incoming exec. Reverse shell. -e not on all nc. Security.",
    de: "nc -l -p 1234 -e /bin/sh. Dangerous. Bind shell. ncat has -e."
  }),
  (_i: number) => ({
    q: "What does `socat` provide vs nc?",
    o: ["Bidirectional relay (more flexible)", "Socat relay", "Bidirectional", "NC alternative"],
    c: 0,
    e: "socat = relay. Two addresses. TCP, UDP, Unix, etc. More than nc.",
    de: "socat TCP-LISTEN:80,fork TCP:host:80. Proxy. Relay. Flexible."
  }),
  (_i: number) => ({
    q: "What does `socat TCP-LISTEN:80,fork TCP:host:8080` create?",
    o: ["TCP proxy (redirect 80 to 8080)", "TCP proxy", "Port redirect", "Fork proxy"],
    c: 0,
    e: "socat listen, fork. Each connection forks. Proxy. 80 -> 8080.",
    de: "socat TCP-LISTEN:80,fork TCP:localhost:8080. Proxy. Forward. fork = accept multiple."
  }),
  (_i: number) => ({
    q: "What does `ssh -R 0:localhost:22 host` do with 0?",
    o: ["Binds remote to random port", "Random remote port", "Dynamic remote", "Ephemeral port"],
    c: 0,
    e: "ssh -R 0:... requests random remote port. Dynamic. GatewayPorts.",
    de: "ssh -R 0:localhost:22. Remote picks port. Less conflict. GatewayPorts."
  }),
  (_i: number) => ({
    q: "What does `ssh -o GatewayPorts=yes -R 80:local:80` need?",
    o: ["Allows remote binding to 0.0.0.0", "Gateway ports", "Bind all", "Remote listen"],
    c: 0,
    e: "GatewayPorts=yes. Remote -R binds 0.0.0.0. Else localhost only. Server config.",
    de: "GatewayPorts yes. Remote 0.0.0.0:80. Else 127.0.0.1:80. sshd_config."
  }),
  (_i: number) => ({
    q: "What does `dig +bufsize=1024` set?",
    o: ["EDNS buffer size", "Buffer size", "EDNS size", "DNS buffer"],
    c: 0,
    e: "dig +bufsize. EDNS size. For large responses. Avoid truncation.",
    de: "dig +bufsize=4096. EDNS0. UDP size. Larger = less truncation."
  }),
  (_i: number) => ({
    q: "What does `dig +edns=0` do?",
    o: ["Disables EDNS", "No EDNS", "EDNS off", "Disable EDNS"],
    c: 0,
    e: "dig +edns=0. No EDNS. Legacy. Some old servers. Debugging.",
    de: "dig +edns=0 example.com. Fallback. No OPT record."
  }),
  (_i: number) => ({
    q: "What does `host -C domain` show?",
    o: ["SOA records (check consistency)", "SOA check", "Consistency", "SOA records"],
    c: 0,
    e: "host -C. SOA from all NS. Consistency check. Debugging.",
    de: "host -C example.com. SOA from each NS. Compare. Consistency."
  }),
  (_i: number) => ({
    q: "What does `resolvectl flush-caches` do?",
    o: ["Flushes systemd-resolved DNS cache", "Flush DNS", "Clear cache", "DNS flush"],
    c: 0,
    e: "resolvectl flush-caches. Clears cache. After DNS change. systemd-resolved.",
    de: "resolvectl flush-caches. systemctl restart systemd-resolved. Clear cache."
  }),
  (_i: number) => ({
    q: "What does `resolvectl dns eth0 8.8.8.8` set?",
    o: ["DNS server for interface", "Interface DNS", "Per-interface DNS", "DNS for eth0"],
    c: 0,
    e: "resolvectl dns. Per-interface. Override. 8.8.8.8 for eth0.",
    de: "resolvectl dns eth0 8.8.8.8 8.8.4.4. Per-link. Override global."
  }),
  (_i: number) => ({
    q: "What does `ip link add link eth0 name eth0.10 type vlan id 10` create?",
    o: ["VLAN 10 on eth0", "VLAN interface", "802.1Q VLAN", "VLAN 10"],
    c: 0,
    e: "ip link add type vlan. 802.1Q. eth0.10 = eth0, VLAN 10. Virtual interface.",
    de: "ip link add link eth0 name eth0.10 type vlan id 10. ip link set eth0.10 up."
  }),
  (_i: number) => ({
    q: "What does `ip link add name br0 type bridge` create?",
    o: ["Bridge interface", "Bridge", "Linux bridge", "Bridge device"],
    c: 0,
    e: "ip link add type bridge. Linux bridge. L2. Connect interfaces. brctl legacy.",
    de: "ip link add name br0 type bridge. ip link set eth0 master br0. Bridge."
  }),
  (_i: number) => ({
    q: "What does `ethtool -K eth0 gro off` do?",
    o: ["Disables generic receive offload", "GRO off", "Offload disable", "Receive offload"],
    c: 0,
    e: "ethtool -K. Offload. gro, tso, gso. -K = offload. gro = generic receive.",
    de: "ethtool -K eth0 gro off. ethtool -k for list. Performance, debugging."
  }),
  (_i: number) => ({
    q: "What does `ip link set eth0 mtu 9000` do?",
    o: ["Sets MTU to 9000 (jumbo frames)", "MTU 9000", "Jumbo frames", "Set MTU"],
    c: 0,
    e: "ip link set mtu. 9000 = jumbo. 1500 default. Both ends. Network support.",
    de: "ip link set eth0 mtu 9000. Jumbo. Performance. End-to-end."
  }),
  (_i: number) => ({
    q: "What does `ss -o` show?",
    o: ["Socket options (timer, etc)", "Socket options", "SS options", "Timer info"],
    c: 0,
    e: "ss -o. Timer. Options. timer: keepalive. More detail.",
    de: "ss -to. timer: on. timer:(keepalive,4,0). TCP options."
  }),
  (_i: number) => ({
    q: "What does `curl --abstract-unix-socket /path` use?",
    o: ["Abstract Unix socket", "Abstract socket", "Linux abstract", "Unix abstract"],
    c: 0,
    e: "curl --abstract-unix-socket. Linux abstract. @ in path. No filesystem.",
    de: "curl --abstract-unix-socket @/tmp/sock http://localhost/."
  }),
  (_i: number) => ({
    q: "What does `curl --path-as-is` do?",
    o: ["Doesn't squash /./ or /../ in path", "Path as is", "No path normalize", "Raw path"],
    c: 0,
    e: "curl --path-as-is. No normalization. /./ and /../ preserved. Security test.",
    de: "curl --path-as-is URL/./secret. Path traversal test. Don't squash."
  }),
  (_i: number) => ({
    q: "What does `wget --content-disposition` do?",
    o: ["Uses Content-Disposition for filename", "Content disposition", "Save as header", "Filename from header"],
    c: 0,
    e: "wget --content-disposition. Uses Content-Disposition. Saves as server suggests.",
    de: "wget --content-disposition URL. attachment; filename=... Uses that."
  }),
  (_i: number) => ({
    q: "What does `wget --header='Cookie: ...'` add?",
    o: ["Custom Cookie header", "Cookie header", "Wget cookie", "Add cookie"],
    c: 0,
    e: "wget --header. Custom header. Cookie, Auth. --header='Cookie: x=y'.",
    de: "wget --header='Cookie: session=abc' URL. Manual cookie. -H."
  }),
  (_i: number) => ({
    q: "What does `rsync --backup --backup-dir=dir` do?",
    o: ["Backs up replaced files to dir", "Backup dir", "Rsync backup", "Replace backup"],
    c: 0,
    e: "rsync --backup. Keeps replaced. --backup-dir. Before overwrite.",
    de: "rsync -av --backup --backup-dir=/backup/old src/ dest/. Preserve replaced."
  }),
  (_i: number) => ({
    q: "What does `rsync --compare-dest=dir` use?",
    o: ["Excludes files that exist in dir", "Compare dest", "Incremental base", "Diff base"],
    c: 0,
    e: "rsync --compare-dest. Files in dir = unchanged. Skip. Incremental. Like link-dest.",
    de: "rsync -a --compare-dest=/base/ src/ dest/. Skip if in base. Incremental."
  }),
  (_i: number) => ({
    q: "What does `ping -W 2 host` set?",
    o: ["Timeout 2 seconds per packet", "Ping timeout", "Wait 2", "Response timeout"],
    c: 0,
    e: "ping -W timeout. Seconds to wait. Per packet. -W 2. Linux.",
    de: "ping -W 2 host. Timeout. -w for total. Varies by impl."
  }),
  (_i: number) => ({
    q: "What does `fping -a -g 192.168.1.0/24` do?",
    o: ["Pings all hosts in subnet, shows alive", "Fping subnet", "Ping sweep", "Alive hosts"],
    c: 0,
    e: "fping -a alive only. -g generate. Subnet. Ping sweep. Fast.",
    de: "fping -a -g 192.168.1.0/24. Discovery. -a = alive. -g = range."
  }),
  (_i: number) => ({
    q: "What does `hping3 -S -p 80 host` send?",
    o: ["TCP SYN to port 80", "HPing SYN", "SYN packet", "TCP SYN"],
    c: 0,
    e: "hping3 -S SYN. -p port. Custom packets. Firewall test. Raw.",
    de: "hping3 -S -p 80 host. SYN. -c count. -S SYN. Low-level."
  }),
  (_i: number) => ({
    q: "What does `masscan -p80,443 10.0.0.0/8` do?",
    o: ["Scans ports on range (very fast)", "Masscan", "Fast scan", "Port scan"],
    c: 0,
    e: "masscan. Very fast. Async. Scans large ranges. -p ports. Rate.",
    de: "masscan -p80,443 10.0.0.0/8 --rate=1000. Fast. Different from nmap."
  }),
  (_i: number) => ({
    q: "What does `arping -I eth0 192.168.1.1` do?",
    o: ["ARP request on interface", "ARP ping", "ARP request", "Layer 2 ping"],
    c: 0,
    e: "arping. ARP. Layer 2. Check if host on LAN. -I interface.",
    de: "arping -I eth0 192.168.1.1. ARP. Before IP. Same segment."
  }),
  (_i: number) => ({
    q: "What does `ndisc6` do?",
    o: ["IPv6 neighbor discovery", "IPv6 ND", "NDISC", "IPv6 discovery"],
    c: 0,
    e: "ndisc6. IPv6. Like arping for v6. NDP. Router discovery.",
    de: "ndisc6 fe80::1 eth0. IPv6. NDP. Rdisc. Router solicit."
  }),
  (_i: number) => ({
    q: "What does `ping6 host` do?",
    o: ["Ping IPv6 address", "IPv6 ping", "Ping6", "ICMPv6"],
    c: 0,
    e: "ping6. IPv6. ICMPv6. Like ping for v6. ping -6 on some.",
    de: "ping6 2001:db8::1. ping6 host. IPv6. ICMPv6 echo."
  }),
  (_i: number) => ({
    q: "What does `curl --interface eth1 URL` use?",
    o: ["Binds to eth1 for connection", "Interface bind", "Source interface", "Outgoing interface"],
    c: 0,
    e: "curl --interface. Source interface. Multi-homed. Which NIC.",
    de: "curl --interface eth1 URL. -b for bind. Outgoing. Multi-homed."
  }),
  (_i: number) => ({
    q: "What does `curl --local-port 5000-5010` do?",
    o: ["Uses local port in range", "Local port", "Source port", "Port range"],
    c: 0,
    e: "curl --local-port. Source port. Range. For firewall. NAT.",
    de: "curl --local-port 5000-5010 URL. Bind to port. Outgoing."
  }),
  (_i: number) => ({
    q: "What does `ssh -o CanonicalDomains=example.com` do?",
    o: ["Suffix for hostname canonicalization", "Canonical domains", "Host suffix", "Domain suffix"],
    c: 0,
    e: "CanonicalDomains. Short host -> FQDN. host -> host.example.com.",
    de: "CanonicalDomains example.com. CanonicalizeHostname yes. Config."
  }),
  (_i: number) => ({
    q: "What does `ssh -o StreamLocalBindUnlink=yes` do?",
    o: ["Unlinks socket before bind", "Socket unlink", "StreamLocal", "Bind unlink"],
    c: 0,
    e: "StreamLocalBindUnlink. Remove socket before bind. Stale socket. Unix socket.",
    de: "StreamLocalBindUnlink yes. ~/.ssh/agent. Stale. Unlink first."
  }),
  (_i: number) => ({
    q: "What does `scp -T` disable?",
    o: ["Disables strict filename check", "SCP strict", "No strict", "SCP -T"],
    c: 0,
    e: "scp -T. Disables some checks. -T = target. Legacy. Compatibility.",
    de: "scp -T. Old servers. Strict filename. -T target. Rare."
  }),
  (_i: number) => ({
    q: "What does `rsync --no-inc-recursive` or `-no-i-r` do?",
    o: ["Disables incremental recursion", "No inc recursive", "Full recursion", "Rsync recursion"],
    c: 0,
    e: "rsync --no-inc-recursive. Full recursion. No incremental. Different algorithm.",
    de: "rsync --no-inc-recursive. When -i-r causes issues. Full scan."
  }),
  (_i: number) => ({
    q: "What does `rsync --no-implied-dirs` do?",
    o: ["Doesn't create implied dirs", "No implied dirs", "Skip implied", "Rsync dirs"],
    c: 0,
    e: "rsync --no-implied-dirs. Don't create parent dirs. Explicit only.",
    de: "rsync --no-implied-dirs. When dest structure differs. Careful."
  }),
  (_i: number) => ({
    q: "What does `ip link set eth0 master br0` do?",
    o: ["Adds eth0 to bridge br0", "Add to bridge", "Bridge member", "Set master"],
    c: 0,
    e: "ip link set master. Add to bridge. eth0 in br0. L2.",
    de: "ip link set eth0 master br0. ip link set eth0 nomaster to remove."
  }),
  (_i: number) => ({
    q: "What does `ip link set eth0 nomaster` do?",
    o: ["Removes eth0 from bridge", "Remove from bridge", "Nomaster", "Leave bridge"],
    c: 0,
    e: "ip link set nomaster. Remove from bridge. No longer in br0.",
    de: "ip link set eth0 nomaster. Leave bridge. Standalone."
  }),
  (_i: number) => ({
    q: "What does `tc qdisc add dev eth0 root tbf rate 1mbit` do?",
    o: ["Traffic shaping (1 Mbit limit)", "TC shaping", "Rate limit", "Token bucket"],
    c: 0,
    e: "tc qdisc tbf. Token bucket. Rate limit. 1mbit. Traffic control.",
    de: "tc qdisc add dev eth0 root tbf rate 1mbit burst 32kbit. Shaping."
  }),
  (_i: number) => ({
    q: "What does `tc qdisc add dev eth0 root netem delay 100ms` do?",
    o: ["Adds 100ms delay (emulation)", "Netem delay", "Network emulation", "Delay 100ms"],
    c: 0,
    e: "tc netem delay. Network emulation. Simulate latency. 100ms. Testing.",
    de: "tc qdisc add dev eth0 root netem delay 100ms 10ms. Jitter. Test."
  }),
  (_i: number) => ({
    q: "What does `iptables -t nat -L` show?",
    o: ["NAT table rules", "NAT rules", "Nat table", "IPTables NAT"],
    c: 0,
    e: "iptables -t nat. NAT table. PREROUTING, POSTROUTING. -L list.",
    de: "iptables -t nat -L -n -v. SNAT, DNAT. Masquerade."
  }),
  (_i: number) => ({
    q: "What does `sysctl net.ipv4.ip_forward` show?",
    o: ["IP forwarding enabled (0/1)", "IP forward", "Forwarding", "Routing enable"],
    c: 0,
    e: "sysctl net.ipv4.ip_forward. 1 = forward. For router, NAT. Required.",
    de: "sysctl net.ipv4.ip_forward. sysctl -w net.ipv4.ip_forward=1. Router."
  }),
  (_i: number) => ({
    q: "What does `curl --proxy http://proxy:8080 URL` use?",
    o: ["HTTP proxy", "HTTP proxy", "Proxy", "Via proxy"],
    c: 0,
    e: "curl -x or --proxy. HTTP proxy. -x http://proxy:8080. CONNECT for HTTPS.",
    de: "curl -x http://proxy:8080 https://example.com. Proxy. -U for auth."
  }),
  (_i: number) => ({
    q: "What does `curl --socks5-hostname proxy:1080 URL` use?",
    o: ["SOCKS5 proxy with hostname resolution on proxy", "SOCKS5", "SOCKS proxy", "Hostname on proxy"],
    c: 0,
    e: "curl --socks5-hostname. SOCKS5. Proxy resolves. --socks5 = client resolves.",
    de: "curl --socks5-hostname proxy:1080 URL. DNS on proxy. Privacy."
  }),
  (_i: number) => ({
    q: "What does `ssh -o ClearAllForwardings=yes` do?",
    o: ["Ignores config forwards for this session", "Clear forwards", "No forwards", "Ignore config forwards"],
    c: 0,
    e: "ClearAllForwardings. Don't use LocalForward from config. This session only.",
    de: "ssh -o ClearAllForwardings=yes host. Override config. No -L from config."
  }),
  (_i: number) => ({
    q: "What does `ssh -N -f -L 8080:localhost:80 host` do with -f?",
    o: ["Goes to background after connect", "Background", "Fork", "Daemon"],
    c: 0,
    e: "ssh -f backgrounds. After auth. -N no shell. -L forward. Tunnel in background.",
    de: "ssh -f -N -L 8080:localhost:80 host. Background tunnel. No shell."
  }),
  (_i: number) => ({
    q: "What does `dig +short -x` with IP need?",
    o: ["IP as argument for reverse lookup", "Reverse IP", "PTR lookup", "IP argument"],
    c: 0,
    e: "dig -x IP. Reverse. PTR. dig +short -x 8.8.8.8. IP to name.",
    de: "dig -x 8.8.8.8. PTR. in-addr.arpa. Reverse DNS."
  }),
  (_i: number) => ({
    q: "What does `host -t ANY domain` show?",
    o: ["All record types", "Any record", "All types", "Full dump"],
    c: 0,
    e: "host -t ANY. All types. A, AAAA, MX, NS, etc. Verbose.",
    de: "host -t ANY example.com. Everything. Like dig. All records."
  }),
  (_i: number) => ({
    q: "What does `ss -M` show?",
    o: ["TCP memory (buffer sizes)", "TCP memory", "SS memory", "Buffer info"],
    c: 0,
    e: "ss -M. TCP memory. rmem, wmem. Buffer. -m. Socket memory.",
    de: "ss -tm. Memory. rmem, wmem. Debug. Buffer sizes."
  }),
  (_i: number) => ({
    q: "What does `ip maddr show` list?",
    o: ["Multicast addresses", "Multicast", "Maddr", "IGMP"],
    c: 0,
    e: "ip maddr. Multicast. IGMP. Group membership. Per interface.",
    de: "ip maddr show. Multicast groups. 224.0.0.0/4. IPv4."
  }),
  (_i: number) => ({
    q: "What does `curl --limit-rate 100k URL` do?",
    o: ["Limits download to 100 KB/s", "Rate limit", "Throttle", "Limit speed"],
    c: 0,
    e: "curl --limit-rate. Throttle. 100k, 1m. Don't saturate.",
    de: "curl --limit-rate 500k URL. 500 KB/s. Polite. Bandwidth."
  }),
  (_i: number) => ({
    q: "What does `wget --bind-address=1.2.3.4` do?",
    o: ["Binds to source IP", "Bind address", "Source IP", "Outgoing IP"],
    c: 0,
    e: "wget --bind-address. Source IP. Multi-homed. Which address.",
    de: "wget --bind-address=192.168.1.10 URL. Outgoing. Multi-homed."
  }),
  (_i: number) => ({
    q: "What does `rsync --no-perms` do?",
    o: ["Skips permission preservation", "No perms", "Skip permissions", "Rsync perms"],
    c: 0,
    e: "rsync --no-perms. Don't set permissions. -a includes. Override.",
    de: "rsync -av --no-perms. When dest can't set. Override -a."
  }),
  (_i: number) => ({
    q: "What does `rsync --omit-dir-times` do?",
    o: ["Doesn't set directory mtimes", "Omit dir times", "No dir mtime", "Skip dir time"],
    c: 0,
    e: "rsync --omit-dir-times. Don't change dir mtime. Some filesystems. Performance.",
    de: "rsync -av --omit-dir-times. Dir mtime. Avoid. Some FS."
  }),
  (_i: number) => ({
    q: "What does `ping -D` do (Linux)?",
    o: ["Prints timestamp before each line", "Timestamp", "Debug timestamp", "Ping timestamp"],
    c: 0,
    e: "ping -D. Timestamp. Unix time. Before each line. Debug.",
    de: "ping -D host. [1234567890.123] 64 bytes from... Timestamp."
  }),
  (_i: number) => ({
    q: "What does `curl --trace-ascii file URL` create?",
    o: ["ASCII trace of transfer to file", "Trace file", "Debug trace", "ASCII trace"],
    c: 0,
    e: "curl --trace-ascii. Dump to file. Debug. --trace for binary.",
    de: "curl --trace-ascii trace.txt URL. Full dump. Debug protocol."
  }),
  (_i: number) => ({
    q: "What does `ssh -o AddKeysToAgent=yes` do?",
    o: ["Adds keys to agent when used", "Add to agent", "Agent add", "Key agent"],
    c: 0,
    e: "AddKeysToAgent. When key used, add to agent. No ssh-add. Convenience.",
    de: "AddKeysToAgent yes. In config. Automatic. ssh-add -l."
  }),
  (_i: number) => ({
    q: "What does `ssh -o IdentitiesOnly=yes` do?",
    o: ["Uses only keys in config", "Identities only", "Config keys only", "No agent keys"],
    c: 0,
    e: "IdentitiesOnly. Don't use agent keys. Only IdentityFile in config. Specific.",
    de: "IdentitiesOnly yes. Per-host key. No other keys. Security."
  }),
  (_i: number) => ({
    q: "What does `scp -C` enable?",
    o: ["Compression", "SCP compress", "Compress", "Gzip SCP"],
    c: 0,
    e: "scp -C. Compression. Like ssh -C. Saves bandwidth. Slower CPU.",
    de: "scp -C file user@host:path. Compress. -C = compress."
  }),
  (_i: number) => ({
    q: "What does `rsync --fuzzy` do?",
    o: ["Finds basis file for delta (similar)", "Fuzzy match", "Delta basis", "Similar file"],
    c: 0,
    e: "rsync --fuzzy. Find similar. Basis for delta. Moved/renamed. Efficient.",
    de: "rsync -av --fuzzy. When files moved. Delta. Similar basis."
  }),
  (_i: number) => ({
    q: "What does `ip route replace` do vs add?",
    o: ["Replaces existing route", "Replace route", "Update route", "Overwrite route"],
    c: 0,
    e: "ip route replace. Same as add but overwrites. Update. idempotent.",
    de: "ip route replace default via 1.2.3.4. Update. Add would fail if exists."
  }),
  (_i: number) => ({
    q: "What does `ip link set eth0 type ethtool offload gro on` do?",
    o: ["Enables GRO via ethtool", "GRO on", "Offload on", "Ethtool GRO"],
    c: 0,
    e: "ip link set type. Some settings. ethtool -K. Offload. GRO.",
    de: "ip link set eth0 type ethtool offload gro on. Alternative to ethtool."
  }),
  (_i: number) => ({
    q: "What does `curl --ciphers 'DEFAULT:!aNULL'` set?",
    o: ["SSL cipher list", "Cipher list", "TLS ciphers", "Cipher suite"],
    c: 0,
    e: "curl --ciphers. Cipher list. OpenSSL format. Disable weak. Security.",
    de: "curl --ciphers 'HIGH:!aNULL' URL. Cipher preference. TLS."
  }),
  (_i: number) => ({
    q: "What does `openssl s_client -showcerts` add?",
    o: ["Shows full certificate chain", "Show certs", "Cert chain", "Full chain"],
    c: 0,
    e: "openssl s_client -showcerts. Full chain. All certs. Not just leaf.",
    de: "openssl s_client -connect host:443 -showcerts. Chain. CA, intermediate."
  }),
  (_i: number) => ({
    q: "What does `nft list ruleset` show?",
    o: ["All nftables rules", "Nftables rules", "NFT ruleset", "Firewall rules"],
    c: 0,
    e: "nft list ruleset. All rules. nftables. Replaces iptables. Modern.",
    de: "nft list ruleset. nft add rule. nftables. Netfilter. New."
  }),
  (_i: number) => ({
    q: "What does `ss -E` show?",
    o: ["Extended socket info (Linux)", "Extended info", "SS extended", "More detail"],
    c: 0,
    e: "ss -E. Extended. More fields. Linux. Details. uid, inode, etc.",
    de: "ss -tE. Extended. Extra columns. Debug. Linux specific."
  }),
  (_i: number) => ({
    q: "What does `curl --form-string 'key=value'` do?",
    o: ["Form field without @ file", "Form string", "String form", "No file form"],
    c: 0,
    e: "curl --form-string. Form field. No @. Literal. -F with string.",
    de: "curl --form-string 'submit=yes' -F file=@x URL. Mix. No file for field."
  }),
  (_i: number) => ({
    q: "What does `wget --no-iri` disable?",
    o: ["Internationalized URI handling", "No IRI", "Disable IRI", "ASCII only"],
    c: 0,
    e: "wget --no-iri. No punycode. ASCII. Internationalized. Compatibility.",
    de: "wget --no-iri. IRI = internationalized. Punycode. Disable."
  }),
  (_i: number) => ({
    q: "What does `rsync --no-relative` or `--no-R` do?",
    o: ["Disables relative path preservation", "No relative", "Absolute paths", "Rsync relative"],
    c: 0,
    e: "rsync --no-relative. Don't preserve path. Flatten. -R opposite.",
    de: "rsync -a --no-relative. Path handling. --relative for preserve."
  }),
  (_i: number) => ({
    q: "What does `ip tunnel add tun0 mode gre remote 1.2.3.4 local 5.6.7.8` create?",
    o: ["GRE tunnel", "GRE tunnel", "IP tunnel", "Tunnel interface"],
    c: 0,
    e: "ip tunnel. GRE. Generic Routing Encapsulation. VPN. Point-to-point.",
    de: "ip tunnel add tun0 mode gre remote 1.2.3.4 local 5.6.7.8. ip link set tun0 up."
  }),
  (_i: number) => ({
    q: "What does `wg` (WireGuard) do?",
    o: ["WireGuard VPN management", "WireGuard", "WG VPN", "VPN config"],
    c: 0,
    e: "wg. WireGuard. VPN. wg show. wg-quick. Modern VPN.",
    de: "wg show. wg set wg0 peer ... key ... wg-quick up wg0."
  }),
  (_i: number) => ({
    q: "What does `ip xfrm state` show?",
    o: ["IPsec SA (security associations)", "IPsec state", "XFRM", "SA list"],
    c: 0,
    e: "ip xfrm. IPsec. State, policy. Security associations. Kernel.",
    de: "ip xfrm state show. IPsec. ESP, AH. VPN. StrongSwan, libreswan."
  }),
  (_i: number) => ({
    q: "What does `curl --pinnedpubkey 'sha256//...'` do?",
    o: ["Pins expected public key", "Key pinning", "Pin key", "Certificate pinning"],
    c: 0,
    e: "curl --pinnedpubkey. Pin public key. SHA256. Reject others. Security.",
    de: "curl --pinnedpubkey 'sha256//abc...' URL. Key pinning. MitM protection."
  }),
  (_i: number) => ({
    q: "What does `ssh -o UpdateHostKeys=yes` do?",
    o: ["Adds new host keys to known_hosts", "Update host keys", "New keys", "Host key update"],
    c: 0,
    e: "UpdateHostKeys. Add new keys. Rotating. known_hosts. Security.",
    de: "UpdateHostKeys yes. When host rotates. Add. known_hosts."
  }),
  (_i: number) => ({
    q: "What does `ssh-keygen -R host` do?",
    o: ["Removes host from known_hosts", "Remove host", "Revoke host", "Known hosts remove"],
    c: 0,
    e: "ssh-keygen -R. Remove from known_hosts. Key changed. Re-key.",
    de: "ssh-keygen -R hostname. Removes. After key change. WARNING."
  }),
  (_i: number) => ({
    q: "What does `rsync --write-batch=file` create?",
    o: ["Batch file for later replay", "Batch file", "Rsync batch", "Replay file"],
    c: 0,
    e: "rsync --write-batch. Creates file. rsync --read-batch to replay. Offline.",
    de: "rsync -av --write-batch=delta src/ dest/. rsync --read-batch=delta dest/."
  }),
  (_i: number) => ({
    q: "What does `curl --aws-sigv4` do?",
    o: ["AWS Signature Version 4 auth", "AWS auth", "Sigv4", "AWS signing"],
    c: 0,
    e: "curl --aws-sigv4. AWS auth. S3, etc. Signature V4. Credentials.",
    de: "curl --aws-sigv4 'aws:amz:us-east-1:s3' URL. AWS. S3."
  }),
  (_i: number) => ({
    q: "What does `dig +multiline` format?",
    o: ["Multi-line record format", "Multiline", "Pretty format", "Readable"],
    c: 0,
    e: "dig +multiline. Pretty. Multi-line. Readable. Long records.",
    de: "dig +multiline example.com. Format. TXT records. Readable."
  }),
  (_i: number) => ({
    q: "What does `ss -H` suppress?",
    o: ["Header line", "No header", "Suppress header", "SS header"],
    c: 0,
    e: "ss -H. No header. Scripts. Just data. Parsing.",
    de: "ss -tH. No header. awk, grep. Script friendly."
  }),
  (_i: number) => ({
    q: "What does `mtr` combine?",
    o: ["ping and traceroute in one", "Ping + traceroute", "MTR combo", "Continuous trace"],
    c: 0,
    e: "mtr = my traceroute. Combines ping + traceroute. Real-time. Per-hop stats.",
    de: "mtr host. Like traceroute but keeps pinging. See packet loss per hop."
  }),
  (_i: number) => ({
    q: "What does `dig +short` output?",
    o: ["Only the answer (no headers)", "Short output", "Just answer", "Minimal dig"],
    c: 0,
    e: "dig +short. Just IPs or records. For scripts. No banner, headers.",
    de: "dig +short example.com. Just A records. dig +short -x 8.8.8.8 for PTR."
  }),
  (_i: number) => ({
    q: "What does `dig +trace` show?",
    o: ["Iterative resolution from root", "Resolution trace", "DNS trace", "Full resolution"],
    c: 0,
    e: "dig +trace. Follows from root. . -> TLD -> auth. Debug DNS.",
    de: "dig +trace example.com. See each step. Root hints, delegations."
  }),
  (_i: number) => ({
    q: "What does `nslookup -type=MX domain` query?",
    o: ["Mail exchange records", "MX records", "Mail servers", "MX query"],
    c: 0,
    e: "nslookup -type=MX. Queries MX. -type=A, -type=NS, etc. Interactive or one-shot.",
    de: "nslookup -type=MX gmail.com. Mail server priority. host -t MX too."
  }),
  (_i: number) => ({
    q: "What does `ssh -o StrictHostKeyChecking=no` do?",
    o: ["Skips host key verification (insecure)", "No host check", "Skip verify", "Insecure SSH"],
    c: 0,
    e: "StrictHostKeyChecking=no. Adds unknown hosts. No prompt. Insecure. Scripts only.",
    de: "ssh -o StrictHostKeyChecking=no. For automation. Better: known_hosts or certs."
  }),
  (_i: number) => ({
    q: "What does `scp -r dir/ user@host:/path` do?",
    o: ["Recursively copies directory", "Recursive copy", "Copy dir", "SCP recursive"],
    c: 0,
    e: "scp -r. Recursive. Copies dir and contents. Like cp -r over SSH.",
    de: "scp -r ./project user@host:~/project. Trailing / matters for dir."
  }),
  (_i: number) => ({
    q: "What does `rsync -n` do?",
    o: ["Dry run (show what would be done)", "Dry run", "No change", "Preview"],
    c: 0,
    e: "rsync -n. Dry run. Shows what would transfer. No changes. --dry-run same.",
    de: "rsync -avn src/ dst/. Test before real run. See what would sync."
  }),
  (_i: number) => ({
    q: "What does `rsync -P` show?",
    o: ["Progress during transfer", "Progress", "Transfer progress", "Rsync progress"],
    c: 0,
    e: "rsync -P. Progress. -P = --partial --progress. Resume + progress bar.",
    de: "rsync -avP. See % and speed. --partial for resume. Large files."
  }),
  (_i: number) => ({
    q: "What does `curl -I url` fetch?",
    o: ["Headers only (HEAD request)", "Headers only", "HEAD", "No body"],
    c: 0,
    e: "curl -I. HEAD request. Headers only. For check without download.",
    de: "curl -I https://example.com. Content-Length, type. Quick check."
  }),
  (_i: number) => ({
    q: "What does `curl -o file url` do?",
    o: ["Saves output to file", "Save to file", "Output file", "Download to file"],
    c: 0,
    e: "curl -o file. Saves to file. -O uses URL filename. -o - for stdout.",
    de: "curl -o page.html url. curl -O url for filename from URL."
  }),
  (_i: number) => ({
    q: "What does `wget -c url` do?",
    o: ["Resumes partial download", "Resume", "Continue", "Partial resume"],
    c: 0,
    e: "wget -c. Continue. Resumes partial. For interrupted downloads.",
    de: "wget -c url. Uses Range header. Appends to existing. Resume."
  }),
  (_i: number) => ({
    q: "What does `wget -r -l 1 url` do?",
    o: ["Recursive with depth 1", "Recursive depth 1", "One level", "Shallow mirror"],
    c: 0,
    e: "wget -r -l 1. Recursive, 1 level deep. -l 2 for 2 levels. Mirror.",
    de: "wget -r -l 1. -np no parent. -nH no host dir. Careful with -r."
  }),
  (_i: number) => ({
    q: "What does `nc -u host port` use?",
    o: ["UDP instead of TCP", "UDP mode", "UDP netcat", "Datagram"],
    c: 0,
    e: "nc -u. UDP. No connection. Datagrams. For UDP services.",
    de: "nc -u host 53. UDP. echo 'query' | nc -u host port. DNS, NTP."
  }),
  (_i: number) => ({
    q: "What does `socat` do?",
    o: ["Bidirectional data relay between two streams", "Data relay", "Socat", "Stream relay"],
    c: 0,
    e: "socat A B. Connects two streams. Like netcat++. TCP, UDP, files, pipes.",
    de: "socat TCP-LISTEN:80,fork TCP:host:80. Proxy. Very flexible."
  }),
  (_i: number) => ({
    q: "What does `nmap -sV host` add?",
    o: ["Service version detection", "Version scan", "Service versions", "Probe versions"],
    c: 0,
    e: "nmap -sV. Probes for versions. -sV = version detection. Slower.",
    de: "nmap -sV. Apache 2.4, OpenSSH 8.1. -sV for service fingerprint."
  }),
  (_i: number) => ({
    q: "What does `nmap -O host` attempt?",
    o: ["OS fingerprinting", "OS detection", "OS guess", "Operating system"],
    c: 0,
    e: "nmap -O. OS detection. TCP/IP fingerprint. Requires root. -O.",
    de: "nmap -O. Linux 3.x, Windows. Probabilistic. Root for raw packets."
  }),
  (_i: number) => ({
    q: "What does `tcpdump -i any` capture?",
    o: ["All interfaces", "Any interface", "All ifaces", "Every interface"],
    c: 0,
    e: "tcpdump -i any. All interfaces. -i eth0 for one. -i any for all.",
    de: "tcpdump -i any. Loopback, eth0, etc. Root needed. -w for file."
  }),
  (_i: number) => ({
    q: "What does `ethtool eth0` show?",
    o: ["Network interface settings and stats", "Interface info", "NIC settings", "Ethtool info"],
    c: 0,
    e: "ethtool eth0. Speed, duplex, link. Driver, firmware. NIC details.",
    de: "ethtool eth0. ethtool -S for stats. ethtool -i for driver. Debug NIC."
  }),
];
